import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CtaBand, ProductVisual, SectionIntro } from '../components/Marketing'
import { MotionCard } from '../components/Motion'
import { routeManifest } from '../data/routes'
import { sitemapCopy } from '../template/pageCopy'

const groups = routeManifest.reduce<Record<string, typeof routeManifest>>((acc, route) => {
  acc[route.category] = acc[route.category] ?? []
  acc[route.category].push(route)
  return acc
}, {})

export function SitemapPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{sitemapCopy.eyebrow}</span>
            <h1>{sitemapCopy.title}</h1>
            <p>{sitemapCopy.description}</p>
          </div>
          <ProductVisual variant="integration" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow={sitemapCopy.manifestEyebrow}
            title={sitemapCopy.manifestTitle}
            description={sitemapCopy.manifestDescription}
          />
          <div className="sitemap-grid">
            {Object.entries(groups).map(([category, routes]) => (
              <MotionCard className="sitemap-group" key={category}>
                <h2>{category}</h2>
                {routes.map((route) => (
                  <Link key={`${category}-${route.path}`} to={route.path}>
                    <span>{route.title}</span>
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </MotionCard>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
