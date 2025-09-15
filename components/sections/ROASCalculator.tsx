'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Calculator, DollarSign, TrendingUp, Target, ArrowRight } from 'lucide-react'

interface CalculatorInputs {
  monthlyAdSpend: number
  avgCustomerValue: number
  currentConversionRate: number
}

export const ROASCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyAdSpend: 1500,
    avgCustomerValue: 500,
    currentConversionRate: 0.5
  })

  const openWaitlistForm = () => {
    // Track Meta Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    window.open('https://form.jotform.com/251817337612053', '_blank')
  }

  const [results, setResults] = useState({
    expectedResponses: 0,
    projectedRevenue: 0,
    roasMultiplier: 0,
    currentROAS: 0,
    currentRevenue: 0,
    currentConversions: 0
  })

  // Calculate results when inputs change
  useEffect(() => {
    // Current business calculations (using their current conversion rate)
    const currentConversionsPerMonth = (inputs.monthlyAdSpend * inputs.currentConversionRate) / 100
    const currentRevenue = currentConversionsPerMonth * inputs.avgCustomerValue
    const currentROAS = currentRevenue / inputs.monthlyAdSpend

    // Handwritten notes calculations - ALWAYS 22x ROAS
    const targetROAS = 22 // Fixed 22x ROAS based on customer results
    const projectedRevenue = inputs.monthlyAdSpend * targetROAS
    const roasMultiplier = targetROAS

    // Calculate implied metrics for display
    const costPerNote = 4
    const notesPerMonth = inputs.monthlyAdSpend / costPerNote
    const expectedResponses = projectedRevenue / inputs.avgCustomerValue

    setResults({
      expectedResponses,
      projectedRevenue,
      roasMultiplier,
      currentROAS,
      currentRevenue,
      currentConversions: currentConversionsPerMonth
    })
  }, [inputs])

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = parseFloat(value) || 0
    setInputs(prev => ({
      ...prev,
      [field]: numValue
    }))
  }


  return (
    <Section className="bg-gradient-to-br from-amber-50 to-green-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 mx-auto mb-6 text-amber-600" />
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Calculate Your ROAS Potential
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how handwritten notes could transform your marketing ROI. Based on real customer results showing 22x ROAS.
            </p>
          </div>

          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center flex items-center justify-center">
              <Target className="w-6 h-6 mr-2" />
              Your Business Details
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Monthly Ad Spend Budget
                  </label>
                  <span className="text-lg font-bold text-amber-600">
                    ${inputs.monthlyAdSpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={inputs.monthlyAdSpend}
                  onChange={(e) => handleInputChange('monthlyAdSpend', e.target.value)}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #d97706 0%, #d97706 ${((inputs.monthlyAdSpend - 50) / (3000 - 50)) * 100}%, #e5e7eb ${((inputs.monthlyAdSpend - 50) / (3000 - 50)) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$50</span>
                  <span>$3,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Average Customer Value
                  </label>
                  <span className="text-lg font-bold text-amber-600">
                    ${inputs.avgCustomerValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={inputs.avgCustomerValue}
                  onChange={(e) => handleInputChange('avgCustomerValue', e.target.value)}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #d97706 0%, #d97706 ${((inputs.avgCustomerValue - 300) / (10000 - 300)) * 100}%, #e5e7eb ${((inputs.avgCustomerValue - 300) / (10000 - 300)) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$300</span>
                  <span>$10,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Current Conversion Rate
                  </label>
                  <span className="text-lg font-bold text-amber-600">
                    {inputs.currentConversionRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="5"
                  step="0.05"
                  value={inputs.currentConversionRate}
                  onChange={(e) => handleInputChange('currentConversionRate', e.target.value)}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #d97706 0%, #d97706 ${((inputs.currentConversionRate - 0.05) / (5 - 0.05)) * 100}%, #e5e7eb ${((inputs.currentConversionRate - 0.05) / (5 - 0.05)) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.05%</span>
                  <span>5%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side by Side Comparison */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Current Business Performance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Your Current Performance
              </h3>

              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm mb-4">
                <div className="text-xs opacity-90 mb-1">Monthly Revenue</div>
                <div className="text-2xl font-bold text-red-100">
                  ${Math.round(results.currentRevenue).toLocaleString()}
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-xs font-semibold mb-1 opacity-90">Current ROAS</div>
                <div className="text-3xl font-bold">
                  {results.currentROAS.toFixed(1)}x
                </div>
                <div className="text-xs opacity-80 mt-1">
                  (Return on Ad Spend)
                </div>
              </div>
            </motion.div>

            {/* PenPal Pro Performance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                With PenPal Pro
              </h3>

              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm mb-4">
                <div className="text-xs opacity-90 mb-1">Monthly Revenue</div>
                <div className="text-2xl font-bold text-green-100">
                  ${Math.round(results.projectedRevenue).toLocaleString()}
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-4 text-center mb-3">
                <div className="text-xs font-semibold text-orange-900 mb-1">Average ROAS*</div>
                <div className="text-3xl font-bold text-orange-900">
                  22.0x
                </div>
                <div className="text-xs text-orange-800 mt-1">
                  (Return on Ad Spend)
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                <div className="text-xs opacity-90 mb-1">Improvement</div>
                <div className="text-xl font-bold text-yellow-300">
                  {results.currentROAS > 0 ? `+${(((22 - results.currentROAS) / results.currentROAS) * 100).toFixed(0)}%` : '+∞%'}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >

            <Button
              onClick={openWaitlistForm}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-lg px-8 py-4"
            >
              Join the Waitlist <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500 max-w-lg mx-auto">
              *Average ROAS based on previous customer results. Individual results may vary.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}