import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Footer } from '@/components/Footer'
import Header from '@/components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cat wiki',
  description: 'Page for cats information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} px-6 xl:px-0 flex flex-col w-full items-center justify-center`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
