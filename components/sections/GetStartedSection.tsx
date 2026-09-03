'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { bookSetupCall, CONTACT_EMAIL } from '@/lib/cta'
import { ArrowRight, CheckCircle, MapPin, Clock } from 'lucide-react'

export const GetStartedSection: React.FC = () => {
  const bookSetup = () => {
    bookSetupCall(
      'Setup call - Pen Pal Pro',
      "Hi Gannon,\n\nI'd like to book a 15-minute setup call.\n\nBusiness:\nZip codes I want to target:\nBest times to talk:\n"
    )
  }

  const steps = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: '15 minutes on a call to get your details'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'You pick the zip codes you want to farm'
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: 'Notes start going out on your first month'
    }
  ]

  return (
    <Section id="get-started" className="bg-gradient-to-br from-blue-50 to-amber-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
              Ready to Get Started?
            </h2>

            <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
              Book a 15-minute setup call. We&apos;ll go over your service area, your
              offer, and what the notes should say. Then we handle the rest.
            </p>

            <div className="mb-8">
              <ul className="space-y-4 max-w-md mx-auto text-left">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-amber-800"
                  >
                    <span className="text-blue-600">{step.icon}</span>
                    <span>{step.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={bookSetup}
                size="lg"
                className="text-xl px-12 py-6 shadow-xl group"
              >
                Book a 15-Minute Setup
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <p className="text-sm text-amber-600 mt-6">
              Or email {CONTACT_EMAIL} directly.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
