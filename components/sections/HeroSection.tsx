'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { FlyingPen } from '../ui/FlyingPen'
import { AirplaneWriting } from '../../src/components/ui/AirplaneWriting'
import { CardReveal } from '../../src/components/ui/CardReveal'
import { FloatingElements } from '../ui/FloatingElements'
import { WritingAnimation } from '../ui/WritingAnimation'
import { Shield, TrendingUp, Users } from 'lucide-react'

export const HeroSection: React.FC = () => {
  const openWaitlistForm = () => {
    // Track Meta Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    window.open('https://form.jotform.com/251817337612053', '_blank')
  }

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-amber-100/50 to-amber-50 pt-32 pb-24">
      <FloatingElements />
      <Container>
        {/* Main headline across full width */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-amber-900 mb-16 leading-none tracking-tight text-center"
        >
          Get New Homeowner Leads{" "}
          <span className="text-blue-600 block mt-4">Calling You</span>
        </motion.h1>

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
                <Shield className="w-4 h-4 mr-2" />
                Trusted by Contractors Like You
              </Badge>
              <Badge variant="info" className="text-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                99% Open Rate
              </Badge>
            </div>

            <div className="space-y-6 mb-10">
              {/* Flow Step 1 */}
              <div className="bg-blue-50 border-l-8 border-blue-600 rounded-r-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                  <p className="text-xl sm:text-2xl text-blue-900 font-bold">
                    You provide your service details and target zip codes
                  </p>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Flow Step 2 */}
              <div className="bg-green-50 border-l-8 border-green-600 rounded-r-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">2</div>
                  <div>
                    <p className="text-xl sm:text-2xl text-green-900 font-bold mb-3">We automatically:</p>
                    <ul className="space-y-2 text-lg sm:text-xl text-green-800">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        Find new homeowners in your area
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        Craft personalized handwritten letters
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        Mail them monthly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Result Box */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-4 border-green-400 rounded-2xl p-8 shadow-xl text-center">
                <p className="text-3xl sm:text-4xl lg:text-5xl text-green-900 font-black">
                  <span className="text-green-600">Clients Call You</span>
                </p>
                <p className="text-2xl sm:text-3xl text-green-800 mt-2 font-bold">More Jobs, More Revenue</p>
              </div>
            </div>

            <div className="mb-10">
              <Button
                onClick={openWaitlistForm}
                size="lg"
                className="text-xl px-10 py-5 shadow-xl"
              >
                Join the Waitlist
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-amber-600">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">Monthly subscription • Fully automated • We are currently full, join the waitlist</span>
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
                className="relative transform scale-90"
              >
                <CardReveal />
              </motion.div>
              
              {/* Secondary elements */}
              <div className="flex items-center space-x-8 mt-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-white rounded-full p-3 shadow-lg border border-green-100"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 16L12 24L28 8" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg px-4 py-2 text-white shadow-lg"
                >
                  <span className="text-sm font-bold">AI-Powered</span>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg px-4 py-2 text-white shadow-lg"
                >
                  <span className="text-sm font-bold">99% Open Rate</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl" />
    </Section>
  )
}