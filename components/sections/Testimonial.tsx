'use client'

import React, { useEffect, useRef } from 'react'
import Script from 'next/script'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void
      }
    }
  }
}

export const Testimonial: React.FC = () => {
  const tweetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.twttr && tweetRef.current) {
      window.twttr.widgets.load(tweetRef.current)
    }
  }, [])

  return (
    <Section className="bg-stone-50">
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.twttr && tweetRef.current) {
            window.twttr.widgets.load(tweetRef.current)
          }
        }}
      />
      <Container>
        <div ref={tweetRef} className="flex justify-center">
          <blockquote className="twitter-tweet" data-theme="light">
            <a href="https://twitter.com/bluecollarivy/status/1968445240588767236">Tweet</a>
          </blockquote>
        </div>
      </Container>
    </Section>
  )
}
