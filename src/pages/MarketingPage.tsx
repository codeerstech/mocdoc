import { MarketingPageBody } from '../components/Marketing'
import type { MarketingPageContent } from '../data/types'

export function MarketingPage({ page }: { page: MarketingPageContent }) {
  return <MarketingPageBody page={page} />
}
