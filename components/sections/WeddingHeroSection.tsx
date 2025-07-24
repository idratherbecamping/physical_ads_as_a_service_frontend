'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { FloatingElements } from '../ui/FloatingElements'
import { AirplaneWriting } from '../../src/components/ui/AirplaneWriting'
import { CardReveal } from '../../src/components/ui/CardReveal'
import { Heart, Clock, Sparkles, CheckCircle } from 'lucide-react'

export const WeddingHeroSection: React.FC = () => {
  const openWaitlistForm = () => {
    window.open('https://form.jotform.com/251817337612053', '_blank')
  }

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-rose-100/50 to-pink-50 pt-32 pb-24">
      <FloatingElements />
      <Container>
        {/* Main headline across full width */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-rose-900 mb-8 leading-none tracking-tight text-center"
        >
          Wedding Thank You Notes{" "}
          <span className="text-pink-600 block mt-4">Made Easy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl text-rose-800 font-medium text-center max-w-4xl mx-auto mb-16 leading-relaxed"
        >
          Send <span className="text-pink-600 font-bold">200 thank you notes</span> in <span className="text-rose-600 font-bold">20 minutes</span>. Every note <span className="text-purple-600 font-bold">handwritten with real pen</span> and <span className="text-pink-600 font-bold">personalized for each gift</span>.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Badge variant="success" className="text-sm">
                <Heart className="w-4 h-4 mr-2" />
                For Newlyweds
              </Badge>
              <Badge variant="warning" className="text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Save 40+ Hours
              </Badge>
              <Badge variant="info" className="text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Stress-Free
              </Badge>
            </div>

            <div className="space-y-6 mb-10">
              {/* Flow Step 1 */}
              <div className="bg-rose-50 border-l-8 border-rose-600 rounded-r-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <p className="text-xl sm:text-2xl text-rose-900 font-bold">
                      Upload your guest list & gifts
                    </p>
                    <p className="text-lg text-rose-800 mt-1">
                      Simple spreadsheet with names and what they gave
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Flow Step 2 */}
              <div className="bg-pink-50 border-l-8 border-pink-600 rounded-r-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">2</div>
                  <div>
                    <p className="text-xl sm:text-2xl text-pink-900 font-bold mb-3">Choose your path:</p>
                    <ul className="space-y-2 text-lg sm:text-xl text-pink-800">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600" />
                        <span className="font-semibold">Automated:</span> AI writes personalized notes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-600" />
                        <span className="font-semibold">Custom:</span> Type each message yourself
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Result Box */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-4 border-purple-400 rounded-2xl p-8 shadow-xl text-center">
                <p className="text-3xl sm:text-4xl lg:text-5xl text-purple-900 font-black">
                  <span className="text-purple-600">Beautiful Handwritten Notes</span>
                </p>
                <p className="text-2xl sm:text-3xl text-purple-800 mt-2 font-bold">Delivered to Your Guests</p>
                <p className="text-lg text-purple-700 mt-3">Check this off your list!</p>
              </div>
            </div>

            <div className="mb-10">
              <Button
                onClick={openWaitlistForm}
                size="lg"
                className="text-xl px-10 py-5 shadow-xl bg-rose-600 hover:bg-rose-700"
              >
                Get Started Today
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-rose-600">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Perfect for 20-500 guests • Beautiful stationery options</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Graphics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative flex flex-col items-center space-y-8 scale-110 transform">
              {/* Airplane writing animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full max-w-lg"
              >
                <AirplaneWriting />
              </motion.div>
              
              {/* Card reveal animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative transform scale-110"
              >
                <CardReveal />
              </motion.div>
              
              {/* Secondary elements */}
              <div className="flex items-center space-x-8 mt-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-white rounded-full p-3 shadow-lg border border-rose-100"
                >
                  <Heart className="w-8 h-8 text-rose-600" />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg px-4 py-2 text-white shadow-lg"
                >
                  <span className="text-sm font-bold">Save 40+ Hours</span>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg px-4 py-2 text-white shadow-lg"
                >
                  <span className="text-sm font-bold">100% Personal</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />
    </Section>
  )
}