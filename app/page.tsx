// import Image from 'next/image'
// import { Form } from "@/lib/form"
import Lamp from "@/public/images/lamp.png"
import Flow from "@/public/images/flow.png"
import Carousel from "./carousel"
// import localFont from 'next/font/local'
// import * as fs from 'fs'

// const Lamp = {src:"https://th.bing.com/th/id/OIP.mFuXoMcAqbvUwjDjwTkFHAHaHa?pid=ImgDet&rs=1"};
// const Flow = {src:"https://th.bing.com/th/id/OIP.mFuXoMcAqbvUwjDjwTkFHAHaHa?pid=ImgDet&rs=1"};

// const surt = localFont({
//   src: [
//     {path: '../public/fonts/waterlily.regular.ttf'}
//   ],
//   variable: '--font-waterlily',
// })

// const waterlily = localFont({src: '../public/fonts/waterlily.regular.ttf'})

var images = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg"]

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
      <div className="z-10 max-w-5xl w-full lg:h-full h-fit font-mono text-sm mb-20">
        

        <div className='flex flex-col justify-center items-center w-full -mt-28 h-3/6 top-0 left-0'>
          <img src={Lamp.src} alt="" className=' lg:w-3/6 w-full lg:mt-0 mt-36 lg:-ml-24 -ml-7' style={{filter: "brightness(80%) contrast(1.2) blur(0.2px)"}}></img>
          <div className='absolute flex flex-col justify-center'>
            <p className=' lg:text-8xl text-3xl' style={{fontFamily: "WaterLily"}}>VARNOTSAVA - 2K23</p>
            <p className=' lg:text-xl text-base text-center mt-3' style={{fontFamily: "Kollektif"}}>The Festival of Joy is Back!</p>
            <div className='w-full flex lg:flex-row flex-col gap-3 justify-center items-center mt-8'>
              <button className='btn lg:btn-md btn-sm rounded-full border-0 text-black lg:w-52 w-40' style={{backgroundColor: "#ff9b9b", fontFamily: "monospace"}}>KNOW MORE</button>
              <a  href="/vtour" className='btn lg:btn-md btn-sm bg-white text-slate-900 uppercase rounded-full border-0 text-black lg:w-52 w-40' style={{fontFamily: "monospace"}}>Virtual Tour</a>
            </div>
          </div>
        </div>
      </div>

      <div className=' w-full lg:h-full h-fit mb-48 flex flex-col justify-center items-center'>
        <Carousel/>
      </div>

      <div className=' w-full lg:h-full h-fit mb-48 flex flex-col justify-center items-center'>
        <img src={Flow.src} alt="" className=' lg:w-4/6 w-full lg:-ml-20 ml-0' style={{filter: "brightness(70%) contrast(1) blur(0.2px)"}}></img>
        <div className='absolute'>
          <div className=' flex lg:flex-row flex-col gap-5 items-center'>
            <p className='lg:text-8xl text-5xl' style={{fontFamily: "WaterLily", textShadow: " -5px 0 1px #00ffff, 5px 0 1px #ff00ff"}}>1000</p>
            <p className='lg:text-6xl text-3xl' style={{fontFamily: "WaterLily"}}>Events Registered</p>
          </div>
          <div className='w-full flex justify-center mt-10'>
              <button className='btn rounded-full border-0 text-black w-52' style={{backgroundColor: "#ff9b9b", fontFamily: "monospace"}}>REGISTER NOW</button>
          </div>
        </div>
      </div>

      <div className=' w-full flex flex-col mb-52 justify-center items-center lg:h-full h-fit'>
        <p className='lg:text-6xl text-3xl' style={{fontFamily: "WaterLily"}}>WHEN?</p>

        <div className='flex lg:flex-row flex-col lg:gap-10 gap-5 lg:mt-20 mt-10'>
          <p className='lg:text-7xl text-center text-4xl lg:px-10 px-5 lg:py-6 py-3 bg-white text-black' style={{fontFamily: "WaterLily"}}>20</p>
          <p className='lg:text-7xl text-center text-4xl lg:px-20 px-5 lg:py-6 py-3 bg-white text-black' style={{fontFamily: "WaterLily"}}>DECEMBER</p>
          <p className='lg:text-7xl text-center text-4xl lg:px-14 px-5 lg:py-6 py-3 bg-white text-black' style={{fontFamily: "WaterLily"}}>2023</p>
        </div>
      </div>

      <div className=' w-full flex flex-col mb-52 justify-center items-center lg:h-full h-fit'>
        <p className='lg:text-6xl text-3xl' style={{fontFamily: "WaterLily"}}>WHERE?</p>

        <div className='flex flex-col gap-10 lg:mt-20 mt-10 w-full'>
          <img className='w-full lg:h-96 h-52 object-cover' src="/images/college.jpeg" alt=""></img>
          <p className='w-full text-center lg:text-3xl text-lg lg:px-0 px-5' style={{fontFamily: "futura"}}>SHRI MADHWA VADIRAJA INSTITUTE OF TECHNOLOGY AND MANAGEMENT</p>
        </div>
      </div>

      <div className=' w-full flex flex-col mb-52 justify-center items-center lg:h-full h-fit'>
        <p className='lg:text-6xl text-3xl' style={{fontFamily: "WaterLily"}}>Location</p>

        <div className='flex flex-col gap-10 lg:mt-20 mt-10 w-full'>
        {/* <iframe src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" className="aspect-video w-full" allowFullScreen></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.533048775052!2d74.7828841209411!3d13.254594899526166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcaffcb81452c5%3A0xb18b6b77e04b088b!2sShri%20Madhwa%20Vadiraja%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1700063261394!5m2!1sen!2sin"  className="lg:aspect-video aspect-auto lg:h-auto h-96 w-full" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className=' w-full flex flex-col mb-20 justify-center items-center lg:h-full h-fit'>
        <div className="relative flex items-center w-full">
          <p className='lg:text-6xl text-3xl w-full text-center' style={{fontFamily: "WaterLily"}}>Gallery</p>
          <span className="absolute right-10 lg:text-xl text-xs mt-2 underline"><a href="/gallery">View More</a></span>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-center lg:gap-5 gap-3 lg:p-10 p-5">
          {getImages()}
        </div>
      </div>

    </main>
  )
}
