// import Image from 'next/image'
import { NovusBase } from "@/lib/models"
import { Form } from "@/lib/form"
import YourComponent2 from './submit';
// import { Request } from "node-fetch"

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 lg:pt-10 pt-5 px-0">
        <div className="absolute z-10 flex justify-center w-full">
            <img className="w-4/6 h-full lg:-mt-20 -mt-16 object-cover" src="/images/flower.png" alt="" style={{filter: "brightness(50%) contrast(1.2)"}} />
        </div>
        <div className='w-full flex flex-col relative z-20 justify-center items-center p-0'>
            <p className=" lg:text-4xl text-2xl text-left mb-5" style={{fontFamily: "futura"}}>Registration Form</p>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 m-0 lg:p-10 p-3 w-full">
                <div className="flex flex-col gap-5 lg:px-10 px-3 lg:border-r border-slate-400">
                    <input type="text" name="team_name" id="team_name" className="input bg-slate-700 text-slate-400 rounded-full w-full" placeholder="Team Name" />
                    <input type="email" name="email" id="email" className="input bg-slate-700 text-slate-400 rounded-full w-full" placeholder="Email" />
                    
                    <select name="branch" id="branch" className="select bg-slate-700 text-slate-400 rounded-full w-full">
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="AIML">AIML</option>
                        <option value="AIDS">AIDS</option>
                        <option value="ME">ME</option>
                        <option value="CVE">CVE</option>
                    </select>
                    <select name="event" id="event" className="select bg-slate-700 text-slate-400 rounded-full w-full">
                        <option value="Line Follower">Line Follower</option>
                        <option value="WebCraft">WebCraft</option>
                        <option value="AIML">AIML</option>
                        <option value="AIDS">AIDS</option>
                        <option value="ME">ME</option>
                        <option value="CVE">CVE</option>
                    </select>
                </div>
                <div className="lg:p-10 p-3 lg:mt-0 mt-2">
                    <textarea name="team_name" id="team_name" className="textarea bg-slate-700 text-slate-400 lg:rounded-3xl rounded-2xl lg:p-5 lg:px-5 px-5 p-2 w-full" placeholder="Team Member Details (Name, Branch, Section, Roll No) (Including Team Leader)"></textarea>
                    <div className="w-full flex justify-center mt-10">
                        <button id="sendmail" className='btn rounded-full border-0 text-black w-52' style={{backgroundColor: "#ff9b9b", fontFamily: "monospace"}}>REGISTER</button>
                        {/* <YourComponent2/> */}
                    </div>
                </div>
            </div>
        </div>

        <div id="sentmail" className="fixed top-0 left-0 w-full h-full hidden justify-center items-center z-30 bg-black bg-opacity-70">
            <div className=" card bg-slate-800 p-2 rounded-md">
                <div className="card-body">
                    <p className=" lg:mx-0 mx-2">A confirmation mail has been sent to email.</p>
                    <div className="w-full flex justify-center mt-5">
                        <a href="/" className='btn rounded-full border-0 text-black w-52' style={{backgroundColor: "#ff9b9b", fontFamily: "monospace"}}>RETURN TO HOME</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
