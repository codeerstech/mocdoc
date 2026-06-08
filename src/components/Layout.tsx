import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUp,
  ChevronDown,
  ExternalLink,
  LogIn,
  Menu,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react'
import {
  companyNav,
  customerNav,
  integrationNav,
  mainNavGroups,
  productNav,
  resourceNav,
  site,
  templateCopy,
} from '../data/site'
import type { NavGroup, NavItem, TemplateAction } from '../data/types'
import { AnimatedAccordion, AnimatedMenu } from './Motion'

type LayoutProps = {
  children: ReactNode
}

function BrandMark() {
  return (
    <Link className="brand" to="/" aria-label={`${site.brand.name} home`}>
      <span className="brand__mark" aria-hidden="true">
        <span />
      </span>
      <span>
        <strong>{site.brand.shortName}</strong>
        <small>{site.brand.suffix}</small>
      </span>
    </Link>
  )
}

type SmartLinkItem = NavItem | TemplateAction

function getSmartLinkLabel(item: SmartLinkItem) {
  return 'title' in item ? item.title : item.label
}

function SmartLink({
  item,
  className,
  onClick,
}: {
  item: SmartLinkItem
  className?: string
  onClick?: () => void
}) {
  const label = getSmartLinkLabel(item)

  if (item.external) {
    return (
      <a className={className} href={item.to} onClick={onClick} target="_blank" rel="noreferrer">
        {label}
        <ExternalLink size={14} aria-hidden="true" />
      </a>
    )
  }

  return (
    <NavLink className={className} to={item.to} onClick={onClick}>
      {label}
    </NavLink>
  )
}

function MegaMenu({ group }: { group: NavGroup }) {
  return (
    <div className="mega">
      <button className="nav-trigger" type="button" aria-haspopup="true">
        {group.title}
        <ChevronDown size={16} aria-hidden="true" />
      </button>
      <div className="mega__panel" role="menu">
        <div className="mega__header">
          <span>{group.title}</span>
          <small>{templateCopy.megaMenuSubtitle}</small>
        </div>
        <div className="mega__grid">
          {group.items.map((item) => (
            <NavLink key={item.to} to={item.to} className="mega__item">
              <span>{item.title}</span>
              {item.description ? <small>{item.description}</small> : null}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileGroup({
  group,
  open,
  onToggle,
  onNavigate,
}: {
  group: NavGroup
  open: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  return (
    <div className="mobile-group">
      <button type="button" onClick={onToggle} aria-expanded={open}>
        {group.title}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatedAccordion open={open}>
        <div className="mobile-group__links">
          {group.items.map((item) => (
            <SmartLink key={item.to} item={item} onClick={onNavigate} />
          ))}
        </div>
      </AnimatedAccordion>
    </div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(productNav.title)
  const hasTopStrip = site.topStrip.length > 0

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen)
    return () => document.body.classList.remove('menu-open')
  }, [mobileOpen])

  return (
    <header className={`site-header${hasTopStrip ? ' site-header--with-strip' : ''}`}>
      {hasTopStrip ? (
        <div className="top-strip">
          {site.topStrip.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : null}
      <div className="site-header__inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {mainNavGroups.map((group) => (
            <MegaMenu key={group.title} group={group} />
          ))}
        </nav>
        <div className="header-actions">
          <SmartLink className="text-link hide-sm" item={site.ctas.patient} />
          <SmartLink className="text-link hide-sm" item={site.ctas.signup} />
          <Link className="btn btn--small btn--primary" to={site.ctas.demo.to}>
            {site.ctas.demo.label}
          </Link>
          <Link
            className="icon-btn hide-sm"
            to={site.ctas.login.to}
            aria-label={site.ctas.login.ariaLabel ?? templateCopy.userLoginLabel}
          >
            <LogIn size={18} />
          </Link>
          <button
            className="icon-btn mobile-toggle"
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen ? (
          <AnimatedMenu className="mobile-nav">
            {mainNavGroups.map((group) => (
              <MobileGroup
                key={group.title}
                group={group}
                open={openGroup === group.title}
                onToggle={() => setOpenGroup((value) => (value === group.title ? '' : group.title))}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
            <div className="mobile-nav__actions">
              <SmartLink className="btn btn--ghost" item={site.ctas.login} onClick={() => setMobileOpen(false)} />
              <SmartLink className="btn btn--ghost" item={site.ctas.signup} onClick={() => setMobileOpen(false)} />
              <SmartLink className="btn btn--ghost" item={site.ctas.patient} onClick={() => setMobileOpen(false)} />
            </div>
          </AnimatedMenu>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

function FooterColumn({ group }: { group: NavGroup }) {
  return (
    <div className="footer-column">
      <h3>{group.title}</h3>
      {group.items.map((item) => (
        <SmartLink key={item.to} item={item} />
      ))}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <BrandMark />
          <p>{site.brand.tagline}</p>
          <div className="footer-contact">
            <span>{site.contact.address}</span>
            <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>{site.contact.phone}</a>
            <a href={`mailto:${site.contact.sales}`}>{site.contact.sales}</a>
          </div>
        </div>
        <FooterColumn group={productNav} />
        <FooterColumn group={companyNav} />
        <FooterColumn group={customerNav} />
        <FooterColumn group={resourceNav} />
        <FooterColumn group={integrationNav} />
      </div>
      <div className="footer-bottom">
        <span>{site.footerCopyright}</span>
        <div>
          <Link to="/about-us">About Us</Link>
          <Link to="/trust-safety/verification-process">Verification</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/families/faq">FAQ</Link>
        </div>
      </div>
    </footer>
  )
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="floating-actions" aria-label={templateCopy.quickActionsLabel}>
      <a
        className="float-btn float-btn--whatsapp"
        href={site.externalLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={site.ctas.whatsapp.ariaLabel ?? templateCopy.whatsappLabel}
      >
        <MessageCircle size={22} />
      </a>
      <a className="float-btn" href={`tel:${site.contact.phone.replace(/\s/g, '')}`} aria-label={templateCopy.callSalesLabel}>
        <Phone size={20} />
      </a>
      <AnimatePresence>
        {showTop ? (
          <motion.button
            className="float-btn"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={templateCopy.scrollTopLabel}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function CookieNotice() {
  const [visible, setVisible] = useState(
    () => window.localStorage.getItem('cookie-notice-accepted') !== 'true',
  )

  if (!visible) return null

  return (
    <div className="cookie-notice">
      <h2>Cookies help us improve your visit</h2>
      <p>We use cookies to keep the website running smoothly, understand usage, and improve the enquiry experience.</p>
      <button
        className="btn btn--primary"
        type="button"
        onClick={() => {
          window.localStorage.setItem('cookie-notice-accepted', 'true')
          setVisible(false)
        }}
      >
        Got it
      </button>
    </div>
  )
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieNotice />
      <FloatingActions />
    </>
  )
}
