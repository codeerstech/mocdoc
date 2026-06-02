import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CtaBand, ProductVisual, SectionIntro, StatsStrip } from '../components/Marketing'
import { MotionCard, Reveal } from '../components/Motion'
import { productPages } from '../data/pages'
import { sharedStats } from '../data/site'
import { productIndexCopy } from '../template/pageCopy'

export function ProductIndexPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{productIndexCopy.eyebrow}</span>
            <h1>{productIndexCopy.title}</h1>
            <p>{productIndexCopy.description}</p>
          </div>
          <ProductVisual variant="hospital" />
        </div>
        <div className="container">
          <StatsStrip stats={sharedStats} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionIntro
              eyebrow={productIndexCopy.sectionEyebrow}
              title={productIndexCopy.sectionTitle}
              description={productIndexCopy.sectionDescription}
            />
          </Reveal>
          <div className="product-index-grid">
            {productPages.map((page) => {
              const Icon = page.features[0]?.icon
              return (
                <MotionCard className="product-index-card" key={page.path}>
                  <Link to={page.path}>
                    <span className="icon-tile" aria-hidden="true">
                      {Icon ? <Icon size={22} /> : null}
                    </span>
                    <span className="eyebrow">{page.eyebrow}</span>
                    <h2>{page.title}</h2>
                    <p>{page.description}</p>
                    <span className="text-cta">
                      {productIndexCopy.cardCtaLabel}
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </MotionCard>
              )
            })}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
