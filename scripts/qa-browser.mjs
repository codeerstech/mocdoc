import { chromium } from 'playwright'

const baseUrl = process.env.QA_BASE_URL ?? 'http://127.0.0.1:4173'
const routes = [
  '/',
  '/products',
  '/hospital-management-system',
  '/abdm-compliant-software',
  '/book-demo-healthcare-management-software',
  '/blog',
  '/blog/digital-first-hospitals-cloud-hms',
  '/login',
  '/signup',
  '/forgot-password',
  '/patient-login',
  '/india/tn/cloud-hms-chennai',
  '/privacy-policy',
  '/not-a-real-page',
]

const viewports = [
  { width: 1440, height: 1000, name: 'desktop' },
  { width: 390, height: 900, name: 'mobile' },
]

const failures = []
const browser = await chromium.launch({ headless: true })

for (const viewport of viewports) {
  for (const route of routes) {
    const page = await browser.newPage({ viewport })
    await page.addInitScript(() => window.localStorage.clear())
    const consoleErrors = []

    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })
    page.on('pageerror', (error) => consoleErrors.push(error.message))

    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' })
    const metrics = await page.evaluate(() => ({
      bodyLength: document.body.innerText.length,
      clientWidth: document.documentElement.clientWidth,
      h1: document.querySelector('h1')?.textContent ?? '',
      scrollWidth: document.documentElement.scrollWidth,
      title: document.title,
    }))

    if (!response?.ok()) failures.push(`${viewport.name} ${route}: HTTP ${response?.status()}`)
    if (consoleErrors.length > 0) failures.push(`${viewport.name} ${route}: ${consoleErrors.join(' | ')}`)
    if (metrics.scrollWidth > metrics.clientWidth + 2) {
      failures.push(`${viewport.name} ${route}: horizontal overflow ${metrics.scrollWidth}/${metrics.clientWidth}`)
    }
    if (!metrics.h1 || metrics.bodyLength < 300) {
      failures.push(`${viewport.name} ${route}: sparse render "${metrics.title}"`)
    }

    if (route === '/') {
      const cookieVisible = await page.getByText('Cookies help us improve your visit').isVisible()
      if (!cookieVisible) failures.push(`${viewport.name}: cookie notice did not appear`)
      await page.getByRole('button', { name: 'Got it' }).click()
      const cookieHidden = await page.getByText('Cookies help us improve your visit').isHidden()
      if (!cookieHidden) failures.push(`${viewport.name}: cookie notice did not dismiss`)
    }

    await page.close()
  }
}

const formPage = await browser.newPage({ viewport: { width: 1280, height: 1000 } })
let leadPayload = null
await formPage.route('**/api/lead', async (route) => {
  leadPayload = route.request().postDataJSON()
  await route.fulfill({
    status: 201,
    contentType: 'application/json',
    body: JSON.stringify({ success: true, status: 'saved', data: { id: 'qa-lead' } }),
  })
})
await formPage.goto(`${baseUrl}/book-demo-healthcare-management-software#demo-form`, { waitUntil: 'networkidle' })
await formPage.locator('#demo-form button[type="submit"]').click()
const validationVisible = await formPage.getByText('Name is required.').isVisible()
if (!validationVisible) failures.push('form: required validation did not appear')
await formPage.locator('input[placeholder="Dr. Priya Raman"]').fill('Dr. Priya Raman')
await formPage.locator('input[placeholder="you@example.com"]').fill('priya@example.com')
await formPage.locator('input[placeholder="+91 98765 43210"]').fill('+91 98765 43210')
await formPage.locator('input[placeholder="City Care Hospital"]').fill('City Care Hospital')
await formPage.locator('select').selectOption('Hospital management')
await formPage.locator('textarea').fill('Need a demo for hospital operations.')
await formPage.locator('#demo-form button[type="submit"]').click()
const successNotice = formPage.getByText('Details saved. We will reach you shortly.').first()
await successNotice.waitFor({ timeout: 5000 }).catch(() => failures.push('form: success state did not appear'))
if (!leadPayload || leadPayload.niche !== 'marketing' || leadPayload.email !== 'priya@example.com') {
  failures.push('form: lead payload was not submitted correctly')
}
await formPage.close()

const mobileMenuPage = await browser.newPage({ viewport: { width: 390, height: 900 } })
await mobileMenuPage.goto(`${baseUrl}/`, { waitUntil: 'networkidle' })
await mobileMenuPage.getByLabel('Open navigation').click()
const mobileProductsVisible = await mobileMenuPage
  .locator('.mobile-nav')
  .getByText('Hospital Management Software')
  .first()
  .isVisible()
if (!mobileProductsVisible) failures.push('mobile nav: product link not visible after menu open')
await mobileMenuPage.close()

const productPage = await browser.newPage({ viewport: { width: 1280, height: 1000 } })
await productPage.goto(`${baseUrl}/products`, { waitUntil: 'networkidle' })
await productPage.getByText('View product').first().click()
await productPage.waitForLoadState('networkidle')
if (new URL(productPage.url()).pathname === '/products') failures.push('products: product card did not navigate')
const productHeading = await productPage.locator('h1').textContent()
if (!productHeading) failures.push('products: product detail heading missing after card click')
await productPage.close()

const authPage = await browser.newPage({ viewport: { width: 1280, height: 1000 } })
await authPage.goto(`${baseUrl}/login`, { waitUntil: 'networkidle' })
await authPage.locator('form button[type="submit"]').click()
const authValidationVisible = await authPage.getByText('Enter a valid email.').isVisible()
if (!authValidationVisible) failures.push('auth: required validation did not appear')
await authPage.locator('input[name="email"]').fill('admin@example.com')
await authPage.locator('input[name="password"]').fill('template-pass')
await authPage.locator('form button[type="submit"]').click()
const authSuccessVisible = await authPage.getByText('Login flow captured').isVisible()
if (!authSuccessVisible) failures.push('auth: success state did not appear')
await authPage.getByText('Sign Up').first().click()
await authPage.waitForLoadState('networkidle')
if (new URL(authPage.url()).pathname !== '/signup') failures.push('auth: signup link did not navigate')
await authPage.close()

await browser.close()

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log('Browser QA passed')
