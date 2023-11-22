"use client";

import { collection, fbaseAdmin } from "@/lib/firebase-admin";
import { Admin } from "@/lib/models";
import { send } from "@/lib/sendmail";
// components/LoginButton.js
import { useEffect, useState } from 'react';

let admincollec = collection(Admin);

export default function LoginButton() {
    const [isClicked, setIsClicked] = useState(false);

    async function sendCred() {
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
        return undefined;
    }

    const handleClick = async () => {
        setIsClicked(true);
        await sendCred();
    };

    useEffect(() => {
        if (isClicked) {
            // Perform any post-click logic here
        }
    }, [isClicked]);

    return (
        <button onClick={handleClick} className="btn bg-pink-red text-slate-900 hover:text-white">
            {isClicked ? 'Credentials Sent' : 'Send Credentials'}
        </button>
    );
}
