import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/navigation/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Health Care',
  description: 'Health Care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {/* <Navigation /> */}

      {children}
      </body>
      
    </html>
  )
}
