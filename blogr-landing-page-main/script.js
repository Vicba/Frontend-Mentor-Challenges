const btn = document.getElementById("mobilemenu");
const mobilenav = document.getElementById("mobilenav");

mobilenav.style.left = "-100%";

btn.addEventListener("click", showNav)


function showNav() {
    if (mobilenav.style.left == "-100%") {
        mobilenav.style.left = "50%";
        btn.src = "images/icon-close.svg";
    }

    else {
        mobilenav.style.left = "-100%";
        btn.src = "images/icon-hamburger.svg";
    }
}