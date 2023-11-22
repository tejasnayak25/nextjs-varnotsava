import { collection, fbaseAdmin } from "@/lib/firebase-admin";
import { Admin } from "@/lib/models";
import { send } from "@/lib/sendmail";

let admincollec = collection(Admin);

export default async function Login() {
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
        await sendCred();
    };

    return (
        <div className="p-5 flex justify-center items-center">
            <button onClick={handleClick} className="btn bg-pink-red text-slate-900 hover:text-white">Send Credentials</button>
        </div>
    )
}
