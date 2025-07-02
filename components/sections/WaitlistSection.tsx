'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { ArrowRight, CheckCircle, Users, Clock } from 'lucide-react'

export const WaitlistSection: React.FC = () => {
  const openWaitlistForm = () => {
    // Track Meta Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    window.open('https://form.jotform.com/251817337612053', '_blank')
  }

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Be first to access when we launch"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "High traffic - next onboarding group filling fast"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Early bird pricing discount"
    }
  ]

  return (
    <Section id="waitlist" className="bg-gradient-to-br from-blue-50 to-amber-50">
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
              Join our waitlist to be among the first contractors to access our handwritten lead generation service.
            </p>

            <div className="mb-8">
              <ul className="space-y-4 max-w-md mx-auto text-left">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-amber-800"
                  >
                    <span className="text-blue-600">{benefit.icon}</span>
                    <span>{benefit.text}</span>
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
                onClick={openWaitlistForm}
                size="lg"
                className="text-xl px-12 py-6 shadow-xl group"
              >
                Join the Waitlist Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <p className="text-sm text-amber-600 mt-6">
              No spam, just updates. 
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}