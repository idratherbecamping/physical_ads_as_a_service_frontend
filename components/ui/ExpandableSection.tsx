'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'

interface ExpandableSectionProps {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  icon,
  children,
  defaultOpen = false,
  className
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={cn('border border-gray-200 rounded-lg overflow-hidden', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-accent-blue">{icon}</span>}
          <h3 className="text-lg font-semibold text-deep-brown">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-gray-50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}