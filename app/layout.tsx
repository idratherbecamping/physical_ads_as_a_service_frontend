import type { Metadata } from 'next'
import { Inter, Kalam } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const kalam = Kalam({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-kalam',
})

export const metadata: Metadata = {
  title: 'Get New Homeowner Leads Calling You | Pen Pal Pro',
  description: 'Pen Pal Pro sends handwritten notes to new homeowners on behalf of home service contractors. 99% open rate, 10% response rate.',
  keywords: 'handwritten notes, home services, contractor leads, new homeowner marketing, pen pal pro',
  openGraph: {
    title: 'Get New Homeowner Leads Calling You - Pen Pal Pro',
    description: 'We mail personalized handwritten notes to people who just bought homes in your area',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kalam.variable} font-sans antialiased bg-amber-50 text-amber-900`}>
        {children}
      </body>
    </html>
  )
}