import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ButtonLink } from './ButtonLink'
import { Container } from './Container'
import { Section } from './Section'
import { isLocale } from '../types/locale'

const productItems = [
  { image: '/gallery/images/product-natural.jpg', key: 'natural' },
  { image: '/gallery/images/product-curly.jpg', key: 'curly' },
  { image: '/gallery/images/product-straight.jpg', key: 'straight' },
  { image: '/gallery/images/gallery-04.jpg', key: 'natural' },
  { image: '/gallery/images/gallery-05.jpg', key: 'curly' },
  { image: '/gallery/images/gallery-06.jpg', key: 'straight' },
] as const

export function ProductsSection() {
  const { locale } = useParams()
  const { t } = useTranslation()
  const currentLocale = isLocale(locale) ? locale : 'pt'

  return (
    <Section id="products" className="bg-background py-12 sm:py-8">
      <Container>
        <div className="mb-10 max-w-3xl sm:mx-auto sm:text-center">
          <h2 className="mb-4 text-[80px] font-bold uppercase leading-none text-foreground sm:text-[60px]">
            {t('products.title')}
          </h2>
          <p className="mb-8 max-w-xl text-lg text-foreground sm:mx-auto">
            {t('products.description')}
          </p>
          <div className="flex gap-2 sm:flex-col sm:items-center">
            <ButtonLink
              to={`/${currentLocale}/tapes`}
              variant="secondary"
              className="w-[240px] whitespace-nowrap sm:w-[95%]"
            >
              {t('products.tapeSystem')}
            </ButtonLink>
            <ButtonLink
              to={`/${currentLocale}/keratin`}
              variant="secondary"
              className="w-[240px] whitespace-nowrap sm:w-[95%]"
            >
              {t('products.keratinSystem')}
            </ButtonLink>
          </div>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:auto-rows-[320px] lg:grid-cols-3 lg:auto-rows-[400px]">
          {productItems.map((item, index) => (
            <article
              key={`${item.image}-${index}`}
              className="hair-item group relative min-h-[280px] overflow-hidden rounded-lg md:min-h-[320px] lg:min-h-[400px]"
            >
              <img
                src={item.image}
                alt={t(`products.items.${item.key}`)}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="hair-info absolute bottom-0 left-0 flex h-full max-h-[120px] w-full items-end p-6">
                <h3 className="text-xl font-semibold text-secondary">
                  {t(`products.items.${item.key}`)}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
