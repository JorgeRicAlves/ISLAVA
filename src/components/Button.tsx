import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'submit'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-2 border-card bg-transparent text-white hover:bg-card hover:text-foreground',
  secondary:
    'border-2 border-card bg-secondary text-foreground hover:bg-card',
  submit:
    'border-2 border-primary bg-secondary text-foreground hover:border-primary hover:bg-primary hover:text-background',
  ghost: 'border-transparent bg-transparent text-background hover:border-b-background',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-md px-6 py-4 font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
