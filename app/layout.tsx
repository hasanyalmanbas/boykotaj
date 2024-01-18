import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Provider } from './provider'
import Navigation from '@/components/navigation'
import { Badge, Button } from '@nextui-org/react'
import { FaComment } from 'react-icons/fa6'
import Feedback from '@/components/feedback'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Boykotaj',
  description: '',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider>
          <Navigation />
          {children}
          <Feedback />
        </Provider>
      </body>
    </html >
  )
}
