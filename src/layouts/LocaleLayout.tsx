import { Outlet, Navigate, useParams, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import i18n from '../i18n'
import { isLocale } from '../types/locale'
import { storeLocale } from '../utils/localeStorage'
import { scrollToSection } from '../utils/scrollTo'
import { MetaTags } from '../components/MetaTags'
import { Footer } from '../components/Footer'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function LocaleLayout() {
  const { locale } = useParams()
  const location = useLocation()

  useEffect(() => {
    if (isLocale(locale)) {
      void i18n.changeLanguage(locale)
      storeLocale(locale)
    }
  }, [locale])

  useEffect(() => {
    if (!isLocale(locale) || location.pathname !== `/${locale}` || !location.hash) {
      return
    }

    const sectionId = decodeURIComponent(location.hash.slice(1))
    const timeout = window.setTimeout(() => scrollToSection(sectionId), 150)

    return () => window.clearTimeout(timeout)
  }, [locale, location.pathname, location.hash])

  if (!isLocale(locale)) {
    return <Navigate to="/pt" replace />
  }

  return (
    <>
      <MetaTags />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
