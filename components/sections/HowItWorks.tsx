'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { FlyingPen } from '../ui/FlyingPen'
import { Settings, Search, Mail, PenTool, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "One-Time 5 Minute Setup",
    subtitle: "Just Enter Basic Details Once",
    description: "• Your business name & services\n• Target zip codes\n• Contact information",
    timeframe: "Takes 5 minutes",
    icon: Settings,
    color: "from-blue-500 to-purple-600"
  },
  {
    number: "02", 
    title: "Smart Targeting Activates",
    subtitle: "Lead Generation on Autopilot",
    description: "• Monitor home sales daily\n• Smart targeting strategy\n• Find your ideal customers",
    timeframe: "Runs forever automatically",
    icon: Search,
    color: "from-purple-500 to-pink-600"
  },
  {
    number: "03",
    title: "Personalized Marketing Created",
    subtitle: "Unique Message for Each Lead",
    description: "• Build brand awareness\n• Reference property details\n• Professional introduction",
    timeframe: "AI-powered generation",
    icon: PenTool,
    color: "from-pink-500 to-red-600"
  },
  {
    number: "04",
    title: "Monthly Lead Generation",
    subtitle: "Handwritten Letters Delivered",
    description: "• Genuine handwritten notes\n• New leads every month\n• 99% open rate",
    timeframe: "Automatic monthly delivery",
    icon: Mail,
    color: "from-green-500 to-blue-600"
  }
]

export const HowItWorks: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            <span className="font-bold text-blue-600">Sign up once in 5 minutes.</span> Our marketing engine handles lead generation forever.
          </p>
        </motion.div>

        <div className="relative">
          {/* Flow arrows */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 z-0">
            <div className="flex justify-between items-center max-w-6xl mx-auto px-8">
              {[...Array(3)].map((_, i) => (
                <ArrowRight key={i} className="w-8 h-8 text-amber-300" style={{ marginLeft: i === 0 ? '25%' : '20%' }} />
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center relative transform hover:-translate-y-2">
                  {/* Large step number */}
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-white`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mt-12 mb-4">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Title and subtitle */}
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{step.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-4">{step.subtitle}</p>
                  
                  {/* Bullet points */}
                  <div className="text-left space-y-2 mb-4">
                    {step.description.split('\n').map((bullet, i) => (
                      <p key={i} className="text-amber-700 text-sm leading-relaxed">{bullet}</p>
                    ))}
                  </div>
                  
                  {/* Timeframe badge */}
                  <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {step.timeframe}
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Ready to 10x Your Response Rate?
              </h3>
              <p className="text-amber-700 mb-6">
                Join the contractors already seeing amazing results with our handwritten lead generation system.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-amber-600 font-medium">Beat your competition to the punch - onboarding groups filling fast</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}