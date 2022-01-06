let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", function() {
    if (startmenu.style.bottom == "55px") {
        startmenu.style.bottom = "-750px"
    } else {
        startmenu.style.bottom = "55px"
    }
});