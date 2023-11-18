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
    <iframe className="w-full h-full" src="https://earth.google.com/earth/d/1nGe6c8MloSJxSYvRdFDjQbX8ptQCId5_"></iframe>
  )
}
