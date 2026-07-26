import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function MetaTags() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const title = t('meta.title')
    const description = t('meta.description')
    const keywords = t('meta.keywords')

    document.title = title
    document.documentElement.lang = i18n.language

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let element = document.querySelector(selector)

      if (!element) {
        element = document.createElement('meta')
        if (property) {
          element.setAttribute('property', name)
        } else {
          element.setAttribute('name', name)
        }
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', window.location.href, true)
    setMeta('og:image', `${window.location.origin}/assets/logo-about.png`, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
  }, [t, i18n.language])

  return null
}
