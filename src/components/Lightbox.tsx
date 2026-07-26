import { useEffect, useCallback, useState, type TouchEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'
import type { GalleryItem } from '../types/gallery'
import { getGalleryMediaUrl } from '../services/galleryService'

interface LightboxProps {
  items: GalleryItem[]
  index: number
  locale: 'pt' | 'en'
  onClose: () => void
  onChange: (index: number) => void
}

export function Lightbox({ items, index, locale, onClose, onChange }: LightboxProps) {
  const { t } = useTranslation()
  const [zoomed, setZoomed] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const item = items[index]
  const title = locale === 'pt' ? item.title_pt : item.title_en
  const mediaUrl = getGalleryMediaUrl(item)

  const goPrev = useCallback(() => {
    onChange((index - 1 + items.length) % items.length)
    setZoomed(false)
  }, [index, items.length, onChange])

  const goNext = useCallback(() => {
    onChange((index + 1) % items.length)
    setZoomed(false)
  }, [index, items.length, onChange])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [goNext, goPrev, onClose])

  const handleTouchStart = (event: TouchEvent) => {
    setTouchStartX(event.touches[0]?.clientX ?? null)
  }

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX === null) return
    const delta = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX
    if (Math.abs(delta) > 50) {
      if (delta > 0) goPrev()
      else goNext()
    }
    setTouchStartX(null)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label={t('gallery.close')}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <Icon name="close" />
      </button>

      <button
        type="button"
        aria-label={t('gallery.prev')}
        className="absolute left-4 hidden rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:block"
        onClick={(event) => {
          event.stopPropagation()
          goPrev()
        }}
      >
        <Icon name="chevron-left" />
      </button>

      <button
        type="button"
        aria-label={t('gallery.next')}
        className="absolute right-4 hidden rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:mr-12 sm:block"
        onClick={(event) => {
          event.stopPropagation()
          goNext()
        }}
      >
        <Icon name="chevron-right" />
      </button>

      <div
        className="relative max-h-[90vh] max-w-5xl"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {item.type === 'video' ? (
          <video
            src={mediaUrl}
            controls
            className="max-h-[80vh] w-full rounded-lg"
          />
        ) : (
          <img
            src={mediaUrl}
            alt={title}
            className={`max-h-[80vh] w-full rounded-lg object-contain transition-transform duration-300 ${
              zoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setZoomed((value) => !value)}
          />
        )}

        <div className="mt-4 flex items-center justify-between gap-4 text-white">
          <p className="text-lg font-medium">{title}</p>
          {item.type === 'image' && (
            <button
              type="button"
              aria-label={zoomed ? t('gallery.zoomOut') : t('gallery.zoomIn')}
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              onClick={() => setZoomed((value) => !value)}
            >
              <Icon name={zoomed ? 'zoom-out' : 'zoom-in'} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
