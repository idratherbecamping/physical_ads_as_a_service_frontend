'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'

const steps = [
  {
    number: '1',
    title: 'You give us your zip codes',
    body: 'The territory you already know. Fifteen minutes on a call is all the setup takes—your agency name, your license, your phone number, and the neighborhoods you want to farm.'
  },
  {
    number: '2',
    title: 'We find the homes that just closed',
    body: 'Every month we pull the new owners in your zips from recorded sales, and we mail them at the new address.'
  },
  {
    number: '3',
    title: 'A real handwritten note goes out',
    body: 'Written with a pen on card stock, hand-addressed, real stamp. It mentions their street and offers a second read of the homeowners policy they signed at closing.'
  },
  {
    number: '4',
    title: 'They call, you do the review',
    body: 'You look at the policy that got written in a rush—dwelling limit, deductible, water backup, the endorsements nobody explained. Then you ask what they are paying for the cars.'
  }
]

export const InsuranceHowItWorks: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-4">
              How the farm runs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              You set it up once. The notes go out every month whether or not you had time
              to think about marketing that week.
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <div className="bg-indigo-600 text-white rounded-full w-11 h-11 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-950 mb-2">{step.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
