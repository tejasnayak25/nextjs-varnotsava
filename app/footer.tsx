'use client'
 
import { useState } from 'react'
 
export default function Footer() {
  const [count, setCount] = useState(0)
 
  return (
    <div className='w-full'>
        <footer className='w-full grid lg:grid-cols-2 md:grid-cols-1 p-10'>
            <div id='contact' className=' lg:mb-0 mb-20'>
                <p className='font-bold text-lg mb-2'>Contact Us</p>
                <p className=' text-gray-400'>
                Shri Madhwa Vadiraja Institute of<br></br>
                Technology anf Management,<br></br>
                Vishwothama Nagara, Bantakal<br></br>
    <br></br>
                Udupi - 574 115, Karnataka, India<br></br>
                <br></br>
                Tel: +91 1234567890<br></br>
                Email: info@sode-edu.in
                </p>
            </div>
            <div className=' flex flex-wrap justify-center w-full'>
                <p className='font-bold text-lg text-center mb-2 w-full'>Quick Links</p>
                <div className='w-full flex text-center lg:mb-0 mb-10 flex-col gap-4 text-gray-400'>
                    <a className='hover:underline' href="/vtour">Virtual Tour</a>
                    <a className='hover:underline' href="/register">Register</a>
                    <a className='hover:underline' href="/gallery">Gallery</a>
                </div>
                <div className='flex gap-3'>
                    <a href="https://www.facebook.com/officialsmvitm"><i className='uil uil-facebook text-3xl cursor-pointer'></i></a>
                    <a href="https://www.instagram.com/smvitm.sode/"><i className='uil uil-instagram text-3xl cursor-pointer'></i></a>
                    <a href="https://twitter.com/SmvitM"><i className='uil uil-twitter text-3xl cursor-pointer'></i></a>
                </div>
            </div>
        </footer>
        <p className='p-5 text-center w-full text-gray-400'>Powered by FeatureX</p>
    </div>
  )
}