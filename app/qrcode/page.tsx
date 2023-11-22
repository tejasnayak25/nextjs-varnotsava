import { collection } from '@/lib/firebase-admin';
import { QRCodes, Registration } from '@/lib/models';
import { useRouter } from 'next/navigation';
import { put } from '@/lib/gform';
import { send } from '@/lib/sendmail';
import { toDataURL } from "qrcode";
import { NextResponse } from 'next/server';

let registration = collection(Registration);
let qrcodes = collection(QRCodes);

export default async function Home({
    searchParams,
  }: {
    searchParams: { [key: string]: string };
  }) {
    let id = searchParams["id"];
    
    let row = await qrcodes.doc(id).get();
    let data = row.data();
    let url = data !== undefined ? data.url : "";

    console.log(url);

    return NextResponse.redirect(url);
}
  