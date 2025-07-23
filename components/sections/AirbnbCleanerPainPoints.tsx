'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Search, XCircle, TrendingDown, Users, CheckCircle2, Sparkles } from 'lucide-react'

export const AirbnbCleanerPainPoints: React.FC = () => {
  const painPoints = [
    {
      icon: <Search className="w-6 h-6" />,
      problem: "Can't Find New Airbnb Listings",
      solution: "We monitor and find them automatically",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      problem: "Hosts Already Have a Cleaner",
      solution: "Reach them FIRST when they're looking",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      problem: "Unpredictable Income",
      solution: "Build recurring client base steadily",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      problem: "Competing on Price Alone",
      solution: "Personal touch wins over cheap rates",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <Section className="py-24 bg-gradient-to-b from-white to-teal-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="warning" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            The Cleaner&apos;s Dilemma
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            The Problem Every Cleaner Faces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You&apos;re great at cleaning, but finding new Airbnb clients? That&apos;s the hard part.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${point.color} text-white shadow-lg`}>
                      {point.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {point.problem}
                      </h3>
                      <div className="flex items-center gap-2 text-teal-600">
                        <CheckCircle2 className="w-5 h-5" />
                        <p className="font-semibold">{point.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            Stop Chasing Clients. Let Them Come to You.
          </h3>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
            We find new Airbnb listings the moment they go live and send handwritten letters from you. 
            No more searching, no more cold calling. Just your phone ringing with hosts who need cleaning services.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-teal-200">Automated</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5 min</div>
              <div className="text-teal-200">Setup Time</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">∞</div>
              <div className="text-teal-200">Recurring Jobs</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}