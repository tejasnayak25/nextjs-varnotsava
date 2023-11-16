// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./header"
import Footer from "./footer"

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
        <link rel="stylesheet" href="/material-icons.css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
        {/* <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
        </script> */}

      </head>
      <body className={inter.className}>
        <div className={"p-10"}>
          <Header/>
        </div>
        {children}
        <div>
          <Footer/>
        </div>
        <script src='/script.js'></script>
      </body>
    </html>
  )
}
