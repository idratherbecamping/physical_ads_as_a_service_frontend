'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { Button } from '../../ui/Button'
import { Badge } from '../../ui/Badge'
import { bookInsuranceSetupCall } from './cta'
import { MapPin, FileText, Car, Clock } from 'lucide-react'

export const InsuranceHeroSection: React.FC = () => {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-indigo-100/60 to-slate-50 pt-32 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="bg-indigo-100 text-indigo-800 mb-6">
            For independent personal-lines P&amp;C agencies
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-indigo-950 mb-6 leading-tight tracking-tight">
            Farm your zip codes with a{' '}
            <span className="text-indigo-600">handwritten note</span> to every new
            homeowner
          </h1>

          <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto mb-4 leading-relaxed">
            They already bought a homeowners policy at closing. It was put together in a
            hurry, by whoever the lender needed it from, in the middle of a move.
          </p>

          <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your opening is the{' '}
            <span className="font-bold text-indigo-700">30&ndash;90 day coverage review</span>
            &mdash;and the auto that comes with it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              onClick={bookInsuranceSetupCall}
              size="lg"
              className="text-lg px-10 py-5 shadow-xl bg-indigo-600 hover:bg-indigo-700"
            >
              Book a 15-Minute Setup
            </Button>
            <a
              href="#pricing"
              className="text-indigo-700 font-semibold underline underline-offset-4 hover:text-indigo-900 transition-colors"
            >
              See the pricing
            </a>
          </div>

          <p className="text-slate-600 font-medium">
            $249 for your first 50 notes, then $297/mo for 50. Cancel anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-16"
        >
          {[
            { icon: MapPin, title: 'You pick the zips', body: 'The neighborhoods you already write in.' },
            { icon: Clock, title: 'We watch the closings', body: 'New owners, mailed while the move is still fresh.' },
            { icon: FileText, title: 'The review is the offer', body: 'A second read of the policy they signed at closing.' },
            { icon: Car, title: 'Auto is the second call', body: 'Once you have the home in front of you, ask about the cars.' }
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-md border border-indigo-100 text-left"
            >
              <Icon className="w-6 h-6 text-indigo-600 mb-3" />
              <p className="font-bold text-indigo-950 mb-1">{title}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </motion.div>
      </Container>

      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
    </Section>
  )
}
