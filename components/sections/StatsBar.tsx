'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Mail, Eye, MousePointer, Brain, TrendingUp, DollarSign } from 'lucide-react'

const stats = [
  {
    icon: DollarSign,
    value: 13,
    suffix: 'x',
    label: 'Average ROI',
    comparison: 'return on investment',
    featured: true,
    decimals: 0
  },
  {
    icon: Eye,
    value: 300,
    suffix: '%',
    label: 'Higher Open Rate',
    comparison: 'vs digital marketing',
    decimals: 0
  },
  {
    icon: MousePointer,
    value: 23,
    suffix: 'x',
    label: 'Response Rate',
    comparison: 'vs printed mail',
    decimals: 0
  },
  {
    icon: Brain,
    value: 7,
    suffix: 'x',
    label: 'More Memorable',
    comparison: 'than digital ads',
    decimals: 0
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
              className={`text-center rounded-xl p-6 backdrop-blur-sm ${
                stat.featured 
                  ? 'bg-gradient-to-br from-green-500/30 to-emerald-500/30 border-2 border-green-400 transform scale-110' 
                  : 'bg-white/10'
              }`}
            >
              <stat.icon className={`mx-auto mb-4 ${
                stat.featured ? 'w-14 h-14 text-green-300' : 'w-10 h-10 text-blue-300'
              }`} />
              <div className={`font-bold mb-2 text-white ${
                stat.featured ? 'text-5xl lg:text-6xl' : 'text-3xl lg:text-4xl'
              }`}>
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  duration={2}
                />
              </div>
              <div className={`font-semibold mb-2 text-white ${
                stat.featured ? 'text-xl' : 'text-lg'
              }`}>{stat.label}</div>
              <div className={`opacity-80 ${
                stat.featured ? 'text-sm text-green-100' : 'text-sm text-blue-100'
              }`}>{stat.comparison}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}