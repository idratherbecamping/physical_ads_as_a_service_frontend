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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1220707922678791');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1220707922678791&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} ${kalam.variable} font-sans antialiased bg-amber-50 text-amber-900`}>
        {children}
      </body>
    </html>
  )
}