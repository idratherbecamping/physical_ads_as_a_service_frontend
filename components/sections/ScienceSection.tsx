'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { ExpandableSection } from '../ui/ExpandableSection'
import { Brain, Mail, Handshake, DollarSign } from 'lucide-react'

const scienceData = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Psychology: Why Handwriting Works',
    content: `Handwriting activates the emotional centers of the brain, creating a personal connection that printed materials can't match. Recipients perceive handwritten notes as requiring effort and care, triggering the reciprocity principle - they feel obligated to respond to your personal investment.`
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Breakthrough: Standing Out in the Mailbox',
    content: `The average person receives 121 emails per day but only 2-3 pieces of handwritten mail per year. In a world of digital noise, handwritten notes achieve a 99% open rate because they're rare, personal, and impossible to ignore.`
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Reciprocity: The Science of Obligation',
    content: `Robert Cialdini's principle of reciprocity shows that when someone does something nice for us, we feel psychologically obligated to return the favor. A handwritten note creates this feeling 10x stronger than any printed advertisement.`
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'ROI: Higher Cost, Massive Returns',
    content: `While handwritten notes cost more than email ($3-5 vs $0.01), the 10% response rate versus 0.12% for email means you're getting 83x more responses per dollar spent. One new customer typically pays for 3-6 months of service.`
  }
]

export const ScienceSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              The Science Behind It
            </h2>
            <p className="text-xl text-gray-600">
              Backed by psychology, neuroscience, and real-world data
            </p>
          </div>

          <div className="space-y-4">
            {scienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ExpandableSection
                  title={item.title}
                  icon={item.icon}
                  defaultOpen={index === 0}
                >
                  <p className="text-gray-700 leading-relaxed">{item.content}</p>
                </ExpandableSection>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}