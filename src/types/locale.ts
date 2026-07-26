export const LOCALES = ['pt', 'en'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'pt'

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale)
}
