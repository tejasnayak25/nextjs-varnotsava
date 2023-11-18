// import Image from 'next/image'
import { NovusBase } from "@/lib/models"
import { Form } from "@/lib/form"
import Lamp from "@/public/images/lamp.png"
import Flow from "@/public/images/flow.png"
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
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.533048775052!2d74.7828841209411!3d13.254594899526166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcaffcb81452c5%3A0xb18b6b77e04b088b!2sShri%20Madhwa%20Vadiraja%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1700063261394!5m2!1sen!2sin"  className="lg:aspect-video aspect-auto lg:h-auto h-96 w-full" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <iframe className="h-full w-full" src="https://maps.app.goo.gl/ZdR56qGBJKYzKj6J9"></iframe>
    </div>
      )
}
