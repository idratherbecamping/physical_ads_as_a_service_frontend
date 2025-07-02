import React from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-white text-amber-900 border-2 border-amber-900 hover:bg-amber-900 hover:text-white',
    ghost: 'bg-transparent text-amber-900 hover:bg-gray-100'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}