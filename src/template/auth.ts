import type { AuthPageContent } from '../data/types'
import { site } from './content'

const emailField = {
  name: 'email',
  label: 'Email',
  type: 'email' as const,
  placeholder: 'you@example.com',
  requiredMessage: 'Enter a valid email.',
}

const passwordField = {
  name: 'password',
  label: 'Password',
  type: 'password' as const,
  placeholder: 'Enter your password',
  requiredMessage: 'Password is required.',
}

export const authPages: AuthPageContent[] = [
  {
    path: '/login',
    mode: 'login',
    eyebrow: 'Secure Access',
    title: 'Login to your CareAxis workspace',
    description:
      'Access your workspace with themed fields, helper links, and a clear account flow.',
    submitLabel: 'Login',
    successTitle: 'Login flow captured',
    successMessage:
      'Your access request has been received. Continue with the connected account flow for secure workspace access.',
    switchLabel: 'New to CareAxis?',
    switchCta: site.ctas.signup,
    helperLinks: [site.ctas.forgotPassword, site.ctas.patient],
    fields: [emailField, passwordField],
  },
  {
    path: '/signup',
    mode: 'signup',
    eyebrow: 'Create Account',
    title: 'Create a CareAxis trial workspace',
    description:
      'A signup template for SaaS, healthcare, agency, and product sites. Keep it or swap it with your provider flow.',
    submitLabel: 'Create Account',
    successTitle: 'Signup request received',
    successMessage:
      'Your signup details have been received. The team will guide you through the next account step.',
    switchLabel: 'Already have an account?',
    switchCta: site.ctas.login,
    helperLinks: [site.ctas.demo],
    fields: [
      {
        name: 'name',
        label: 'Full name',
        type: 'text',
        placeholder: 'Dr. Priya Raman',
        requiredMessage: 'Name is required.',
      },
      emailField,
      {
        name: 'phone',
        label: 'Phone',
        type: 'tel',
        placeholder: '+91 98765 43210',
        requiredMessage: 'Phone is required.',
      },
      passwordField,
    ],
  },
  {
    path: '/forgot-password',
    mode: 'forgot',
    eyebrow: 'Account Recovery',
    title: 'Reset access to your workspace',
    description:
      'A forgot-password template with the same visual language as the rest of the marketing site.',
    submitLabel: 'Send Reset Link',
    successTitle: 'Reset flow captured',
    successMessage:
      'If the account exists, password reset instructions will be sent to the submitted address.',
    switchLabel: 'Remembered your password?',
    switchCta: site.ctas.login,
    helperLinks: [site.ctas.contact],
    fields: [emailField],
  },
  {
    path: '/patient-login',
    mode: 'portal',
    eyebrow: 'Patient Portal',
    title: 'Access patient appointments and reports',
    description:
      'A portal login template for patient, client, member, vendor, or customer-facing access flows.',
    submitLabel: 'Open Portal',
    successTitle: 'Portal flow captured',
    successMessage:
      'This page is ready to connect to a portal or customer dashboard when the backend is available.',
    switchLabel: 'Need help?',
    switchCta: site.ctas.contact,
    helperLinks: [site.ctas.login, site.ctas.signup],
    fields: [
      {
        name: 'identifier',
        label: 'Email or mobile number',
        type: 'text',
        placeholder: 'you@example.com',
        requiredMessage: 'Email or mobile number is required.',
      },
      passwordField,
    ],
  },
]

export const authPageByPath = new Map(authPages.map((page) => [page.path, page]))
