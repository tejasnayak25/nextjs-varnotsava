import { send } from "@/lib/sendmail";
import { collection, fbaseAdmin } from "@/lib/firebase-admin";
import { Admin } from "@/lib/models";
import { NextResponse } from "next/server";

let admincollec = collection(Admin);

export async function POST() {
    let credentials = await admincollec.doc("credentials").get();
    let data = credentials.data() || {};

    let email = data["email"] || "";
    let pass = email + "_Admin_" + String(Date.now());

    console.log(email);
    
    admincollec.doc("credentials").update({
        pass: pass
    });
    
    await send(email, `
    <p>Varnotsava Admin: <a href="https://nextjs-varnotsava.vercel.app/admin?id=${pass}">Login</a></p>
    `, "Admin Credentials");
    return NextResponse.json({
        status: 200, 
        body: "hello"
    });
}