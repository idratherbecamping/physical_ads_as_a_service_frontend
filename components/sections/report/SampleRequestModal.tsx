'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '../../ui/Button'
import { requestSample } from '@/lib/api'

interface SampleRequestModalProps {
  open: boolean
  leadId: number | null
  onClose: () => void
  onSuccess: () => void
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({
  open,
  leadId,
  onClose,
  onSuccess,
}) => {
  const [address, setAddress] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (open) {
      setError(null)
      // Focus address field shortly after open animation
      setTimeout(() => textareaRef.current?.focus(), 150)
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (leadId == null) return
    if (address.trim().length < 8) {
      setError('Please enter your full mailing address.')
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      await requestSample({ lead_id: leadId, sample_address: address.trim() })
      onSuccess()
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong. Try again.',
      )
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-amber-900 mb-2">
              Mail me a sample
            </h3>
            <p className="text-gray-700 mb-6">
              Where should we send the handwritten sample? Use your real
              mailing address — we mail one physical letter, that&apos;s it.
            </p>

            <form onSubmit={submit} className="space-y-4">
              <textarea
                ref={textareaRef}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={4}
                placeholder={'Your name\nStreet address\nCity, State, Zip'}
                className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-base resize-none"
              />

              {error && (
                <div className="text-red-600 text-sm font-medium">{error}</div>
              )}

              <div className="flex gap-3 justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  disabled={submitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={submitting}
                  className="bg-amber-900 hover:bg-amber-800"
                >
                  {submitting ? 'Sending…' : 'Send my sample'}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
