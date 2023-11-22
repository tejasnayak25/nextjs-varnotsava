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
      <main className="lg:p-16 p-5">
        <p className="lg:text-xl lg:mb-10 mb-7">Welcome, Admin <span className=" absolute right-16"><button id="downloadXL" className="btn bg-pink-red text-black hover:text-white">Download .xlsx</button></span></p>

        <table id="data-table" className="w-full table max-w-full lg:overflow-x-auto overflow-x-scroll">
          <thead>
            <tr className=" table-row">
              <th className=" table-cell">Team Name</th>
              <th className=" table-cell">Email</th>
              <th className=" table-cell">Branch</th>
              <th className=" table-cell">Event</th>
              <th className=" table-cell">Team Details</th>
            </tr>
          </thead>
          <tbody>
            {await getRegs()}
          </tbody>
        </table>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="https://cdn.rawgit.com/rainabba/jquery-table2excel/1.1.0/dist/jquery.table2excel.min.js"></script>
        <script src="/downloadXL.js"></script>
      </main>
    )
}