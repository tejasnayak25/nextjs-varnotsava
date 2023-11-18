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
        <iframe src="https://www.google.com/maps/embed?pb=!4v1700311652151!6m8!1m7!1sCAoSLEFGMVFpcE8wbVUtZnlPaHJvMHdwek1kVlFYekxVMnIybUxyTkVlWlFsNDVj!2m2!1d13.25519569931055!2d74.7852196544409!3f197.71285875331304!4f0.7680760751352693!5f0.7820865974627469"   className="lg:aspect-video aspect-auto lg:h-auto h-96 w-full" style={{border:0}} width="600" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
      )
}
