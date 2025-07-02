import React from 'react'
import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-6 shadow-md',
        hover && 'hover:shadow-xl transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}