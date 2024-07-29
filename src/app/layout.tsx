import type { Metadata } from 'next'
import { Inter, Kanit } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Socials from '@/components/Socials'

export const metadata: Metadata = {
  title: 'Shore | Cilt bakımın için ipuçları ve daha fazlası',
  description: 'Cilt bakımın için ipuçları ve daha fazlası',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '64x64',
      url: '/apple-icon.png',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className="overflow-x-hidden bg-gray-50 font-['Lora']">
        <Navigation />
        {children}
        <Footer />
        {/* <Socials /> */}
      </body>
    </html>
  )
}
