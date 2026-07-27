export interface CountryDialCode {
  iso: string
  dial: string
  flag: string
}

function flagEmoji(iso: string): string {
  return iso
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
}

const countryDefinitions = [
  { iso: 'PT', dial: '+351' },
  { iso: 'AF', dial: '+93' },
  { iso: 'DE', dial: '+49' },
  { iso: 'AO', dial: '+244' },
  { iso: 'SA', dial: '+966' },
  { iso: 'DZ', dial: '+213' },
  { iso: 'AR', dial: '+54' },
  { iso: 'AU', dial: '+61' },
  { iso: 'AT', dial: '+43' },
  { iso: 'BE', dial: '+32' },
  { iso: 'BO', dial: '+591' },
  { iso: 'BR', dial: '+55' },
  { iso: 'CA', dial: '+1' },
  { iso: 'CV', dial: '+238' },
  { iso: 'CL', dial: '+56' },
  { iso: 'CN', dial: '+86' },
  { iso: 'CO', dial: '+57' },
  { iso: 'KR', dial: '+82' },
  { iso: 'CR', dial: '+506' },
  { iso: 'HR', dial: '+385' },
  { iso: 'DK', dial: '+45' },
  { iso: 'AE', dial: '+971' },
  { iso: 'EC', dial: '+593' },
  { iso: 'SK', dial: '+421' },
  { iso: 'SI', dial: '+386' },
  { iso: 'ES', dial: '+34' },
  { iso: 'US', dial: '+1' },
  { iso: 'EE', dial: '+372' },
  { iso: 'PH', dial: '+63' },
  { iso: 'FI', dial: '+358' },
  { iso: 'FR', dial: '+33' },
  { iso: 'GR', dial: '+30' },
  { iso: 'NL', dial: '+31' },
  { iso: 'HN', dial: '+504' },
  { iso: 'HU', dial: '+36' },
  { iso: 'IN', dial: '+91' },
  { iso: 'IE', dial: '+353' },
  { iso: 'IS', dial: '+354' },
  { iso: 'IT', dial: '+39' },
  { iso: 'JP', dial: '+81' },
  { iso: 'LU', dial: '+352' },
  { iso: 'MX', dial: '+52' },
  { iso: 'MZ', dial: '+258' },
  { iso: 'NO', dial: '+47' },
  { iso: 'PY', dial: '+595' },
  { iso: 'PE', dial: '+51' },
  { iso: 'PL', dial: '+48' },
  { iso: 'PR', dial: '+1' },
  { iso: 'GB', dial: '+44' },
  { iso: 'CZ', dial: '+420' },
  { iso: 'DO', dial: '+1' },
  { iso: 'RO', dial: '+40' },
  { iso: 'SE', dial: '+46' },
  { iso: 'CH', dial: '+41' },
  { iso: 'TH', dial: '+66' },
  { iso: 'TR', dial: '+90' },
  { iso: 'UA', dial: '+380' },
  { iso: 'UY', dial: '+598' },
  { iso: 'VE', dial: '+58' },
] as const

export const countryDialCodes: CountryDialCode[] = countryDefinitions.map((country) => ({
  ...country,
  flag: flagEmoji(country.iso),
}))

export const defaultCountryIso = 'PT'

export function findCountryByIso(iso: string): CountryDialCode {
  return countryDialCodes.find((country) => country.iso === iso) ?? countryDialCodes[0]
}

export function sortCountriesByName(
  countries: CountryDialCode[],
  locale: string,
): CountryDialCode[] {
  const displayNames = new Intl.DisplayNames([locale.startsWith('pt') ? 'pt-PT' : 'en'], {
    type: 'region',
  })

  const portugal = countries.find((country) => country.iso === defaultCountryIso)
  const others = countries
    .filter((country) => country.iso !== defaultCountryIso)
    .sort((left, right) => {
      const leftName = displayNames.of(left.iso) ?? left.iso
      const rightName = displayNames.of(right.iso) ?? right.iso
      return leftName.localeCompare(rightName, locale.startsWith('pt') ? 'pt' : 'en')
    })

  return portugal ? [portugal, ...others] : others
}

export function getCountryName(iso: string, locale: string): string {
  const displayNames = new Intl.DisplayNames([locale.startsWith('pt') ? 'pt-PT' : 'en'], {
    type: 'region',
  })

  return displayNames.of(iso) ?? iso
}
