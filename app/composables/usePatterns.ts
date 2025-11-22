import type { Pattern } from '../types/avatar'

export const usePatterns = () => {
  const { data: patterns, pending, error } = useFetch<Pattern[]>('/api/patterns', {
    key: 'patterns',
    lazy: true,
    server: false // Client-side fetch is fine for this, or true for SSR
  })

  return {
    patterns,
    pending,
    error
  }
}
