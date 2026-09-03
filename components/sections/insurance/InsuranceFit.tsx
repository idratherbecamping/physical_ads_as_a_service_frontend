'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { Check, X } from 'lucide-react'

const fits = [
  'Independent personal-lines agencies writing home and auto',
  'Agencies with a defined territory they want to own',
  'Producers who would rather do a coverage review than chase a quote form',
  'Anyone who wants a monthly mailing that runs without them'
]

const doesNotFit = [
  'Agencies that cannot appoint outside a single carrier',
  'Commercial-only or life-only books',
  'Anyone looking for shared or resold internet quote requests',
  'Anyone who wants volume over conversations'
]

export const InsuranceFit: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-10 text-center"
          >
            Who this is built for
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-2xl p-7 border border-emerald-200">
              <h3 className="font-bold text-emerald-900 text-lg mb-4">A good fit</h3>
              <ul className="space-y-3">
                {fits.map((item) => (
                  <li key={item} className="flex gap-3 text-emerald-900">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
              <h3 className="font-bold text-slate-800 text-lg mb-4">Not a fit</h3>
              <ul className="space-y-3">
                {doesNotFit.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
