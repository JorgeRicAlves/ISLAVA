import { useTranslation } from 'react-i18next'
import { ProductPageHero } from '../components/ProductPageHero'
import { Container } from '../components/Container'

export function TapesPage() {
  const { t } = useTranslation()

  return (
    <main className="relative min-h-screen bg-foreground">
      <ProductPageHero
        titleLine1={t('tape.titleLine1')}
        titleLine2={t('tape.titleLine2')}
        animationAlt={t('tape.animationAlt')}
        badge={t('tape.badge')}
      />

      <section className="bg-foreground px-14 py-12 sm:px-3">
        <Container>
          <h2 className="w-full text-center text-[50px] font-bold uppercase leading-none text-background sm:text-[25px]">
            {t('tape.description')}
          </h2>
        </Container>
      </section>
    </main>
  )
}
