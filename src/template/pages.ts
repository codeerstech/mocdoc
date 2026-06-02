import {
  Activity,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarClock,
  ClipboardCheck,
  CloudCog,
  FileCheck2,
  FileText,
  FlaskConical,
  HeartPulse,
  Layers3,
  MapPinned,
  MessageCircle,
  Network,
  Pill,
  ReceiptText,
  ShieldCheck,
  SmilePlus,
  Stethoscope,
  TestTube2,
  UsersRound,
  WalletCards,
} from 'lucide-react'
import type { BlogPost, FeatureCard, FaqItem, MarketingPageContent, Stat } from '../data/types'
import { outcomeStats, sharedStats, site } from './content'

const demoCta = site.ctas.demo
const contactCta = site.ctas.contact

const standardFaqs: FaqItem[] = [
  {
    question: 'Can this be used across multiple locations?',
    answer:
      'Yes. The template supports branch-level workflows, centralized reporting, role-based access, and shared patient or customer records across locations.',
  },
  {
    question: 'Does the demo form submit to a backend?',
    answer:
      'Yes. Demo and contact enquiries are saved through the website lead capture API after validation.',
  },
  {
    question: 'Can the pages be expanded to the full public sitemap?',
    answer:
      'Yes. The route manifest and page content model are designed so additional SEO, feature, blog, and location pages can be generated from data.',
  },
]

const platformFeatures: FeatureCard[] = [
  {
    title: 'Intuitive interface',
    description: 'Role-aware screens keep front desk, clinical, lab, pharmacy, and finance teams focused.',
    icon: SmilePlus,
  },
  {
    title: 'Mobile access',
    description: 'Teams can review appointments, records, reports, and task status from any modern device.',
    icon: Activity,
  },
  {
    title: 'Scalable setup',
    description: 'The same operating model supports single clinics, multi-specialty hospitals, and branch networks.',
    icon: Layers3,
  },
  {
    title: 'Dedicated support',
    description: 'Implementation, training, and workflow guidance are represented as part of the product experience.',
    icon: MessageCircle,
  },
]

const operationalFeatures: FeatureCard[] = [
  {
    title: 'Paperless coordination',
    description: 'Appointments, billing, clinical notes, lab orders, pharmacy, and discharge can move as one flow.',
    icon: ClipboardCheck,
  },
  {
    title: 'Live operational visibility',
    description: 'Dashboards surface queues, turnaround time, collections, inventory, and branch-level performance.',
    icon: BarChart3,
  },
  {
    title: 'Secure healthcare records',
    description: 'Access levels, audit-friendly activity trails, and compliance-oriented UX keep data handling disciplined.',
    icon: ShieldCheck,
  },
]

const productSeed = [
  {
    path: '/hospital-management-system',
    category: 'CareAxis HMS',
    eyebrow: 'Hospital Management Software',
    title: 'Cloud hospital management for cleaner patient journeys',
    description:
      'Coordinate registration, appointments, OP/IP care, billing, insurance, pharmacy, labs, discharge, and analytics from one hospital operating layer.',
    visual: 'hospital' as const,
    icon: Building2,
  },
  {
    path: '/lab-management-software',
    category: 'CareAxis LIMS',
    eyebrow: 'Laboratory Management Software',
    title: 'A connected LIMS for faster sample-to-report cycles',
    description:
      'Track sample collection, barcode movement, machine results, approvals, dispatch, and branch reporting in a clean diagnostic workflow.',
    visual: 'lab' as const,
    icon: FlaskConical,
  },
  {
    path: '/pharmacy-management-software',
    category: 'CareAxis PMS',
    eyebrow: 'Pharmacy Management Software',
    title: 'Pharmacy operations with inventory, billing, and counter control',
    description:
      'Manage prescriptions, batch stock, expiry, purchase, returns, counter billing, taxes, and sales analytics across one or many outlets.',
    visual: 'pharmacy' as const,
    icon: Pill,
  },
  {
    path: '/clinic-polyclinic-management-software',
    category: 'CareAxis CMS',
    eyebrow: 'Clinic/Polyclinic Management Software',
    title: 'Clinical workflows that keep appointments and care moving',
    description:
      'Unify appointments, case sheets, prescriptions, procedures, billing, memberships, and reminders for single-specialty and polyclinic teams.',
    visual: 'clinic' as const,
    icon: Stethoscope,
  },
  {
    path: '/environmental-lims-software',
    category: 'EcoLIMS',
    eyebrow: 'Environmental Laboratory Management Software',
    title: 'Environmental lab workflows from field collection to certificate',
    description:
      'Plan sample pickup, preserve methods, test parameters, approvals, quality checks, certificate issue, and compliance reporting.',
    visual: 'lab' as const,
    icon: TestTube2,
  },
  {
    path: '/ivf-hospital-management-information-system',
    category: 'CareAxis ART',
    eyebrow: 'ART Management Software',
    title: 'ART and fertility workflows designed for sensitive care',
    description:
      'Track IVF, IUI, embryology, consent, stimulation plans, cycle milestones, lab results, counselling, and follow-ups.',
    visual: 'people' as const,
    icon: HeartPulse,
  },
  {
    path: '/best-eye-hospital-management-software',
    category: 'CareAxis OptiCare',
    eyebrow: 'Ophthalmology Management Software',
    title: 'Ophthalmology workflows for clinics, optical, and procedures',
    description:
      'Connect vision charts, prescriptions, imaging notes, optical orders, procedure records, billing, and recall reminders.',
    visual: 'clinic' as const,
    icon: Activity,
  },
  {
    path: '/dental-practice-management-software',
    category: 'CareAxis DMS',
    eyebrow: 'Dental Management Software',
    title: 'Dental practice management for chairs, charts, and follow-ups',
    description:
      'Run chair schedules, treatment plans, dental charts, lab coordination, billing, recalls, and multi-branch performance.',
    visual: 'clinic' as const,
    icon: SmilePlus,
  },
]

export const productPages = productSeed.map<MarketingPageContent>((product) => ({
  path: product.path,
  pageType: 'product',
  category: product.category,
  eyebrow: product.eyebrow,
  title: product.title,
  description: product.description,
  sourceUrl: `https://mocdoc.com${product.path}`,
  visual: product.visual,
  primaryCta: demoCta,
  secondaryCta: contactCta,
  heroStats: sharedStats,
  features: [
    { title: 'Workflow-first screens', description: 'Every module is arranged around daily healthcare tasks instead of isolated records.', icon: product.icon },
    { title: 'Multi-team coordination', description: 'Clinical, operational, finance, and admin teams see the right context at the right time.', icon: UsersRound },
    { title: 'Audit-friendly controls', description: 'Structured records, approvals, and access boundaries support disciplined operations.', icon: ShieldCheck },
    { title: 'Reporting built in', description: 'Teams can review volume, collections, performance, and exceptions without exporting everything.', icon: BarChart3 },
  ],
  operationsTitle: `Key workflows for ${product.eyebrow.toLowerCase()}`,
  operationsIntro:
    'Each page keeps the same clinical blue interface while tailoring workflow blocks, outcomes, FAQ, and demo actions to the selected service.',
  operations: [
    { title: 'Front-office flow', description: 'Registration, appointments, queue status, collection, and communication stay visible.', icon: CalendarClock },
    { title: 'Care delivery flow', description: 'Notes, orders, reports, procedures, and approvals connect through a shared patient timeline.', icon: FileText },
    { title: 'Business control flow', description: 'Billing, inventory, settlements, branch reports, and exception tracking stay measurable.', icon: ReceiptText },
  ],
  outcomesTitle: 'Expected operating impact',
  outcomes: outcomeStats,
  faqs: standardFaqs,
}))

const integrationSeed = [
  {
    path: '/aasandha-integrated-hms',
    title: 'Aasandha-ready healthcare claim workflows',
    eyebrow: 'Aasandha Integration',
    description:
      'Represent eligibility, claim preparation, approvals, billing review, and settlement tracking in a healthcare operations dashboard.',
  },
  {
    path: '/abdm-compliant-software',
    title: 'ABDM-ready patient identity and health record journeys',
    eyebrow: 'ABDM Integration',
    description:
      'Model ABHA creation, consent-aware record exchange, patient identity checks, and connected digital health workflows.',
  },
  {
    path: '/clinical-decision-support-system',
    title: 'Clinical decision support that surfaces timely care prompts',
    eyebrow: 'CDSS',
    description:
      'Show clinical alerts, abnormal result signals, medication checks, and risk prompts in a calm care-team interface.',
  },
  {
    path: '/external-integration-healthcare-systems',
    title: 'External integrations for healthcare platforms and partner systems',
    eyebrow: 'External Integration',
    description:
      'Connect payment, accounting, insurance, messaging, reporting, and third-party healthcare services through a governed integration layer.',
  },
  {
    path: '/lims-machine-interface-integration-system',
    title: 'Machine integration for diagnostic labs and faster result capture',
    eyebrow: 'Machine Integration',
    description:
      'Represent analyzer connections, result ingestion, validation queues, approvals, and dispatch without manual re-entry.',
  },
  {
    path: '/nphies-integration',
    title: 'NPHIES-ready insurance and claim coordination',
    eyebrow: 'NPHIES Integration',
    description:
      'Support eligibility checks, pre-authorization, claim status, settlement follow-up, and payer communication workflows.',
  },
  {
    path: '/pos-integration-hospital-clinic-software',
    title: 'POS integration for pharmacy, billing counters, and collections',
    eyebrow: 'POS Integration',
    description:
      'Connect counter sales, receipts, billing, refunds, shift closure, and payment reconciliation across healthcare units.',
  },
  {
    path: '/vms-integration',
    title: 'Visitor management integration for controlled facility access',
    eyebrow: 'VMS Integration',
    description:
      'Represent visitor registration, passes, queues, approvals, movement logs, and secure hospital entry workflows.',
  },
]

const integrationPages = integrationSeed.map<MarketingPageContent>((page) => ({
  path: page.path,
  pageType: 'integration',
  category: 'Integrations',
  eyebrow: page.eyebrow,
  title: page.title,
  description: page.description,
  sourceUrl: `https://mocdoc.com${page.path}`,
  visual: 'integration',
  primaryCta: demoCta,
  secondaryCta: contactCta,
  heroStats: [
    { value: 'API', label: 'Governed exchange patterns' },
    { value: '24/7', label: 'Operational monitoring model' },
    { value: 'Audit', label: 'Traceable transaction records' },
  ],
  features: [
    { title: 'Connected workflows', description: 'Integrations are presented as part of daily operations, not as hidden technical plumbing.', icon: Network },
    { title: 'Validation queues', description: 'Exceptions, retries, and review states are visible to operations teams.', icon: ClipboardCheck },
    { title: 'Secure handoffs', description: 'Identity, authorization, and audit patterns are represented throughout the interface.', icon: ShieldCheck },
    { title: 'Actionable status', description: 'Teams can see pending, accepted, failed, and completed events without chasing logs.', icon: Activity },
  ],
  operationsTitle: 'Integration operations made visible',
  operationsIntro:
    'Each integration page shares a consistent page skeleton while changing the hero, workflow cards, outcomes, and FAQ copy through data.',
  operations: [
    { title: 'Map the request', description: 'Capture the source system, payload intent, patient context, and required approvals.', icon: FileCheck2 },
    { title: 'Track the exchange', description: 'Show in-progress, accepted, rejected, and retry states in a readable activity stream.', icon: CloudCog },
    { title: 'Close the loop', description: 'Surface completion status to billing, clinical, lab, or admin users as needed.', icon: BadgeCheck },
  ],
  outcomesTitle: 'Integration impact',
  outcomes: [
    { value: '60%', label: 'Less duplicate entry' },
    { value: 'Real-time', label: 'Status for operational teams' },
    { value: 'Traceable', label: 'Audit-ready exchange history' },
  ],
  faqs: standardFaqs,
}))

const featurePages: MarketingPageContent[] = [
  {
    path: '/hospital-appointment-scheduling-software',
    pageType: 'feature',
    category: 'HMS Solutions',
    eyebrow: 'Appointment Management',
    title: 'Appointment scheduling that keeps queues and clinicians aligned',
    description:
      'Represent booking, token queues, reminders, doctor calendars, patient arrival status, and no-show control in one feature page template.',
    sourceUrl: 'https://mocdoc.com/hospital-appointment-scheduling-software',
    visual: 'hospital',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: sharedStats.slice(0, 3),
    features: [
      { title: 'Doctor calendars', description: 'Department, consultant, room, and time-slot planning in one view.', icon: CalendarClock },
      { title: 'Queue visibility', description: 'Arrival, waiting, in-consult, billing, and follow-up states remain visible.', icon: UsersRound },
      { title: 'Reminder-ready', description: 'SMS, email, and WhatsApp-style reminder patterns are represented in the UI.', icon: MessageCircle },
    ],
    operationsTitle: 'Scheduling workflows',
    operationsIntro: 'The route is generated from feature metadata and uses the same conversion-focused structure.',
    operations: operationalFeatures,
    outcomesTitle: 'Scheduling outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
  {
    path: '/hospital-emr-ehr-software',
    pageType: 'feature',
    category: 'HMS Solutions',
    eyebrow: 'Electronic Medical Records',
    title: 'Structured EMR workflows for safer care coordination',
    description:
      'Show patient history, consultation notes, prescriptions, lab reports, allergies, care plans, and discharge summaries in a readable record flow.',
    sourceUrl: 'https://mocdoc.com/hospital-emr-ehr-software',
    visual: 'security',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: sharedStats.slice(0, 3),
    features: [
      { title: 'Clinical timeline', description: 'Consultations, orders, reports, and medications are arranged chronologically.', icon: FileText },
      { title: 'Care alerts', description: 'Abnormal results, allergies, and risk prompts are visible without overwhelming the user.', icon: HeartPulse },
      { title: 'Controlled access', description: 'Role-based views keep sensitive clinical records appropriately scoped.', icon: ShieldCheck },
    ],
    operationsTitle: 'EMR workflows',
    operationsIntro: 'The feature template can support the remaining HMS and LIMS detail pages as data entries.',
    operations: operationalFeatures,
    outcomesTitle: 'EMR outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
  {
    path: '/lab-sample-management-software',
    pageType: 'feature',
    category: 'LIMS Solutions',
    eyebrow: 'Sample Management',
    title: 'Sample movement from collection to report approval',
    description:
      'Model barcode collection, accession, processing, analyzer events, review, approval, and dispatch for diagnostic teams.',
    sourceUrl: 'https://mocdoc.com/lab-sample-management-software',
    visual: 'lab',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: sharedStats.slice(0, 3),
    features: [
      { title: 'Barcode journey', description: 'Samples move through collection, processing, review, and dispatch states.', icon: TestTube2 },
      { title: 'Machine events', description: 'Analyzer results and exception states are represented in the interface.', icon: Activity },
      { title: 'Approval flow', description: 'Technician, pathologist, and dispatch states stay easy to inspect.', icon: FileCheck2 },
    ],
    operationsTitle: 'Sample lifecycle workflows',
    operationsIntro: 'This demonstrates how feature routes can be expanded without one-off page code.',
    operations: operationalFeatures,
    outcomesTitle: 'Lab outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
]

const companyPages: MarketingPageContent[] = [
  {
    path: '/best-healthcare-software-development-company',
    pageType: 'company',
    category: 'Company',
    eyebrow: 'About Us',
    title: 'A healthcare technology partner focused on operational clarity',
    description:
      'A company page focused on implementation, support, workflow clarity, and measurable operational outcomes.',
    sourceUrl: 'https://mocdoc.com/best-healthcare-software-development-company',
    visual: 'people',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: sharedStats,
    features: platformFeatures,
    operationsTitle: 'How teams use the platform',
    operationsIntro: 'From first demo to multi-location rollout, the page emphasizes implementation, support, and scale.',
    operations: operationalFeatures,
    outcomesTitle: 'Company proof points',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
  {
    path: '/career-healthcare-information-management',
    pageType: 'company',
    category: 'Company',
    eyebrow: 'Careers',
    title: 'Build software for teams who cannot afford operational confusion',
    description:
      'A careers page for product, support, implementation, and engineering roles in healthcare operations.',
    sourceUrl: 'https://mocdoc.com/career-healthcare-information-management',
    visual: 'people',
    primaryCta: { label: 'View Open Roles', to: '#open-roles' },
    secondaryCta: contactCta,
    heroStats: [
      { value: 'Product', label: 'Healthcare workflow design' },
      { value: 'Support', label: 'Implementation and training' },
      { value: 'Engineering', label: 'Reliable cloud systems' },
    ],
    features: [
      { title: 'Healthcare domain work', description: 'Work on workflows that affect real care delivery and operations.', icon: HeartPulse },
      { title: 'Cross-functional teams', description: 'Product, support, engineering, and implementation collaborate closely.', icon: UsersRound },
      { title: 'Practical ownership', description: 'Roles are oriented around shipping reliable, learnable product experiences.', icon: BadgeCheck },
    ],
    operationsTitle: 'Open role families',
    operationsIntro: 'The section highlights role families that support product quality, implementation, and customer success.',
    operations: [
      { title: 'Product and design', description: 'Workflow research, UI design, documentation, and domain discovery.', icon: Layers3 },
      { title: 'Implementation and support', description: 'Onboarding, training, migration support, and customer success.', icon: MessageCircle },
      { title: 'Engineering', description: 'Frontend, backend, integrations, QA, reliability, and platform operations.', icon: CloudCog },
    ],
    outcomesTitle: 'Team principles',
    outcomes: [
      { value: 'Clear', label: 'Documented workflows' },
      { value: 'Useful', label: 'Interfaces that reduce work' },
      { value: 'Steady', label: 'Reliable support habits' },
    ],
    faqs: standardFaqs,
  },
  {
    path: '/contact-us',
    pageType: 'company',
    category: 'Company',
    eyebrow: 'Contact Us',
    title: 'Talk to a healthcare workflow specialist',
    description:
      'Use the contact page to review demo needs, implementation questions, integration requirements, or partnership conversations.',
    sourceUrl: 'https://mocdoc.com/contact-us',
    visual: 'people',
    primaryCta: demoCta,
    secondaryCta: { label: 'Email Sales', to: 'mailto:sales@careaxis.example', external: true },
    heroStats: [
      { value: 'Chennai', label: 'Example office location' },
      { value: '24/7', label: 'Support coordination' },
      { value: 'Demo', label: 'Live lead capture' },
    ],
    features: platformFeatures,
    operationsTitle: 'What to share',
    operationsIntro: 'The page saves contact requests through the website lead capture flow.',
    operations: [
      { title: 'Organization profile', description: 'Share whether you run a hospital, clinic, lab, pharmacy, or network.', icon: Building2 },
      { title: 'Workflow needs', description: 'Mention modules, integrations, branch count, and current operational pain points.', icon: ClipboardCheck },
      { title: 'Preferred next step', description: 'Ask for demo, pricing guidance, migration help, or partner discussion.', icon: CalendarClock },
    ],
    outcomesTitle: 'Contact options',
    outcomes: [
      { value: 'Sales', label: 'Consultation requests' },
      { value: 'Sales', label: 'Demo and pricing' },
      { value: 'Support', label: 'Implementation questions' },
    ],
    faqs: standardFaqs,
  },
  {
    path: '/partner-best-healthcare-solutions-provider',
    pageType: 'company',
    category: 'Company',
    eyebrow: 'Partner With Us',
    title: 'Partner programs for healthcare implementation and growth',
    description:
      'Represent referral, reseller, integration, and implementation partnerships with a clear conversion path.',
    sourceUrl: 'https://mocdoc.com/partner-best-healthcare-solutions-provider',
    visual: 'growth',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: sharedStats.slice(1),
    features: platformFeatures,
    operationsTitle: 'Partner pathways',
    operationsIntro: 'Partnership content can be swapped without changing the component structure.',
    operations: [
      { title: 'Referral partners', description: 'Introduce qualified healthcare organizations and track opportunity progress.', icon: UsersRound },
      { title: 'Implementation partners', description: 'Support onboarding, migration, training, and branch-level rollout.', icon: ClipboardCheck },
      { title: 'Integration partners', description: 'Connect specialized products with healthcare operating workflows.', icon: Network },
    ],
    outcomesTitle: 'Partner outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
]

const resourcePages: MarketingPageContent[] = [
  {
    path: '/book-demo-healthcare-management-software',
    pageType: 'resource',
    category: 'Resources',
    eyebrow: 'Book a Free Demo',
    title: 'Schedule a guided walkthrough for your healthcare operations',
    description:
      'A demo page with validation, duplicate-submit cooldown, ratings, proof cards, and live lead capture.',
    sourceUrl: 'https://mocdoc.com/book-demo-healthcare-management-software',
    visual: 'growth',
    primaryCta: { label: 'Start Form', to: '#demo-form' },
    secondaryCta: { label: 'Download Brochure', to: '/hospital-management-software-brochure' },
    heroStats: [
      { value: '30 min', label: 'Typical demo length' },
      { value: '4.8', label: 'Example review score' },
      { value: 'API', label: 'Lead capture' },
    ],
    features: [
      { title: 'Personalized walkthrough', description: 'Review modules that fit your hospital, clinic, lab, or pharmacy.', icon: UsersRound },
      { title: 'Live Q&A', description: 'Capture questions about workflows, integrations, pricing, and rollout.', icon: MessageCircle },
      { title: 'Feature highlights', description: 'See how dashboards, records, billing, reports, and communication fit together.', icon: BadgeCheck },
      { title: 'Implementation support', description: 'Discuss migration, training, branch setup, and role access planning.', icon: ClipboardCheck },
    ],
    operationsTitle: 'Why teams book demos',
    operationsIntro: 'The page mirrors a conversion-focused demo flow with proof, benefits, testimonials, and form handling.',
    operations: operationalFeatures,
    outcomesTitle: 'Demo takeaways',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
  {
    path: '/hospital-management-software-brochure',
    pageType: 'resource',
    category: 'Resources',
    eyebrow: 'Brochure',
    title: 'Healthcare management brochure for quick stakeholder review',
    description:
      'A brochure landing page with product overview, module highlights, ratings, and conversion CTA.',
    sourceUrl: 'https://mocdoc.com/hospital-management-software-brochure',
    visual: 'growth',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: sharedStats.slice(0, 3),
    features: platformFeatures,
    operationsTitle: 'What the brochure covers',
    operationsIntro: 'Use this page to review product families, implementation steps, and operating benefits.',
    operations: [
      { title: 'Product overview', description: 'Hospital, lab, clinic, pharmacy, dental, eye care, ART, and EcoLIMS modules.', icon: Layers3 },
      { title: 'Workflow map', description: 'Front desk, clinical, lab, pharmacy, finance, and management workflows.', icon: Network },
      { title: 'Rollout checklist', description: 'Discovery, setup, training, migration, integrations, and go-live support.', icon: FileCheck2 },
    ],
    outcomesTitle: 'Brochure highlights',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
  {
    path: '/nabh-compliant-hospital-software-india',
    pageType: 'resource',
    category: 'Resources',
    eyebrow: 'NABH HIS & EMR',
    title: 'Compliance-oriented HIS and EMR workflows for quality programs',
    description:
      'Represent accreditation-friendly documentation, audit trails, quality indicators, consent, and patient safety workflows.',
    sourceUrl: 'https://mocdoc.com/nabh-compliant-hospital-software-india',
    visual: 'security',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: [
      { value: 'Audit', label: 'Structured activity trails' },
      { value: 'Quality', label: 'Indicator-ready workflows' },
      { value: 'Safety', label: 'Patient-first controls' },
    ],
    features: [
      { title: 'Structured records', description: 'Clinical and administrative documentation stays consistent.', icon: FileText },
      { title: 'Quality indicators', description: 'Operational events can support safety and improvement reporting.', icon: BarChart3 },
      { title: 'Audit readiness', description: 'Approvals, access, and changes are designed to be reviewable.', icon: ShieldCheck },
    ],
    operationsTitle: 'Compliance-supporting workflows',
    operationsIntro: 'The content is original and non-legal; real compliance claims should be reviewed before production use.',
    operations: operationalFeatures,
    outcomesTitle: 'Compliance outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
  {
    path: '/pmjay-integrated-hospital-software',
    pageType: 'resource',
    category: 'Resources',
    eyebrow: 'PMJAY',
    title: 'PMJAY-ready patient, package, and claim coordination',
    description:
      'Model beneficiary checks, package selection, claim preparation, approval tracking, discharge, and settlement review workflows.',
    sourceUrl: 'https://mocdoc.com/pmjay-integrated-hospital-software',
    visual: 'integration',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: [
      { value: 'Claims', label: 'Status-driven workflows' },
      { value: 'Packages', label: 'Treatment package visibility' },
      { value: 'Finance', label: 'Settlement review support' },
    ],
    features: [
      { title: 'Beneficiary workflow', description: 'Represent checks, patient records, package details, and authorization states.', icon: UsersRound },
      { title: 'Claim tracking', description: 'Show pending, approved, queried, and settled states in one place.', icon: FileCheck2 },
      { title: 'Financial clarity', description: 'Connect treatment activity with receivables and settlement review.', icon: WalletCards },
    ],
    operationsTitle: 'Scheme workflow stages',
    operationsIntro: 'Review eligibility, billing, documentation, and reporting workflows for PMJAY-ready operations.',
    operations: operationalFeatures,
    outcomesTitle: 'Scheme support outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
  {
    path: '/privacy-policy',
    pageType: 'legal',
    category: 'Legal',
    eyebrow: 'Privacy Policy',
    title: 'Privacy policy for website visitors and enquiries',
    description:
      'A privacy page describing how website enquiries, usage details, and operational information are handled.',
    sourceUrl: 'https://mocdoc.com/privacy-policy',
    visual: 'security',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: [
      { value: 'Notice', label: 'Website privacy terms' },
      { value: 'Access', label: 'Role-based design intent' },
      { value: 'Review', label: 'Legal review required' },
    ],
    features: [
      { title: 'Data collection', description: 'Sections describe contact, usage, and operational information.', icon: FileText },
      { title: 'Data use', description: 'Explain service delivery, support, communication, and improvement at a high level.', icon: ShieldCheck },
      { title: 'User rights', description: 'Reserve space for access, correction, deletion, and consent-management terms.', icon: BadgeCheck },
    ],
    operationsTitle: 'Policy sections',
    operationsIntro: 'This is not legal advice; production policy language should be reviewed by counsel.',
    operations: [
      { title: 'Information collected', description: 'Contact details, organization profile, and submitted form data.', icon: FileText },
      { title: 'Security practices', description: 'Access controls, audit trails, retention, and incident response practices.', icon: ShieldCheck },
      { title: 'Contact process', description: 'Requests can be routed to the appropriate privacy contact.', icon: MessageCircle },
    ],
    outcomesTitle: 'Legal readiness',
    outcomes: [
      { value: 'Draft', label: 'Needs counsel review' },
      { value: 'Clear', label: 'Plain-language policy' },
      { value: 'Replaceable', label: 'Data-driven page' },
    ],
    faqs: standardFaqs,
  },
  {
    path: '/terms-of-use',
    pageType: 'legal',
    category: 'Legal',
    eyebrow: 'Terms of Use',
    title: 'Terms of use for the website and services',
    description:
      'A terms page covering website access, acceptable use, service information, and user responsibilities.',
    sourceUrl: 'https://mocdoc.com/terms-of-use',
    visual: 'security',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: [
      { value: 'Terms', label: 'Website usage' },
      { value: 'Clear', label: 'Plain-language terms' },
      { value: 'Review', label: 'Counsel required' },
    ],
    features: [
      { title: 'Use of service', description: 'Placeholder acceptable-use and account responsibility language.', icon: FileText },
      { title: 'Limitations', description: 'Placeholder availability, content, and liability framing.', icon: ShieldCheck },
      { title: 'Updates', description: 'Reserve space for modification and notice terms.', icon: BadgeCheck },
    ],
    operationsTitle: 'Terms sections',
    operationsIntro: 'The legal pages use the same marketing shell for visual consistency.',
    operations: operationalFeatures,
    outcomesTitle: 'Terms readiness',
    outcomes: [
      { value: 'Draft', label: 'Needs counsel review' },
      { value: 'Clear', label: 'Readable structure' },
      { value: 'Flexible', label: 'Replaceable content' },
    ],
    faqs: standardFaqs,
  },
]

const customerPages: MarketingPageContent[] = [
  {
    path: '/customers-review',
    pageType: 'customer',
    category: 'Customers',
    eyebrow: 'Wall of Love',
    title: 'Customer voices from busy healthcare teams',
    description:
      'A testimonial-focused page showing customer outcomes and review-card storytelling.',
    sourceUrl: 'https://mocdoc.com/customers-review',
    visual: 'people',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: sharedStats,
    features: platformFeatures,
    operationsTitle: 'What customers usually notice',
    operationsIntro: 'The page emphasizes adoption, workflow confidence, support, and measurable operations.',
    operations: operationalFeatures,
    outcomesTitle: 'Reported impact',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
  {
    path: '/success-stories',
    pageType: 'customer',
    category: 'Customers',
    eyebrow: 'Success Stories',
    title: 'Healthcare transformation stories built around operational wins',
    description:
      'A success-story index template for case studies across hospitals, clinics, labs, pharmacies, and specialty centers.',
    sourceUrl: 'https://mocdoc.com/success-stories',
    visual: 'growth',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: sharedStats,
    features: platformFeatures,
    operationsTitle: 'Story themes',
    operationsIntro: 'Each story can later become a detail page while sharing the same content primitives.',
    operations: [
      { title: 'Queue reduction', description: 'Shorter wait times through appointment visibility and front desk coordination.', icon: CalendarClock },
      { title: 'Billing discipline', description: 'Cleaner package, insurance, pharmacy, and settlement workflows.', icon: ReceiptText },
      { title: 'Branch reporting', description: 'Management dashboards that make performance easier to compare.', icon: BarChart3 },
    ],
    outcomesTitle: 'Success metrics',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
  {
    path: '/referral-program-healthcare-professionals',
    pageType: 'customer',
    category: 'Customers',
    eyebrow: 'Referral Program',
    title: 'Referral programs for healthcare professionals and partners',
    description:
      'A referral page that explains who can refer, how the process works, and what happens after introduction.',
    sourceUrl: 'https://mocdoc.com/referral-program-healthcare-professionals',
    visual: 'growth',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: [
      { value: 'Refer', label: 'Introduce a qualified lead' },
      { value: 'Review', label: 'Workflow fit assessment' },
      { value: 'Reward', label: 'Placeholder partner benefit' },
    ],
    features: platformFeatures,
    operationsTitle: 'Referral flow',
    operationsIntro: 'The page is ready for real partner terms without changing layout code.',
    operations: [
      { title: 'Submit lead', description: 'Share organization type, contact, current system, and urgent needs.', icon: UsersRound },
      { title: 'Qualification', description: 'Review product fit, modules, budget range, timeline, and stakeholder availability.', icon: ClipboardCheck },
      { title: 'Demo and closure', description: 'Track demo completion, proposal, onboarding, and partner outcome.', icon: BadgeCheck },
    ],
    outcomesTitle: 'Referral outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  },
]

const countryStats: Stat[] = [
  { value: 'Cloud', label: 'Remote rollout model' },
  { value: 'Local', label: 'Configurable workflows' },
  { value: 'Scale', label: 'Branch-ready operations' },
]

export const locationPages: MarketingPageContent[] = [
  'india',
  'bahamas',
  'bahrain',
  'cambodia',
  'fiji',
  'malaysia',
  'maldives',
  'mauritius',
  'nigeria',
  'oman',
  'rwanda',
  'saudi-arabia',
  'south-africa',
  'sri-lanka',
  'trinidad-tobago',
  'us',
].map((slug) => {
  const name = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
    .replace('Us', 'US')
  return {
    path: `/${slug}`,
    pageType: 'location',
    category: 'Global Presence',
    eyebrow: `CareAxis in ${name}`,
    title: `Healthcare management software for ${name}`,
    description:
      'A location landing page template for hospitals, clinics, labs, and pharmacies that need cloud workflows, local configuration, and multi-site visibility.',
    sourceUrl: `https://mocdoc.com/${slug}`,
    visual: 'growth',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: countryStats,
    features: [
      { title: 'Cloud deployment', description: 'Designed for distributed teams and branch networks.', icon: CloudCog },
      { title: 'Local operations', description: 'Adapt appointment, billing, reporting, and communication flows by region.', icon: MapPinned },
      { title: 'Multi-location view', description: 'Compare volume, collections, turnaround, and queue health across sites.', icon: BarChart3 },
    ],
    operationsTitle: `Healthcare workflows for ${name}`,
    operationsIntro:
      'Location routes share the same template and can be expanded to country, state, and city-specific SEO pages.',
    operations: operationalFeatures,
    outcomesTitle: 'Location outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  } satisfies MarketingPageContent
})

export const blogPosts: BlogPost[] = [
  {
    slug: 'digital-first-hospitals-cloud-hms',
    title: 'How digital-first hospitals reduce operational drag',
    excerpt:
      'A practical look at how hospitals can connect front desk, clinical, billing, lab, and pharmacy workflows without adding avoidable complexity.',
    category: 'Hospital Management',
    date: '2026-03-31',
    readTime: '6 min read',
    tags: ['HMS', 'Operations', 'Cloud'],
    sections: [
      {
        heading: 'Start with the patient journey',
        body:
          'The clearest hospital systems are organized around what actually happens to a patient: registration, queueing, consultation, orders, payment, fulfillment, and follow-up.',
      },
      {
        heading: 'Make exceptions visible',
        body:
          'A useful cloud HMS should make delays, billing mismatches, pending reports, and approval gaps visible before they become patient complaints.',
      },
      {
        heading: 'Keep reporting close to work',
        body:
          'Managers should not have to wait for spreadsheet exports to see basic operational signals. Reporting belongs beside the workflows it measures.',
      },
    ],
  },
  {
    slug: 'lims-sample-lifecycle-explained',
    title: 'The sample lifecycle every diagnostic lab should be able to see',
    excerpt:
      'From barcode collection to dispatch, labs need a transparent sample trail that supports speed, quality, and accountability.',
    category: 'LIMS',
    date: '2026-03-18',
    readTime: '5 min read',
    tags: ['LIMS', 'Diagnostics', 'Reports'],
    sections: [
      {
        heading: 'Collection is only the first signal',
        body:
          'A sample record should show collection time, branch, patient context, test package, container, barcode, and who performed the collection.',
      },
      {
        heading: 'Machine events need review states',
        body:
          'Analyzer integrations reduce manual entry, but teams still need clear pending, exception, verified, approved, and dispatched states.',
      },
      {
        heading: 'Dispatch closes the loop',
        body:
          'The result workflow is not done until the report is approved, delivered, and traceable for later support or audit needs.',
      },
    ],
  },
  {
    slug: 'clinic-management-software-vs-hms',
    title: 'Clinic management software vs hospital management systems',
    excerpt:
      'Both systems organize healthcare work, but their center of gravity is different. Here is how to think about the distinction.',
    category: 'Clinic Management',
    date: '2026-02-27',
    readTime: '4 min read',
    tags: ['CMS', 'HMS', 'Practice'],
    sections: [
      {
        heading: 'Clinics need speed and repeatability',
        body:
          'Clinic workflows often revolve around appointments, case sheets, prescriptions, billing, memberships, and follow-up communication.',
      },
      {
        heading: 'Hospitals need departmental depth',
        body:
          'Hospitals usually require OP, IP, ward, OT, discharge, insurance, pharmacy, diagnostics, and management reporting in one operating layer.',
      },
      {
        heading: 'The right interface reduces training',
        body:
          'Whether the setup is small or large, the best system feels obvious to the staff who use it every day.',
      },
    ],
  },
]

export const allMarketingPages: MarketingPageContent[] = [
  ...productPages,
  ...integrationPages,
  ...featurePages,
  ...companyPages,
  ...resourcePages,
  ...customerPages,
  ...locationPages,
]

export const marketingPageByPath = new Map(allMarketingPages.map((page) => [page.path, page]))

export function getGenericLocationPage(slug: string): MarketingPageContent {
  const name = slug
    .replace(/^\/+/, '')
    .split('/')
    .filter(Boolean)
    .map((part) =>
      part
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    )
    .join(', ')

  return {
    path: `/${slug.replace(/^\/+/, '')}`,
    pageType: 'location',
    category: 'Global Presence',
    eyebrow: 'Regional Healthcare Software',
    title: `Cloud healthcare management software for ${name || 'your region'}`,
    description:
      'This dynamic location page uses the shared template for city, state, and country pages from a route slug.',
    visual: 'growth',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: countryStats,
    features: [
      { title: 'Regional setup', description: 'Represent local billing, communication, and reporting needs.', icon: MapPinned },
      { title: 'Branch operations', description: 'Support multiple centers while keeping management visibility clear.', icon: Building2 },
      { title: 'Cloud access', description: 'Give authorized teams access to operational context from anywhere.', icon: CloudCog },
    ],
    operationsTitle: 'Regional workflow model',
    operationsIntro:
      'Unknown location routes are generated safely from the slug, which keeps the implementation scalable without hundreds of hand-built files.',
    operations: operationalFeatures,
    outcomesTitle: 'Regional outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  }
}

export function getGenericFeaturePage(path: string): MarketingPageContent {
  const title = path
    .replace(/^\/+/, '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    path,
    pageType: 'feature',
    category: 'Feature Pages',
    eyebrow: 'Healthcare Workflow Feature',
    title,
    description:
      'A reusable feature-page route for additional sitemap entries, ready for specific content to be added in the page data model.',
    visual: 'hospital',
    primaryCta: demoCta,
    secondaryCta: contactCta,
    heroStats: sharedStats.slice(0, 3),
    features: platformFeatures,
    operationsTitle: 'Reusable feature workflow',
    operationsIntro:
      'This fallback keeps public feature slugs renderable while preserving a clear path for richer content later.',
    operations: operationalFeatures,
    outcomesTitle: 'Feature outcomes',
    outcomes: outcomeStats,
    faqs: standardFaqs,
  }
}

export const homepageFeatures = platformFeatures
export const homepageOperations = operationalFeatures
