import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from './Container'
import { isLocale } from '../types/locale'

export function Footer() {
  const { locale } = useParams()
  const { t } = useTranslation()
  const currentLocale = isLocale(locale) ? locale : 'pt'
  const homePath = `/${currentLocale}`

  const links = [
    { href: `${homePath}#home`, label: t('footer.links.home') },
    { href: `${homePath}#products`, label: t('footer.links.products') },
    { href: `${homePath}#about`, label: t('footer.links.about') },
    { href: `${homePath}#contact`, label: t('footer.links.contact') },
    { href: `${homePath}#faq`, label: t('footer.links.faq') },
  ]

  return (
    <footer className="bg-foreground py-10 text-white">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 sm:flex-col">
          <div className="w-full max-w-xs sm:max-w-none">
            <h4 className="mb-4 text-xl font-bold">{t('footer.linksTitle')}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gray-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-xs sm:max-w-none">
            <h4 className="mb-4 text-xl font-bold">{t('footer.contactTitle')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-gray-400">{t('footer.addressLabel')}</span>
                <p>{t('footer.addressLine1')}</p>
                <p>{t('footer.addressLine2')}</p>
                <p>{t('footer.addressLine3')}</p>
              </li>
              <li>
                <span className="text-gray-400">{t('footer.phoneLabel')}</span>
                <p>
                  <a href="tel:+3519274441193">{t('header.phone')}</a>
                </p>
              </li>
              <li>
                <span className="text-gray-400">{t('footer.emailLabel')}</span>
                <p>
                  <a href={`mailto:${t('header.email')}`}>{t('header.email')}</a>
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full max-w-md sm:max-w-none">
            <h4 className="mb-4 text-xl font-bold">{t('footer.aboutTitle')}</h4>
            <p className="text-gray-400">{t('footer.about')}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
