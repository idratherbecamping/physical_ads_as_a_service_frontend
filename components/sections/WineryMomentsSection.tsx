'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Wine, Heart, Crown, Gift, Mail, Calendar } from 'lucide-react'

export const WineryMomentsSection: React.FC = () => {
  const openWaitlistForm = () => {
    window.open('https://form.jotform.com/251817337612053', '_blank')
  }

  const moments = [
    {
      id: 'welcome',
      title: '"Welcome to the Club"',
      timing: 'Day 0',
      icon: <Wine className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900',
      accentColor: 'text-purple-600',
      why: 'New-member churn in wine clubs often peaks in the first 90 days; a personal touch cements the relationship.',
      message: 'Hand-addressed card thanking them for joining, signed by the winemaker, with a tasting-room invite or 10% code for an add-on bottle.',
      cta: 'Welcome Package'
    },
    {
      id: 'winback',
      title: '"We Miss You"',
      timing: '3-6 Month Gap',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      accentColor: 'text-amber-600',
      why: 'Re-activations are far cheaper than new acquisitions; lapsed members already know the brand.',
      message: 'Note acknowledging their absence, a short update on a new vintage, and a limited re-join offer ("offer a free bottle or 50% off a bottle if they come back").',
      cta: 'Win-Back Campaign'
    },
    {
      id: 'vip',
      title: '"VIP Milestone"',
      timing: '>$1K Spend or 3-Year Anniversary',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      accentColor: 'text-green-600',
      why: 'High-LTV fans drive most DTC revenue; surprise gifts deepen loyalty.',
      message: 'Premium stationery, handwritten food-pairing tips for their favorite varietal, plus an invitation to an allocation-only release.',
      cta: 'VIP Recognition'
    }
  ]

  return (
    <Section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="info" className="mb-6">
            <Mail className="w-4 h-4 mr-2" />
            Three Key Moments
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            When Handwritten Notes
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-purple-600 mb-8">
            Move the Needle
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The three critical moments where a personal touch transforms your wine club relationship—automated and effortless.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${moment.bgColor} ${moment.borderColor} border-2 hover:shadow-xl transition-all duration-300`}>
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${moment.color} text-white mb-4 shadow-lg`}>
                      {moment.icon}
                    </div>
                    <h3 className={`text-2xl font-bold ${moment.textColor} mb-2`}>
                      {moment.title}
                    </h3>
                    <Badge variant="default" className={`${moment.accentColor}`}>
                      <Calendar className="w-4 h-4 mr-2" />
                      {moment.timing}
                    </Badge>
                  </div>

                  {/* Why it matters */}
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold ${moment.textColor} mb-3`}>
                      Why it matters to wineries
                    </h4>
                    <p className={`text-base ${moment.textColor.replace('900', '700')} leading-relaxed`}>
                      {moment.why}
                    </p>
                  </div>

                  {/* Message angle */}
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold ${moment.textColor} mb-3`}>
                      Message angle & CTA
                    </h4>
                    <p className={`text-base ${moment.textColor.replace('900', '700')} leading-relaxed`}>
                      {moment.message}
                    </p>
                  </div>

                  {/* CTA Badge */}
                  <div className="text-center">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${moment.color} text-white font-semibold text-sm shadow-md`}>
                      <Gift className="w-4 h-4 mr-2" />
                      {moment.cta}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-amber-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Wine Club?
            </h3>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Join wineries already using handwritten notes to reduce churn, increase LTV, and build lifelong member relationships.
            </p>
            <Button
              onClick={openWaitlistForm}
              size="lg"
              variant="secondary"
              className="text-xl px-10 py-5 bg-white text-purple-600 hover:bg-gray-100 shadow-xl font-bold"
            >
              Start Building Loyalty Today
            </Button>
            <p className="text-sm text-purple-200 mt-4">
              Currently full • Join the waitlist for priority access
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}