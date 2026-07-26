import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Container } from './Container'
import { Section } from './Section'
import { Icon } from './Icon'
import { Lightbox } from './Lightbox'
import { fetchGalleryItems } from '../services/galleryService'
import type { GalleryItem } from '../types/gallery'
import { isLocale } from '../types/locale'
import { INSTAGRAM_URL } from '../utils/links'

export function GallerySection() {
  const { locale } = useParams()
  const { t, i18n } = useTranslation()
  const currentLocale = isLocale(locale) ? locale : 'pt'
  const [items, setItems] = useState<GalleryItem[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchGalleryItems()
      .then(setItems)
      .catch(() => setError(true))
  }, [])

  return (
    <Section
      id="gallery"
      className="gallery-glow relative bg-foreground py-12"
    >
      <Container className="relative z-10">
        <h2 className="title-gradient mb-8 text-center font-[family-name:var(--font-display)] text-[100px] font-bold tracking-wider sm:text-[64px]">
          {t('gallery.title')}
        </h2>

        {error ? (
          <p className="text-center text-background">{t('common.loading')}</p>
        ) : (
          <div className="mx-auto grid w-[90%] grid-cols-1 gap-2 md:grid-cols-2 md:auto-rows-[320px] lg:grid-cols-3 lg:auto-rows-[400px]">
            {items.map((item, index) => {
              const title = currentLocale === 'pt' ? item.title_pt : item.title_en
              const src =
                item.type === 'video'
                  ? `/gallery/videos/${item.file}`
                  : `/gallery/images/${item.file}`

              return (
                <button
                  key={`${item.file}-${index}`}
                  type="button"
                  aria-label={`${t('gallery.openItem')}: ${title}`}
                  className="group relative h-full min-h-[280px] overflow-hidden rounded-lg md:min-h-[320px] lg:min-h-[400px]"
                  onClick={() => setActiveIndex(index)}
                >
                  {item.type === 'video' ? (
                    <video src={src} className="h-full w-full object-cover" muted />
                  ) : (
                    <img
                      src={src}
                      alt={title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Icon name="instagram" className="text-2xl text-white" size={28} />
                  </div>
                </button>
              )
            })}
          </div>
        )}

        <div className="my-12 flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={t('gallery.instagramAria')}
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-card px-6 py-4 font-semibold text-white transition-colors hover:bg-card hover:text-foreground sm:w-[90%]"
          >
            <Icon name="instagram" size={35} />
            <span>{t('gallery.cta')}</span>
          </a>
        </div>
      </Container>

      {activeIndex !== null && items.length > 0 && (
        <Lightbox
          items={items}
          index={activeIndex}
          locale={i18n.language === 'en' ? 'en' : 'pt'}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </Section>
  )
}
