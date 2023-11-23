import { collection } from "@/lib/firebase-admin";
import { readAll, readOne, update } from "@/lib/gform";
import { Admin } from "@/lib/models";
import { redirect } from "next/navigation";
let admincollec = collection(Admin);

export default async function AdminPage({
    searchParams,
  }: {
    searchParams: { [key: string]: string };
  }) {
    let id = searchParams["id"],
    qr=searchParams["qr"],
    hidden = "hidden";

    if (qr) hidden = 'flex';

    let credentials = await admincollec.doc("credentials").get();
    let data = await credentials.data() || {};
    let pass = data !== undefined ? data["pass"] : "";

    async function getOne(qrid:string) {
      let qrdata;
      if(qrid) {
        qrdata = await readOne(qrid) || {};
        let edit = await update(qrid);
        let code = [];
        
        for(let i of Object.values(qrdata)) {
          code.push(<td className="table-cell">{JSON.stringify(i).split('"')[1]}</td>)
        }

        code.push(<a href={edit}>Edit</a>)

        return (<div id="scanned" className={"fixed top-0 left-0 w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-70"}>
      <div className=" card bg-slate-800 p-2 rounded-md">
          <div className="card-body">
              <p className=" lg:mx-0 mx-2">Registration Details</p>
              <table className="table w-full table-fixed">
                <thead>
                  <tr className=" table-row">
                  <th className=" table-cell">Team Name</th>
                  <th className=" table-cell">Email</th>
                  <th className=" table-cell">Branch</th>
                  <th className=" table-cell">Event</th>
                  <th className=" table-cell">Team Details</th>
                  <th className=" table-cell">Edit</th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                    {code}
                  </tr>
                </tbody>
              </table>
              <div className="w-full flex justify-center mt-5">
                  <a href="/" className='btn rounded-full border-0 text-black w-52' style={{backgroundColor: "#ff9b9b", fontFamily: "monospace"}}>RETURN TO HOME</a>
              </div>
          </div>
      </div>
</div>);
      }
      
      return undefined;
    }

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
        <div className="flex justify-between lg:mb-10 mb-7">
          <p className="lg:text-xl relative">Welcome, Admin</p>
          <div className=" flex lg:flex-row flex-col justify-center items-center gap-2">
          <button id="scanQr" className="btn lg:btn-md btn-sm bg-pink-red text-black hover:text-white">Scan QR</button>
          <input type="file" accept="image/*" name="qr-scanner" id="qr-scanner" className="hidden"></input>
          <button id="downloadXL" className="btn lg:btn-md btn-sm bg-pink-red text-black hover:text-white">Download .xlsx</button>
          </div>
        </div>
        

        <table id="data-table" className="w-full table table-fixed max-w-full lg:overflow-x-auto overflow-x-scroll">
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

        {await getOne(qr)}

        <script src="/qcode-decoder.min.js"></script>
        <script src="/downloadXL.js"></script>
      </main>
    )
}
