/**
 * Typed client for the Pen Pal Pro Opportunity Report backend.
 * Source of truth: physical_ads_as_a_service/API_CONTRACT.md
 *
 * Set NEXT_PUBLIC_API_BASE_URL in Vercel to your Fly URL, e.g.
 *   https://penpal-opportunity-report.fly.dev
 * For local dev with the backend running on :8000, no env needed.
 */

export type Trade = 'hvac' | 'fencing' | 'pool'

export interface ReportRequest {
  email: string
  zip: string
  trade: Trade
}

export interface RecentSale {
  address_redacted: string
  sold_date: string
  price: number
  beds: number | null
  baths: number | null
  sqft: number | null
  year_built: number | null
  description: string | null
}

export interface ReportData {
  zip: string
  trade: Trade
  trade_label: string
  scraped_at: string
  sales_30d: number
  sales_365d: number
  sales_30d_capped: boolean
  sales_365d_capped: boolean
  pct_per_year: number
  pct_per_year_display: number
  avg_ticket: number
  monthly_addressable: number
  annual_addressable: number
  five_year_addressable: number
  hours_per_month: number
  open_rate_handwritten: number
  open_rate_email: number
  response_rate_printed: number
  response_multiplier: number
  roas: number
  movers_year_1_improvements_pct: number
  zero_last_month: boolean
  low_volume: boolean
  recent_sales: RecentSale[]
}

export interface ReportResponse {
  lead_id: number
  available: boolean
  data: ReportData | null
  reason: string | null
}

export interface SampleRequest {
  lead_id: number
  sample_address: string
}

export interface SampleResponse {
  ok: boolean
}

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ||
  'http://localhost:8000'

class ApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    let detail = res.statusText
    try {
      const j = await res.json()
      detail = typeof j.detail === 'string' ? j.detail : JSON.stringify(j.detail)
    } catch {
      // ignore parse error
    }
    throw new ApiError(detail, res.status)
  }
  return (await res.json()) as T
}

export function fetchReport(req: ReportRequest): Promise<ReportResponse> {
  return postJson<ReportResponse>('/report', req)
}

export function requestSample(req: SampleRequest): Promise<SampleResponse> {
  return postJson<SampleResponse>('/sample-request', req)
}

export { ApiError }
