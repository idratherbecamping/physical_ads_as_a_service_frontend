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
  ExternalLink,
  PenTool,
  Sparkles,
  Lock,
  Zap,
  Home,
} from 'lucide-react'
import type { ReportData } from '@/lib/api'

// Citation URLs for the stats shown in the report. Kept here so source text
// and links stay together; if a number changes in trade_constants.json,
// update its URL here too.
const CITES = {
  movers84: {
    href: 'https://hbsdealer.com/study-first-time-buyers-are-shaking-home-improvement',
    label: 'HBS Dealer',
  },
  hvacTicket: {
    href: 'https://www.angi.com/articles/insider-s-price-guide-new-heating-and-cooling-system.htm',
    label: 'Angi',
  },
  fencingTicket: {
    href: 'https://www.homeadvisor.com/cost/fencing/install-a-fence/',
    label: 'HomeAdvisor',
  },
  printedResponse: {
    href: 'https://www.mailpro.org/post/response-rate-benchmarks-for-direct-mail/',
    label: 'ANA/DMA',
  },
  emailOpen: {
    href: 'https://mailchimp.com/resources/email-marketing-benchmarks/',
    label: 'Mailchimp',
  },
  handwrittenOpen: {
    href: 'https://www.postcardmania.com/blog/direct-mail-statistics/',
    label: 'PostcardMania',
  },
  pppInternal: {
    href: 'https://www.penpalpro.com',
    label: 'Pen Pal Pro',
  },
} as const

const Cite: React.FC<{ href: string; label: string; light?: boolean }> = ({
  href,
  label,
  light,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={
      'inline-flex items-baseline gap-0.5 ml-1 align-baseline text-[10px] underline decoration-dotted underline-offset-2 hover:decoration-solid transition ' +
      (light
        ? 'text-amber-200/80 hover:text-amber-100'
        : 'text-amber-700/80 hover:text-amber-900')
    }
    aria-label={`Source: ${label}`}
  >
    {label}
    <ExternalLink className="w-2.5 h-2.5" />
  </a>
)

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
              {data.movers_year_1_improvements_pct}% of new buyers make home
              improvements within their first year of purchase.
              <Cite href={CITES.movers84.href} label={CITES.movers84.label} />
            </p>
            {cappedFootnote}
          </motion.div>
        </Container>
      </Section>

      {/* Recent Sales — proof of data, only shown if backend returned any */}
      {data.recent_sales && data.recent_sales.length > 0 && (
        <Section className="bg-white border-t border-amber-100">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide text-center mb-2">
                Sample of recent sales in {data.zip}
              </p>
              <p className="text-sm text-gray-600 text-center mb-6">
                These are real new homeowners. Right now, they&apos;re
                looking for {data.trade_label} contractors.
              </p>
              <div className="space-y-3">
                {data.recent_sales.map((s, i) => {
                  const stats: string[] = []
                  if (s.beds !== null) stats.push(`${s.beds} bd`)
                  if (s.baths !== null) stats.push(`${s.baths} ba`)
                  if (s.sqft !== null)
                    stats.push(`${s.sqft.toLocaleString('en-US')} sqft`)
                  if (s.year_built !== null) stats.push(`built ${s.year_built}`)

                  return (
                    <div
                      key={i}
                      className="bg-amber-50/60 rounded-xl p-4 md:p-5 border border-amber-100"
                    >
                      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <Home className="w-4 h-4 text-amber-700 flex-shrink-0" />
                          <span className="font-mono text-sm md:text-base text-amber-900 font-semibold">
                            {s.address_redacted}
                          </span>
                          <span className="text-xs text-gray-500">
                            · sold {s.sold_date}
                          </span>
                        </div>
                        <span className="font-bold text-amber-900">
                          ${s.price.toLocaleString('en-US')}
                        </span>
                      </div>
                      {stats.length > 0 && (
                        <p className="text-sm text-gray-600 mb-2">
                          {stats.join(' · ')}
                        </p>
                      )}
                      {s.description && (
                        <p className="text-sm text-gray-700 italic leading-relaxed">
                          &ldquo;{s.description}&rdquo;
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
              <p className="text-xs text-gray-500 text-center mt-4 italic">
                Addresses partially redacted. Real homes, real owners,
                real public sales records.
              </p>
            </motion.div>
          </Container>
        </Section>
      )}

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

              <div className="grid md:grid-cols-2 gap-4 text-center">
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
              </div>

              <p className="text-center text-amber-900 font-semibold mt-8 text-lg">
                That&apos;s the addressable {data.trade_label} revenue from new
                movers in {data.zip} — going to whichever contractor reaches
                them first.
              </p>
              <p className="text-xs text-gray-500 text-center mt-2 italic">
                Sources:{' '}
                {data.trade === 'hvac' ? (
                  <>
                    <a
                      href={CITES.hvacTicket.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
                    >
                      Angi HVAC replacement cost
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href={CITES.fencingTicket.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
                    >
                      HomeAdvisor fence install cost
                    </a>
                  </>
                )}
                , industry data.
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
                  <span>
                    printed mail response rate
                    <Cite
                      href={CITES.printedResponse.href}
                      label={CITES.printedResponse.label}
                      light
                    />
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-amber-300 text-2xl font-bold w-16">
                    {Math.round(data.open_rate_email * 100)}%
                  </span>
                  <span>
                    email open rate
                    <Cite
                      href={CITES.emailOpen.href}
                      label={CITES.emailOpen.label}
                      light
                    />
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-white text-2xl font-bold w-16">
                    {Math.round(data.open_rate_handwritten * 100)}%
                  </span>
                  <span className="font-semibold">
                    handwritten open rate
                    <Cite
                      href={CITES.handwrittenOpen.href}
                      label={CITES.handwrittenOpen.label}
                      light
                    />
                  </span>
                </li>
              </ul>
              <p className="text-amber-100 mt-6">
                Result: handwritten letters get{' '}
                <span className="font-bold text-white">
                  ~{data.response_multiplier}× the response rate
                </span>{' '}
                of printed mail to the same address.
                <Cite
                  href={CITES.pppInternal.href}
                  label={CITES.pppInternal.label}
                  light
                />
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
            <p className="text-lg md:text-xl text-gray-800 mb-10">
              A real handwritten letter in every new {data.zip} homeowner&apos;s
              mailbox — without you ever lifting a pen.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-left mb-10">
              <div className="bg-white rounded-xl p-5 border border-amber-100 flex gap-3">
                <PenTool className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900 mb-1">
                    Real pen on real paper
                  </p>
                  <p className="text-sm text-gray-700">
                    Not printed simulation. People can feel the difference, and
                    they open it.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-amber-100 flex gap-3">
                <Sparkles className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900 mb-1">
                    Personalized to the home
                  </p>
                  <p className="text-sm text-gray-700">
                    Each letter references the actual property —
                    not a generic mailer.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-amber-100 flex gap-3">
                <Zap className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900 mb-1">
                    Automatic, not a chore
                  </p>
                  <p className="text-sm text-gray-700">
                    We monitor new {data.zip} homeowners and send the letters.
                    5-minute setup, then it runs.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-amber-100 flex gap-3">
                <Lock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900 mb-1">
                    Exclusive in your zip
                  </p>
                  <p className="text-sm text-gray-700">
                    One {data.trade_label} contractor per zip. When you&apos;re
                    in, your competitors are out.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-900 text-white rounded-2xl p-6 md:p-8 mb-10 max-w-2xl mx-auto">
              <p className="text-amber-200 text-xs uppercase tracking-wide font-semibold mb-2">
                What our customers see
              </p>
              <p className="text-2xl md:text-3xl font-bold mb-2">
                For every $1 spent, customers earn ~${data.roas} back.
              </p>
              <p className="text-amber-100 text-sm">
                That&apos;s a {data.roas}× return on ad spend (ROAS) — the
                marketing-industry shorthand for &ldquo;how much revenue did
                each dollar produce.&rdquo;
                <Cite
                  href={CITES.pppInternal.href}
                  label={CITES.pppInternal.label}
                  light
                />
              </p>
              <p className="text-amber-200/70 text-xs mt-3 italic">
                Individual results vary.
              </p>
            </div>

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
