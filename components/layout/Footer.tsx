import React from 'react'
import { Container } from './Container'
import { CONTACT_EMAIL } from '@/lib/cta'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <Container>
        <div className="text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Pen Pal Pro. All rights reserved.
          </p>
          <p className="text-sm mt-2 opacity-80">
            Contact: {CONTACT_EMAIL}
          </p>
        </div>
      </Container>
    </footer>
  )
}