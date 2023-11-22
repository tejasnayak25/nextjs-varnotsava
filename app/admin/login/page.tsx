import { collection } from "@/lib/firebase-admin";
import { Admin } from "@/lib/models";
import { send } from "@/lib/sendmail";

let admincollec = collection(Admin);

export default async function login() {
    async function sendCred() {
        let credentials = await admincollec.doc("credentials").get();
        let data = credentials.data() || "";

        console.log(data);
        let email = data === undefined ? data["email"] : "";
        let pass = email + "_Admin_" + Date.now();
        
        // admincollec.doc("credentials").update({
        //     pass: String(pass)
        // });
        
        // send(email, `
        // <p>Varnotsava Admin: <a href="https://nextjs-varnotsava.vercel.app/admin?id=${pass}">Login</a></p>
        // `);
        return undefined;
    }
    return (
        <div className="p-5 flex justify-center items-center">
            <button onClick={await sendCred()} className="btn bg-pink-red">Send Credentials</button>
        </div>
    )
}