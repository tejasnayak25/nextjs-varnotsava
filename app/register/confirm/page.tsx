// import Image from 'next/image'
"use client";
import { NovusBase } from "@/lib/models"
import { Form } from "@/lib/form"
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { QRCode, useQRCode } from "react-qrcode";

// const QRCodeComponent = dynamic(() => import('react-qrcode'), { ssr: false });

export default function Home() {
  // Example state usage
  const [exampleState, setExampleState] = useState("Hello World");

  useEffect(() => {
    // Example useEffect logic (runs on the client side)
    console.log("Component mounted on the client side");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-16 md:p-0 px-0">
      <div className='w-full flex flex-col justify-center items-center p-0'>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 m-0 p-0 w-full">
          <div className="  flex justify-center items-center w-full">
            <div id="qr-code" className="lg:w-4/6 md:w-full aspect-square">
              {/* Use the QRCode component with the desired value */}
              <QRCode value={exampleState} quality={1} className="w-full h-52 lg:h-auto mb-10 lg:mb-0" />
              {/* <img src={useQRCode("Hello World")} alt="" className="w-full mb-10 lg:mb-0" /> */}
            </div>
          </div>
          <div className=" flex flex-col justify-center w-full">
            <p className=" text-2xl text-center lg:text-6xl lg:mb-10 mb-6 w-full lg:px-3 px-10" style={{fontFamily: "futura"}}>Congratulations 🎉</p>
            <p className=" lg:text-2xl md:text-lg text-center lg:mb-10 mb-6 w-full lg:max-w-md md:max-w-none lg:px-3 px-10">You've successfully registered for Varnotsava - 2k23</p>
            <p className="lg:text-2xl md:text-lg text-center w-full lg:max-w-md md:max-w-none lg:px-3 px-10">Use this QR Code to verify your registration</p>
          </div>
        </div>
      </div>
      {/* Your other components and scripts */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js" integrity="sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <script src="/qr-code.js"></script>
    </main>
  )
}
