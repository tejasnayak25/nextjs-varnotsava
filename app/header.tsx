// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
    <header className='w-full'>
          <ul className=' menu lg:menu-horizontal relative md:menu-vertical flex justify-center w-full items-center'>
            <div className='absolute left-0'>
              <p className='text-2xl' style={{fontFamily: "futura"}}>SMVITM</p>
            </div>

            <div className='flex gap-7 text-lg font-mono'>
              <p style={{color:"#ff9b9b"}}>Home</p>
              <p>Gallery</p>
              <p>Register</p>
              <p>Contact</p>
              <p>About</p>
            </div>

            <div className='absolute right-0 text-2xl'>
              <p>SMVITM</p>
            </div>
          </ul>
    </header>
  )
}
