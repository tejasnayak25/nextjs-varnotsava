'use client'
 
import { useState } from 'react'
 
export default function Header() {
  const [count, setCount] = useState(0)
 
  return (
    <header className='w-full'>
          <ul className=' menu lg:menu-horizontal md:menu-vertical flex justify-center w-full items-center'>
            <div className='absolute left-7'>
              <p className='lg:text-2xl text-xl' style={{fontFamily: "futura"}}>SMVITM</p>
            </div>

            <div id='menu' className='lg:flex z-40 hidden lg:flex-row flex-col lg:relative absolute lg:top-0 top-16 left-0 lg:w-auto w-full lg:pb-0 pb-8 lg:pt-0 pt-5 lg:px-0 px-10  lg:bg-transparent bg-black lg:gap-7 gap-4 text-lg font-mono'>
              <a className='flex flex-col justify-center cursor-pointer relative' style={{color:"#ff9b9b"}}><p>Home</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a className='flex flex-col justify-center cursor-pointer relative'><p>Gallery</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a href='/register' className='flex flex-col justify-center cursor-pointer relative'><p>Register</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a className='flex flex-col justify-center cursor-pointer relative'><p>Contact</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>
              <a className='flex flex-col justify-center cursor-pointer relative'><p>About</p><div className='h-1 hidden w-full absolute bottom-0' style={{backgroundColor: "#ff9b9b"}}></div></a>

              <div className='lg:hidden flex w-full justify-center mt-3 gap-3'>
                    <i className='uil uil-facebook text-3xl cursor-pointer'></i>
                    <i className='uil uil-instagram text-3xl cursor-pointer'></i>
                    <i className='uil uil-twitter text-3xl cursor-pointer'></i>
              </div>
            </div>

            <div className='absolute right-7 text-2xl'>
                <div id='showMenu' className='lg:hidden block'><span className='material-symbols-rounded'>menu</span></div>
                <div className='lg:flex hidden gap-3'>
                    <i className='uil uil-facebook text-3xl cursor-pointer'></i>
                    <i className='uil uil-instagram text-3xl cursor-pointer'></i>
                    <i className='uil uil-twitter text-3xl cursor-pointer'></i>
                </div>
            </div>
          </ul>
    </header>
  )
}