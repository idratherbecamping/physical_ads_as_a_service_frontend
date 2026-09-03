/**
 * Shared "book a 15-minute setup" call to action.
 * There is no checkout integration in this app, so the real next step is email.
 */

export const CONTACT_EMAIL = 'gannon@penpalpro.com'

export function setupCallMailto(subject: string, body: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`
}

/** Opens the user's mail client and records the Meta Pixel lead event. */
export function bookSetupCall(subject: string, body: string): void {
  if (typeof window === 'undefined') return
  if ((window as any).fbq) {
    ;(window as any).fbq('track', 'Lead')
  }
  window.location.href = setupCallMailto(subject, body)
}
