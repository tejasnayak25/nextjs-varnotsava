import { collection } from "@/lib/firebase-admin";
import { Admin } from "@/lib/models";
import { NextResponse } from "next/server";
let admincollec = collection(Admin);

export default async function AdminPage({
    searchParams,
  }: {
    searchParams: { [key: string]: string };
  }) {
    let id = searchParams["id"];

    let credentials = await admincollec.doc("credentials").get();
    let data = await credentials.data() || "";
    let pass = data === undefined ? data["pass"] : "";

    if(id !== pass) {
        NextResponse.redirect("https://nextjs-varnotsava.vercel.app/admin/login");
    }

    return (
      <main>
        <p>Welcome, Admin</p>
      </main>
    )
}