import { useTranslation } from 'react-i18next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { ContactSection } from '../components/ContactSection'

const hairSections = [
  { image: '/gallery/images/keratin-virgin.jpg', key: 'virgin' as const, reverse: false },
  { image: '/gallery/images/keratin-brown.jpg', key: 'brown' as const, reverse: true },
  { image: '/gallery/images/product-curly.jpg', key: 'blonde' as const, reverse: false },
]

export function KeratinPage() {
  const { t } = useTranslation()

  return (
    <main className="relative min-h-screen bg-foreground">
      <Navbar variant="page" />

      <section className="relative flex h-screen items-center justify-center overflow-hidden sm:items-start">
        <h1 className="absolute translate-y-[100px] text-center font-[family-name:var(--font-display)] text-[24vw] font-bold leading-[0.8] text-secondary opacity-90 sm:text-[44vw]">
          <span className="inline-block">{t('keratin.titleLine1')}</span>
          <br />
          <span className="inline-block">{t('keratin.titleLine2')}</span>
        </h1>
        <img
          src="/assets/animation.gif"
          alt={t('keratin.animationAlt')}
          className="absolute bottom-2 z-10 w-[55px] rounded-[20px] bg-foreground object-contain sm:py-1"
          loading="lazy"
        />
      </section>

      <section className="bg-foreground px-14 py-12 sm:px-4">
        <Container>
          <h2 className="w-full text-center text-[50px] font-bold uppercase leading-none text-background sm:text-[25px]">
            {t('keratin.description')}
          </h2>
        </Container>
      </section>

      <div className="space-y-[100px] bg-foreground px-4 py-7 pb-[100px]">
        {hairSections.map((section) => (
          <Container
            key={section.key}
            className={`flex items-center justify-between gap-10 overflow-hidden sm:flex-col sm:gap-6 ${
              section.reverse ? 'flex-row-reverse sm:flex-col' : ''
            }`}
          >
            <img
              src={section.image}
              alt={t(`keratin.sections.${section.key}`)}
              className="h-[420px] w-full max-w-[58%] shrink-0 rounded-lg object-cover sm:max-w-[90%] lg:max-w-[55%]"
              loading="lazy"
            />
            <div className="min-w-0 flex-1 text-background">
              <h3 className="text-end text-[clamp(40px,5vw,80px)] font-bold uppercase leading-[0.9] sm:my-5 sm:text-center">
                {t(`keratin.sections.${section.key}`)}
              </h3>
            </div>
          </Container>
        ))}

        <div className="mx-auto h-[2px] max-w-[1440px] bg-background opacity-70" />

        <Container className="overflow-hidden">
          <div className="my-4 flex justify-center text-background">
            <h3 className="text-[80px] font-bold uppercase leading-[0.9] sm:text-[55px]">
              {t('keratin.sections.tipsTitle')}
            </h3>
          </div>

          <div className="flex items-start gap-10 sm:flex-col sm:items-center sm:gap-5">
            <div className="flex w-1/2 flex-col items-center sm:w-[90%]">
              <img
                src="/gallery/images/keratin-tip-fine.jpg"
                alt={t('keratin.sections.tipFineTitle')}
                className="h-[450px] w-full rounded-lg object-cover object-[50%_100%]"
                loading="lazy"
              />
              <h4 className="mt-7 text-center text-[60px] font-bold uppercase leading-[0.9] text-background">
                {t('keratin.sections.tipFineTitle')}
              </h4>
              <p className="mt-2 max-w-[90%] text-center text-[20px] leading-none text-background/80">
                {t('keratin.sections.tipFineDescription')}
              </p>
            </div>

            <div className="flex w-1/2 flex-col items-center sm:mt-[100px] sm:w-[90%]">
              <img
                src="/gallery/images/keratin-tip-double.jpg"
                alt={t('keratin.sections.tipDoubleTitle')}
                className="h-[450px] w-full rounded-lg object-cover object-[50%_100%]"
                loading="lazy"
              />
              <h4 className="mt-7 text-center text-[60px] font-bold uppercase leading-[0.9] text-background">
                {t('keratin.sections.tipDoubleTitle')}
              </h4>
              <p className="mt-2 max-w-[90%] text-center text-[20px] leading-none text-background/80">
                {t('keratin.sections.tipDoubleDescription')}
              </p>
            </div>
          </div>
        </Container>
      </div>

      <ContactSection />
      <Footer />
    </main>
  )
}
