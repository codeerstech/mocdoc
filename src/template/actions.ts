import type { TemplateAction } from '../data/types'

export const templateActions = {
  demo: {
    label: 'Request Caregiver',
    to: '/families/request-caregiver',
    kind: 'primary',
  },
  contact: {
    label: 'Book Consultation',
    to: '/families/request-caregiver',
    kind: 'secondary',
  },
  brochure: {
    label: 'View Care Packages',
    to: '/care-plans/monthly-care',
    kind: 'secondary',
  },
  login: {
    label: 'Family Portal',
    to: '/families/request-caregiver',
    kind: 'utility',
    ariaLabel: 'Family portal',
  },
  patient: {
    label: 'For Families',
    to: '/services',
    kind: 'utility',
  },
  signup: {
    label: 'For Providers',
    to: '/trust-safety/verification-process',
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
