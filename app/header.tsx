'use client'
 
import { useState } from 'react'
 
export default function Header() {
  const [count, setCount] = useState(0)
 
  return (
    <header className='w-full'>
          <ul className=' menu lg:menu-horizontal relative md:menu-vertical flex justify-center w-full items-center'>
            <div className='absolute left-0'>
              <p className='text-2xl' style={{fontFamily: "futura"}}>SMVITM</p>
            </div>

            <div id='menu' className='flex gap-7 text-lg font-mono'>
              <a className='flex flex-col justify-center cursor-pointer' style={{color:"#ff9b9b"}}><p>Home</p><div className='h-1' style={{backgroundColor: "#ff9b9b", width: "0px"}}></div></a>
              <a className='flex flex-col justify-center cursor-pointer'><p>Gallery</p><div className='h-1' style={{backgroundColor: "#ff9b9b", width: "0px"}}></div></a>
              <a className='flex flex-col justify-center cursor-pointer'><p>Register</p><div className='h-1' style={{backgroundColor: "#ff9b9b", width: "0px"}}></div></a>
              <a className='flex flex-col justify-center cursor-pointer'><p>Contact</p><div className='h-1' style={{backgroundColor: "#ff9b9b", width: "0px"}}></div></a>
              <a className='flex flex-col justify-center cursor-pointer'><p>About</p><div className='h-1' style={{backgroundColor: "#ff9b9b", width: "0px"}}></div></a>
            </div>

            <div className='absolute right-0 text-2xl'>
                <div className='flex gap-3'>
                    <i className='uil uil-facebook text-3xl'></i>
                    <i className='uil uil-instagram text-3xl'></i>
                    <i className='uil uil-twitter text-3xl'></i>
                </div>
            </div>
          </ul>
    </header>
  )
}