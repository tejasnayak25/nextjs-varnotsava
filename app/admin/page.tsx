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
      

      if(list) {
        for(let i of list) {
          let templist = [];
          for(let j of Object.values(i)) {
            templist.push(<td className=" table-cell">{JSON.stringify(j).split('"')[1] || ""}</td>)
          }
  
          code.push(<tr>{templist}</tr>);
        }
      }

      return code;
    }

    if(id !== pass) {
      redirect("/admin/login");
    }

    return (
      <main className="lg:p-16 p-5 overflow-x-scroll lg:overflow-x-auto">
        <p className="lg:text-xl lg:mb-10 mb-7 relative">Welcome, Admin <span className=" absolute lg:right-16 right-5 top-0"><button id="downloadXL" className="btn lg:btn-md btn-sm bg-pink-red text-black hover:text-white">Download .xlsx</button></span></p>

        <table id="data-table" className="w-full table max-w-full lg:overflow-x-auto overflow-x-scroll">
          <thead>
            <tr className=" table-row">
              <th className=" table-cell">Team Name</th>
              <th className=" table-cell">Email</th>
              <th className=" table-cell">Branch</th>
              <th className=" table-cell">Event</th>
              <th className=" table-cell">Team Details</th>
              <th className=" table-cell">Payment</th>
              <th className=" table-cell">Arrived</th>
            </tr>
          </thead>
          <tbody>
            {await getRegs()}
          </tbody>
        </table>

        <script src="/downloadXL.js"></script>
      </main>
    )
}