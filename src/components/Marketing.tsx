import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  FileText,
  HeartPulse,
  LockKeyhole,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Star,
  User,
} from 'lucide-react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { customerLogos, leadForm, site, templateCopy, testimonials, visual } from '../data/site'
import type {
  Cta,
  FaqItem,
  FeatureCard,
  LeadFormPayload,
  MarketingPageContent,
  Stat,
  VisualVariant,
} from '../data/types'
import { LEAD_ERROR_MESSAGE, LEAD_SUCCESS_MESSAGE, submitLead } from '../lib/leadApi'
import { AnimatedAccordion, MotionCard, Reveal } from './Motion'

const MotionRouterLink = motion.create(Link)

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

export function CtaLink({ cta, variant = 'primary' }: { cta: Cta; variant?: 'primary' | 'ghost' | 'white' }) {
  const className = `btn btn--${variant}`
  if (cta.external || cta.to.startsWith('http') || cta.to.startsWith('mailto:')) {
    return (
      <motion.a
        className={className}
        href={cta.to}
        target={cta.to.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {cta.label}
        <ArrowRight size={16} aria-hidden="true" />
      </motion.a>
    )
  }

  if (cta.to.startsWith('#')) {
    return (
      <motion.a className={className} href={cta.to} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
        {cta.label}
        <ArrowRight size={16} aria-hidden="true" />
      </motion.a>
    )
  }

  return (
    <MotionRouterLink className={className} to={cta.to} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      {cta.label}
      <ArrowRight size={16} aria-hidden="true" />
    </MotionRouterLink>
  )
}

function VisualIcon({ variant }: { variant: VisualVariant }) {
  const icons = {
    hospital: HeartPulse,
    lab: ClipboardCheck,
    pharmacy: BadgeCheck,
    clinic: CalendarClock,
    integration: Network,
    security: ShieldCheck,
    growth: Star,
    people: User,
  }
  const Icon = icons[variant]
  return <Icon size={20} aria-hidden="true" />
}

export function ProductVisual({ variant }: { variant: VisualVariant }) {
  const rows = visual.flowRows[variant]

  return (
    <motion.div
      className={`product-visual product-visual--${variant}`}
      aria-label="Healthcare software dashboard illustration"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="visual-window">
        <div className="visual-window__bar">
          <span />
          <span />
          <span />
          <strong>{visual.productName}</strong>
        </div>
        <div className="visual-dashboard">
          <aside>
            <div className="visual-logo">
              <VisualIcon variant={variant} />
            </div>
            {visual.sidebar.map((item, index) => (
              <span key={item} className={index === visual.activeSidebarIndex ? 'is-active' : ''}>
                {item}
              </span>
            ))}
          </aside>
          <section>
            <div className="visual-kpis">
              {visual.kpis.map((kpi) => (
                <div key={`${kpi.value}-${kpi.label}`}>
                  <strong>{kpi.value}</strong>
                  <span>{kpi.label}</span>
                </div>
              ))}
            </div>
            <div className="visual-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="visual-flow">
              {rows.map((row) => (
                <div key={row}>
                  <Check size={14} aria-hidden="true" />
                  <span>{row}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="visual-card visual-card--top">
        <CalendarClock size={18} />
        <span>{visual.topCard.label}</span>
        <strong>{visual.topCard.value}</strong>
      </div>
      <div className="visual-card visual-card--bottom">
        <ShieldCheck size={18} />
        <span>{visual.bottomCard.label}</span>
        <strong>{visual.bottomCard.value}</strong>
      </div>
    </motion.div>
  )
}

export function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="stats-strip">
      {stats.map((stat) => (
        <MotionCard as="div" key={`${stat.value}-${stat.label}`}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </MotionCard>
      ))}
    </div>
  )
}

export function FeatureGrid({ features }: { features: FeatureCard[] }) {
  return (
    <div className="feature-grid">
      {features.map((feature) => {
        const Icon = feature.icon ?? BadgeCheck
        return (
          <MotionCard className="feature-card" key={feature.title}>
            <span className="icon-tile" aria-hidden="true">
              <Icon size={22} />
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </MotionCard>
        )
      })}
    </div>
  )
}

export function LogoCloud() {
  return (
    <section className="logo-cloud section-band">
      <div className="container">
        <p>{templateCopy.logoCloud}</p>
        <div className="logo-grid" aria-label="Example customer logos">
          {customerLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkflowSection({
  title,
  intro,
  features,
}: {
  title: string
  intro: string
  features: FeatureCard[]
}) {
  return (
    <section className="workflow-section">
      <div className="container workflow-grid">
        <SectionIntro eyebrow={templateCopy.workflowEyebrow} title={title} description={intro} align="left" />
        <div className="workflow-list">
          {features.map((feature, index) => {
            const Icon = feature.icon ?? BadgeCheck
            return (
              <MotionCard as="div" key={feature.title} className="workflow-item">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon size={22} aria-hidden="true" />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </MotionCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function TestimonialCarousel() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="carousel-head">
          <SectionIntro
            eyebrow={templateCopy.testimonialsEyebrow}
            title={templateCopy.testimonialsTitle}
            description={templateCopy.testimonialsDescription}
            align="left"
          />
          <div className="carousel-controls">
            <button className="swiper-prev icon-btn" type="button" aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </button>
            <button className="swiper-next icon-btn" type="button" aria-label="Next testimonial">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          spaceBetween={18}
          slidesPerView={1}
          breakpoints={{
            760: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <MotionCard className="testimonial-card">
                <div className="rating">
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                  <span>{testimonial.rating}</span>
                </div>
                <p>“{testimonial.quote}”</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                  <small>{testimonial.location}</small>
                </div>
              </MotionCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section">
      <div className="container faq-grid">
        <SectionIntro
          eyebrow={templateCopy.faqEyebrow}
          title={templateCopy.faqTitle}
          description={templateCopy.faqDescription}
          align="left"
        />
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <article className="faq-item" key={faq.question}>
                <button type="button" onClick={() => setOpenIndex(open ? -1 : index)} aria-expanded={open}>
                  <span>{faq.question}</span>
                  <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={18} aria-hidden="true" />
                  </motion.span>
                </button>
                <AnimatedAccordion open={open}>
                  <p>{faq.answer}</p>
                </AnimatedAccordion>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function validateLead(payload: LeadFormPayload) {
  const errors: Partial<Record<keyof LeadFormPayload, string>> = {}
  if (!payload.name.trim()) errors.name = leadForm.fields.name.requiredMessage
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = leadForm.validation.email
  if (!/^[0-9+\-\s()]{7,}$/.test(payload.phone)) errors.phone = leadForm.validation.phone
  if (!payload.organization.trim()) errors.organization = leadForm.fields.organization.requiredMessage
  if (!payload.interest) errors.interest = leadForm.validation.interest
  return errors
}

const initialLead: LeadFormPayload = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  interest: '',
  message: '',
}

function projectKey() {
  return site.brand.shortName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [payload, setPayload] = useState(initialLead)
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormPayload, string>>>({})
  const [submittedAt, setSubmittedAt] = useState<number | null>(null)
  const [cooldownRemaining, setCooldownRemaining] = useState(0)
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [submissionMessage, setSubmissionMessage] = useState('')

  useEffect(() => {
    if (cooldownRemaining <= 0) return undefined
    const timer = window.setInterval(() => {
      setCooldownRemaining((value) => Math.max(0, value - 1))
    }, 60_000)
    return () => window.clearInterval(timer)
  }, [cooldownRemaining])

  function update(field: keyof LeadFormPayload, value: string) {
    setPayload((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (submissionStatus !== 'loading') {
      setSubmissionStatus('idle')
      setSubmissionMessage('')
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (cooldownRemaining > 0) return
    const nextErrors = validateLead(payload)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmissionStatus('loading')
    setSubmissionMessage('')

    try {
      await submitLead({
        niche: 'marketing',
        project: site.brand.name,
        projectKey: projectKey(),
        formId: leadForm.id,
        pagePath: window.location.pathname,
        pageUrl: window.location.href,
        referrer: document.referrer,
        name: payload.name.trim(),
        email: payload.email.trim(),
        phone: payload.phone.trim(),
        organization: payload.organization.trim(),
        interest: payload.interest.trim(),
        message: payload.message.trim(),
        fields: payload,
        metadata: {
          brand: site.brand.name,
          formTitle: leadForm.title,
        },
      })
      setSubmittedAt(Date.now())
      setCooldownRemaining(leadForm.cooldownMinutes)
      setSubmissionStatus('success')
      setSubmissionMessage(LEAD_SUCCESS_MESSAGE)
    } catch {
      setSubmissionStatus('error')
      setSubmissionMessage(LEAD_ERROR_MESSAGE)
    }
  }

  return (
    <form className={`lead-form ${compact ? 'lead-form--compact' : ''}`} id={leadForm.id} onSubmit={onSubmit} noValidate>
      <div className="form-head">
        <span className="icon-tile" aria-hidden="true">
          <Send size={20} />
        </span>
        <div>
          <h3>{submittedAt ? leadForm.successTitle : leadForm.title}</h3>
          <p>{submittedAt ? leadForm.successMessage : leadForm.intro}</p>
        </div>
      </div>

      {cooldownRemaining > 0 ? (
        <div className="form-notice" role="status">
          <CircleAlert size={18} aria-hidden="true" />
          {leadForm.cooldownMessage.replace('{minutes}', String(cooldownRemaining))}
        </div>
      ) : null}

      {submissionMessage ? (
        <div className={`form-notice form-notice--${submissionStatus}`} role="status" aria-live="polite">
          <CircleAlert size={18} aria-hidden="true" />
          {submissionMessage}
        </div>
      ) : null}

      <div className="form-grid">
        <label>
          <span>{leadForm.fields.name.label}</span>
          <div className="input-shell">
            <User size={16} />
            <input value={payload.name} onChange={(event) => update('name', event.target.value)} placeholder={leadForm.fields.name.placeholder} />
          </div>
          {errors.name ? <small>{errors.name}</small> : null}
        </label>
        <label>
          <span>{leadForm.fields.email.label}</span>
          <div className="input-shell">
            <Mail size={16} />
            <input value={payload.email} onChange={(event) => update('email', event.target.value)} placeholder={leadForm.fields.email.placeholder} />
          </div>
          {errors.email ? <small>{errors.email}</small> : null}
        </label>
        <label>
          <span>{leadForm.fields.phone.label}</span>
          <div className="input-shell">
            <Phone size={16} />
            <input value={payload.phone} onChange={(event) => update('phone', event.target.value)} placeholder={leadForm.fields.phone.placeholder} />
          </div>
          {errors.phone ? <small>{errors.phone}</small> : null}
        </label>
        <label>
          <span>{leadForm.fields.organization.label}</span>
          <div className="input-shell">
            <FileText size={16} />
            <input
              value={payload.organization}
              onChange={(event) => update('organization', event.target.value)}
              placeholder={leadForm.fields.organization.placeholder}
            />
          </div>
          {errors.organization ? <small>{errors.organization}</small> : null}
        </label>
        <label>
          <span>{leadForm.fields.interest.label}</span>
          <div className="input-shell">
            <LockKeyhole size={16} />
            <select value={payload.interest} onChange={(event) => update('interest', event.target.value)}>
              <option value="">{leadForm.interestPlaceholder}</option>
              {leadForm.interestOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          {errors.interest ? <small>{errors.interest}</small> : null}
        </label>
        <label className="form-grid__wide">
          <span>{leadForm.fields.message.label}</span>
          <textarea
            value={payload.message}
            onChange={(event) => update('message', event.target.value)}
            placeholder={leadForm.fields.message.placeholder}
            rows={compact ? 3 : 4}
          />
        </label>
      </div>
      <button className="btn btn--primary" type="submit" disabled={cooldownRemaining > 0 || submissionStatus === 'loading'}>
        {submissionStatus === 'loading' ? 'Saving...' : submittedAt ? leadForm.submittedLabel : leadForm.submitLabel}
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </form>
  )
}

export function CtaBand({
  title = templateCopy.ctaTitle,
  description = templateCopy.ctaDescription,
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <span className="eyebrow">{templateCopy.ctaEyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-band__actions">
          <CtaLink cta={site.ctas.demo} variant="white" />
          <CtaLink cta={site.ctas.contact} variant="ghost" />
        </div>
      </div>
    </section>
  )
}

export function PageHero({ page }: { page: MarketingPageContent }) {
  return (
    <section className="page-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          <div className="hero-actions">
            {page.primaryCta ? <CtaLink cta={page.primaryCta} /> : null}
            {page.secondaryCta ? <CtaLink cta={page.secondaryCta} variant="ghost" /> : null}
          </div>
        </div>
        <ProductVisual variant={page.visual} />
      </div>
      {page.heroStats ? (
        <div className="container">
          <StatsStrip stats={page.heroStats} />
        </div>
      ) : null}
    </section>
  )
}

export function MarketingPageBody({ page }: { page: MarketingPageContent }) {
  return (
    <>
      <PageHero page={page} />
      <LogoCloud />
      <section className="section">
        <div className="container">
          <Reveal>
          <SectionIntro
            eyebrow="Key features"
            title={`What ${page.eyebrow.toLowerCase()} helps teams do`}
            description="Reusable cards keep each page visually consistent while letting the data drive the details."
          />
          </Reveal>
          <FeatureGrid features={page.features} />
        </div>
      </section>
      <WorkflowSection title={page.operationsTitle} intro={page.operationsIntro} features={page.operations} />
      <section className="section section--soft">
        <div className="container">
          <SectionIntro eyebrow="Measured outcomes" title={page.outcomesTitle} />
          <StatsStrip stats={page.outcomes} />
        </div>
      </section>
      {page.path.includes('book-demo') || page.path === '/contact-us' ? (
        <section className="section">
          <div className="container form-layout">
            <div>
              <SectionIntro
                eyebrow={templateCopy.contactPanelEyebrow}
                title={templateCopy.contactPanelTitle}
                description={templateCopy.contactPanelDescription}
                align="left"
              />
              <div className="contact-panel">
                <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                  <Phone size={18} />
                  {site.contact.phone}
                </a>
                <a href={`mailto:${site.contact.sales}`}>
                  <Mail size={18} />
                  {site.contact.sales}
                </a>
                <a href={site.externalLinks.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  {templateCopy.whatsappLabel}
                </a>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
      ) : null}
      <TestimonialCarousel />
      <FaqAccordion faqs={page.faqs} />
      <CtaBand />
    </>
  )
}
