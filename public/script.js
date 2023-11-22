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

// if(location.pathname === "/register") {
//     document.getElementById("sendmail").onclick = () => {
        
//           handleButtonClick();
//         // document.getElementById("sentmail").classList.replace("hidden", "flex");
//     }
// }

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



function remInterval(interval) {
    clearInterval(interval);
}


document.querySelectorAll("#menu a").forEach(a => {
    if(a.getAttribute("href") === location.pathname) {
        a.classList.add("color-pink-red");
    }
});