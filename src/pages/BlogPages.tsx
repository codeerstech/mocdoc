import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Tag } from 'lucide-react'
import { CtaBand, ProductVisual, SectionIntro } from '../components/Marketing'
import { MotionCard } from '../components/Motion'
import { blogPosts } from '../data/pages'
import { blogIndexCopy } from '../template/pageCopy'

export function BlogIndex() {
  return (
    <>
      <section className="page-hero blog-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{blogIndexCopy.eyebrow}</span>
            <h1>{blogIndexCopy.title}</h1>
            <p>{blogIndexCopy.description}</p>
          </div>
          <ProductVisual variant="growth" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow={blogIndexCopy.latestEyebrow}
            title={blogIndexCopy.latestTitle}
            description={blogIndexCopy.latestDescription}
          />
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <MotionCard className="blog-card" key={post.slug}>
                <div className="blog-card__meta">
                  <span>
                    <CalendarDays size={14} />
                    {post.date}
                  </span>
                  <span>
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="tag-list">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link className="text-cta" to={`/blog/${post.slug}`}>
                  {blogIndexCopy.readArticleLabel}
                  <ArrowRight size={16} />
                </Link>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

export function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0]

  return (
    <>
      <section className="article-hero">
        <div className="container article-hero__inner">
          <Link className="text-cta" to="/blog">
            <ArrowLeft size={16} />
            {blogIndexCopy.backToBlogLabel}
          </Link>
          <span className="eyebrow">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-meta">
            <span>
              <CalendarDays size={16} />
              {post.date}
            </span>
            <span>
              <Clock size={16} />
              {post.readTime}
            </span>
            <span>
              <Tag size={16} />
              {post.tags.join(', ')}
            </span>
          </div>
        </div>
      </section>
      <article className="article-body">
        <div className="container article-body__inner">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </article>
      <CtaBand title={blogIndexCopy.detailCtaTitle} />
    </>
  )
}
