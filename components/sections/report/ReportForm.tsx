'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Wrench, ArrowRight } from 'lucide-react'
import { Button } from '../../ui/Button'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import type { Trade } from '@/lib/api'

interface ReportFormProps {
  onSubmit: (values: { email: string; zip: string; trade: Trade }) => void
  defaultTrade?: Trade
}

export const ReportForm: React.FC<ReportFormProps> = ({
  onSubmit,
  defaultTrade = 'hvac',
}) => {
  const [email, setEmail] = useState('')
  const [zip, setZip] = useState('')
  const [trade, setTrade] = useState<Trade>(defaultTrade)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!/^\d{5}$/.test(zip.trim())) {
      setError('Please enter a 5-digit zip code.')
      return
    }

    // Track Meta Pixel Lead event (matches existing ROASCalculator pattern)
    if (typeof window !== 'undefined') {
      const fbq = (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq
      if (fbq) fbq('track', 'Lead')
    }

    onSubmit({ email: email.trim(), zip: zip.trim(), trade })
  }

  return (
    <Section className="bg-gradient-to-br from-amber-50 to-green-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              See exactly what you&apos;re missing
            </h1>
            <p className="text-lg text-gray-700">
              We&apos;ll pull real new-homeowner data for your zip and show you
              the addressable revenue your competitors are quietly capturing.
              Free, instant, no spam.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-amber-100"
          >
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-amber-900 mb-2">
                <Wrench className="w-4 h-4" />
                Your trade
              </label>
              <select
                value={trade}
                onChange={(e) => setTrade(e.target.value as Trade)}
                className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-base bg-white"
              >
                <option value="hvac">HVAC</option>
                <option value="fencing">Fencing</option>
                <option value="pool">Pool service</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-amber-900 mb-2">
                <MapPin className="w-4 h-4" />
                Your zip code
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]{5}"
                maxLength={5}
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="92626"
                className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-base"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-amber-900 mb-2">
                <Mail className="w-4 h-4" />
                Your email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourcompany.com"
                className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-base"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm font-medium">{error}</div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-amber-900 hover:bg-amber-800"
            >
              Show me the report
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-xs text-gray-500 text-center">
              We use this data only to generate your report. No sales calls.
            </p>
          </form>
        </motion.div>
      </Container>
    </Section>
  )
}
