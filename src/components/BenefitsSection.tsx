import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'
import { Container } from './Container'
import { Section } from './Section'

type BenefitIcon = 'badge-check' | 'truck' | 'badge-dollar' | 'repeat' | 'scissors' | 'headset'

function desktopBorderClass(index: number): string {
  const column = index % 3
  const isBottomRow = index >= 3

  const classes: string[] = []

  if (column < 2) {
    classes.push('md:border-r md:border-white/20')
  }

  if (!isBottomRow) {
    classes.push('md:border-b md:border-white/20')
  }

  return classes.join(' ')
}

export function BenefitsSection() {
  const { t } = useTranslation()
  const items = t('benefits.items', { returnObjects: true }) as Array<{
    icon: BenefitIcon
    text: string
  }>

  return (
    <Section className="relative z-10 bg-foreground px-4 py-10 md:px-6 md:py-12">
      <Container className="rounded-xl border border-white/15 px-4 py-8 md:px-6 md:py-8">
        <h2 className="text-center text-[45px] font-bold uppercase leading-none text-background md:text-[64px]">
          {t('benefits.title')}
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-center text-base text-background/80 md:mb-8 md:text-lg">
          {t('benefits.subtitle')}
        </p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-white/20 md:grid-cols-3 md:divide-y-0">
          {items.map((item, index) => (
            <div
              key={item.text}
              className={`flex items-center gap-4 px-2 py-4 md:flex-col md:items-center md:gap-0 md:px-4 md:py-6 ${desktopBorderClass(index)}`}
            >
              <Icon
                name={item.icon}
                size={56}
                className="h-11 w-11 shrink-0 text-primary md:mb-3 md:h-14 md:w-14"
              />
              <span className="text-left font-[family-name:var(--font-body)] text-sm font-semibold leading-snug text-background md:max-w-[200px] md:text-center md:text-[15px] md:leading-[1.15]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
