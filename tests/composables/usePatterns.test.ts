import { describe, it, expect } from 'vitest'
import { getPatternSvg } from '../../utils/patterns'

describe('Pattern Rendering', () => {
  it('generates valid pattern SVG', () => {
    const svg = getPatternSvg('dots', '#000000', 20)
    expect(svg).toContain('data:image/svg+xml')
    
    const decoded = decodeURIComponent(svg.replace('url("data:image/svg+xml,', '').replace('")', ''))
    expect(decoded).toContain('width="20"')
  })

  it('generates different SVGs for different patterns', () => {
    const dotsSvg = getPatternSvg('dots', '#000000')
    const wavesSvg = getPatternSvg('waves', '#000000')
    expect(dotsSvg).not.toBe(wavesSvg)
  })
})
