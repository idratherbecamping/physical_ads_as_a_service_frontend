'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { EnvelopeExterior } from '../../src/components/ui/EnvelopeExterior'
import { Heart, Users, Sparkles, Gift, MessageCircle } from 'lucide-react'

const weddingAnnotations = [
  {
    icon: Users,
    label: 'Personal greeting with names',
    position: 'top-[20%] left-[10%]'
  },
  {
    icon: Gift,
    label: 'Specific gift mentioned',
    position: 'top-[35%] right-[25%]'
  },
  {
    icon: Heart,
    label: 'Emotional connection',
    position: 'top-[50%] left-[15%]'
  },
  {
    icon: Sparkles,
    label: 'Wedding memory reference',
    position: 'top-[65%] right-[20%]'
  },
  {
    icon: MessageCircle,
    label: 'Genuine handwritten signature',
    position: 'bottom-[20%] left-[30%]'
  }
]

export const WeddingExampleNote: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-rose-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-rose-900 mb-4">
              The Thank You Note That Touches Hearts
            </h2>
            <p className="text-xl text-gray-600">
              See how we turn your gift list into beautiful, personal thank you notes that guests will treasure
            </p>
          </motion.div>

          {/* Wedding Thank You Note Example */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-rose-50 via-white to-pink-50 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-rose-900 mb-6 text-center">
                Wedding Thank You Note Example
              </h3>
              <div className="relative max-w-3xl mx-auto">
                <img 
                  src="/Handwritten Thank You Note.webp"
                  alt="Example handwritten wedding thank you note"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12">
                  Personal Touch
                </div>
                
                {/* Annotations for wedding note */}
                {weddingAnnotations.map((annotation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className={`absolute ${annotation.position}`}
                  >
                    <div className="relative group">
                      <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transform transition-transform hover:scale-110 animate-pulse">
                        <annotation.icon className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-rose-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
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
            <h3 className="text-2xl font-bold text-rose-900 mb-4">
              What Makes Our Wedding Thank You Notes Special:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-rose-600 mt-1">✓</span>
                <span className="text-gray-700">Mentions the specific gift they gave you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600 mt-1">✓</span>
                <span className="text-gray-700">References a memory from your wedding day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600 mt-1">✓</span>
                <span className="text-gray-700">Expresses genuine gratitude in your voice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600 mt-1">✓</span>
                <span className="text-gray-700">Handwritten with real pen (never printed)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600 mt-1">✓</span>
                <span className="text-gray-700">Beautiful stationery that matches your style</span>
              </li>
            </ul>
          </motion.div>

          {/* Time Savings */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-rose-900 mb-6 text-center">
              The Math That Will Amaze You
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-rose-600 mb-2">100</div>
                <div className="text-gray-600">Average guest count</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-pink-600 mb-2">15 min</div>
                <div className="text-gray-600">Per handwritten note</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-600 mb-2">25 hours</div>
                <div className="text-gray-600">Total time saved</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700">
                <span className="font-bold text-rose-600">That&apos;s over a full work week</span> you get back to enjoy as newlyweds!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-rose-900 mb-8 text-center">
              Beautiful Handwritten Envelopes
            </h3>
            <EnvelopeExterior />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}