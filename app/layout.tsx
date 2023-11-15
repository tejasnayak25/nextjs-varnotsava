// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import * as Header from "./header"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Varnotsava - 2K23',
  description: 'Join SMVITM in celebrating our festival of joy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/waterlily.regular.ttf"
          as="font"
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        {Header}
        {children}
      </body>
    </html>
  )
}
