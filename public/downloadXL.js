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