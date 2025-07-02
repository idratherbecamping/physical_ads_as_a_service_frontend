import React from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id
}) => {
  return (
    <section
      id={id}
      className={cn('section-padding', className)}
    >
      {children}
    </section>
  )
}