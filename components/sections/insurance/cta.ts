import { bookSetupCall } from '@/lib/cta'

/** Shared CTA for the insurance page: book the 15-minute setup call. */
export function bookInsuranceSetupCall(): void {
  bookSetupCall(
    'Setup call - Pen Pal Pro (insurance agency)',
    "Hi Gannon,\n\nI run an independent agency and I'd like to book a 15-minute setup call.\n\nAgency:\nZip codes I want to farm:\nBest times to talk:\n"
  )
}
