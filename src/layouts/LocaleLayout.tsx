import { Outlet, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import i18n from '../i18n'
import { isLocale } from '../types/locale'
import { storeLocale } from '../utils/localeStorage'
import { MetaTags } from '../components/MetaTags'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function LocaleLayout() {
  const { locale } = useParams()

  useEffect(() => {
    if (isLocale(locale)) {
      void i18n.changeLanguage(locale)
      storeLocale(locale)
    }
  }, [locale])

  if (!isLocale(locale)) {
    return <Navigate to="/pt" replace />
  }

  return (
    <>
      <MetaTags />
      <Outlet />
      <WhatsAppButton />
    </>
  )
}
