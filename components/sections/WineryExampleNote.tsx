'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { EnvelopeExterior } from '../../src/components/ui/EnvelopeExterior'
import { Wine, Heart, User, Gift } from 'lucide-react'

const wineryAnnotations = [
  {
    icon: Wine,
    label: 'Personal winery branding',
    position: 'top-[15%] left-[5%]'
  },
  {
    icon: User,
    label: 'Signed by winemaker',
    position: 'bottom-[7%] right-[20%]'
  },
  {
    icon: Heart,
    label: 'Genuine handwritten with real pen',
    position: 'top-[50%] left-[5%]'
  },
  {
    icon: Gift,
    label: 'Personalized welcome message',
    position: 'top-[4%] left-[38%]'
  }
]

export const WineryExampleNote: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-purple-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              The Personal Touch That Builds Loyalty
            </h2>
            <p className="text-xl text-gray-600">
              See how a handwritten welcome note transforms new wine club members into lifelong advocates
            </p>
          </motion.div>

          {/* Winery Welcome Note Example */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-purple-50 via-white to-amber-50 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">
                Wine Club Welcome Note
              </h3>
              <div className="relative max-w-3xl mx-auto">
                <img 
                  src="/winery_club_welcome.png"
                  alt="Handwritten wine club welcome note from Oak Valley Winery"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                
                {/* Oak Valley Winery Logo Overlay */}
                <img 
                  src="/oak_valley_winery_logo.png"
                  alt="Oak Valley Winery Logo"
                  className="absolute top-4 left-4 h-16 w-auto opacity-80 mix-blend-multiply"
                />
                
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12">
                  Personal Touch
                </div>
                
                {/* Annotations for winery note */}
                {wineryAnnotations.map((annotation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className={`absolute ${annotation.position}`}
                  >
                    <div className="relative group">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transform transition-transform hover:scale-110 animate-pulse">
                        <annotation.icon className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-purple-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {annotation.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 bg-white rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              What Makes Our Wine Club Notes Special:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">✓</span>
                <span className="text-gray-700">Personalized with member&apos;s name and wine preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">✓</span>
                <span className="text-gray-700">Signed by the actual winemaker for authentic connection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">✓</span>
                <span className="text-gray-700">Includes exclusive offers like tasting room invites or member discounts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">✓</span>
                <span className="text-gray-700">Genuine handwritten appearance with real pen (not printed)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">✓</span>
                <span className="text-gray-700">Timed perfectly for maximum impact at key moments</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-purple-900 mb-8 text-center">
              Premium Handwritten Envelopes
            </h3>
            <EnvelopeExterior />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}