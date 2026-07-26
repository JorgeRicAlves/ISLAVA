import { Navbar } from './Navbar'

interface ProductPageHeroProps {
  titleLine1: string
  titleLine2: string
  animationAlt: string
  badge?: string
}

export function ProductPageHero({
  titleLine1,
  titleLine2,
  animationAlt,
  badge,
}: ProductPageHeroProps) {
  return (
    <>
      <Navbar variant="page" />

      <section className="relative flex min-h-[420px] flex-col items-center justify-center px-4 pb-20 pt-32 sm:min-h-[320px] sm:px-6 sm:pb-16 sm:pt-28">
        {badge && (
          <span className="absolute right-[6%] top-[22%] max-w-[180px] rounded-3xl border border-secondary bg-foreground px-4 py-5 text-center font-[family-name:var(--font-body)] text-sm font-light leading-snug text-secondary sm:static sm:mb-5 sm:max-w-none sm:px-5 sm:py-4 sm:text-base">
            {badge}
          </span>
        )}

        <h1 className="flex w-full max-w-5xl flex-col items-center text-center font-[family-name:var(--font-display)] font-bold leading-[0.85] tracking-wide text-secondary">
          <span className="whitespace-nowrap text-[clamp(2.75rem,10vw,7rem)] sm:text-[clamp(2.25rem,11vw,3.5rem)]">
            {titleLine1}
          </span>
          <span className="whitespace-nowrap text-[clamp(2.75rem,10vw,7rem)] sm:text-[clamp(2.25rem,11vw,3.5rem)]">
            {titleLine2}
          </span>
        </h1>

        <img
          src="/assets/animation.gif"
          alt={animationAlt}
          className="absolute bottom-4 w-[55px] rounded-[20px] bg-foreground object-contain sm:bottom-3"
          loading="lazy"
        />
      </section>
    </>
  )
}
