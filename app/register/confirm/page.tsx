import { collection } from '@/lib/firebase-admin';
import { Registration } from '@/lib/models';
import { useRouter } from 'next/navigation';
import { put } from '@/lib/gform';
import { send } from '@/lib/sendmail';
import { toFile } from "qrcode";


let registration = collection(Registration);

export default async function Home({
    searchParams,
  }: {
    searchParams: { [key: string]: string };
  }) {
    let id = searchParams["id"];
    if(registration.doc(id)) {
        let value = await registration.doc(id).get();
        let data = value.data();
        if(data) {
            let info = JSON.parse(data['data']);
            
            let newid = await put(info);
            if(newid) {
                const qrOption = { 
                    margin : 7,
                    width : 175
                };
                
                let url = await toFile(`../../../public/qrcodes/${id}.png`, newid);
                console.log(url);
                send(info.email, `
                <html>
                    <head>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css" integrity="sha512-Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    </head>
                    <body>
                        <div class="w-100 d-flex justify-content-center bg-black text-white">
                            <p class=" w-100 text-center p-5 bold">Varnotsava - 2K23</p>
                            <img src="https://nextjs-varnotsava.vercel.app/qrcodes/${id}.png" alt="" className="w-100 mb-10 lg:mb-0" />
                            <p class=" mb-3">Congratulations!! You have successfully registered for the ${info.event} event</p>
                            <p class=" mb-6">Use this QR Code for further processes.</p>
                            <a href="https://nextjs-varnotsava.vercel.app/register/confirm?id=${data.team_name}_${data.event}" class=" btn btn-primary mb-6">Cancel Registration</a><br>
                            <p class="text-muted">Powered by FeatureX</p>
                        </div>
                    </body>
                </html>
                `);
                
                registration.doc(id).delete();
            }
        }   
    }

    return (
      <main className="flex flex-col items-center p-16 lg:pt-10 pt-5 px-0">
            <p className="mb-7 lg:px-0 px-3 text-center">Confirmation Successful! An email with the QR-Code has been sent to your mail.</p>
            <div>
                <a href="/" className=" btn btn-neutral rounded-full px-14 bg-pink-red border-0 text-slate-900 hover:text-white">Return Home</a>
            </div>
      </main>
    )
}
  