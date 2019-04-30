function expand(circle) {
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