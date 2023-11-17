// function initMap() {
//     // Specify the location coordinates
//     var myLatLng = {lat: 37.7749, lng: -122.4194}; // Replace with your desired coordinates

//     // Create a map centered at the specified coordinates
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: myLatLng,
//         zoom: 14 // Adjust the zoom level as needed
//     });

//     // Add a marker to the map
//     var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         title: 'Your Location' // Tooltip text when the marker is hovered
//     });
// }

// document.getElementById("map").onload = () => initMap;

document.querySelectorAll("header ul #menu a").forEach(elem => {
    let div = elem.querySelector("div"),
    p = elem.querySelector("p");

    elem.addEventListener("mouseover", () => {
        p.classList.add("color-pink-red");
        div.classList.remove("hidden");
    });

    elem.addEventListener("mouseout", () => {
        p.classList.remove("color-pink-red");
        div.classList.add("hidden");
    });
});

// fetch("https://drive.google.com/drive/folders/1rg15_ufbsYmua0DbTkm7X0f1Bm2s8KIh?usp=drive_link", {
//     mode: "no-cors"
// })
// .then(async (res) => {
//     console.log(res);
// });

if(location.pathname === "/register") {
    document.getElementById("sendmail").onclick = () => {
        document.getElementById("sentmail").classList.replace("hidden", "flex");
    }
}

document.getElementById("showMenu").onclick = () => {
    let menu = document.getElementById("menu"),
    btn = document.getElementById("showMenu").querySelector("span");

    if(menu.classList.contains("hidden")) {
        menu.classList.replace("hidden", "flex");
        btn.innerText = "close";
    } else if(menu.classList.contains("flex")) {
        menu.classList.replace("flex", "hidden");
        btn.innerText = "menu";
    }
}

(async () => {
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycby43fe7pDYldKMlYkzZH5Y-pRqQW9oGRBvVMNBoZWpOj9DCaXkbRIbkvJqRW0-JXbLK/exec',
        method: 'GET',
        mode: 'no-cors',
        dataType: 'json',
        data: {
            parameters: {
                fid: ["1gI6gsMNlcBedgzG58rXe-3ltLX4zd7WK"]
            }
        },
        success: function(data) {
            // Do something with the JSON data
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error fetching data:', textStatus, errorThrown);
        }
    });
})();



function remInterval(interval) {
    clearInterval(interval);
}