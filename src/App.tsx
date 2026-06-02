import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from './components/Layout'
import { MotionPage } from './components/Motion'
import { getGenericFeaturePage, getGenericLocationPage, marketingPageByPath } from './data/pages'
import { routeMetaByPath } from './data/routes'
import { AuthPage } from './pages/AuthPage'
import { BlogDetail, BlogIndex } from './pages/BlogPages'
import { HomePage } from './pages/HomePage'
import { LocationPage } from './pages/LocationPage'
import { MarketingPage } from './pages/MarketingPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductIndexPage } from './pages/ProductIndexPage'
import { SitemapPage } from './pages/SitemapPage'
import { TemplateProvider } from './template/TemplateProvider'
import { authPages } from './template/auth'
import { locationPrefixes, featureRouteHints } from './template/routes'
import { site } from './template/content'

function ScrollAndMeta() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const meta = routeMetaByPath.get(location.pathname)
    document.title = meta ? `${meta.title} | ${site.brand.name}` : site.brand.name
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) {
      description.content =
        meta?.description ??
        `${site.brand.name} brings clinical operations, patient journeys, diagnostics, pharmacy, billing, and reporting into one healthcare software suite.`
    }
  }, [location.pathname])

  return null
}

function StaticMarketingRoute() {
  const location = useLocation()
  const page = marketingPageByPath.get(location.pathname)
  return page ? <MarketingPage page={page} /> : <NotFoundPage />
}

function DynamicRoute() {
  const location = useLocation()
  const path = location.pathname
  const explicitPage = marketingPageByPath.get(path)

  if (explicitPage) {
    return <MarketingPage page={explicitPage} />
  }

  if (locationPrefixes.some((prefix) => path.startsWith(prefix))) {
    return <LocationPage page={getGenericLocationPage(path)} />
  }

  if (featureRouteHints.some((hint) => path.includes(hint))) {
    return <MarketingPage page={getGenericFeaturePage(path)} />
  }

  return <NotFoundPage />
}

function AppRoutes() {
  const staticPaths = Array.from(marketingPageByPath.keys())
  const location = useLocation()

  return (
    <Layout>
      <ScrollAndMeta />
      <AnimatePresence mode="wait">
        <MotionPage key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/products" element={<ProductIndexPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            {authPages.map((page) => (
              <Route key={page.path} path={page.path} element={<AuthPage page={page} />} />
            ))}
            {staticPaths.map((path) => (
              <Route key={path} path={path} element={<StaticMarketingRoute />} />
            ))}
            <Route path="*" element={<DynamicRoute />} />
          </Routes>
        </MotionPage>
      </AnimatePresence>
    </Layout>
  )
}

export default function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TemplateProvider>
  )
}
