import { collection } from "@/lib/firebase-admin";
import { readAll } from "@/lib/gform";
import { Admin } from "@/lib/models";
import { redirect } from "next/navigation";
let admincollec = collection(Admin);

export default async function AdminPage({
    searchParams,
  }: {
    searchParams: { [key: string]: string };
  }) {
    let id = searchParams["id"];

    let credentials = await admincollec.doc("credentials").get();
    let data = await credentials.data() || {};
    let pass = data !== undefined ? data["pass"] : "";

    async function getRegs() {
      let code = [];

      let list = await readAll();
      console.log(list.length);

      for(let i of list) {
        let templist = [];
        for(let j of Object.keys(list[i])) {
          templist.push(<td>{JSON.stringify(list[i][j]) || ""}</td>)
        }

        code.push(<tr>{templist}</tr>);
      }

      return code;
    }

    if(id !== pass) {
      redirect("/admin/login");
    }

    return (
      <main className="p-5">
        <p className="lg:text-xl mb-5">Welcome, Admin</p>

        <table>
          <tr>
            <th>Team Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Event</th>
            <th>Team Details</th>
          </tr>

          {await getRegs()}
        </table>
      </main>
    )
}