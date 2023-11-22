import { collection } from '@/lib/firebase-admin';
import { Registration } from '@/lib/models';
import { cancelReg, put } from '@/lib/gform';
import { send } from '@/lib/sendmail';
import { toDataURL } from "qrcode";

let registration = collection(Registration);

export default async function Home({
    searchParams,
  }: {
    searchParams: { [key: string]: string };
  }) {
    let id = searchParams["id"];
    
    let data = await cancelReg(id);
    
    return (
      <main className="flex flex-col items-center p-16 lg:pt-10 pt-5 px-0">
            <p className="mb-7 lg:px-0 px-3 text-center">Registration Canceled Successfully!</p>
            <div>
                <a href="/" className=" btn btn-neutral rounded-full px-14 bg-pink-red border-0 text-slate-900 hover:text-white">Return Home</a>
            </div>
      </main>
    )
}
  