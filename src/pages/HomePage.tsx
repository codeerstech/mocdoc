import { Link } from 'react-router-dom'
import {
  CtaBand,
  CtaLink,
  FaqAccordion,
  FeatureGrid,
  LeadForm,
  LogoCloud,
  PageHero,
  ProductVisual,
  SectionIntro,
  StatsStrip,
  TestimonialCarousel,
  WorkflowSection,
} from '../components/Marketing'
import { MotionCard, Reveal } from '../components/Motion'
import { site } from '../data/site'
import {
  benefitSection,
  homeDemoSection,
  homePage,
  homeSplitSection,
  modernizationSection,
} from '../template/home'

export function HomePage() {
  return (
    <>
      <PageHero page={homePage} />
      <LogoCloud />
      <section className="section">
        <div className="container split-section">
          <div>
            <SectionIntro
              eyebrow={homeSplitSection.eyebrow}
              title={homeSplitSection.title}
              description={homeSplitSection.description}
              align="left"
            />
            <div className="mini-product-list">
              {homeSplitSection.products.map((product) => (
                <MotionCard key={product.title}>
                  <Link className="mini-product-link" to={product.to}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </Link>
                </MotionCard>
              ))}
            </div>
          </div>
          <ProductVisual variant={homeSplitSection.visual} />
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <Reveal>
          <SectionIntro
            eyebrow={modernizationSection.eyebrow}
            title={modernizationSection.title}
            description={modernizationSection.description}
          />
          </Reveal>
          <FeatureGrid
            features={modernizationSection.features}
          />
        </div>
      </section>
      <WorkflowSection
        title={homePage.operationsTitle}
        intro={homePage.operationsIntro}
        features={homePage.operations}
      />
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow={benefitSection.eyebrow}
            title={benefitSection.title}
            description={benefitSection.description}
          />
          <div className="benefit-grid">
            {benefitSection.blocks.map((block) => {
              const Icon = block.icon
              return (
                <MotionCard key={block.title} className="benefit-card">
                  <span className="icon-tile" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3>{block.title}</h3>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </MotionCard>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <SectionIntro eyebrow="Outcome indicators" title={homePage.outcomesTitle} />
          <StatsStrip stats={homePage.outcomes} />
        </div>
      </section>
      <TestimonialCarousel />
      <section className="section">
        <div className="container form-layout">
          <div>
            <SectionIntro
              eyebrow={homeDemoSection.eyebrow}
              title={homeDemoSection.title}
              description={homeDemoSection.description}
              align="left"
            />
            <div className="hero-actions">
              <CtaLink cta={site.ctas.brochure} variant="ghost" />
              <CtaLink cta={site.ctas.contact} variant="ghost" />
            </div>
          </div>
          <LeadForm compact />
        </div>
      </section>
      <FaqAccordion faqs={homePage.faqs} />
      <CtaBand />
    </>
  )
}
