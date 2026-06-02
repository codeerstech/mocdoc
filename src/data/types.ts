import type { LucideIcon } from 'lucide-react'

export type Cta = {
  label: string
  to: string
  external?: boolean
}

export type TemplateAction = Cta & {
  ariaLabel?: string
  kind?: 'primary' | 'secondary' | 'utility' | 'external'
}

export type NavItem = {
  title: string
  description?: string
  to: string
  external?: boolean
}

export type NavGroup = {
  title: string
  items: NavItem[]
}

export type Stat = {
  value: string
  label: string
}

export type FeatureCard = {
  title: string
  description: string
  icon?: LucideIcon
}

export type FaqItem = {
  question: string
  answer: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  location: string
  rating?: string
}

export type VisualVariant =
  | 'hospital'
  | 'lab'
  | 'pharmacy'
  | 'clinic'
  | 'integration'
  | 'security'
  | 'growth'
  | 'people'

export type MarketingPageContent = {
  path: string
  pageType:
    | 'home'
    | 'product'
    | 'integration'
    | 'company'
    | 'customer'
    | 'resource'
    | 'feature'
    | 'legal'
    | 'location'
  category: string
  eyebrow: string
  title: string
  description: string
  sourceUrl?: string
  visual: VisualVariant
  primaryCta?: Cta
  secondaryCta?: Cta
  heroStats?: Stat[]
  features: FeatureCard[]
  operationsTitle: string
  operationsIntro: string
  operations: FeatureCard[]
  outcomesTitle: string
  outcomes: Stat[]
  faqs: FaqItem[]
}

export type RouteMeta = {
  path: string
  title: string
  description: string
  pageType: MarketingPageContent['pageType'] | 'blog'
  category: string
  sourceUrl?: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  tags: string[]
  sections: {
    heading: string
    body: string
  }[]
}

export type LeadFormPayload = {
  name: string
  email: string
  phone: string
  organization: string
  interest: string
  message: string
}

export type AuthPageContent = {
  path: string
  mode: 'login' | 'signup' | 'forgot' | 'portal'
  eyebrow: string
  title: string
  description: string
  submitLabel: string
  successTitle: string
  successMessage: string
  switchLabel?: string
  switchCta?: Cta
  helperLinks?: Cta[]
  fields: Array<{
    name: string
    label: string
    type: 'text' | 'email' | 'password' | 'tel'
    placeholder: string
    requiredMessage: string
  }>
}

export type ThemeTokens = {
  colors: Record<string, string>
  shadows: Record<string, string>
  radii: Record<string, string>
  gradients: Record<string, string>
  font: {
    sans: string
  }
}

export type MotionPreset = {
  duration: number
  ease: [number, number, number, number]
  distance: number
  stagger: number
}

export type LeadFormFieldConfig = {
  label: string
  placeholder?: string
  requiredMessage?: string
}

export type LeadFormConfig = {
  id: string
  title: string
  successTitle: string
  intro: string
  successMessage: string
  cooldownMinutes: number
  cooldownMessage: string
  submitLabel: string
  submittedLabel: string
  interestPlaceholder: string
  interestOptions: string[]
  fields: Record<keyof LeadFormPayload, LeadFormFieldConfig>
  validation: {
    email: string
    phone: string
    interest: string
  }
}

export type ProductVisualConfig = {
  productName: string
  sidebar: string[]
  activeSidebarIndex: number
  kpis: Stat[]
  flowRows: Record<VisualVariant, string[]>
  topCard: Stat
  bottomCard: Stat
}

export type MarketingTemplateConfig = {
  site: {
    brand: {
      name: string
      shortName: string
      suffix: string
      tagline: string
    }
    contact: {
      phone: string
      sales: string
      support: string
      address: string
    }
    topStrip: string[]
    footerCopyright: string
    externalLinks: {
      login: string
      patient: string
      whatsapp: string
    }
  }
  actions: {
    demo: TemplateAction
    contact: TemplateAction
    brochure: TemplateAction
    login: TemplateAction
    patient: TemplateAction
    signup: TemplateAction
    forgotPassword: TemplateAction
    whatsapp: TemplateAction
  }
  navigation: {
    product: NavGroup
    resource: NavGroup
    integration: NavGroup
    company: NavGroup
    customer: NavGroup
    main: NavGroup[]
  }
  sharedStats: Stat[]
  outcomeStats: Stat[]
  customerLogos: string[]
  testimonials: Testimonial[]
  leadForm: LeadFormConfig
  visual: ProductVisualConfig
  copy: {
    megaMenuSubtitle: string
    logoCloud: string
    workflowEyebrow: string
    testimonialsEyebrow: string
    testimonialsTitle: string
    testimonialsDescription: string
    faqEyebrow: string
    faqTitle: string
    faqDescription: string
    ctaEyebrow: string
    ctaTitle: string
    ctaDescription: string
    contactPanelEyebrow: string
    contactPanelTitle: string
    contactPanelDescription: string
    sourceDisclosure: string
    patientLoginLabel: string
    userLoginLabel: string
    signupLabel: string
    forgotPasswordLabel: string
    quickActionsLabel: string
    whatsappLabel: string
    callSalesLabel: string
    scrollTopLabel: string
  }
}

export type PageContent = MarketingPageContent
