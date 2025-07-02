'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface WritingAnimationProps {
  className?: string
}

export const WritingAnimation: React.FC<WritingAnimationProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="200"
        height="100"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Paper lines */}
        <line x1="20" y1="30" x2="180" y2="30" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="20" y1="50" x2="180" y2="50" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="20" y1="70" x2="180" y2="70" stroke="#F3F4F6" strokeWidth="1" />
        
        {/* Handwritten text paths */}
        <motion.path
          d="M 25 35 Q 35 25 45 35 Q 55 45 65 35"
          stroke="#6366F1"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 75 35 Q 85 25 95 35 Q 105 45 115 35 Q 125 25 135 35"
          stroke="#6366F1"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 25 55 Q 35 45 45 55 Q 55 65 75 55 Q 95 45 115 55"
          stroke="#6366F1"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
        />
        
        {/* Pen tip */}
        <motion.circle
          cx="25"
          cy="35"
          r="2"
          fill="#DC2626"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            cx: [25, 65, 135, 115],
            cy: [35, 35, 35, 55]
          }}
          transition={{ 
            duration: 6, 
            delay: 0.5,
            times: [0, 0.3, 0.7, 1],
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
        
        {/* Sparkles */}
        {[...Array(3)].map((_, i) => (
          <motion.circle
            key={i}
            cx={40 + i * 30}
            cy={20 + i * 10}
            r="1.5"
            fill="#FBBF24"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1,
              delay: 2 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 4
            }}
          />
        ))}
      </svg>
    </div>
  )
}