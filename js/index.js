function expand(circle) {
    showOverlay();
    var blurb = circle.getElementsByClassName("textBlurb");
    blurb[0].style.visibility = "visible";
    /*contractAll();
    circle.classList.add("expanded");
    console.log(circle.value);*/
}

function contractAll() {
    var expanded = document.getElementsByClassName("expanded");
    for (let el of expanded) {
        el.classList.remove("expanded");
    }
}

function showOverlay() {
    var overlay = document.getElementById("overlay");
    var bigCircle = document.getElementById("bigCircle");
    overlay.classList.add("fadeIn");
    overlay.style.visibility = "visible";
    bigCircle.style.visibility = "visible";
}

function hideOverlay() {
    var overlay = document.getElementById("overlay");
    var bigCircle = document.getElementById("bigCircle");
    overlay.classList.remove("fadeIn");
    overlay.style.visibility = "hidden";
    bigCircle.style.visibility = "hidden";
    for (let blurb of document.getElementsByClassName("textBlurb")) {
        blurb.style.visibility = "hidden";
    }
}