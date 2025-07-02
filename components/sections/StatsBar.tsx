'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Mail, Eye, MousePointer, Brain } from 'lucide-react'

const stats = [
  {
    icon: Eye,
    value: 99,
    suffix: '%',
    label: 'Open Rate',
    comparison: 'vs 42% for printed mail'
  },
  {
    icon: MousePointer,
    value: 10,
    suffix: '%',
    label: 'Response Rate',
    comparison: 'vs 0.12% for email'
  },
  {
    icon: Brain,
    value: 7,
    suffix: 'x',
    label: 'More Memorable',
    comparison: 'than digital ads'
  },
  {
    icon: Mail,
    value: 3.4,
    suffix: 'x',
    decimals: 1,
    label: 'Better Performance',
    comparison: 'than printed mailers'
  }
]

export const StatsBar: React.FC = () => {
  return (
    <Section className="bg-amber-900 text-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-blue-300" />
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  duration={2}
                />
              </div>
              <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
              <div className="text-sm opacity-80 text-blue-100">{stat.comparison}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}