'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { Button } from '../../ui/Button'
import {
  TrendingDown,
  Clock,
  AlertTriangle,
  Mail,
  ArrowRight,
} from 'lucide-react'
import type { ReportData } from '@/lib/api'

interface ReportResultProps {
  data: ReportData
  onRequestSample: () => void
  sampleConfirmed: boolean
}

const fmtMoney = (n: number) =>
  '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 })

const fmtCount = (n: number, capped: boolean) =>
  capped ? `${n}+` : n.toLocaleString('en-US')

const fmtMoneyCapped = (n: number, capped: boolean) =>
  capped ? `${fmtMoney(n)}+` : fmtMoney(n)

export const ReportResult: React.FC<ReportResultProps> = ({
  data,
  onRequestSample,
  sampleConfirmed,
}) => {
  const cappedFootnote = data.sales_365d_capped ? (
    <p className="text-xs text-gray-500 mt-2 italic">
      Real count exceeds Redfin&apos;s reporting ceiling — your true number is
      higher.
    </p>
  ) : null

  return (
    <>
      {/* Page 1 — The Number */}
      <Section className="bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center py-8"
          >
            <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-4">
              Your Opportunity Report — {data.zip}
            </p>
            {data.zero_last_month ? (
              <>
                <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6">
                  No homes sold in {data.zip} last month —
                  <br className="hidden md:block" /> but{' '}
                  <span className="text-amber-700">
                    {fmtCount(data.sales_365d, data.sales_365d_capped)}
                  </span>{' '}
                  sold over the past year.
                </h2>
              </>
            ) : (
              <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6">
                <span className="text-amber-700">
                  {fmtCount(data.sales_30d, data.sales_30d_capped)}
                </span>{' '}
                new homeowners moved into {data.zip} last month.
                <br className="hidden md:block" />
                <span className="text-2xl md:text-3xl text-gray-700 font-medium">
                  {fmtCount(data.sales_365d, data.sales_365d_capped)} over the
                  past 12 months.
                </span>
              </h2>
            )}
            <p className="text-lg text-gray-700">
              {data.movers_year_1_improvements_pct}% of them will start major
              home improvements this year.
            </p>
            {cappedFootnote}
          </motion.div>
        </Container>
      </Section>

      {/* Page 2 — What's Slipping Away */}
      <Section className="bg-amber-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <TrendingDown className="w-12 h-12 text-amber-700 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              What&apos;s slipping away
            </h3>
            <p className="text-xl text-gray-800 leading-relaxed">
              Of those{' '}
              <span className="font-bold">
                {fmtCount(data.sales_30d, data.sales_30d_capped)}
              </span>{' '}
              from last month, most will hire a {data.trade_label} contractor
              in their first year. Whoever reaches them first wins.
              <br />
              <span className="font-semibold text-amber-900">
                Today, that&apos;s not you.
              </span>
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Page 3 — What You're Losing Right Now */}
      <Section className="bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide text-center mb-3">
              The math
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-8">
              What you&apos;re losing right now
            </h3>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 md:p-10 border border-amber-200 shadow-sm">
              <p className="text-gray-700 mb-6 text-center">
                {fmtCount(data.sales_30d, data.sales_30d_capped)} new movers ×{' '}
                {data.pct_per_year_display}% who hire a {data.trade_label}{' '}
                contractor × {fmtMoney(data.avg_ticket)} avg ticket
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-xl p-5 shadow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Every month
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-amber-900">
                    {fmtMoney(data.monthly_addressable)}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Annual
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-amber-900">
                    {fmtMoneyCapped(data.annual_addressable, data.sales_365d_capped)}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow">
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                    5-year
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-amber-900">
                    {fmtMoneyCapped(data.five_year_addressable, data.sales_365d_capped)}
                  </div>
                </div>
              </div>

              <p className="text-center text-amber-900 font-semibold mt-8 text-lg">
                That&apos;s the addressable {data.trade_label} revenue from new
                movers in {data.zip} — going to whichever contractor reaches
                them first.
              </p>
              <p className="text-xs text-gray-500 text-center mt-2 italic">
                Sources: ACCA, HomeAdvisor, industry data.
                {data.sales_365d_capped &&
                  ' Annual figures shown as "+" reflect Redfin\'s 350-row reporting ceiling — your true numbers are higher.'}
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Page 4 — Why You Can't Just Do This Yourself */}
      <Section className="bg-amber-900 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <Clock className="w-12 h-12 text-amber-300 mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Why you can&apos;t just do this yourself
            </h3>
            <p className="text-lg md:text-xl text-amber-50 mb-6 leading-relaxed">
              Doing this manually means writing{' '}
              <span className="font-bold text-white">
                {fmtCount(data.sales_30d, data.sales_30d_capped)}
              </span>{' '}
              real handwritten letters every month. At ~10 minutes each,
              that&apos;s about{' '}
              <span className="font-bold text-white">
                {data.hours_per_month} hours/month
              </span>
              . Forever. While running a contracting business.
            </p>

            <div className="bg-amber-950/50 rounded-2xl p-6 md:p-8 my-8 border border-amber-700">
              <p className="text-amber-100 mb-4 font-semibold">
                And handwritten is the only version that works:
              </p>
              <ul className="space-y-3 text-amber-50">
                <li className="flex items-baseline gap-3">
                  <span className="text-amber-300 text-2xl font-bold w-16">
                    {Math.round(data.response_rate_printed * 100 * 10) / 10}%
                  </span>
                  <span>printed mail response rate</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-amber-300 text-2xl font-bold w-16">
                    {Math.round(data.open_rate_email * 100)}%
                  </span>
                  <span>email open rate</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-white text-2xl font-bold w-16">
                    {Math.round(data.open_rate_handwritten * 100)}%
                  </span>
                  <span className="font-semibold">
                    handwritten open rate
                  </span>
                </li>
              </ul>
              <p className="text-amber-100 mt-6">
                Result: handwritten letters get{' '}
                <span className="font-bold text-white">
                  ~{data.response_multiplier}× the response rate
                </span>{' '}
                of printed mail to the same address.
              </p>
            </div>

            <p className="text-lg md:text-xl text-amber-50 leading-relaxed">
              Two options: spend {data.hours_per_month} hours a month writing
              letters, or send something nobody opens.{' '}
              <span className="font-semibold text-white">
                That&apos;s the gap.
              </span>
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Page 5 — Your Move (CTA) */}
      <Section className="bg-gradient-to-br from-amber-50 to-green-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6">
              Pen Pal Pro closes the gap.
            </h3>
            <p className="text-lg md:text-xl text-gray-800 mb-4">
              A real handwritten letter in every new {data.zip} homeowner&apos;s
              mailbox — automated, 5-minute setup, no pen required.
            </p>
            <p className="text-amber-900 font-semibold mb-8">
              One contractor per trade per zip.
            </p>

            {sampleConfirmed ? (
              <div className="bg-green-50 border border-green-300 rounded-xl p-6 max-w-xl mx-auto">
                <Mail className="w-10 h-10 text-green-700 mx-auto mb-3" />
                <p className="text-green-900 font-semibold text-lg mb-1">
                  Your sample is on the way.
                </p>
                <p className="text-green-800 text-sm">
                  Watch your mailbox in 3–5 days. If you don&apos;t see it by
                  then, reply to your confirmation email.
                </p>
              </div>
            ) : (
              <>
                <p className="text-gray-700 mb-6">
                  Want to see what your future customers are about to receive?
                  We&apos;ll mail you a real handwritten sample — free.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onRequestSample}
                  className="bg-amber-900 hover:bg-amber-800"
                >
                  Mail me a sample
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-xs text-gray-500 mt-4">
                  Pen Pal Pro customers see {data.roas}× average ROAS —
                  individual results may vary.
                </p>
              </>
            )}
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

export const LowVolumeMessage: React.FC<{ zip: string }> = ({ zip }) => (
  <Section className="bg-gradient-to-br from-amber-50 to-green-50 min-h-[60vh] flex items-center">
    <Container>
      <div className="max-w-2xl mx-auto text-center py-12">
        <AlertTriangle className="w-12 h-12 text-amber-700 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
          {zip} is too low-volume right now.
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          We didn&apos;t find enough recent home sales in {zip} to put together
          a useful report.
        </p>
        <p className="text-gray-600">
          We&apos;ve saved your email and will let you know when we expand
          coverage to your area.
        </p>
      </div>
    </Container>
  </Section>
)
