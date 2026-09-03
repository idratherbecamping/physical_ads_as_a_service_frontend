'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { MapPin, FileText, Car, PenLine } from 'lucide-react'

const callouts = [
  {
    icon: MapPin,
    title: 'Their actual street',
    body: 'Not "Dear Homeowner." The note names the house they just bought.'
  },
  {
    icon: FileText,
    title: 'The rushed closing policy',
    body: 'The reason to call is a second read of coverage nobody walked them through.'
  },
  {
    icon: Car,
    title: 'Auto comes second',
    body: 'Mentioned, not pushed. The home review is what gets the appointment.'
  },
  {
    icon: PenLine,
    title: 'Written, not printed',
    body: 'Real pen, real card stock, hand-addressed, first-class stamp.'
  }
]

export const InsuranceExampleNote: React.FC = () => {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-4">
              What lands in the mailbox
            </h2>
            <p className="text-lg text-slate-600">
              You approve the wording before anything goes out. This is the starting point.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="paper-texture p-8 sm:p-10"
            >
              <div className="handwritten-text text-lg sm:text-xl space-y-4 relative z-10">
                <p>Hi Sarah,</p>
                <p>
                  Congratulations on the place on Maple Ave &mdash; I saw it closed last
                  month.
                </p>
                <p>
                  The homeowners policy you signed at closing was almost certainly put
                  together in a hurry. Most are. I&apos;m an independent agent here in
                  town, and I&apos;m happy to read it over with you &mdash; dwelling limit,
                  deductible, water backup, the parts nobody explains at the table. About
                  15 minutes, no cost. If it&apos;s already right, I&apos;ll tell you it&apos;s
                  right.
                </p>
                <p>
                  If your auto renews soon, bring that too. Putting both with one carrier
                  usually helps.
                </p>
                <p className="handwritten-signature text-xl pt-2">
                  &mdash; Mark Ellis, Ellis Insurance
                  <br />
                  (555) 014-2288
                </p>
              </div>
            </motion.div>

            <div className="space-y-5">
              {callouts.map(({ icon: Icon, title, body }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-slate-200"
                >
                  <Icon className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-indigo-950 mb-1">{title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-sm text-slate-500 text-center mt-10 max-w-2xl mx-auto">
            Example wording. Names, agency and phone number are placeholders &mdash; yours
            go on the real notes, and you sign off on the copy before the first mailing.
          </p>
        </div>
      </Container>
    </Section>
  )
}
