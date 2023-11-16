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


function remInterval(interval) {
    clearInterval(interval);
}