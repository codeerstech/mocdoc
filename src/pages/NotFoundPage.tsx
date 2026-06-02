import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CtaBand, ProductVisual } from '../components/Marketing'
import { notFoundCopy } from '../template/pageCopy'

export function NotFoundPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{notFoundCopy.eyebrow}</span>
            <h1>{notFoundCopy.title}</h1>
            <p>{notFoundCopy.description}</p>
            <div className="hero-actions">
              <Link className="btn btn--primary" to="/">
                {notFoundCopy.homeLabel}
                <ArrowRight size={16} />
              </Link>
              <Link className="btn btn--ghost" to="/sitemap">
                {notFoundCopy.sitemapLabel}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <ProductVisual variant="security" />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
