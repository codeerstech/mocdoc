import {
  BarChart3,
  BellRing,
  CalendarClock,
  FileText,
  HeartPulse,
  Network,
  ShieldCheck,
} from 'lucide-react'
import { homepageFeatures, homepageOperations } from '../data/pages'
import type { FeatureCard, MarketingPageContent } from '../data/types'
import { outcomeStats, sharedStats, site } from './content'

export const homePage: MarketingPageContent = {
  path: '/',
  pageType: 'home',
  category: 'Home',
  eyebrow: 'One stop digital healthcare solution',
  title: 'Cloud healthcare software for clinics, labs, pharmacies, and hospitals',
  description:
    'Bring appointments, patient records, diagnostics, pharmacy, billing, reporting, and support workflows into one calm clinical operating system.',
  visual: 'hospital',
  primaryCta: site.ctas.demo,
  secondaryCta: site.ctas.contact,
  heroStats: sharedStats,
  features: homepageFeatures,
  operationsTitle: 'Top healthcare software for simplified operations',
  operationsIntro:
    'The homepage uses calm, dense sections suited to operational healthcare software rather than a decorative landing page.',
  operations: homepageOperations,
  outcomesTitle: 'Achieve more with us',
  outcomes: outcomeStats,
  faqs: [
    {
      question: 'Can CareAxis fit different healthcare teams?',
      answer:
        'Yes. CareAxis supports clinics, hospitals, labs, pharmacies, and specialty centers through reusable workflow modules.',
    },
    {
      question: 'Can the website support more service pages?',
      answer:
        'Yes. Product, feature, integration, location, and article pages are driven by structured content so the site can expand cleanly.',
    },
    {
      question: 'Does the demo form send real data?',
      answer:
        'No. This v1 has client-side validation, a local success state, and duplicate-submit cooldown only.',
    },
  ],
}

export const homeSplitSection = {
  eyebrow: 'Best cloud-based healthcare technology',
  title: 'One platform pattern, many healthcare operating models',
  description: 'The same blue clinical UI adapts to front desk, doctor, diagnostics, pharmacy, and management teams.',
  visual: 'clinic' as const,
  products: [
    {
      title: 'Clinic/Polyclinic Management',
      description: 'Appointment, case sheet, billing, and follow-up workflows.',
      to: '/clinic-polyclinic-management-software',
    },
    {
      title: 'Hospital Management',
      description: 'OP, IP, ward, insurance, diagnostics, pharmacy, and discharge coordination.',
      to: '/hospital-management-system',
    },
    {
      title: 'Laboratory Management',
      description: 'Sample lifecycle, machine results, approvals, and dispatch tracking.',
      to: '/lab-management-software',
    },
    {
      title: 'Pharmacy Management',
      description: 'Prescription, stock, batch expiry, counter billing, and purchase control.',
      to: '/pharmacy-management-software',
    },
  ],
}

export const modernizationSection = {
  eyebrow: 'Why modernize now',
  title: 'Is outdated technology slowing you down?',
  description:
    'A cloud operating layer reduces duplicate work, manual reports, delayed communication, and hidden bottlenecks.',
  features: [
    {
      title: 'Zero maintenance mindset',
      description: 'Prototype cards represent managed uptime, backups, and security-oriented hosting.',
      icon: ShieldCheck,
    },
    {
      title: 'Paperless practice flow',
      description: 'Use built-in workflow states to move tasks forward without scattered files.',
      icon: FileText,
    },
    {
      title: 'Any-device access',
      description: 'Responsive layouts keep the product story readable on mobile, tablet, and desktop.',
      icon: CalendarClock,
    },
    {
      title: 'Communication ready',
      description: 'Patient reminders, staff notifications, and support actions are visible patterns.',
      icon: BellRing,
    },
  ] satisfies FeatureCard[],
}

export const benefitSection = {
  eyebrow: 'Achieve more with us',
  title: 'Patient experience, efficiency, and revenue in one operating view',
  description: 'A healthcare operations stack should feel clear for patients, quick for staff, and measurable for leadership.',
  blocks: [
    {
      title: 'Elevate patient experience',
      icon: HeartPulse,
      items: [
        'Online presence for bookings and follow-ups.',
        'Queue visibility to reduce waiting-room confusion.',
        'Email, SMS, and WhatsApp-style communication patterns.',
        'Feedback loops for continuous service improvement.',
      ],
    },
    {
      title: 'Enhance operational efficiency',
      icon: Network,
      items: [
        'Automate repeatable administrative processes.',
        'Give managers real-time operational dashboards.',
        'Connect front desk, care teams, diagnostics, and finance.',
        'Use workflows to reduce missed handoffs.',
      ],
    },
    {
      title: 'Boost revenue visibility',
      icon: BarChart3,
      items: [
        'Track collections, settlements, refunds, and receivables.',
        'Surface pricing and package inconsistencies.',
        'Reduce pilferage with tighter inventory views.',
        'Compare branch and department performance.',
      ],
    },
  ],
}

export const homeDemoSection = {
  eyebrow: 'Book a demo',
  title: 'See the platform mapped to your workflow',
  description: 'Share your details and our team will save the enquiry for follow-up.',
}
