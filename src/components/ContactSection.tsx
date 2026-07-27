import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './Button'
import { Container } from './Container'
import { Section } from './Section'
import { PhoneField } from './PhoneField'
import { MAPS_EMBED_URL, MAPS_OPEN_URL } from '../utils/maps'
import { sendContactEmail } from '../services/contactService'
import { defaultCountryIso, findCountryByIso } from '../data/countryDialCodes'

export function ContactSection() {
  const { t } = useTranslation()
  const [countryIso, setCountryIso] = useState(defaultCountryIso)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sent' | 'mailto'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const dialCode = findCountryByIso(countryIso).dial
    const fullPhone = phoneNumber.trim() ? `${dialCode} ${phoneNumber.trim()}` : ''

    try {
      const result = await sendContactEmail({
        name,
        email,
        phone: fullPhone,
        message,
        subject: `${t('contact.title')} - ${name}`,
      })

      setStatus(result)
      if (result === 'sent') {
        event.currentTarget.reset()
        setPhoneNumber('')
        setCountryIso(defaultCountryIso)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" className="relative overflow-hidden bg-background py-16 sm:py-12">
      <img
        src="/assets/logo-about.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[200px] w-[200px] -rotate-45 scale-[7] object-cover opacity-70 invert sm:hidden"
      />

      <Container className="relative z-10">
        <h2 className="mb-6 text-[clamp(48px,5vw,80px)] font-bold uppercase leading-tight sm:text-center lg:mb-8">
          {t('contact.title')}
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-gray-700" htmlFor="contact-name">
                {t('contact.name')}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder={t('contact.namePlaceholder')}
                className="h-[50px] w-full rounded-lg border border-gray-300 bg-gray-100 px-4 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-gray-700" htmlFor="contact-email">
                {t('contact.email')}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder={t('contact.emailPlaceholder')}
                className="h-[50px] w-full rounded-lg border border-gray-300 bg-gray-100 px-4 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-gray-700" htmlFor="contact-phone">
                {t('contact.phone')}
              </label>
              <PhoneField
                countryIso={countryIso}
                phoneNumber={phoneNumber}
                onCountryChange={setCountryIso}
                onPhoneNumberChange={setPhoneNumber}
              />
            </div>

            <div>
              <label className="mb-1 block text-gray-700" htmlFor="contact-message">
                {t('contact.message')}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder={t('contact.messagePlaceholder')}
                className="min-h-[150px] w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <Button type="submit" variant="submit" className="w-full shrink-0" disabled={isSubmitting}>
              {isSubmitting ? t('contact.submitting') : t('contact.submit')}
            </Button>

            {status === 'sent' && (
              <p className="text-sm text-primary" role="status">
                {t('contact.success')}
              </p>
            )}

            {status === 'mailto' && (
              <p className="text-sm text-muted" role="status">
                {t('contact.mailtoFallback')}
              </p>
            )}
          </form>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-primary shadow-lg lg:h-full lg:min-h-0">
            <iframe
              title={t('contact.mapTitle')}
              src={MAPS_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={MAPS_OPEN_URL}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 left-3 z-10 rounded-md bg-white/95 px-3 py-1.5 text-sm font-medium text-primary underline-offset-4 shadow-sm hover:underline"
            >
              {t('contact.openInMaps')}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
