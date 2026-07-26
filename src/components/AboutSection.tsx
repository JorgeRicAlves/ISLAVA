import { useTranslation } from 'react-i18next'
import { Container } from './Container'
import { Section } from './Section'

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <Section id="about" className="flex min-h-[600px] items-center bg-background py-16">
      <Container className="flex flex-row-reverse items-center justify-between gap-10 sm:flex-col-reverse sm:gap-8">
        <div className="w-[40%] shrink-0 text-end sm:w-full sm:text-center">
          <h2 className="mb-4 text-[clamp(48px,5vw,80px)] font-bold uppercase leading-none text-foreground sm:mt-10">
            {t('about.title')}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-600 sm:w-[90%] lg:ml-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="logo-pattern h-[400px] w-[55%] max-w-[640px] shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:mt-12 sm:h-[320px] sm:w-full sm:max-w-none">
          <div className="flex h-full items-center justify-center">
            <img
              src="/assets/logo-about.png"
              alt={t('about.logoAlt')}
              className="rounded-full border border-primary bg-[#E5E7EB] object-contain p-4"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
