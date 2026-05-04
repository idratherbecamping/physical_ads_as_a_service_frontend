'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../../layout/Container'
import { Section } from '../../layout/Section'
import { Button } from '../../ui/Button'
import { fetchReport } from '@/lib/api'
import type { ReportData, Trade } from '@/lib/api'
import { ReportForm } from './ReportForm'
import { ReportResult, LowVolumeMessage } from './ReportResult'
import { SampleRequestModal } from './SampleRequestModal'

type Phase = 'form' | 'loading' | 'result' | 'lowVolume' | 'error'

export const OpportunityReport: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('form')
  const [zip, setZip] = useState<string>('')
  const [leadId, setLeadId] = useState<number | null>(null)
  const [data, setData] = useState<ReportData | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [loadingMessage, setLoadingMessage] = useState<string>('')
  const [modalOpen, setModalOpen] = useState(false)
  const [sampleConfirmed, setSampleConfirmed] = useState(false)

  // Progressive loading-state copy on long submits.
  useEffect(() => {
    if (phase !== 'loading') return
    setLoadingMessage(`Pulling fresh sales data for ${zip}…`)
    const t1 = setTimeout(
      () => setLoadingMessage('Almost there — Redfin is slow today.'),
      8000,
    )
    return () => clearTimeout(t1)
  }, [phase, zip])

  const handleSubmit = async (vals: {
    email: string
    zip: string
    trade: Trade
  }) => {
    setZip(vals.zip)
    setPhase('loading')
    setErrorMessage('')
    try {
      const res = await fetchReport(vals)
      setLeadId(res.lead_id)

      if (!res.available || !res.data) {
        setErrorMessage(
          res.reason ||
            "We couldn't pull data for that zip right now. Try again in a minute.",
        )
        setPhase('error')
        return
      }
      if (res.data.low_volume) {
        setData(res.data)
        setPhase('lowVolume')
        return
      }
      setData(res.data)
      setPhase('result')
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong.',
      )
      setPhase('error')
    }
  }

  const reset = () => {
    setPhase('form')
    setData(null)
    setLeadId(null)
    setErrorMessage('')
    setSampleConfirmed(false)
  }

  if (phase === 'form') {
    return <ReportForm onSubmit={handleSubmit} />
  }

  if (phase === 'loading') {
    return (
      <Section className="bg-gradient-to-br from-amber-50 to-green-50 min-h-[70vh] flex items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-lg p-10 border border-amber-100"
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-700 rounded-full animate-spin" />
            </div>
            <h2 className="text-xl font-bold text-amber-900 mb-2">
              Building your report
            </h2>
            <p className="text-gray-600">{loadingMessage}</p>
            <p className="text-xs text-gray-500 mt-4">
              First-time zips can take 10–20 seconds.
            </p>
          </motion.div>
        </Container>
      </Section>
    )
  }

  if (phase === 'error') {
    return (
      <Section className="bg-gradient-to-br from-amber-50 to-green-50 min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-lg p-10 border border-amber-100">
            <h2 className="text-xl font-bold text-amber-900 mb-2">
              Couldn&apos;t build the report
            </h2>
            <p className="text-gray-700 mb-6">{errorMessage}</p>
            <Button
              variant="primary"
              onClick={reset}
              className="bg-amber-900 hover:bg-amber-800"
            >
              Try again
            </Button>
          </div>
        </Container>
      </Section>
    )
  }

  if (phase === 'lowVolume') {
    return <LowVolumeMessage zip={zip} />
  }

  // phase === 'result'
  if (!data) return null
  return (
    <>
      <ReportResult
        data={data}
        sampleConfirmed={sampleConfirmed}
        onRequestSample={() => setModalOpen(true)}
      />
      <SampleRequestModal
        open={modalOpen}
        leadId={leadId}
        onClose={() => setModalOpen(false)}
        onSuccess={() => {
          setModalOpen(false)
          setSampleConfirmed(true)
        }}
      />
    </>
  )
}
