import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Container } from './Container'
import { isLocale } from '../types/locale'
import { INSTAGRAM_URL } from '../utils/links'

interface NavbarProps {
  variant?: 'home' | 'page'
}

export function Navbar({ variant = 'home' }: NavbarProps) {
  const { locale } = useParams()
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const currentLocale = isLocale(locale) ? locale : 'pt'
  const isHome = variant === 'home'
  const textClass = 'text-background'
  const headerBg = isHome ? 'bg-transparent' : 'bg-foreground'
  const homePath = `/${currentLocale}`

  const navLinks = [
    { href: `${homePath}#home`, label: t('header.nav.home') },
    { href: `${homePath}#products`, label: t('header.nav.products') },
    { href: `${homePath}#gallery`, label: t('header.nav.gallery') },
    { href: `${homePath}#about`, label: t('header.nav.about') },
    { href: `${homePath}#faq`, label: t('header.nav.faq') },
    { href: `${homePath}#contact`, label: t('header.nav.contact') },
  ]

  return (
    <header key={currentLocale} className={`absolute top-0 z-20 w-full ${headerBg}`}>
      {!isHome && (
        <div className="hidden min-h-10 items-center bg-topbar text-white sm:flex">
          <Container className="flex justify-end gap-12 py-2 text-sm font-extralight">
            <a href={`mailto:${t('header.email')}`} className="flex items-center gap-2 hover:text-gray-300">
              <Icon name="mail" size={20} />
              <span>{t('header.email')}</span>
            </a>
            <a href="tel:+3519274441193" className="flex items-center gap-2 hover:text-gray-300">
              <Icon name="phone" size={20} />
              <span>{t('header.phone')}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Icon name="instagram" size={20} />
              <span>{t('header.instagram')}</span>
            </a>
          </Container>
        </div>
      )}

      <Container className="relative max-w-[1440px] border-b border-secondary">
        <button
          type="button"
          className={`absolute left-0 top-6 z-30 sm:hidden ${textClass}`}
          aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={30} />
        </button>

        <nav
          className={`relative hidden h-[80px] items-end justify-between pb-4 sm:flex ${textClass}`}
        >
          <div className="flex gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent pb-1 transition-colors hover:border-background"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent pb-1 transition-colors hover:border-background"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>
        </nav>

        <Link
          to={homePath}
          className="absolute left-1/2 top-[25%] z-10 h-[100px] w-[140px] -translate-x-1/2 rounded-full border border-secondary bg-foreground"
        >
          <img src="/assets/logo.png" alt={t('common.logoAlt')} className="h-full w-full object-cover" />
        </Link>
      </Container>

      {menuOpen && (
        <nav className={`border-t border-secondary/30 bg-foreground px-4 py-4 sm:hidden ${textClass}`}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-secondary/20 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  )
}
