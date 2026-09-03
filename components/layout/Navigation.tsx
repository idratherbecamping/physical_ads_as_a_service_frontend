'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { bookSetupCall } from '@/lib/cta'
import { Home, Users, Heart, Shield, Menu, X } from 'lucide-react'

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const bookSetup = () => {
    bookSetupCall(
      'Setup call - Pen Pal Pro',
      "Hi Gannon,\n\nI'd like to book a 15-minute setup call.\n\nBusiness:\nZip codes I want to target:\nBest times to talk:\n"
    )
  }

  const navLinks = [
    { href: '/', label: 'New Homeowners', icon: Users, color: 'text-amber-600 hover:text-amber-700' },
    { href: '/airbnb', label: 'Airbnb Services', icon: Home, color: 'text-teal-600 hover:text-teal-700' },
    { href: '/weddings', label: 'Weddings', icon: Heart, color: 'text-rose-600 hover:text-rose-700' },
    { href: '/insurance', label: 'Insurance', icon: Shield, color: 'text-indigo-600 hover:text-indigo-700' }
  ]

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
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`flex items-center gap-2 ${link.color} font-medium transition-colors`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            })}
            
            <Button
              onClick={bookSetup}
              size="sm"
            >
              Book a Setup Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-amber-900 hover:text-amber-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className={`flex items-center gap-2 ${link.color} font-medium transition-colors px-2 py-1`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                )
              })}
              
              <Button
                onClick={() => {
                  bookSetup()
                  setIsMobileMenuOpen(false)
                }}
                size="sm"
                className="w-full"
              >
                Book a Setup Call
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}