// import Image from 'next/image'
import { NovusBase } from "@/lib/models"
import { Form } from "@/lib/form"
import Lamp from "@/public/images/lamp.png"
import Flow from "@/public/images/flow.png"
import localFont from 'next/font/local'
import * as fs from 'fs'

// const Lamp = {src:"https://th.bing.com/th/id/OIP.mFuXoMcAqbvUwjDjwTkFHAHaHa?pid=ImgDet&rs=1"};
// const Flow = {src:"https://th.bing.com/th/id/OIP.mFuXoMcAqbvUwjDjwTkFHAHaHa?pid=ImgDet&rs=1"};

// const surt = localFont({
//   src: [
//     {path: '../public/fonts/waterlily.regular.ttf'}
//   ],
//   variable: '--font-waterlily',
// })

// const waterlily = localFont({src: '../public/fonts/waterlily.regular.ttf'})

var images = fs.readdirSync("public\\images\\college");

function getImages() {
  let code = [];
  for(let img of images) {
    code.push(<img src={"\\images\\college\\"+img}></img>);
  }

  
  return code;
}


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 px-0">
      <div className="z-10 max-w-5xl w-full h-full font-mono text-sm" style={{height: "100vh"}}>
        

        <div className='flex flex-col justify-center items-center w-full h-full absolute top-0 left-0'>
          <img src={Lamp.src} alt="" className=' w-3/6 mt-40' style={{filter: "brightness(80%) contrast(1.2) blur(0.2px)", marginLeft: "-100px"}}></img>
          <div className='absolute flex flex-col justify-center mt-20'>
            <p className=' text-8xl' style={{fontFamily: "WaterLily"}}>VARNOTSAVA - 2K23</p>
            <p className=' text-xl text-center mt-3' style={{fontFamily: "Kollektif"}}>The Festival of Joy is Back!</p>
            <div className='w-full flex justify-center mt-5'>
              <button className='btn rounded-full border-0 text-black w-52' style={{backgroundColor: "#ff9b9b", fontFamily: "monospace"}}>KNOW MORE</button>
            </div>
          </div>
        </div>

        
        

      </div>

      <div className=' w-full flex flex-col justify-center items-center' style={{height:"100vh"}}>
        <img src={Flow.src} alt="" className=' w-4/6' style={{filter: "brightness(70%) contrast(1) blur(0.2px)", marginLeft: "-100px"}}></img>
        <div className='absolute'>
          <div className=' flex gap-5 items-center'>
            <p className='text-8xl' style={{fontFamily: "WaterLily", textShadow: " -5px 0 1px #00ffff, 5px 0 1px #ff00ff"}}>1000</p>
            <p className='text-6xl' style={{fontFamily: "WaterLily"}}>Events Registered</p>
          </div>
          <div className='w-full flex justify-center mt-10'>
              <button className='btn rounded-full border-0 text-black w-52' style={{backgroundColor: "#ff9b9b", fontFamily: "monospace"}}>REGISTER NOW</button>
          </div>
        </div>
      </div>

      <div className=' w-full flex flex-col justify-center items-center' style={{height:"150vh"}}>
        <p className='text-6xl' style={{fontFamily: "WaterLily"}}>WHEN?</p>

        <div className='flex gap-10 mt-20'>
          <p className='text-7xl px-10 py-6 bg-white text-black' style={{fontFamily: "WaterLily"}}>20</p>
          <p className='text-7xl px-20 py-6 bg-white text-black' style={{fontFamily: "WaterLily"}}>DECEMBER</p>
          <p className='text-7xl px-14 py-6 bg-white text-black' style={{fontFamily: "WaterLily"}}>2023</p>
        </div>
      </div>

      <div className=' w-full flex flex-col justify-center items-center' style={{height:"150vh"}}>
        <p className='text-6xl' style={{fontFamily: "WaterLily"}}>WHERE?</p>

        <div className='flex flex-col gap-10 mt-20 w-full'>
          <img className='w-full h-96 object-cover' src="/images/college.jpeg" alt=""></img>
          <p className='w-full text-center text-3xl' style={{fontFamily: "futura"}}>SHRI MADHWA VADIRAJA INSTITUTE OF TECHNOLOGY AND MANAGEMENT</p>
        </div>
      </div>

      <div className=' w-full flex flex-col justify-center items-center' style={{height:"200vh"}}>
        <p className='text-6xl' style={{fontFamily: "WaterLily"}}>Location</p>

        <div className='flex flex-col gap-10 mt-20 w-full'>
        {/* <iframe src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" className="aspect-video w-full" allowFullScreen></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.533048775052!2d74.7828841209411!3d13.254594899526166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcaffcb81452c5%3A0xb18b6b77e04b088b!2sShri%20Madhwa%20Vadiraja%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1700063261394!5m2!1sen!2sin"  className="aspect-video w-full" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className=' w-full flex flex-col justify-center items-center' style={{height:"200vh"}}>
        <div className="relative flex items-center w-full">
          <p className='text-6xl w-full text-center' style={{fontFamily: "WaterLily"}}>Gallery</p>
          <span className="absolute right-10 underline"><a href="/gallery">View More</a></span>
        </div>
        <div className="grid grid-cols-3 justify-center gap-5 p-10">
          {getImages()}
        </div>
      </div>

    </main>
  )
}
