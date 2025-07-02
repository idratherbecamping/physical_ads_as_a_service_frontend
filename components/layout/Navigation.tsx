'use client'

import React from 'react'
import { Container } from './Container'
import { Button } from '../ui/Button'

export const Navigation: React.FC = () => {
  const openWaitlistForm = () => {
    window.open('https://form.jotform.com/251817337612053', '_blank')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-amber-50/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-amber-900">
              Pen Pal
              <span className="text-blue-600"> Pro</span>
            </h1>
          </div>
          
          <Button
            onClick={openWaitlistForm}
            size="sm"
          >
            Join Waitlist
          </Button>
        </div>
      </Container>
    </nav>
  )
}