document.getElementById("downloadXL").onclick = () => {
    $("#data-table").table2excel({
        exclude: ".noExl", // Exclude elements with the class 'noExl'
        name: "Registration",
        filename: "excelFile", // Specify the filename
        fileext: ".xls" // Specify the file extension
      });
}