import { DEFAULT_LOCALE, type Locale } from '../types/locale'

const STORAGE_KEY = 'islava-locale'

export function getStoredLocale(): Locale | null {
  const value = localStorage.getItem(STORAGE_KEY)
  if (value === 'pt' || value === 'en') {
    return value
  }
  return null
}

export function storeLocale(locale: Locale) {
  localStorage.setItem(STORAGE_KEY, locale)
}

export function resolveInitialLocale(pathLocale?: string): Locale {
  if (pathLocale === 'pt' || pathLocale === 'en') {
    return pathLocale
  }
  return getStoredLocale() ?? DEFAULT_LOCALE
}
