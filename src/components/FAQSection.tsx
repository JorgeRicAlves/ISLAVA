import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './Container'
import { Section } from './Section'

export function FAQSection() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as Array<{
    question: string
    answer: string
  }>
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" className="py-12">
      <Container>
        <h2 className="mb-8 text-center text-[clamp(32px,4vw,70px)] font-bold uppercase leading-none">
          {t('faq.title')}
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.question} className="overflow-hidden rounded-lg bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full border-b border-primary bg-gray-100 p-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                </button>
                {isOpen && (
                  <div className="p-4">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
