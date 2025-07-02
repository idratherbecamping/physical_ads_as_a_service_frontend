'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HandwritingDemoProps {
  className?: string
  text?: string
}

export const HandwritingDemo: React.FC<HandwritingDemoProps> = ({ 
  className = "",
  text = "Congratulations!"
}) => {
  const [drawnPaths, setDrawnPaths] = useState<string[]>([])
  const [currentStroke, setCurrentStroke] = useState("")
  const [penPosition, setPenPosition] = useState({ x: 30, y: 50 })
  const [isDrawing, setIsDrawing] = useState(false)

  // Predefined letter paths for "Congratulations!"
  const letterPaths = {
    'C': "M 40 35 Q 25 25 25 50 Q 25 75 40 65",
    'o': "M 50 45 Q 60 35 70 45 Q 60 55 50 45",
    'n': "M 80 55 L 80 35 Q 85 30 95 35 L 95 55",
    'g': "M 105 45 Q 115 35 125 45 Q 115 55 105 45 L 115 65",
    'r': "M 135 55 L 135 35 Q 140 30 145 35",
    'a': "M 155 45 Q 165 35 175 45 Q 165 55 155 45 L 175 55",
    't': "M 185 25 L 185 55 M 180 35 L 190 35",
    'u': "M 200 35 L 200 50 Q 205 55 215 50 L 215 35",
    'l': "M 225 25 L 225 55",
    'a2': "M 235 45 Q 245 35 255 45 Q 245 55 235 45 L 255 55",
    't2': "M 265 25 L 265 55 M 260 35 L 270 35",
    'i': "M 280 35 L 280 55 M 280 25 L 280 30",
    'o2': "M 290 45 Q 300 35 310 45 Q 300 55 290 45",
    'n2': "M 320 55 L 320 35 Q 325 30 335 35 L 335 55",
    's': "M 345 35 Q 350 30 355 35 Q 350 45 345 50 Q 350 55 355 50",
    '!': "M 365 35 L 365 50 M 365 55 L 365 57"
  }

  const drawingSequence = [
    { letter: 'C', path: letterPaths.C, penEnd: { x: 45, y: 65 } },
    { letter: 'o', path: letterPaths.o, penEnd: { x: 70, y: 45 } },
    { letter: 'n', path: letterPaths.n, penEnd: { x: 95, y: 55 } },
    { letter: 'g', path: letterPaths.g, penEnd: { x: 125, y: 65 } },
    { letter: 'r', path: letterPaths.r, penEnd: { x: 145, y: 35 } },
    { letter: 'a', path: letterPaths.a, penEnd: { x: 175, y: 55 } },
    { letter: 't', path: letterPaths.t, penEnd: { x: 190, y: 35 } },
    { letter: 'u', path: letterPaths.u, penEnd: { x: 215, y: 35 } },
    { letter: 'l', path: letterPaths.l, penEnd: { x: 225, y: 55 } },
    { letter: 'a2', path: letterPaths.a2, penEnd: { x: 255, y: 55 } },
    { letter: 't2', path: letterPaths.t2, penEnd: { x: 270, y: 35 } },
    { letter: 'i', path: letterPaths.i, penEnd: { x: 280, y: 30 } },
    { letter: 'o2', path: letterPaths.o2, penEnd: { x: 310, y: 45 } },
    { letter: 'n2', path: letterPaths.n2, penEnd: { x: 335, y: 55 } },
    { letter: 's', path: letterPaths.s, penEnd: { x: 355, y: 50 } },
    { letter: '!', path: letterPaths['!'], penEnd: { x: 365, y: 57 } }
  ]

  useEffect(() => {
    let currentLetterIndex = 0
    
    const drawNextLetter = () => {
      if (currentLetterIndex < drawingSequence.length) {
        const currentLetter = drawingSequence[currentLetterIndex]
        
        setIsDrawing(true)
        
        // Move pen to start position and draw
        setPenPosition(currentLetter.penEnd)
        
        setTimeout(() => {
          setDrawnPaths(prev => [...prev, currentLetter.path])
          setIsDrawing(false)
          currentLetterIndex++
          
          // Schedule next letter
          setTimeout(drawNextLetter, 300)
        }, 200)
      } else {
        // Reset after completion
        setTimeout(() => {
          setDrawnPaths([])
          currentLetterIndex = 0
          setPenPosition({ x: 30, y: 50 })
          drawNextLetter()
        }, 3000)
      }
    }

    // Start the animation
    const timeout = setTimeout(drawNextLetter, 1000)
    
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <svg
        width="400"
        height="100"
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg bg-white rounded-lg border border-gray-200"
      >
        {/* Ruled line */}
        <line x1="20" y1="55" x2="380" y2="55" stroke="#F3F4F6" strokeWidth="1" />
        
        {/* All drawn paths */}
        {drawnPaths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="#1E40AF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
        
        {/* The pen */}
        <motion.g
          animate={{
            x: penPosition.x - 8,
            y: penPosition.y - 12
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Pen shadow */}
          <ellipse
            cx="10"
            cy="15"
            rx="6"
            ry="1.5"
            fill="#00000015"
          />
          
          {/* Pen body */}
          <rect
            x="4"
            y="4"
            width="10"
            height="2.5"
            rx="1.25"
            fill="#DC2626"
          />
          
          {/* Pen tip */}
          <polygon
            points="14,4 18,5.25 14,6.5"
            fill="#374151"
          />
          
          {/* Pen cap */}
          <rect
            x="2"
            y="3.5"
            width="3"
            height="3.5"
            rx="1.5"
            fill="#1F2937"
          />
          
          {/* Ink dot when drawing */}
          {isDrawing && (
            <motion.circle
              cx="18"
              cy="5.25"
              r="0.8"
              fill="#1E40AF"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 0.8, 1] }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Pen highlight */}
          <rect
            x="5"
            y="4.5"
            width="8"
            height="0.5"
            rx="0.25"
            fill="#EF4444"
            opacity="0.7"
          />
        </motion.g>
        
        {/* Sparkles when drawing */}
        {isDrawing && [...Array(2)].map((_, i) => (
          <motion.circle
            key={i}
            cx={penPosition.x + (i - 0.5) * 10}
            cy={penPosition.y - 8 - i * 3}
            r="1"
            fill="#FBBF24"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.1
            }}
          />
        ))}
      </svg>
    </div>
  )
}