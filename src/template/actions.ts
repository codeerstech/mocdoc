import type { TemplateAction } from '../data/types'

export const templateActions = {
  demo: {
    label: 'Book a Demo',
    to: '/book-demo-healthcare-management-software',
    kind: 'primary',
  },
  contact: {
    label: 'Contact Us',
    to: '/contact-us',
    kind: 'secondary',
  },
  brochure: {
    label: 'Download Brochure',
    to: '/hospital-management-software-brochure',
    kind: 'secondary',
  },
  login: {
    label: 'User Login',
    to: '/login',
    kind: 'utility',
    ariaLabel: 'User login',
  },
  patient: {
    label: 'Patient Login',
    to: '/patient-login',
    kind: 'utility',
  },
  signup: {
    label: 'Sign Up',
    to: '/signup',
    kind: 'utility',
  },
  forgotPassword: {
    label: 'Forgot Password',
    to: '/forgot-password',
    kind: 'utility',
  },
  whatsapp: {
    label: 'WhatsApp chat',
    to: 'https://wa.me/919360952112',
    external: true,
    kind: 'external',
    ariaLabel: 'Chat on WhatsApp',
  },
} satisfies Record<string, TemplateAction>
