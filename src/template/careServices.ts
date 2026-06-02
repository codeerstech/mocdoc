import {
  Activity,
  Baby,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  HeartHandshake,
  HeartPulse,
  Home,
  LockKeyhole,
  MapPinned,
  PhoneCall,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
  UsersRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { FaqItem, RouteMeta } from '../data/types'

export type CareService = {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: LucideIcon
  availability: string
  bestFor: string[]
  problem: string
  journey: string[]
  workflow: string[]
  team: string[]
  carePlan: string[]
  monitoring: string[]
  safety: string[]
  outcomes: string[]
}

export type CareSeoPage = {
  path: string
  category: string
  eyebrow: string
  title: string
  description: string
  highlights: string[]
  sections: Array<{
    title: string
    description: string
    items: string[]
  }>
  relatedLinks: Array<{
    label: string
    to: string
  }>
}

const sharedSafety = [
  'Identity, address, and reference verification before assignment',
  'Family-approved scope of work and restricted home-access notes',
  'Coordinator escalation path for concerns, absence, or emergencies',
]

export const careServices: CareService[] = [
  {
    slug: 'elder-care-assistance',
    title: 'Elder Care Services',
    shortTitle: 'Elder Care',
    description:
      'Daily support for seniors who need mobility help, hygiene routines, meal support, medication reminders, companionship, and gentle supervision.',
    icon: HeartHandshake,
    availability: 'Hourly, daily, weekly, monthly, live-in',
    bestFor: ['Seniors living alone', 'Fall-risk patients', 'Families needing supervised routines'],
    problem: 'Families need dependable support for elderly parents without compromising dignity, independence, or safety at home.',
    journey: ['Share age, condition, location, and timing', 'Coordinator confirms mobility and safety needs', 'Verified assistant is matched', 'Daily updates keep family informed'],
    workflow: ['Needs assessment', 'Care plan setup', 'Caregiver assignment', 'Daily reporting and review'],
    team: ['Care coordinator', 'Elder care assistant', 'Nurse supervisor when needed'],
    carePlan: ['Mobility, hygiene, nutrition, reminders, and companionship schedule', 'Fall-prevention checklist', 'Escalation triggers for confusion, fever, or missed medicines'],
    monitoring: ['Daily visit notes', 'Weekly long-term plan review', 'Incident and family feedback log'],
    safety: sharedSafety,
    outcomes: ['Safer senior routines', 'Reduced family stress', 'Clear continuity for long-term care'],
  },
  {
    slug: 'nursing-services-at-home',
    title: 'Nursing Services at Home',
    shortTitle: 'Nursing',
    description:
      'Qualified nurses for vitals, injections, wound dressing, catheter care, chronic-care support, medication administration, and post-discharge supervision.',
    icon: Stethoscope,
    availability: 'Hourly, shift-based, daily, weekly',
    bestFor: ['Post-discharge patients', 'Procedure-led nursing', 'Chronic-care support'],
    problem: 'Patients discharged from hospital often need trained clinical support without repeated facility visits.',
    journey: ['Share prescription and doctor instructions', 'Supervisor reviews clinical scope', 'Qualified nurse is assigned', 'Vitals and task notes are reported'],
    workflow: ['Clinical scope review', 'Nurse skill matching', 'Visit schedule', 'Documentation and escalation'],
    team: ['Registered nurse', 'Nurse supervisor', 'Care coordinator'],
    carePlan: ['Task checklist for vitals, dressing, injections, or catheter care', 'Doctor-instruction review', 'Warning-sign education for family'],
    monitoring: ['Visit notes', 'Supervisor review for complex care', 'Escalation for abnormal vitals'],
    safety: ['Credential and license verification', 'Sterile practice standards', 'Clinical task boundaries approved before dispatch'],
    outcomes: ['Safer recovery supervision', 'Reduced revisit friction', 'Clearer clinical updates'],
  },
  {
    slug: 'patient-care-attendants',
    title: 'Patient Care Services',
    shortTitle: 'Patient Care',
    description:
      'Patient attendants for bathing assistance, feeding support, bed care, toileting, mobility help, repositioning, and day-to-day supervision.',
    icon: UsersRound,
    availability: '12-hour, 24-hour, weekly, monthly',
    bestFor: ['Bedridden patients', 'Stroke recovery', 'High-dependency family care'],
    problem: 'Families need trained non-clinical attendants who can support daily needs safely and respectfully.',
    journey: ['Share dependency level', 'Coordinator confirms attendant scope', 'Trained attendant is assigned', 'Shift updates and replacement support remain active'],
    workflow: ['Dependency assessment', 'Attendant match', 'Routine setup', 'Shift reporting'],
    team: ['Patient care attendant', 'Care coordinator', 'Nurse supervisor for high-dependency cases'],
    carePlan: ['Hygiene, feeding, movement, toileting, and rest routine', 'Bed sore prevention reminders', 'Family-approved task boundaries'],
    monitoring: ['Shift handover notes', 'Coordinator follow-up', 'Family comfort review'],
    safety: sharedSafety,
    outcomes: ['More comfortable home care', 'Less family caregiver strain', 'Clearer daily supervision'],
  },
  {
    slug: 'post-hospitalization-recovery',
    title: 'Post-Hospitalization Recovery Support',
    shortTitle: 'Recovery Care',
    description:
      'Structured support after surgery, illness, or hospitalization with attendants, nurses, therapy coordination, recovery routines, and family reporting.',
    icon: Activity,
    availability: 'Daily, weekly, monthly recovery plans',
    bestFor: ['Surgery recovery', 'Discharge planning', 'Short-term intensive support'],
    problem: 'The first days after discharge are stressful when families are unsure how to manage routines, warning signs, and follow-up care.',
    journey: ['Share discharge summary', 'Coordinator reviews recovery risks', 'Care mix is assigned', 'Progress is monitored until step-down'],
    workflow: ['Discharge review', 'Recovery plan setup', 'Nurse or attendant assignment', 'Progress monitoring'],
    team: ['Recovery coordinator', 'Nurse', 'Patient attendant', 'Physiotherapist when needed'],
    carePlan: ['Medication reminders and wound-care schedule', 'Red-flag checklist', 'Step-down plan from intensive to lighter support'],
    monitoring: ['Daily recovery logs', 'Vitals and symptom escalation', 'Family progress summaries'],
    safety: ['Aligned to doctor discharge instructions', 'Role-specific task boundaries', 'Emergency escalation path'],
    outcomes: ['Smoother hospital-to-home transition', 'Better discharge adherence', 'Reduced recovery confusion'],
  },
  {
    slug: 'physiotherapy-at-home',
    title: 'Physiotherapy at Home',
    shortTitle: 'Physiotherapy',
    description:
      'Home physiotherapy for mobility, pain management, balance training, post-operative rehabilitation, stroke recovery, and elderly strengthening.',
    icon: HeartPulse,
    availability: 'Single visits, weekly plans, monthly rehab programs',
    bestFor: ['Mobility recovery', 'Pain management', 'Rehab after surgery or stroke'],
    problem: 'Patients miss therapy when travel is painful, difficult, or unsafe during recovery.',
    journey: ['Share condition and therapy goals', 'Therapist assesses baseline', 'Home-safe rehab plan begins', 'Progress milestones are reviewed'],
    workflow: ['Initial assessment', 'Exercise plan', 'Home sessions', 'Progress adjustment'],
    team: ['Physiotherapist', 'Care coordinator', 'Family exercise supporter'],
    carePlan: ['Baseline mobility and pain assessment', 'Goal-led exercise frequency', 'Progression based on tolerance'],
    monitoring: ['Session notes', 'Home exercise adherence', 'Pain and mobility reports'],
    safety: ['Qualified therapist assignment', 'Fall-risk screening', 'Doctor referral alignment where required'],
    outcomes: ['Improved mobility', 'Better therapy adherence', 'Reduced travel burden'],
  },
  {
    slug: 'mother-newborn-care',
    title: 'Mother and Newborn Care',
    shortTitle: 'Mother & Baby',
    description:
      'Trained baby care specialists and postnatal support staff for newborn routines, mother recovery assistance, feeding support, hygiene, and night care.',
    icon: Baby,
    availability: 'Hourly, night support, weekly, monthly',
    bestFor: ['New parents', 'Postnatal recovery', 'Night-care support'],
    problem: 'New parents need gentle, trained support during a physically and emotionally demanding postnatal period.',
    journey: ['Share newborn age and delivery context', 'Coordinator confirms baby-care needs', 'Specialist is assigned', 'Routine notes support family confidence'],
    workflow: ['Mother and baby needs assessment', 'Specialist matching', 'Routine setup', 'Family updates'],
    team: ['Baby care specialist', 'Care coordinator', 'Nurse supervisor for postnatal questions'],
    carePlan: ['Feeding, burping, sleep, hygiene, and night-care routine', 'Mother recovery assistance', 'Safe handling preferences'],
    monitoring: ['Feeding and sleep logs', 'Family feedback', 'Coordinator support for schedule changes'],
    safety: ['Background-checked specialist', 'Hygiene and safe-handling training', 'Escalation for medical concerns'],
    outcomes: ['Supported postnatal recovery', 'Safer newborn routines', 'Reduced parent fatigue'],
  },
  {
    slug: 'companion-caretaker-services',
    title: 'Companion and Caretaker Services',
    shortTitle: 'Companion Care',
    description:
      'Companion caregivers for emotional support, supervision, daily reminders, light assistance, appointments, conversation, and routine companionship.',
    icon: Sparkles,
    availability: 'Hourly, daily, weekly, monthly',
    bestFor: ['Seniors needing companionship', 'Mild supervision', 'Family respite'],
    problem: 'Families often need dependable companionship even when intensive clinical care is not required.',
    journey: ['Share routine and preferences', 'Coordinator matches caregiver fit', 'Companion supports daily routines', 'Care can expand if needs change'],
    workflow: ['Preference intake', 'Caregiver matching', 'Companionship support', 'Feedback-led continuity'],
    team: ['Companion caregiver', 'Care coordinator', 'Family contact person'],
    carePlan: ['Conversation, reminders, walks, and appointment support', 'Comfort preferences', 'Escalation triggers for changed health'],
    monitoring: ['Daily updates', 'Mood and routine observations', 'Care fit review'],
    safety: sharedSafety,
    outcomes: ['Reduced loneliness', 'More consistent routines', 'Early visibility into changing needs'],
  },
  {
    slug: 'live-in-home-healthcare-staff',
    title: 'Live-in Home Healthcare Staff',
    shortTitle: 'Live-in Care',
    description:
      'Dedicated home healthcare staff for continuous family support, long-duration assignments, supervised routines, shift handovers, and replacement continuity.',
    icon: Home,
    availability: 'Weekly, monthly, live-in care',
    bestFor: ['Long-term care', 'High-dependency patients', 'Continuity-focused families'],
    problem: 'Long-duration care is hard to manage when families cannot coordinate shifts, replacements, and daily supervision reliably.',
    journey: ['Share dependency and home setup', 'Coordinator creates live-in plan', 'Verified staff is introduced', 'Continuity reviews keep care stable'],
    workflow: ['Long-term assessment', 'Staff shortlist', 'Family onboarding', 'Weekly reviews and replacement planning'],
    team: ['Live-in caregiver', 'Care coordinator', 'Backup staffing desk', 'Nurse supervisor when needed'],
    carePlan: ['Continuous routine map', 'Staff rest and handover rules', 'Escalation path for health or staffing concerns'],
    monitoring: ['Daily summaries', 'Weekly coordinator reviews', 'Replacement tracking'],
    safety: ['Verified identity and background screening', 'Family-approved privacy rules', 'Backup support for absence or mismatch'],
    outcomes: ['Stable long-term coverage', 'Reduced staffing anxiety', 'Better continuity for high-dependency families'],
  },
]

export const processSteps = [
  { title: 'Share care requirement', description: 'Tell us condition, service type, city, timing, duration, and urgency.', icon: PhoneCall },
  { title: 'Care assessment', description: 'A coordinator reviews risk level, expectations, home setup, and staff skills.', icon: ClipboardList },
  { title: 'Verified match', description: 'Professionals are matched by qualification, background, experience, language, and availability.', icon: UserCheck },
  { title: 'Assignment and monitoring', description: 'The caregiver starts with a care plan, reporting rhythm, and replacement coverage.', icon: CheckCircle2 },
]

export const verificationChecks = [
  { title: 'Identity verification', description: 'Government ID, address details, and profile records are checked.', icon: BadgeCheck },
  { title: 'Background screening', description: 'Prior employment, references, police-verification status, and conduct notes are reviewed.', icon: ShieldCheck },
  { title: 'Skill validation', description: 'Role-specific nursing, attendant, therapy, and baby-care capabilities are assessed.', icon: FileCheck2 },
  { title: 'Ongoing audits', description: 'Family feedback, attendance, incidents, and coordinator reviews shape continued eligibility.', icon: ClipboardCheck },
]

export const availabilityModels = [
  { title: 'Hourly care', description: 'Short visits for nursing tasks, therapy, injections, dressing, or companion support.' },
  { title: 'Daily shifts', description: 'Day or night assignments for attendants, elder care, baby care, and patient support.' },
  { title: 'Weekly plans', description: 'Recurring support for recovery, therapy, elder care, and family respite.' },
  { title: 'Monthly care', description: 'Longer assignments with continuity reviews, reporting rhythm, and replacement support.' },
  { title: 'Live-in care', description: 'Dedicated staff for families needing continuous supervised care at home.' },
]

export const packages = [
  { title: 'Essential Visit', cadence: '2-4 hours', bestFor: 'Clinical tasks and short support windows', includes: ['Nursing task or companion support', 'Care note after visit', 'Coordinator assistance'] },
  { title: 'Daily Care Shift', cadence: '8-12 hours', bestFor: 'Attendant, elder care, baby care, or night support', includes: ['Verified caregiver assignment', 'Shift checklist', 'Replacement support'] },
  { title: 'Recovery Plan', cadence: '7-30 days', bestFor: 'Post-surgery and post-hospital care', includes: ['Care plan setup', 'Nurse or attendant mix', 'Progress reporting'] },
  { title: 'Live-in Continuity', cadence: 'Monthly', bestFor: 'Long-term family care requirements', includes: ['Dedicated staff', 'Weekly review', 'Backup staffing desk'] },
]

export const caregivers = [
  { name: 'Anita R', role: 'Senior Elder Care Assistant', experience: '8 yrs', badge: 'Background checked', availability: 'Today, 6 PM', skills: ['Mobility support', 'Medication reminders', 'Companionship'] },
  { name: 'Naveen K', role: 'Home Care Nurse', experience: '6 yrs', badge: 'Credential verified', availability: 'Tomorrow, 9 AM', skills: ['Wound dressing', 'Vitals', 'Post-discharge care'] },
  { name: 'Meera S', role: 'Baby Care Specialist', experience: '5 yrs', badge: 'Reference verified', availability: 'Night shift', skills: ['Newborn routine', 'Mother support', 'Hygiene care'] },
]

export const supportPolicies = [
  { title: 'Emergency support', description: 'A coordination desk stays available for urgent schedule changes, escalation, or family concerns.', icon: PhoneCall },
  { title: 'Replacement policy', description: 'If a caregiver is unavailable or not the right fit, a verified replacement can be initiated.', icon: RefreshCw },
  { title: 'Privacy assurance', description: 'Medical context, family details, and home access notes are handled with restricted visibility.', icon: LockKeyhole },
  { title: 'Coverage planning', description: 'Availability is matched by city, neighborhood, urgency, shift duration, and qualification.', icon: MapPinned },
]

export const coverageAreas = ['Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi NCR']

export const careFaqs: FaqItem[] = [
  { question: 'How quickly can a caregiver be assigned?', answer: 'Assignment depends on city, timing, qualification, and urgency. A coordinator first confirms the requirement and shortlists available verified professionals.' },
  { question: 'Are caregivers and nurses verified?', answer: 'Yes. Profiles include identity checks, background screening, reference review, skill validation, and ongoing family feedback tracking.' },
  { question: 'Can we replace the assigned caregiver?', answer: 'Yes. If fit, availability, or performance is not right, the coordinator can initiate a replacement from the verified pool.' },
  { question: 'Do you provide medical treatment at home?', answer: 'Clinical tasks require qualified nursing professionals and doctor instructions where needed. Non-clinical caregivers work within an approved family care scope.' },
  { question: 'Can I book hourly, daily, weekly, monthly, or live-in care?', answer: 'Yes. The service supports hourly visits, day or night shifts, weekly plans, monthly care, and live-in support.' },
]

const serviceLinks = careServices.map((service) => ({ label: service.title, to: `/services/${service.slug}` }))

const cityPages: CareSeoPage[] = coverageAreas.map((city) => ({
  path: `/coverage/${city.toLowerCase().replace(/\s+/g, '-')}`,
  category: 'Coverage',
  eyebrow: 'Coverage area',
  title: `Home care services in ${city}`,
  description: `Book verified caregivers, nurses, attendants, physiotherapists, baby care specialists, and live-in home healthcare staff in ${city}.`,
  highlights: ['Verified local professionals', 'Coordinator-led availability check', 'Hourly to live-in care models', 'Replacement support'],
  sections: [
    {
      title: `Care available across ${city}`,
      description: `CareBridge coordinates family care requests across priority neighborhoods in ${city}, matching availability by location, urgency, shift length, and qualification.`,
      items: ['Elder care and companion support', 'Home nursing and patient attendants', 'Post-hospital recovery and physiotherapy', 'Mother, newborn, and live-in care'],
    },
    {
      title: 'How city matching works',
      description: 'A coordinator confirms the address, preferred timing, safety needs, and caregiver profile before shortlisting professionals.',
      items: ['Neighborhood availability review', 'Travel-time and shift feasibility', 'Skill and background match', 'Family confirmation before assignment'],
    },
  ],
  relatedLinks: serviceLinks.slice(0, 4),
}))

export const carePlanPages: CareSeoPage[] = [
  {
    path: '/care-plans/hourly-care',
    category: 'Care Plans',
    eyebrow: 'Hourly care',
    title: 'Hourly home care for short, focused support',
    description: 'Book hourly caregivers, nurses, companions, or therapists for short visits, procedure support, dressing, injections, mobility help, or family respite.',
    highlights: ['2-4 hour visits', 'Fast requirement review', 'Ideal for focused tasks', 'Visit notes after care'],
    sections: [
      { title: 'Best use cases', description: 'Hourly care works when families need targeted support without committing to a full shift.', items: ['Physiotherapy sessions', 'Nursing tasks', 'Companion visits', 'Short hygiene or mobility support'] },
      { title: 'Booking workflow', description: 'The coordinator confirms task scope, timing, location, and required qualification before assigning a verified professional.', items: ['Task validation', 'Professional shortlist', 'Visit checklist', 'Post-visit update'] },
    ],
    relatedLinks: serviceLinks.slice(1, 5),
  },
  {
    path: '/care-plans/daily-shifts',
    category: 'Care Plans',
    eyebrow: 'Daily shifts',
    title: 'Daily caregiver shifts for day or night home support',
    description: 'Book 8-hour, 12-hour, day, or night care shifts for elder care, patient attendants, baby care, companion support, and recovery routines.',
    highlights: ['Day and night shifts', 'Shift handover notes', 'Verified attendants', 'Replacement planning'],
    sections: [
      { title: 'Who daily shifts help', description: 'Daily shifts suit families that need dependable support during work hours, overnight, or recovery periods.', items: ['Patient supervision', 'Elderly assistance', 'Newborn night support', 'Post-surgery routines'] },
      { title: 'Shift operations', description: 'Each shift is matched to tasks, schedule, family contact, and reporting expectations.', items: ['Care checklist', 'Arrival confirmation', 'Family updates', 'Coordinator review'] },
    ],
    relatedLinks: serviceLinks.slice(0, 4),
  },
  {
    path: '/care-plans/weekly-plans',
    category: 'Care Plans',
    eyebrow: 'Weekly plans',
    title: 'Weekly home care plans for recurring family needs',
    description: 'Plan recurring weekly caregiver, nurse, physiotherapy, elder care, baby care, or recovery support with clear continuity and coordinator reviews.',
    highlights: ['Recurring schedule', 'Continuity review', 'Family feedback loop', 'Flexible step-up care'],
    sections: [
      { title: 'Designed for continuity', description: 'Weekly plans reduce repeated booking work and support stable routines.', items: ['Elder care routines', 'Therapy programs', 'Recovery monitoring', 'Family respite support'] },
      { title: 'Weekly care review', description: 'The coordinator can review fit, punctuality, family feedback, and changes in care needs.', items: ['Schedule adjustments', 'Care-plan updates', 'Performance feedback', 'Replacement if needed'] },
    ],
    relatedLinks: serviceLinks,
  },
  {
    path: '/care-plans/monthly-care',
    category: 'Care Plans',
    eyebrow: 'Monthly care',
    title: 'Monthly home care for long-term family support',
    description: 'Book monthly caregiver, attendant, nursing, companion, or live-in style support with continuity planning and replacement coverage.',
    highlights: ['Long-term continuity', 'Monthly coordinator review', 'Backup support', 'Family reporting rhythm'],
    sections: [
      { title: 'When monthly care fits', description: 'Monthly care is best for families managing stable but ongoing support requirements.', items: ['Senior care', 'Bedridden patient support', 'Chronic-care assistance', 'Long recovery periods'] },
      { title: 'Care governance', description: 'Monthly plans include clearer reporting, escalation, replacement, and routine management.', items: ['Care-plan review', 'Attendance visibility', 'Family feedback', 'Staff continuity planning'] },
    ],
    relatedLinks: serviceLinks.slice(0, 4),
  },
  {
    path: '/care-plans/live-in-care',
    category: 'Care Plans',
    eyebrow: 'Live-in care',
    title: 'Live-in home care for continuous supervised support',
    description: 'Arrange live-in home healthcare staff for high-dependency patients, elderly family members, long-term care, and continuous household support.',
    highlights: ['Continuous care presence', 'Staff rest and handover rules', 'Backup staffing desk', 'High-dependency support'],
    sections: [
      { title: 'Continuous family care', description: 'Live-in care helps when families need a stable caregiver presence and clear replacement coverage.', items: ['High-dependency patient care', 'Elderly supervision', 'Long-term recovery', 'Family peace of mind'] },
      { title: 'Assignment planning', description: 'The coordinator reviews home setup, privacy rules, task scope, rest periods, and escalation requirements.', items: ['Home access notes', 'Caregiver profile review', 'Replacement backup', 'Weekly continuity check'] },
    ],
    relatedLinks: [{ label: 'Live-in Home Healthcare Staff', to: '/services/live-in-home-healthcare-staff' }, ...serviceLinks.slice(0, 3)],
  },
]

export const familyPages: CareSeoPage[] = [
  {
    path: '/families/testimonials',
    category: 'Families',
    eyebrow: 'Testimonials',
    title: 'Family testimonials for CareBridge home care',
    description: 'Read family experiences about verified caregivers, home nursing, elder care, baby care, replacement support, and recovery care.',
    highlights: ['4.9/5 satisfaction', 'Family-first updates', 'Verified assignments', 'Coordinator support'],
    sections: [
      { title: 'What families value', description: 'Families choose CareBridge for trust, communication, punctuality, and care continuity.', items: ['Daily updates', 'Respectful caregivers', 'Clear scope of work', 'Replacement assurance'] },
      { title: 'Common outcomes', description: 'Testimonials focus on lower family stress and safer routines at home.', items: ['Smoother recovery', 'Better elder support', 'Safer newborn routines', 'Reliable shift coverage'] },
    ],
    relatedLinks: [{ label: 'Success Stories', to: '/families/success-stories' }, { label: 'Request Caregiver', to: '/families/request-caregiver' }],
  },
  {
    path: '/families/success-stories',
    category: 'Families',
    eyebrow: 'Success stories',
    title: 'Home care success stories from families',
    description: 'Explore realistic home care journeys across elder care, post-hospital recovery, baby care, physiotherapy, and live-in caregiver assignments.',
    highlights: ['Care-plan journeys', 'Before and after outcomes', 'Family visibility', 'Safety-first matching'],
    sections: [
      { title: 'Story format', description: 'Each story explains the family challenge, care model, assigned team, monitoring rhythm, and outcome.', items: ['Problem being solved', 'Care team assigned', 'Safety measures', 'Expected outcome'] },
      { title: 'Service scenarios', description: 'Stories reflect high-intent care needs families commonly search for.', items: ['Post-surgery recovery', 'Elder fall-risk support', 'Newborn night care', 'Long-term live-in support'] },
    ],
    relatedLinks: serviceLinks.slice(0, 5),
  },
  {
    path: '/families/faq',
    category: 'Families',
    eyebrow: 'FAQ',
    title: 'Home care FAQ for families',
    description: 'Answers about caregiver verification, replacement policy, pricing models, nursing scope, emergency support, privacy, and scheduling.',
    highlights: ['Verification answers', 'Replacement process', 'Clinical scope clarity', 'Booking models'],
    sections: [
      { title: 'Questions before booking', description: 'Families can understand what happens before a caregiver is assigned.', items: careFaqs.slice(0, 3).map((faq) => faq.question) },
      { title: 'Questions after assignment', description: 'CareBridge supports schedule updates, replacement needs, monitoring, and escalation.', items: ['How are updates shared?', 'What if a caregiver is absent?', 'Can care needs change?', 'Who handles urgent concerns?'] },
    ],
    relatedLinks: [{ label: 'Verification Process', to: '/trust-safety/verification-process' }, { label: 'Replacement Policy', to: '/trust-safety/replacement-policy' }],
  },
  {
    path: '/families/request-caregiver',
    category: 'Families',
    eyebrow: 'Request caregiver',
    title: 'Request a verified caregiver consultation',
    description: 'Share your family care requirement and get help matching the right caregiver, nurse, attendant, therapist, baby care specialist, or live-in staff.',
    highlights: ['Care coordinator review', 'Skill-based matching', 'Flexible schedules', 'Family-approved assignment'],
    sections: [
      { title: 'What to share', description: 'The more context you provide, the better the care match.', items: ['Patient age and condition', 'City and timing', 'Care duration', 'Mobility or safety concerns'] },
      { title: 'What happens next', description: 'A coordinator reviews your request and helps shortlist verified professionals.', items: ['Requirement confirmation', 'Care model suggestion', 'Professional profile review', 'Assignment planning'] },
    ],
    relatedLinks: serviceLinks.slice(0, 4),
  },
]

export const trustSafetyPages: CareSeoPage[] = [
  {
    path: '/trust-safety/verification-process',
    category: 'Trust & Safety',
    eyebrow: 'Verification process',
    title: 'Caregiver verification process for safer home care',
    description: 'Learn how CareBridge checks identity, references, background details, skills, and ongoing family feedback before caregiver assignment.',
    highlights: ['Identity checks', 'Reference review', 'Skill validation', 'Ongoing audits'],
    sections: [
      { title: 'Before assignment', description: 'Profiles are reviewed before being offered for family care.', items: ['ID and address check', 'Experience review', 'Role capability mapping', 'Reference notes'] },
      { title: 'After assignment', description: 'Family feedback and incident records shape continued eligibility.', items: ['Attendance tracking', 'Feedback monitoring', 'Coordinator review', 'Replacement readiness'] },
    ],
    relatedLinks: [{ label: 'Background Checks', to: '/trust-safety/background-checks' }, { label: 'Training Standards', to: '/trust-safety/training-standards' }],
  },
  {
    path: '/trust-safety/background-checks',
    category: 'Trust & Safety',
    eyebrow: 'Background checks',
    title: 'Background checks for home healthcare professionals',
    description: 'Understand the reference, identity, employment, conduct, and family-feedback checks used for caregiver and nursing assignments.',
    highlights: ['Reference checks', 'Employment review', 'Conduct notes', 'Family feedback'],
    sections: [
      { title: 'Background review areas', description: 'CareBridge keeps the review practical and family-safety oriented.', items: ['Identity and address', 'Prior work references', 'Police-verification status where available', 'Assignment conduct history'] },
      { title: 'Why it matters', description: 'Home care requires trust because professionals enter private family spaces.', items: ['Safer assignments', 'Better accountability', 'Traceable coordinator review', 'Replacement decisions'] },
    ],
    relatedLinks: [{ label: 'Privacy Assurance', to: '/trust-safety/privacy-assurance' }, { label: 'Replacement Policy', to: '/trust-safety/replacement-policy' }],
  },
  {
    path: '/trust-safety/training-standards',
    category: 'Trust & Safety',
    eyebrow: 'Training standards',
    title: 'Training standards for caregivers, attendants, and home nurses',
    description: 'Review training expectations for hygiene, patient handling, elder care, baby care, therapy support, privacy, and family communication.',
    highlights: ['Hygiene basics', 'Patient handling', 'Role-specific training', 'Communication standards'],
    sections: [
      { title: 'Core training', description: 'Every role is expected to understand basic safe-care behavior.', items: ['Hygiene and infection control', 'Respectful communication', 'Safe mobility assistance', 'Privacy awareness'] },
      { title: 'Role-specific training', description: 'Different home care roles need different competencies.', items: ['Nursing scope', 'Baby care routines', 'Elder fall prevention', 'Live-in handover rules'] },
    ],
    relatedLinks: serviceLinks.slice(0, 6),
  },
  {
    path: '/trust-safety/privacy-assurance',
    category: 'Trust & Safety',
    eyebrow: 'Privacy assurance',
    title: 'Privacy assurance for family and patient home care',
    description: 'CareBridge limits access to patient, family, medical, and home-entry details to assigned care teams and coordinators.',
    highlights: ['Restricted visibility', 'Home access notes', 'Medical context controls', 'Family consent'],
    sections: [
      { title: 'Information protected', description: 'Home care requires careful handling of personal and medical context.', items: ['Family contact details', 'Patient condition notes', 'Address and access instructions', 'Care-plan updates'] },
      { title: 'Operational privacy', description: 'Care details are shared only where needed for assignment and monitoring.', items: ['Coordinator-led access', 'Assigned professional briefing', 'Care-scope boundaries', 'Escalation documentation'] },
    ],
    relatedLinks: [{ label: 'Verification Process', to: '/trust-safety/verification-process' }, { label: 'Emergency Support', to: '/trust-safety/emergency-support' }],
  },
  {
    path: '/trust-safety/emergency-support',
    category: 'Trust & Safety',
    eyebrow: 'Emergency support',
    title: 'Emergency support and escalation for home care',
    description: 'CareBridge provides a coordination process for urgent concerns, schedule changes, caregiver absence, patient deterioration, and family escalation.',
    highlights: ['Coordinator desk', 'Urgent schedule changes', 'Clinical escalation', 'Family alerts'],
    sections: [
      { title: 'When to escalate', description: 'Families and caregivers can escalate urgent care or staffing concerns.', items: ['Abnormal vitals', 'Caregiver absence', 'Patient deterioration', 'Safety concern at home'] },
      { title: 'How support works', description: 'The coordinator helps route the concern to the right next action.', items: ['Confirm severity', 'Notify family contact', 'Review replacement options', 'Document incident'] },
    ],
    relatedLinks: [{ label: 'Replacement Policy', to: '/trust-safety/replacement-policy' }, { label: 'Nursing Services at Home', to: '/services/nursing-services-at-home' }],
  },
  {
    path: '/trust-safety/replacement-policy',
    category: 'Trust & Safety',
    eyebrow: 'Replacement policy',
    title: 'Caregiver replacement policy for home care continuity',
    description: 'Learn how CareBridge handles absence, mismatch, schedule changes, performance concerns, and backup staffing for home care assignments.',
    highlights: ['Backup staff pool', 'Fit review', 'Absence support', 'Continuity planning'],
    sections: [
      { title: 'When replacement is needed', description: 'Replacement may be needed for fit, absence, health, timing, or performance reasons.', items: ['Caregiver absence', 'Family comfort issue', 'Schedule mismatch', 'Care need changed'] },
      { title: 'Replacement process', description: 'The coordinator reviews urgency and shortlists another verified professional.', items: ['Issue confirmation', 'Profile shortlist', 'Family approval', 'Shift handover'] },
    ],
    relatedLinks: [{ label: 'Daily Shifts', to: '/care-plans/daily-shifts' }, { label: 'Live-in Care', to: '/care-plans/live-in-care' }],
  },
]

export const seoPages: CareSeoPage[] = [
  {
    path: '/services',
    category: 'Services',
    eyebrow: 'All services',
    title: 'All home care services for families',
    description: 'Explore verified elder care, home nursing, patient attendants, post-hospital recovery, physiotherapy, newborn care, companion care, and live-in staff.',
    highlights: ['8 care categories', 'Verified professionals', 'Flexible care plans', 'Family-ready monitoring'],
    sections: [
      { title: 'What you can book', description: 'CareBridge helps families arrange professional support for home-based healthcare and daily assistance.', items: careServices.map((service) => service.title) },
      { title: 'How services are matched', description: 'Each request is matched by city, timing, urgency, role, qualification, and safety requirements.', items: ['Care assessment', 'Profile shortlist', 'Family approval', 'Care-plan monitoring'] },
    ],
    relatedLinks: serviceLinks,
  },
  ...cityPages,
  ...familyPages,
  ...carePlanPages,
  ...trustSafetyPages,
]

export const routeMeta: RouteMeta[] = [
  {
    path: '/',
    title: 'Healthcare & Home Care Services',
    description: 'Book verified caregivers, nurses, attendants, physiotherapists, elder care assistants, baby care specialists, and home healthcare staff.',
    pageType: 'home',
    category: 'Home Care Services',
  },
  ...seoPages.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    pageType: 'feature' as const,
    category: page.category,
  })),
  ...careServices.map((service) => ({
    path: `/services/${service.slug}`,
    title: service.title,
    description: service.description,
    pageType: 'feature' as const,
    category: 'Home Care Services',
  })),
]
