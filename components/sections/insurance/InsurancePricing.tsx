'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { Button } from '../../ui/Button'
import { bookInsuranceSetupCall } from './cta'
import { CONTACT_EMAIL } from '@/lib/cta'
import { Check, MapPin } from 'lucide-react'

const included = [
  'New homeowner records pulled monthly for your zip codes',
  'Notes written with a real pen on card stock',
  'Hand-addressed envelopes, first-class stamps',
  'Your agency name, license and phone on every note',
  'Copy you approve before the first mailing'
]

export const InsurancePricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-gradient-to-br from-indigo-50 to-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-4">
              The offer
            </h2>
            <p className="text-lg text-slate-600">
              One price, one number of notes. Nothing to negotiate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl border-2 border-indigo-200 overflow-hidden"
          >
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              <div className="p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-2">
                  First month
                </p>
                <p className="text-5xl font-black text-indigo-950">$249</p>
                <p className="text-slate-600 mt-2">50 handwritten notes</p>
              </div>
              <div className="p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-2">
                  Every month after
                </p>
                <p className="text-5xl font-black text-indigo-950">
                  $297<span className="text-2xl font-bold text-slate-500">/mo</span>
                </p>
                <p className="text-slate-600 mt-2">50 handwritten notes</p>
              </div>
            </div>

            <div className="border-t border-indigo-200 bg-indigo-50 px-8 py-5 flex items-center justify-center gap-3 text-center">
              <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0" />
              <p className="font-semibold text-indigo-950">
                One agency per zip code. The first agency in a zip owns it.
              </p>
            </div>

            <div className="border-t border-slate-200 p-8">
              <ul className="space-y-3 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Button
                  onClick={bookInsuranceSetupCall}
                  size="lg"
                  className="text-lg px-10 py-5 w-full sm:w-auto shadow-lg bg-indigo-600 hover:bg-indigo-700"
                >
                  Book a 15-Minute Setup
                </Button>
                <p className="text-sm text-slate-500 mt-4">
                  Cancel anytime. Questions first? Email {CONTACT_EMAIL}.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
