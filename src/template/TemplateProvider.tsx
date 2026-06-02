import type { ReactNode } from 'react'
import { motionPreset, theme, toCssVarName } from './theme'
import { templateConfig } from './content'
import { TemplateContext } from './context'

function createThemeCss() {
  const declarations = [
    ...Object.entries(theme.colors).map(([key, value]) => `${toCssVarName(key, 'color')}: ${value};`),
    ...Object.entries(theme.shadows).map(([key, value]) => `${toCssVarName(key, 'shadow')}: ${value};`),
    ...Object.entries(theme.radii).map(([key, value]) => `${toCssVarName(key, 'radius')}: ${value};`),
    ...Object.entries(theme.gradients).map(([key, value]) => `${toCssVarName(key, 'gradient')}: ${value};`),
    `--font-sans: ${theme.font.sans};`,
    `--motion-duration: ${motionPreset.duration}s;`,
    `--motion-distance: ${motionPreset.distance}px;`,
  ]

  return `:root { ${declarations.join(' ')} }`
}

export function TemplateProvider({ children }: { children: ReactNode }) {
  return (
    <TemplateContext.Provider value={{ config: templateConfig }}>
      <style>{createThemeCss()}</style>
      {children}
    </TemplateContext.Provider>
  )
}
