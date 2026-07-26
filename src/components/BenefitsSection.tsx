import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'
import { Container } from './Container'
import { Section } from './Section'

type BenefitIcon = 'badge-check' | 'truck' | 'badge-dollar' | 'repeat' | 'scissors' | 'headset'

function benefitBorderClass(index: number): string {
  const column = index % 3
  const isBottomRow = index >= 3

  const classes = [
    'flex flex-col items-center px-6 py-10',
    'sm:border-transparent sm:py-8',
  ]

  if (column < 2) {
    classes.push('border-r border-white/20 sm:border-r-0')
  }

  if (!isBottomRow) {
    classes.push('border-b border-white/20 sm:border-b-0')
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
    <Section className="relative z-10 bg-foreground px-6 py-14">
      <Container className="rounded-xl border border-white/15 px-6 py-10 sm:w-[99%]">
        <h2 className="text-center text-[80px] font-bold uppercase leading-none text-background sm:text-[45px]">
          {t('benefits.title')}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-lg text-background/80">
          {t('benefits.subtitle')}
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-3 border border-white/20 sm:mt-0 sm:grid-cols-1 sm:border-transparent">
          {items.map((item, index) => (
            <div key={item.text} className={benefitBorderClass(index)}>
              <Icon name={item.icon} size={70} className="mb-4 text-primary" />
              <span className="max-w-[220px] text-center font-[family-name:var(--font-body)] text-base font-semibold leading-[1.1] text-background">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
