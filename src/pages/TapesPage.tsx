import { useTranslation } from 'react-i18next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'

export function TapesPage() {
  const { t } = useTranslation()

  return (
    <main className="relative min-h-screen bg-foreground">
      <Navbar variant="page" />

      <section className="relative flex h-screen items-center justify-center overflow-hidden sm:items-start">
        <h1 className="absolute text-center font-[family-name:var(--font-display)] text-[24vw] font-bold leading-[0.8] text-secondary opacity-90 sm:translate-y-[140px] sm:text-[40vw]">
          <span className="absolute right-[10%] top-[10%] rounded-3xl border border-secondary bg-foreground px-3 py-7 font-[family-name:var(--font-body)] text-[20px] sm:bottom-0 sm:right-1/2 sm:top-auto sm:translate-x-1/2 sm:translate-y-[170%] sm:whitespace-nowrap">
            {t('tape.badge')}
          </span>
          <span className="inline-block">{t('tape.titleLine1')}</span>
          <br />
          <span className="inline-block">{t('tape.titleLine2')}</span>
        </h1>
        <img
          src="/assets/animation.gif"
          alt={t('tape.animationAlt')}
          className="absolute bottom-2 w-[55px] object-contain"
          loading="lazy"
        />
      </section>

      <section className="bg-foreground px-14 py-12 sm:px-3">
        <Container>
          <h2 className="w-full text-center text-[50px] font-bold uppercase leading-none text-background sm:text-[25px]">
            {t('tape.description')}
          </h2>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
