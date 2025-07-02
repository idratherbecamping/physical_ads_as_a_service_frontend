'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FlyingPenProps {
  className?: string
  isWriting?: boolean
}

export const FlyingPen: React.FC<FlyingPenProps> = ({ 
  className = "", 
  isWriting = false 
}) => {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        width="80"
        height="20"
        viewBox="0 0 80 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
        initial={{ x: -20, opacity: 0 }}
        animate={{ 
          x: [0, 10, -5, 0],
          y: [0, -3, 2, 0],
          rotate: [0, 2, -1, 0],
          opacity: 1
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        {/* Pen body */}
        <motion.rect
          x="20"
          y="8"
          width="45"
          height="4"
          rx="2"
          fill="#DC2626"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Pen tip */}
        <motion.polygon
          points="65,8 75,10 65,12"
          fill="#374151"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        
        {/* Pen cap */}
        <motion.rect
          x="15"
          y="7"
          width="8"
          height="6"
          rx="3"
          fill="#1F2937"
          initial={{ x: 5 }}
          animate={{ x: 15 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
        
        {/* Writing trail */}
        {isWriting && (
          <motion.path
            d="M 75 10 Q 85 5 95 15 Q 105 25 115 15"
            stroke="#6366F1"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        )}
        
        {/* Sparkles around pen */}
        {[...Array(3)].map((_, i) => (
          <motion.circle
            key={i}
            cx={30 + i * 15}
            cy={3 + Math.sin(i) * 3}
            r="1"
            fill="#FBBF24"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        ))}
      </motion.svg>
    </div>
  )
}