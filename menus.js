function openToolbarMenu(menu) {
    if (menu === "file") {
        document.getElementById("toolmenu").style.display = "none";
        document.getElementById("filemenu").style.display = "unset";
    } else if (menu === "edit") {
        document.getElementById("infoBox").setAttribute("open", "true");
    } else if (menu === "tools") {
        document.getElementById("filemenu").style.display = "none";
        document.getElementById("toolmenu").style.display = "unset";
    } else if (menu === "info") {
        document.getElementById("infoBox").setAttribute("open", "true");
    }
}

function closeToolbarMenu(menu) {
    if (menu === "file") {
        document.getElementById("filemenu").style.display = "none";
    } else if (menu === "edit") {
        document.getElementById("infoBox").removeAttribute("open");
    } else if (menu === "tools") {
        document.getElementById("toolmenu").style.display = "none";
    } else if (menu === "info") {
        document.getElementById("infoBox").removeAttribute("open");
    }
}

document.addEventListener("click", function(e) {
    if (e.target.id !== "toolbarmenubtn" && e.target.id !== "toolbarbtn") {
        console.log(e.target.id)
        document.getElementById("filemenu").style.display = "none";
    }
})
