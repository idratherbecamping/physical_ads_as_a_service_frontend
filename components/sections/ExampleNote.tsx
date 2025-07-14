'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { FlyingPen } from '../ui/FlyingPen'
import { EnvelopeExterior } from '../../src/components/ui/EnvelopeExterior'
import { MapPin, Home, User, Heart } from 'lucide-react'

const annotations = [
  {
    icon: MapPin,
    label: 'Actual property address',
    position: 'top-[21%] right-[1%]'
  },
  {
    icon: Home,
    label: 'Specific home features',
    position: 'top-[25%] right-[7%]'
  },
  {
    icon: User,
    label: 'Personal introduction',
    position: 'top-[41%] left-[3%]'
  },
  {
    icon: Heart,
    label: 'Genuine handwritten',
    position: 'bottom-[33%] right-[10%]'
  }
]

const redactedLetterAnnotations = [
  {
    icon: MapPin,
    label: 'Mentions specific address',
    position: 'top-[18%] left-[45%]'
  },
  {
    icon: Home,
    label: 'Specific home features',
    position: 'top-[24%] left-[20%]'
  },
  {
    icon: User,
    label: 'Personal intro',
    position: 'top-[32%] right-[25%]'
  },
  {
    icon: Heart,
    label: 'Handwritten with real pen',
    position: 'bottom-[20%] left-[30%]'
  }
]

export const ExampleNote: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              The Note That Gets Results
            </h2>
            <p className="text-xl text-gray-600">
              Every detail is personalized to create a genuine connection
            </p>
          </motion.div>


          {/* Real Letter Example - Full Width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                Letters Sent to New Homeowners
              </h3>
              <div className="relative max-w-3xl mx-auto">
                <img 
                  src="/redacted_letter_connor.png"
                  alt="Real handwritten letter example"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12">
                  99% Open Rate
                </div>
                
                {/* Annotations for redacted letter */}
                {redactedLetterAnnotations.map((annotation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className={`absolute ${annotation.position}`}
                  >
                    <div className="relative group">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transform transition-transform hover:scale-110 animate-pulse">
                        <annotation.icon className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-amber-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
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
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              What Makes Our Notes Different:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-gray-700">Mentions the actual property address</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-gray-700">References specific home features from MLS data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-gray-700">Personal introduction from your business</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-gray-700">Genuine handwritten appearance with a real pen (not printed)</span>
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
            <h3 className="text-2xl font-bold text-amber-900 mb-8 text-center">
              Handwritten Envelope Exteriors
            </h3>
            <EnvelopeExterior />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}