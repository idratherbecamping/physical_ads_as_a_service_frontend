'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Bot, Edit3, Upload, Sparkles, Clock, Users, CheckCircle } from 'lucide-react'

export const WeddingFeaturesSection: React.FC = () => {
  const openWaitlistForm = () => {
    window.open('https://form.jotform.com/251817337612053', '_blank')
  }

  const features = [
    {
      id: 'automated',
      title: 'Automated Path',
      subtitle: 'Perfect for busy couples',
      icon: <Bot className="w-8 h-8" />,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      textColor: 'text-rose-900',
      steps: [
        { icon: <Upload className="w-5 h-5" />, text: 'Upload guest list with gifts' },
        { icon: <Bot className="w-5 h-5" />, text: 'AI writes personalized messages' },
        { icon: <CheckCircle className="w-5 h-5" />, text: 'Approve or edit each note' },
        { icon: <Sparkles className="w-5 h-5" />, text: 'We handwrite and mail them' }
      ],
      benefits: [
        'Save 40+ hours of writing',
        'Unique message for each gift',
        'Professional tone & grammar',
        'References specific gift details'
      ],
      price: '$10/card'
    },
    {
      id: 'custom',
      title: 'Custom Path',  
      subtitle: 'For the personal touch',
      icon: <Edit3 className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900',
      steps: [
        { icon: <Upload className="w-5 h-5" />, text: 'Upload guest list' },
        { icon: <Edit3 className="w-5 h-5" />, text: 'Type each message yourself' },
        { icon: <CheckCircle className="w-5 h-5" />, text: 'Review your messages' },
        { icon: <Sparkles className="w-5 h-5" />, text: 'We handwrite and mail them' }
      ],
      benefits: [
        'Complete creative control',
        'Express your unique voice',
        'Add inside jokes & memories',
        'Perfect for special relationships'
      ],
      price: '$9/card'
    }
  ]

  return (
    <Section className="py-24 bg-gradient-to-b from-white to-rose-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="info" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Two Ways to Thank
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you want AI assistance or complete control, we&apos;ll handwrite every note with real pen and mail them for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${feature.bgColor} ${feature.borderColor} border-2 hover:shadow-xl transition-all duration-300`}>
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className={`text-3xl font-bold ${feature.textColor} mb-2`}>
                      {feature.title}
                    </h3>
                    <p className={`text-lg ${feature.textColor.replace('900', '700')} mb-4`}>
                      {feature.subtitle}
                    </p>
                    <div className={`text-2xl font-black ${feature.textColor}`}>
                      {feature.price}
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="mb-8">
                    <h4 className={`text-lg font-bold ${feature.textColor} mb-4`}>
                      How it works:
                    </h4>
                    <div className="space-y-3">
                      {feature.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-3">
                          <div className={`p-2 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                            {step.icon}
                          </div>
                          <span className={`${feature.textColor.replace('900', '700')}`}>
                            {step.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className={`text-lg font-bold ${feature.textColor} mb-4`}>
                      Perfect for:
                    </h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircle className={`w-5 h-5 ${feature.textColor.replace('text-', 'text-').replace('-900', '-600')} mt-0.5 flex-shrink-0`} />
                          <span className={`${feature.textColor.replace('900', '700')}`}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Both Paths Include:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Real Handwriting</h4>
              <p className="text-gray-600">Every note written by hand with real pen - never printed</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Beautiful Stationery</h4>
              <p className="text-gray-600">Premium paper options and matching addressed envelopes</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Notes mailed within 3-5 business days of approval</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Check This Off Your List?
            </h3>
            <p className="text-xl mb-8 text-rose-100 max-w-2xl mx-auto">
              Join couples who&apos;ve saved dozens of hours while sending beautiful, personal thank you notes.
            </p>
            <Button
              onClick={openWaitlistForm}
              size="lg"
              variant="secondary"
              className="text-xl px-10 py-5 bg-white text-rose-600 hover:bg-rose-50 shadow-xl font-bold"
            >
              Get Your Free Quote
            </Button>
            <p className="text-sm text-rose-200 mt-4">
              Upload your guest list for instant pricing • No commitment required
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}