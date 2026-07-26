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
    <footer className="bg-foreground py-12 text-white">
      <Container className="px-6 md:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-lg font-bold">{t('footer.linksTitle')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gray-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">{t('footer.contactTitle')}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-gray-400">{t('footer.addressLabel')}</span>
                <p className="mt-1 text-white">{t('footer.addressLine1')}</p>
                <p className="text-white">{t('footer.addressLine2')}</p>
              </li>
              <li>
                <span className="text-gray-400">{t('footer.phoneLabel')}</span>
                <p className="mt-1">
                  <a href="tel:+3519274441193" className="text-white transition-colors hover:text-gray-200">
                    {t('header.phone')}
                  </a>
                </p>
              </li>
              <li>
                <span className="text-gray-400">{t('footer.emailLabel')}</span>
                <p className="mt-1">
                  <a
                    href={`mailto:${t('header.email')}`}
                    className="text-cyan-400 transition-colors hover:underline"
                  >
                    {t('header.email')}
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">{t('footer.aboutTitle')}</h4>
            <p className="text-sm leading-relaxed text-gray-400">{t('footer.about')}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
