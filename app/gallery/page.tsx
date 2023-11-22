export default async function Home() {
    async function getImages() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "fid": process.env.DRIVE_FOLDER_ID
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        let response = await fetch(process.env.DRIVE_LINK, requestOptions)
        let restext = await response.text();
        let result = JSON.parse(restext).data;
        
        let array = [];

        for(let i of result) {
            array.push(<img src={i} alt="Image"></img>)
        }

        return array;
    }

    return (
        <main className="grid lg:grid-cols-3 gap-5 grid-cols-1 items-center p-16 lg:pt-10 pt-5 px-5">
            {await getImages()}
        </main>
    )
}