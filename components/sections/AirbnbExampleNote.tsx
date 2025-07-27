'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { EnvelopeExterior } from '../../src/components/ui/EnvelopeExterior'
import { Home, MapPin, User, Sparkles, Phone } from 'lucide-react'

const airbnbAnnotations = [
  {
    icon: MapPin,
    label: 'References their property',
    position: 'top-[18%] left-[45%]'
  },
  {
    icon: Sparkles,
    label: 'Professional cleaning service',
    position: 'top-[30%] right-[20%]'
  },
  {
    icon: User,
    label: 'Personal introduction',
    position: 'top-[45%] left-[10%]'
  },
  {
    icon: Home,
    label: 'Turnover cleaning expertise',
    position: 'top-[60%] right-[15%]'
  },
  {
    icon: Phone,
    label: 'Easy scheduling & rates',
    position: 'bottom-[20%] left-[30%]'
  }
]

export const AirbnbExampleNote: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-teal-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-teal-900 mb-4">
              The Note That Gets You Cleaning Jobs
            </h2>
            <p className="text-xl text-gray-600">
              Handwritten letters that make new Airbnb hosts choose YOUR cleaning service
            </p>
          </motion.div>

          {/* Airbnb Service Letter Example */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-teal-50 via-white to-cyan-50 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-teal-900 mb-6 text-center">
                Cleaning Service Introduction Letters
              </h3>
              <div className="relative max-w-3xl mx-auto">
                <img 
                  src="/handwritten_airbnb.webp"
                  alt="Example handwritten letter from cleaning service to new Airbnb host"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12">
                  High Response Rate
                </div>
                
                {/* Annotations for Airbnb service letter */}
                {airbnbAnnotations.map((annotation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className={`absolute ${annotation.position}`}
                  >
                    <div className="relative group">
                      <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transform transition-transform hover:scale-110 animate-pulse">
                        <annotation.icon className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-teal-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
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
            <h3 className="text-2xl font-bold text-teal-900 mb-4">
              Why This Works for Cleaning Services:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span className="text-gray-700">Reaches hosts exactly when they need a reliable cleaner</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span className="text-gray-700">Shows you understand short-term rental cleaning needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span className="text-gray-700">Positions you as their go-to cleaner for every turnover</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span className="text-gray-700">Genuine handwritten appearance with real pen (not printed)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span className="text-gray-700">First cleaner to reach them = you win the account</span>
              </li>
            </ul>
          </motion.div>

          {/* Why Airbnb Hosts Are Great Clients */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-teal-900 mb-6 text-center">
              Why Airbnb Hosts Are Perfect for Cleaning Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">$</div>
                  <div>
                    <h4 className="font-bold text-teal-800">Predictable Income</h4>
                    <p className="text-gray-600">Average host books 4-6 cleanings per month per property</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">⟲</div>
                  <div>
                    <h4 className="font-bold text-teal-800">Recurring Cleanings</h4>
                    <p className="text-gray-600">Every checkout = a cleaning job. No need to find new clients</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-bold text-teal-800">Urgent Need</h4>
                    <p className="text-gray-600">New hosts need a cleaner ASAP for their first guests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">🎯</div>
                  <div>
                    <h4 className="font-bold text-teal-800">Few Cleaners Find Them</h4>
                    <p className="text-gray-600">Most cleaners don&apos;t know how to find new Airbnb listings</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-teal-900 mb-8 text-center">
              Premium Handwritten Envelopes
            </h3>
            <EnvelopeExterior />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}