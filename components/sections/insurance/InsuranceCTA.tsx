'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { Button } from '../../ui/Button'
import { bookInsuranceSetupCall } from './cta'
import { ArrowRight } from 'lucide-react'

export const InsuranceCTA: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-indigo-950 rounded-3xl px-8 py-14 text-white shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pick your zips and start the farm
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
            Fifteen minutes to set up: your zip codes, your agency details, and the wording
            you want on the note. The first 50 go out from there.
          </p>
          <Button
            onClick={bookInsuranceSetupCall}
            size="lg"
            className="text-lg px-10 py-5 bg-white text-indigo-900 hover:bg-indigo-50 shadow-xl group"
          >
            Book a 15-Minute Setup
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}
