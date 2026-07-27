import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'
import {
  countryDialCodes,
  findCountryByIso,
  getCountryName,
  sortCountriesByName,
} from '../data/countryDialCodes'

interface PhoneFieldProps {
  countryIso: string
  phoneNumber: string
  onCountryChange: (iso: string) => void
  onPhoneNumberChange: (value: string) => void
}

export function PhoneField({
  countryIso,
  phoneNumber,
  onCountryChange,
  onPhoneNumberChange,
}: PhoneFieldProps) {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const selectedCountry = findCountryByIso(countryIso)

  const sortedCountries = useMemo(
    () => sortCountriesByName(countryDialCodes, i18n.language),
    [i18n.language],
  )

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleCountrySelect = (iso: string) => {
    onCountryChange(iso)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="flex h-[50px] overflow-hidden rounded-lg border border-gray-300 bg-gray-100 focus-within:border-blue-500">
        <button
          type="button"
          id="contact-country-code"
          aria-label={t('contact.countryCode')}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex shrink-0 items-center gap-1 border-r border-gray-300 px-3 text-gray-700 hover:bg-gray-200/70"
        >
          <span className="text-lg leading-none" aria-hidden="true">
            {selectedCountry.flag}
          </span>
          <Icon name="chevron-down" size={16} className="text-gray-500" />
        </button>

        <div className="flex min-w-0 flex-1 items-center px-3">
          <span className="mr-2 shrink-0 text-sm text-gray-500">{selectedCountry.dial}</span>
          <input
            id="contact-phone"
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(event) => onPhoneNumberChange(event.target.value)}
            placeholder={t('contact.phonePlaceholder')}
            className="min-w-0 flex-1 bg-transparent text-foreground outline-none"
          />
        </div>
      </div>

      <input type="hidden" name="countryCode" value={countryIso} />
      <input
        type="hidden"
        name="phone"
        value={`${selectedCountry.dial} ${phoneNumber}`.trim()}
      />

      {isOpen && (
        <ul
          role="listbox"
          aria-label={t('contact.countryCode')}
          className="absolute z-30 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
        >
          {sortedCountries.map((country) => {
            const countryName = getCountryName(country.iso, i18n.language)
            const isSelected = country.iso === countryIso

            return (
              <li key={country.iso} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => handleCountrySelect(country.iso)}
                  className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors hover:bg-gray-100 ${
                    isSelected ? 'bg-gray-50 font-medium' : ''
                  }`}
                >
                  <span className="text-lg leading-none" aria-hidden="true">
                    {country.flag}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-gray-900">{countryName}</span>
                  <span className="shrink-0 text-gray-500">{country.dial}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
