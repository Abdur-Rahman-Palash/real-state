import './globals.css'
import { Inter } from 'next/font/google'
import PageTransition from '@/components/layout/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Real Estate Portal - Find Your Dream Home',
  description: 'Discover properties for sale and rent across UAE. Advanced search, AI-powered recommendations, and comprehensive real estate solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
