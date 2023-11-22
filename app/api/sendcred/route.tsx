import { send } from "@/lib/sendmail";
import { collection, fbaseAdmin } from "@/lib/firebase-admin";
import { Admin } from "@/lib/models";
import { NextResponse } from "next/server";

let admincollec = collection(Admin);

export default async function sendCred() {
    let credentials = await admincollec.doc("credentials").get();
    let data = credentials.data() || {};

    let email = data["email"] || "";
    let pass = email + "_Admin_" + Date.now();

    console.log(email);
    
    admincollec.doc("credentials").update({
        pass: String(pass)
    });
    
    await send(email, `
    <p>Varnotsava Admin: <a href="https://nextjs-varnotsava.vercel.app/admin?id=${pass}">Login</a></p>
    `);
    return NextResponse.json({
        status: 200, 
        body: "hello"
    });
}