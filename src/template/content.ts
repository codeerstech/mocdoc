import {
  Activity,
  BadgeCheck,
  Building2,
  CalendarClock,
  FlaskConical,
  HeartPulse,
  MapPin,
  Pill,
  ShieldCheck,
  SmilePlus,
  Stethoscope,
  TestTube2,
  UsersRound,
} from 'lucide-react'
import type { MarketingTemplateConfig, NavGroup, Stat, Testimonial } from '../data/types'
import { templateActions } from './actions'

export const site = {
  brand: {
    name: 'CareAxis Cloud',
    shortName: 'CareAxis',
    suffix: 'Cloud',
    tagline: 'Connected healthcare operations, without the operational drag.',
  },
  contact: {
    phone: '+91 93609 52112',
    sales: 'sales@careaxis.example',
    support: 'support@careaxis.example',
    address:
      'No. 17, 3rd Cross Street, Swamy Square, Velachery, Chennai - 600042',
  },
  topStrip: ['Clinic-ready workflows', 'Hospital operations suite', 'Live demo support'],
  footerCopyright: 'Copyright 2026 © CareAxis Cloud. All rights reserved.',
  ctas: templateActions,
  externalLinks: {
    login: templateActions.login.to,
    patient: templateActions.patient.to,
    whatsapp: templateActions.whatsapp.to,
  },
}

export const productNav: NavGroup = {
  title: 'Products',
  items: [
    {
      title: 'All Products',
      description: 'Explore the full CareAxis product family in one place.',
      to: '/products',
    },
    {
      title: 'Hospital Management Software',
      description: 'Coordinate OP, IP, billing, pharmacy, diagnostics, and discharge workflows.',
      to: '/hospital-management-system',
    },
    {
      title: 'Laboratory Management Software',
      description: 'Track samples, machines, reports, dispatch, and multi-location labs.',
      to: '/lab-management-software',
    },
    {
      title: 'Pharmacy Management Software',
      description: 'Manage prescriptions, inventory, batch expiry, GST billing, and counters.',
      to: '/pharmacy-management-software',
    },
    {
      title: 'Clinic/Polyclinic Management Software',
      description: 'Run appointments, clinical notes, billing, memberships, and follow-ups.',
      to: '/clinic-polyclinic-management-software',
    },
    {
      title: 'Environmental Laboratory Software',
      description: 'Organize collection, test methods, approvals, certificates, and audits.',
      to: '/environmental-lims-software',
    },
    {
      title: 'ART Management Software',
      description: 'Support IVF, IUI, embryology, consent, cycle tracking, and counselling.',
      to: '/ivf-hospital-management-information-system',
    },
    {
      title: 'Ophthalmology Management Software',
      description: 'Connect optical, procedures, prescriptions, imaging, and vision records.',
      to: '/best-eye-hospital-management-software',
    },
    {
      title: 'Dental Management Software',
      description: 'Plan chairs, treatments, charts, labs, recalls, and multi-branch dental care.',
      to: '/dental-practice-management-software',
    },
  ],
}

export const integrationNav: NavGroup = {
  title: 'Integrations',
  items: [
    { title: 'Aasandha', to: '/aasandha-integrated-hms' },
    { title: 'ABDM', to: '/abdm-compliant-software' },
    { title: 'CDSS', to: '/clinical-decision-support-system' },
    { title: 'External Integration', to: '/external-integration-healthcare-systems' },
    { title: 'Machine Integration', to: '/lims-machine-interface-integration-system' },
    { title: 'NPHIES Integration', to: '/nphies-integration' },
    { title: 'POS Integration', to: '/pos-integration-hospital-clinic-software' },
    { title: 'VMS Integration', to: '/vms-integration' },
  ],
}

export const resourceNav: NavGroup = {
  title: 'Resources',
  items: [
    { title: 'Blogs', to: '/blog' },
    { title: 'Brochure', to: '/hospital-management-software-brochure' },
    { title: 'NABH HIS & EMR', to: '/nabh-compliant-hospital-software-india' },
    { title: 'PMJAY', to: '/pmjay-integrated-hospital-software' },
  ],
}

export const companyNav: NavGroup = {
  title: 'Company',
  items: [
    { title: 'About Us', to: '/best-healthcare-software-development-company' },
    { title: 'Careers', to: '/career-healthcare-information-management' },
    { title: 'Contact Us', to: '/contact-us' },
    { title: 'Partner With Us', to: '/partner-best-healthcare-solutions-provider' },
  ],
}

export const customerNav: NavGroup = {
  title: 'Customer',
  items: [
    { title: 'Wall of Love', to: '/customers-review' },
    { title: 'Success Stories', to: '/success-stories' },
    { title: 'Referral Program', to: '/referral-program-healthcare-professionals' },
  ],
}

export const mainNavGroups = [
  productNav,
  resourceNav,
  integrationNav,
  companyNav,
  customerNav,
]

export const sharedStats: Stat[] = [
  { value: '15M+', label: 'Patient records coordinated' },
  { value: '30k+', label: 'Clinicians and staff supported' },
  { value: '50+', label: 'Cities served through partners' },
  { value: '10+', label: 'Countries represented' },
]

export const outcomeStats: Stat[] = [
  { value: '78%', label: 'Improved patient experience' },
  { value: '4x', label: 'Faster operational decisions' },
  { value: '6x', label: 'Cleaner revenue visibility' },
]

export const customerLogos = [
  'Health Plus',
  'Medica North',
  'Orbito Care',
  'Excel Scan',
  'Nile Diagnostics',
  'Apollo Smile',
  'Victoria Clinic',
  'Coral Hospital',
  'Zens Medical',
  'Global Labs',
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'The implementation felt practical from week one. Our front desk, billing, and clinical teams finally work from the same operating picture.',
    name: 'Dr. Shree Krishna',
    role: 'Medical Director',
    location: 'India',
    rating: '4.8',
  },
  {
    quote:
      'We moved from scattered spreadsheets to controlled workflows without losing speed. The best part is how quickly new staff learn the system.',
    name: 'Vidya S',
    role: 'Hospital Administrator',
    location: 'India',
    rating: '4.8',
  },
  {
    quote:
      'Multi-branch reporting became far easier. We can spot queue delays, billing gaps, and lab turnaround issues before they become complaints.',
    name: 'Ahmed Maumoon',
    role: 'Managing Director',
    location: 'Maldives',
    rating: '4.9',
  },
  {
    quote:
      'The lab workflow is clean: sample collection, machine results, approvals, and dispatch are all visible without constant phone calls.',
    name: 'Kartheek K',
    role: 'Diagnostics Manager',
    location: 'Nigeria',
    rating: '4.7',
  },
]

export const leadForm = {
  id: 'demo-form',
  title: 'Schedule your free demo',
  successTitle: 'Thank you for booking a demo!',
  intro: 'Tell us a little about your organization and the workflow you want to improve.',
  successMessage: 'Details saved. We will reach you shortly.',
  cooldownMinutes: 30,
  cooldownMessage:
    'To prevent duplicate requests, this form can be submitted again in about {minutes} minutes.',
  submitLabel: 'Book a Free Demo',
  submittedLabel: 'Details Saved',
  interestPlaceholder: 'Select one',
  interestOptions: [
    'Hospital management',
    'Lab management',
    'Clinic management',
    'Pharmacy management',
    'Integration support',
  ],
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Dr. Priya Raman',
      requiredMessage: 'Name is required.',
    },
    email: {
      label: 'Email',
      placeholder: 'you@example.com',
    },
    phone: {
      label: 'Phone',
      placeholder: '+91 98765 43210',
    },
    organization: {
      label: 'Organization',
      placeholder: 'City Care Hospital',
      requiredMessage: 'Organization is required.',
    },
    interest: {
      label: 'Interest',
    },
    message: {
      label: 'Message',
      placeholder: 'Share branch count, modules, current system, or integration needs.',
    },
  },
  validation: {
    email: 'Enter a valid email.',
    phone: 'Enter a valid phone number.',
    interest: 'Select an area of interest.',
  },
}

export const visual = {
  productName: 'CareAxis Clinical OS',
  sidebar: ['Today', 'Doctors', 'Patients', 'Reports', 'Billing'],
  activeSidebarIndex: 1,
  kpis: [
    { value: '248', label: 'Patients' },
    { value: '96%', label: 'On time' },
    { value: '42', label: 'Reviews' },
  ],
  flowRows: {
    hospital: ['OP Queue', 'IP Admissions', 'Billing', 'Discharge'],
    lab: ['Collected', 'Processing', 'Review', 'Dispatched'],
    pharmacy: ['Prescription', 'Stock', 'Counter', 'Settlement'],
    clinic: ['Booking', 'Case Sheet', 'Prescription', 'Follow-up'],
    integration: ['Request', 'Validate', 'Exchange', 'Complete'],
    security: ['Role', 'Consent', 'Audit', 'Review'],
    growth: ['Demo', 'Rollout', 'Training', 'Scale'],
    people: ['Patient', 'Doctor', 'Admin', 'Support'],
  },
  topCard: { value: '18 min', label: 'Doctor queue' },
  bottomCard: { value: 'Ready', label: 'Clinical audit' },
}

export const templateCopy = {
  megaMenuSubtitle: 'Explore core workflows',
  logoCloud: 'Trusted by healthcare teams across hospitals, clinics, labs, and specialty centers',
  workflowEyebrow: 'Grow your business',
  testimonialsEyebrow: 'Our clients say it best',
  testimonialsTitle: 'Healthcare teams back the workflow',
  testimonialsDescription:
    'Healthcare leaders use the platform to align teams, workflows, and performance goals.',
  faqEyebrow: 'Common queries',
  faqTitle: 'Questions healthcare teams ask before a demo',
  faqDescription: 'Answers for healthcare teams evaluating the platform.',
  ctaEyebrow: 'Ready when you are',
  ctaTitle: 'Modernize patient operations with CareAxis Cloud',
  ctaDescription:
    'Bring patient experience, operational efficiency, revenue visibility, and data security into one healthcare workflow layer.',
  contactPanelEyebrow: 'Live demo',
  contactPanelTitle: 'See the workflow in context',
  contactPanelDescription:
    'The form validates inputs and saves enquiries to the website lead system.',
  sourceDisclosure: 'Website routes and page details',
  patientLoginLabel: 'Patient Login',
  userLoginLabel: 'User Login',
  signupLabel: 'Sign Up',
  forgotPasswordLabel: 'Forgot Password',
  quickActionsLabel: 'Quick actions',
  whatsappLabel: 'WhatsApp chat',
  callSalesLabel: 'Call sales',
  scrollTopLabel: 'Scroll to top',
}

export const templateConfig: MarketingTemplateConfig = {
  site,
  actions: templateActions,
  navigation: {
    product: productNav,
    resource: resourceNav,
    integration: integrationNav,
    company: companyNav,
    customer: customerNav,
    main: mainNavGroups,
  },
  sharedStats,
  outcomeStats,
  customerLogos,
  testimonials,
  leadForm,
  visual,
  copy: templateCopy,
}

export const iconMap = {
  hospital: Building2,
  lab: FlaskConical,
  pharmacy: Pill,
  clinic: Stethoscope,
  integration: Activity,
  security: ShieldCheck,
  patient: SmilePlus,
  users: UsersRound,
  calendar: CalendarClock,
  badge: BadgeCheck,
  test: TestTube2,
  location: MapPin,
  pulse: HeartPulse,
}
