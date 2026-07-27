import { useTranslation } from 'react-i18next'
import { Container } from './Container'
import { Section } from './Section'
import { Button } from './Button'
import { Navbar } from './Navbar'
import { scrollToSection } from '../utils/scrollTo'

export function Hero() {
  const { t } = useTranslation()

  return (
    <Section
      id="home"
      className="hero-glow relative flex min-h-screen flex-col overflow-hidden bg-foreground"
    >
      <Navbar variant="home" />

      <img
        src="/assets/hero-model.png"
        alt={t('hero.heroAlt')}
        className="pointer-events-none absolute right-0 top-0 z-0 hidden h-full w-[48%] object-cover object-top lg:block"
        loading="eager"
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-center gap-8 px-4 pb-12 pt-32 lg:min-h-[calc(100vh-120px)] lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-6 lg:pt-36">
        <div className="flex w-full flex-col items-center space-y-6 text-center lg:w-[55%] lg:items-start lg:text-start">
          <h1 className="title-gradient font-[family-name:var(--font-display)] text-[64px] font-black uppercase leading-none tracking-wide lg:text-[80px]">
            {t('hero.title')}
          </h1>
          <p className="max-w-xl text-2xl font-light leading-snug text-background/80 lg:text-3xl">
            {t('hero.subtitle')}
          </p>
          <Button className="w-full lg:w-auto" onClick={() => scrollToSection('contact')}>
            {t('hero.cta')}
          </Button>
        </div>

        <div className="relative w-full lg:hidden">
          <img
            src="/assets/hero-model.png"
            alt={t('hero.heroAlt')}
            className="mx-auto h-[50vh] max-h-[480px] w-full object-cover object-top"
            loading="eager"
          />
        </div>
      </Container>
    </Section>
  )
}
