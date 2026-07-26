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

      <Container className="relative z-10 flex min-h-[calc(100vh-80px)] w-full max-w-[1440px] flex-1 items-center justify-between gap-6 pt-[100px] sm:flex-col sm:justify-center sm:px-4 sm:pt-28 sm:text-center">
        <div className="flex w-[55%] flex-col items-start space-y-6 sm:w-[98%] sm:translate-y-[20%] sm:items-center">
          <h1 className="title-gradient text-start font-[family-name:var(--font-display)] text-[80px] font-black uppercase leading-none tracking-wide sm:text-center sm:text-[64px]">
            {t('hero.title')}
          </h1>
          <p className="max-w-xl text-start text-3xl font-light leading-snug text-background/80 sm:text-center sm:text-[22px]">
            {t('hero.subtitle')}
          </p>
          <Button className="w-auto sm:w-full" onClick={() => scrollToSection('contact')}>
            {t('hero.cta')}
          </Button>
        </div>

        <div className="relative w-[45%] shrink-0 sm:h-[40%] sm:w-full">
          <img
            src="/assets/hero-model.png"
            alt={t('hero.heroAlt')}
            className="h-screen w-full object-cover object-top opacity-50 sm:h-full"
            loading="eager"
          />
        </div>
      </Container>
    </Section>
  )
}
