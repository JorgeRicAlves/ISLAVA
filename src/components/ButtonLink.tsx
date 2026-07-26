import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonLinkVariant = 'primary' | 'secondary'

interface ButtonLinkProps {
  to: string
  children: ReactNode
  variant?: ButtonLinkVariant
  className?: string
}

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    'border-2 border-card bg-transparent text-white hover:bg-card hover:text-foreground',
  secondary:
    'border-2 border-card bg-secondary text-foreground hover:bg-card',
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-md px-6 py-4 text-center font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
