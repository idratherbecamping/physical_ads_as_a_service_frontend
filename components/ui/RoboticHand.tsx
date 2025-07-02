'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface RoboticHandProps {
  className?: string
  isWriting?: boolean
}

export const RoboticHand: React.FC<RoboticHandProps> = ({ 
  className = "", 
  isWriting = false 
}) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Robotic arm base */}
        <motion.rect
          x="45"
          y="80"
          width="30"
          height="40"
          rx="15"
          fill="#374151"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Joint */}
        <motion.circle
          cx="60"
          cy="75"
          r="8"
          fill="#6B7280"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        
        {/* Upper arm */}
        <motion.rect
          x="52"
          y="45"
          width="16"
          height="35"
          rx="8"
          fill="#4B5563"
          initial={{ y: 60 }}
          animate={{ y: 45 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
        
        {/* Hand palm */}
        <motion.ellipse
          cx="60"
          cy="35"
          rx="12"
          ry="15"
          fill="#6366F1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        />
        
        {/* Fingers */}
        <motion.rect
          x="52"
          y="20"
          width="3"
          height="18"
          rx="1.5"
          fill="#4F46E5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
        />
        <motion.rect
          x="57"
          y="15"
          width="3"
          height="23"
          rx="1.5"
          fill="#4F46E5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, delay: 0.6 }}
        />
        <motion.rect
          x="62"
          y="17"
          width="3"
          height="21"
          rx="1.5"
          fill="#4F46E5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, delay: 0.7 }}
        />
        <motion.rect
          x="67"
          y="22"
          width="3"
          height="16"
          rx="1.5"
          fill="#4F46E5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2, delay: 0.8 }}
        />
        
        {/* Pen in hand */}
        {isWriting && (
          <motion.rect
            x="58"
            y="8"
            width="2"
            height="25"
            rx="1"
            fill="#DC2626"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 8 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          />
        )}
        
        {/* Writing motion lines */}
        {isWriting && (
          <>
            <motion.path
              d="M 75 35 Q 85 25 95 35"
              stroke="#6366F1"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 75 45 Q 90 40 100 50"
              stroke="#6366F1"
              strokeWidth="2"
              fill="none"
              strokeDasharray="3,3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
            />
          </>
        )}
        
        {/* Tech details */}
        <motion.circle
          cx="45"
          cy="90"
          r="2"
          fill="#10B981"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.circle
          cx="75"
          cy="90"
          r="2"
          fill="#F59E0B"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 1.7, repeat: Infinity, repeatDelay: 2 }}
        />
      </svg>
    </div>
  )
}