import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, LockKeyhole, Mail, Phone, User } from 'lucide-react'
import { CtaBand, ProductVisual } from '../components/Marketing'
import { MotionCard, Reveal } from '../components/Motion'
import type { AuthPageContent, Cta } from '../data/types'

type AuthValues = Record<string, string>
type AuthErrors = Record<string, string>

const MotionRouterLink = motion.create(Link)

function buildInitialValues(page: AuthPageContent): AuthValues {
  return Object.fromEntries(page.fields.map((field) => [field.name, '']))
}

function fieldIcon(field: AuthPageContent['fields'][number]) {
  if (field.type === 'email') return Mail
  if (field.type === 'tel') return Phone
  if (field.type === 'password') return LockKeyhole
  return User
}

function AuthActionLink({ cta }: { cta: Cta }) {
  if (cta.external || cta.to.startsWith('http') || cta.to.startsWith('mailto:')) {
    return (
      <motion.a
        className="auth-link"
        href={cta.to}
        target={cta.to.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {cta.label}
        <ArrowRight size={14} aria-hidden="true" />
      </motion.a>
    )
  }

  return (
    <MotionRouterLink className="auth-link" to={cta.to} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      {cta.label}
      <ArrowRight size={14} aria-hidden="true" />
    </MotionRouterLink>
  )
}

export function AuthPage({ page }: { page: AuthPageContent }) {
  const [values, setValues] = useState<AuthValues>(() => buildInitialValues(page))
  const [errors, setErrors] = useState<AuthErrors>({})
  const [success, setSuccess] = useState(false)
  const visualVariant = page.mode === 'portal' ? 'people' : 'security'

  const update = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const validate = () => {
    const nextErrors: AuthErrors = {}

    page.fields.forEach((field) => {
      const value = values[field.name]?.trim() ?? ''
      if (!value) {
        nextErrors[field.name] = field.requiredMessage
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field.name] = field.requiredMessage
      }
    })

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return
    setSuccess(true)
  }

  return (
    <>
      <section className="auth-page">
        <div className="container auth-grid">
          <Reveal className="auth-copy">
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <div className="auth-meta">
              <span>
                <BadgeCheck size={16} aria-hidden="true" />
                Secure access page
              </span>
              <span>
                <LockKeyhole size={16} aria-hidden="true" />
                Account access flow
              </span>
            </div>
            <div className="auth-visual">
              <ProductVisual variant={visualVariant} />
            </div>
          </Reveal>

          <MotionCard className="auth-card" as="div">
            <div className="form-head">
              <span className="icon-tile" aria-hidden="true">
                <LockKeyhole size={22} />
              </span>
              <div>
                <h2>{page.submitLabel}</h2>
                <p>{page.successMessage}</p>
              </div>
            </div>

            {success ? (
              <motion.div
                className="auth-success"
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="auth-success__icon" aria-hidden="true">
                  <BadgeCheck size={24} />
                </span>
                <div>
                  <h3>{page.successTitle}</h3>
                  <p>{page.successMessage}</p>
                </div>
                {page.switchCta ? <AuthActionLink cta={page.switchCta} /> : null}
              </motion.div>
            ) : (
              <form className="auth-form" onSubmit={onSubmit} noValidate>
                <div className="form-grid">
                  {page.fields.map((field) => {
                    const Icon = fieldIcon(field)
                    const inputId = `${page.mode}-${field.name}`

                    return (
                      <label key={field.name} className={field.name === 'password' ? '' : undefined}>
                        <span>{field.label}</span>
                        <span className="input-shell">
                          <Icon size={16} aria-hidden="true" />
                          <input
                            id={inputId}
                            name={field.name}
                            type={field.type}
                            value={values[field.name] ?? ''}
                            onChange={(event) => update(field.name, event.target.value)}
                            placeholder={field.placeholder}
                            autoComplete={field.type === 'password' ? 'current-password' : field.name}
                            aria-invalid={Boolean(errors[field.name])}
                            aria-describedby={errors[field.name] ? `${inputId}-error` : undefined}
                          />
                        </span>
                        {errors[field.name] ? (
                          <small id={`${inputId}-error`}>{errors[field.name]}</small>
                        ) : null}
                      </label>
                    )
                  })}
                </div>

                <button className="btn btn--primary" type="submit">
                  {page.submitLabel}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </form>
            )}

            <div className="auth-footer">
              {page.switchLabel && page.switchCta ? (
                <p className="auth-switch">
                  {page.switchLabel}
                  <AuthActionLink cta={page.switchCta} />
                </p>
              ) : null}
              {page.helperLinks?.length ? (
                <div className="auth-links" aria-label="Helpful links">
                  {page.helperLinks.map((cta) => (
                    <AuthActionLink key={cta.to} cta={cta} />
                  ))}
                </div>
              ) : null}
            </div>
          </MotionCard>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
