import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Provider } from './provider'
import Navigation from '@/components/navigation'
import { GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Boykotaj | Soykırımı Durdur!`,
  description: `Ses Ver, Soykırımı Durdur! Boykot Güçlü Bir Silahtır.`,
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
        </Provider>
      </body>
      <GoogleTagManager gtmId="G-Z1C0W85Z2W" />
    </html >
  )
}
