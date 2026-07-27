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

      <section className="relative flex flex-col items-center justify-start px-4 pb-16 pt-44 md:px-6 md:pb-20 md:pt-52">
        <div className="flex w-full max-w-6xl flex-col items-center text-center">
          <h1 className="flex w-full flex-col items-center font-[family-name:var(--font-display)] font-bold leading-[0.85] tracking-wide text-secondary">
            <span className="whitespace-nowrap text-[clamp(4.5rem,22vw,7rem)] md:text-[clamp(5.5rem,20vw,14rem)]">
              {titleLine1}
            </span>
            <span className="whitespace-nowrap text-[clamp(4.5rem,22vw,7rem)] md:text-[clamp(5.5rem,20vw,14rem)]">
              {titleLine2}
            </span>
          </h1>

          {badge && (
            <span className="mt-5 max-w-xs rounded-3xl border border-secondary bg-foreground px-5 py-4 text-center font-[family-name:var(--font-body)] text-sm font-light leading-snug text-secondary md:mt-6 md:max-w-md md:px-6 md:py-5 md:text-base">
              {badge}
            </span>
          )}
        </div>

        <img
          src="/assets/animation.gif"
          alt={animationAlt}
          className="mt-10 w-[55px] rounded-[20px] bg-foreground object-contain md:mt-12"
          loading="lazy"
        />
      </section>
    </>
  )
}
