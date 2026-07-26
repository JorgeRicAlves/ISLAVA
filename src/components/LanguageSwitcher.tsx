import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Locale } from '../types/locale'
import { isLocale } from '../types/locale'
import { storeLocale } from '../utils/localeStorage'

export function LanguageSwitcher() {
  const { locale } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  const currentLocale: Locale = isLocale(locale) ? locale : 'pt'
  const nextLocale: Locale = currentLocale === 'pt' ? 'en' : 'pt'

  const handleSwitch = () => {
    storeLocale(nextLocale)
    const pathWithoutLocale = location.pathname.replace(/^\/(pt|en)/, '') || ''
    navigate(`/${nextLocale}${pathWithoutLocale}${location.hash}`)
  }

  return (
    <button
      type="button"
      onClick={handleSwitch}
      aria-label={t('header.switchLanguage')}
      className="rounded-md border border-secondary/40 px-3 py-1 text-sm uppercase transition-colors hover:border-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {nextLocale.toUpperCase()}
    </button>
  )
}
