import './globals.css'
import { Space_Grotesk, Inter } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Antriksh AI - Complete AI Marketing Ecosystem',
  description: 'Antriksh AI: Revolutionizing marketing with AI-powered solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-black">{children}</body>
    </html>
  )
}

