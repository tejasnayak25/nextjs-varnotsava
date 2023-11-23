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
    <html lang="en" className=''>
      <head>
        <link
          rel="preload"
          href="/fonts/waterlily.regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="stylesheet" href="/material-icons.css" />
        <link rel="stylesheet" href="/header.css" />
        {/* <script src="/jsQR.js"></script> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/material-symbols@0.14.1/index.min.css"></link>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
        {/* <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
        </script> */}

      </head>
      <body className={inter.className} style={{backgroundColor: "black", color: "white"}}>
        <div className={"p-10"}>
          <Header/>
        </div>
        {children}
        <div>
          <Footer/>
        </div>
      
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src='/script.js'></script>
      </body>
    </html>
  )
}
