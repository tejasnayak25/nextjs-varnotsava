import { collection } from '@/lib/firebase-admin';
import { Registration } from '@/lib/models';
import { useRouter } from 'next/navigation';
import { put } from '@/lib/gform';
import { send } from '@/lib/sendmail';
import { toDataURL } from "qrcode";


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
                console.log(newid);
                // let url = await toDataURL(newid, qrOption)
                // send(info.email, `<img src="./image.jpg" alt="" className="w-100 mb-10 lg:mb-0" />`);
                // send(info.email, `<p>${newid}</p>`)
                // registration.doc(id).delete();
            }
        }   
    }

    return (
      <main className="flex flex-col items-center p-16 lg:pt-10 pt-5 px-0">
            <p className="mb-7">Confirmation Successful! An email with the QR-Code has been sent to you mail.</p>
            <div>
                <a href="/" className=" btn btn-neutral rounded-full px-14 bg-pink-red border-0 text-slate-900 hover:text-white">Return Home</a>
            </div>
      </main>
    )
}
  