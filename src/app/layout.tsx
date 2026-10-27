import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VaveAR by Vave TechStack | WebAR Service Agency',
  description: 'Premium WebAR services - Wedding photo-to-video AR, smart visiting cards and AR product labels.',
  icons: { icon: '/vavear-favicon.svg' },
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen antialiased font-sans text-base leading-relaxed'>{children}</body>
    </html>
  )
}
