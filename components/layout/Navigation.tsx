'use client'

import React from 'react'
import Link from 'next/link'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { Wine } from 'lucide-react'

export const Navigation: React.FC = () => {
  const openWaitlistForm = () => {
    // Track Meta Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    window.open('https://form.jotform.com/251817337612053', '_blank')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-amber-50/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-amber-900 hover:text-amber-800 transition-colors">
              Pen Pal
              <span className="text-blue-600"> Pro</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/wineries" 
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <Wine className="w-4 h-4" />
              For Wineries
            </Link>
            
            <Button
              onClick={openWaitlistForm}
              size="sm"
            >
              Join Waitlist 
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  )
}