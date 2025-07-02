'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Home, Pen, Heart } from 'lucide-react'

export const FloatingElements: React.FC = () => {
  const elements = [
    { 
      icon: Mail, 
      color: 'text-blue-500', 
      delay: 0,
      left: '25%',
      top: '30%',
      initialX: 100,
      initialY: 150,
      animateX: [100, 200, 50],
      animateY: [150, 100, 200]
    },
    { 
      icon: Home, 
      color: 'text-amber-500', 
      delay: 0.5,
      left: '70%',
      top: '20%',
      initialX: 80,
      initialY: 120,
      animateX: [80, 180, 30],
      animateY: [120, 80, 180]
    },
    { 
      icon: Pen, 
      color: 'text-purple-500', 
      delay: 1,
      left: '40%',
      top: '70%',
      initialX: 120,
      initialY: 100,
      animateX: [120, 220, 70],
      animateY: [100, 60, 160]
    },
    { 
      icon: Heart, 
      color: 'text-red-500', 
      delay: 1.5,
      left: '60%',
      top: '50%',
      initialX: 90,
      initialY: 130,
      animateX: [90, 190, 40],
      animateY: [130, 90, 170]
    }
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className={`absolute ${Element.color}`}
          initial={{ 
            x: Element.initialX,
            y: Element.initialY,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: Element.animateX,
            y: Element.animateY,
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            delay: Element.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
          style={{
            left: Element.left,
            top: Element.top
          }}
        >
          <Element.icon size={24} />
        </motion.div>
      ))}
    </div>
  )
}