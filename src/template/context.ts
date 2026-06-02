import { createContext, useContext } from 'react'
import type { MarketingTemplateConfig } from '../data/types'

export type TemplateContextValue = {
  config: MarketingTemplateConfig
}

export const TemplateContext = createContext<TemplateContextValue | null>(null)

export function useTemplate() {
  const context = useContext(TemplateContext)
  if (!context) throw new Error('useTemplate must be used inside TemplateProvider')
  return context
}
