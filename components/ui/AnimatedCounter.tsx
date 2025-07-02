'use client'

import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = ''
}) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null
      const startValue = 0
      
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = startValue + (end - startValue) * easeOutQuart
        
        setCount(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {prefix}{count.toFixed(decimals)}{suffix}
    </motion.span>
  )
}