import type { RouteMeta } from '../data/types'
import { allMarketingPages, blogPosts } from './pages'
import { blogIndexCopy } from './pageCopy'
import { site } from './content'
import { authPages } from './auth'

export const locationPrefixes = [
  '/india/',
  '/bahamas/',
  '/bahrain/',
  '/cambodia/',
  '/fiji/',
  '/malaysia/',
  '/maldives/',
  '/mauritius/',
  '/nigeria/',
  '/oman/',
  '/rwanda/',
  '/saudi-arabia/',
  '/south-africa/',
  '/sri-lanka/',
  '/trinidad-tobago/',
  '/us/',
]

export const featureRouteHints = [
  'management',
  'software',
  'integration',
  'compliance',
  'analytics',
  'billing',
  'emr',
  'ehr',
  'appointment',
  'sample',
  'dispatch',
  'security',
]

export const routeManifest: RouteMeta[] = [
  {
    path: '/',
    title: `${site.brand.name} - Healthcare Management Software`,
    description:
      'Clinical blue healthcare management software for clinics, hospitals, labs, pharmacies, and specialty centers.',
    pageType: 'home',
    category: 'Home',
  },
  ...allMarketingPages.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    pageType: page.pageType,
    category: page.category,
    sourceUrl: page.sourceUrl,
  })),
  {
    path: '/products',
    title: 'Products',
    description: 'Explore healthcare software modules for patient care, diagnostics, pharmacy, billing, and management.',
    pageType: 'resource',
    category: 'Products',
  },
  ...authPages.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    pageType: 'resource' as const,
    category: 'Auth',
  })),
  {
    path: '/blog',
    title: blogIndexCopy.eyebrow,
    description: blogIndexCopy.latestDescription,
    pageType: 'blog',
    category: 'Resources',
  },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.excerpt,
    pageType: 'blog' as const,
    category: post.category,
    sourceUrl: `https://mocdoc.com/blog/${post.slug}`,
  })),
  {
    path: '/sitemap',
    title: 'Sitemap',
    description: 'A structured sitemap for CareAxis healthcare software pages.',
    pageType: 'resource',
    category: 'Resources',
  },
]

export const routeMetaByPath = new Map(routeManifest.map((route) => [route.path, route]))
