'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface DrawingPenProps {
  className?: string
}

export const DrawingPen: React.FC<DrawingPenProps> = ({ className = "" }) => {
  const [pathData, setPathData] = useState("")
  const [currentPosition, setCurrentPosition] = useState({ x: 50, y: 50 })

  // Define drawing path points for handwritten text
  const drawingPoints = [
    // "Hello" word
    { x: 50, y: 60 }, // H
    { x: 50, y: 40 },
    { x: 55, y: 50 },
    { x: 60, y: 40 },
    { x: 60, y: 60 },
    
    { x: 70, y: 60 }, // e
    { x: 75, y: 45 },
    { x: 80, y: 50 },
    { x: 75, y: 55 },
    
    { x: 85, y: 40 }, // l
    { x: 85, y: 60 },
    
    { x: 90, y: 40 }, // l
    { x: 90, y: 60 },
    
    { x: 95, y: 45 }, // o
    { x: 100, y: 50 },
    { x: 105, y: 45 },
    { x: 100, y: 55 },
    { x: 95, y: 50 },
    
    // Move to next line
    { x: 50, y: 80 }, // "there"
    { x: 55, y: 70 },
    { x: 60, y: 80 },
    { x: 65, y: 75 },
    { x: 70, y: 80 },
    { x: 75, y: 70 },
    { x: 80, y: 80 },
    { x: 85, y: 75 },
    { x: 90, y: 80 }
  ]

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < drawingPoints.length) {
        const point = drawingPoints[currentIndex]
        setCurrentPosition(point)
        
        // Build the path data
        setPathData(prev => {
          if (currentIndex === 0) {
            return `M ${point.x} ${point.y}`
          } else {
            return `${prev} L ${point.x} ${point.y}`
          }
        })
        
        currentIndex++
      } else {
        // Reset and start over
        setTimeout(() => {
          setPathData("")
          currentIndex = 0
        }, 2000)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <svg
        width="200"
        height="120"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Background paper texture */}
        <rect 
          width="200" 
          height="120" 
          fill="#FEFEFE" 
          stroke="#E5E7EB" 
          strokeWidth="1"
          rx="4"
        />
        
        {/* Ruled lines */}
        <line x1="20" y1="40" x2="180" y2="40" stroke="#F3F4F6" strokeWidth="0.5" />
        <line x1="20" y1="60" x2="180" y2="60" stroke="#F3F4F6" strokeWidth="0.5" />
        <line x1="20" y1="80" x2="180" y2="80" stroke="#F3F4F6" strokeWidth="0.5" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="#F3F4F6" strokeWidth="0.5" />
        
        {/* The drawn path - this builds up over time */}
        <motion.path
          d={pathData}
          stroke="#1E40AF"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        
        {/* The pen */}
        <motion.g
          animate={{
            x: currentPosition.x - 10,
            y: currentPosition.y - 15
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {/* Pen shadow */}
          <ellipse
            cx="12"
            cy="18"
            rx="8"
            ry="2"
            fill="#00000010"
          />
          
          {/* Pen body */}
          <rect
            x="5"
            y="5"
            width="12"
            height="3"
            rx="1.5"
            fill="#DC2626"
          />
          
          {/* Pen tip */}
          <polygon
            points="17,5 22,6.5 17,8"
            fill="#374151"
          />
          
          {/* Pen cap */}
          <rect
            x="2"
            y="4.5"
            width="4"
            height="4"
            rx="2"
            fill="#1F2937"
          />
          
          {/* Ink dot at tip */}
          <motion.circle
            cx="22"
            cy="6.5"
            r="0.5"
            fill="#1E40AF"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </motion.g>
        
        {/* Sparkle effects */}
        {[...Array(3)].map((_, i) => (
          <motion.circle
            key={i}
            cx={currentPosition.x + (i - 1) * 15}
            cy={currentPosition.y - 10 - i * 5}
            r="1"
            fill="#FBBF24"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        ))}
      </svg>
    </div>
  )
}