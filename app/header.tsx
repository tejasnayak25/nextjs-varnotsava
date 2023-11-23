'use client'
 
import { useState } from 'react'
 
export default function Header() {
  const [count, setCount] = useState(0)
 
  return (
    <header className='w-full'>
          <ul className=' menu lg:menu-horizontal md:menu-vertical flex justify-center w-full items-center'>
            <div className='absolute left-7'>
              <a href="/" className='lg:text-2xl text-xl' style={{fontFamily: "futura"}}>SMVITM</a>
            </div>

            <div id='menu' className='lg:flex z-40 hidden lg:flex-row flex-col lg:relative absolute lg:top-0 top-16 left-0 lg:w-auto w-full lg:pb-0 pb-8 lg:pt-0 pt-5 lg:px-0 px-10  lg:bg-transparent bg-black lg:gap-7 gap-4 text-lg font-mono'>
              <a href='/' className='flex flex-col justify-center cursor-pointer relative'><p>Home</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a href='/gallery' className='flex flex-col justify-center cursor-pointer relative'><p>Gallery</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a href='/events' className='flex flex-col justify-center cursor-pointer relative'><p>Events</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a href='/register' className='flex flex-col justify-center cursor-pointer relative'><p>Register</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a href='/vtour' className='flex flex-col justify-center cursor-pointer relative'><p>Virtual Tour</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a href='#contact' className='flex flex-col justify-center cursor-pointer relative'><p>Contact</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a href='/about' className='flex flex-col justify-center cursor-pointer relative'><p>About</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>

              <div className='lg:hidden flex w-full justify-center mt-3 gap-3'>
                    <a href="https://www.facebook.com/officialsmvitm"><i className='uil uil-facebook text-3xl cursor-pointer'></i></a>
                    <a href="https://www.instagram.com/smvitm.sode/"><i className='uil uil-instagram text-3xl cursor-pointer'></i></a>
                    <a href="https://twitter.com/SmvitM"><i className='uil uil-twitter text-3xl cursor-pointer'></i></a>
              </div>
            </div>

            <div className='absolute right-7 text-2xl'>
                <div id='showMenu' className='lg:hidden block'><span className='material-symbols-rounded'>menu</span></div>
                <div className='lg:flex hidden gap-3'>
                    <a href="https://www.facebook.com/officialsmvitm"><i className='uil uil-facebook text-3xl cursor-pointer'></i></a>
                    <a href="https://www.instagram.com/smvitm.sode/"><i className='uil uil-instagram text-3xl cursor-pointer'></i></a>
                    <a href="https://twitter.com/SmvitM"><i className='uil uil-twitter text-3xl cursor-pointer'></i></a>
                </div>
            </div>
          </ul>
    </header>
  )
}