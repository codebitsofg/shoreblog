import type { Metadata } from 'next'
import { Inter, Kanit } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Socials from '@/components/Socials'
import Head from 'next/head'
import AboutUsExplainer from '@/components/AboutUsExplainer'
import Divider from '@/components/Divider'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  metadataBase: new URL('https://skknshore.com'),
  title: 'Shore | Cilt bakımın için ipuçları ve daha fazlası',
  description:
    'Cilt bakımın için ipuçları ve daha fazlası. Cilt bakımında merak edilenler, rehberler, doğru bilinen yanlışlar ve cilt bakım elemanlarının derinlemesine çözümlenmesi.',
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
    <html lang='tr'>
      <body className="bg-zinc-50 font-['Lora']">
        <Navigation />
        {children}
        <Divider />
        <Toaster />
        <AboutUsExplainer />
        <div id='portal-container' />
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-KBKQ2EWH2H' />
    </html>
  )
}
