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
    <iframe className="w-full h-full" src="https://earth.app.goo.gl/?apn=com.google.earth&isi=293622097&ius=googleearth&link=https%3a%2f%2fearth.google.com%2fweb%2fsearch%2fShri%2bMadhwa%2bVadiraja%2bInstitute%2bof%2bTechnology%2band%2bManagement,%2bVishwothama%2bNagar,%2bBantakal,%2bKarnataka%2f%4013.2542477,74.78500508,59.52282685a,0d,60y,196.68825114h,100.2683794t,0r%2fdata%3dCigiJgokCXHHnCFB_UxAEXLHnCFB_UzAGVGqFcKZqkhAIZb28OT2sErAIjAKLEFGMVFpcE9nSV93NHQ2cER0dzFhbEJhT2dEWDJ5UHVSY1o2WkpvdU5pbG5OEAU"></iframe>
  )
}
