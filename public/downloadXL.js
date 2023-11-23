document.getElementById("downloadXL").onclick = () => {
    exportTableToExcel("data-table", "Varnotsava - Registration")
}

function exportTableToExcel(tableId, filename = 'excelFile') {
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tr');
    const csvData = [];

    // Iterate through rows and columns to build CSV data
    for (const row of rows) {
      const rowData = [];
      const cols = row.querySelectorAll('td, th');
      for (const col of cols) {
        rowData.push(col.innerText);
      }
      csvData.push(rowData.join(','));
    }

    // Create a CSV file
    const csvContent = 'data:text/csv;charset=utf-8,' + csvData.join('\n');
    const encodedUri = encodeURI(csvContent);

    // Create a link element and trigger a click to download the file
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  document.getElementById("scanQr").onclick = () => {
    document.getElementById("qr-scanner").click();
  }

  let scanner = document.getElementById("qr-scanner");
  scanner.onchange = () => {
    var file = scanner.files[0];
    var reader  = new FileReader();
    // it's onload event and you forgot (parameters)
    reader.onload = function(e)  {
      let img = document.createElement("img");
      img.src=e.target.result;

      img.onload = function() {
        // The image is loaded, now proceed with QR code decoding
        var qr = new QCodeDecoder();

        qr.decodeFromImage(img, function (err, result) {
           if (err) throw err;

           location.href = (location.href + "&qr="+result);
        });
      };
        
     }
     // you have to declare the file loading
     reader.readAsDataURL(file);
  }
  
  function dataUrlToUint8ClampedArray(dataUrl) {
    // Extract the base64-encoded data from the data URL
    const base64Data = dataUrl.split(',')[1];
  
    // Decode the base64 data into a binary string
    const binaryString = atob(base64Data);
  
    // Create a Uint8ClampedArray from the binary string
    const length = binaryString.length;
    const uint8Array = new Uint8ClampedArray(length);
    
    for (let i = 0; i < length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
  
    return uint8Array;
  }
  
