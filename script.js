var button = document.getElementById("ShowButton");
var reference = document.getElementById("reference");
button.addEventListener("click", function () {
    if (reference.style.display === "none") {
        reference.style.display = "flex";
        button.style.position = "absolute";
        button.style.bottom = "-800";
        button.style.left = "350px";
    }
    else {
        reference.style.display = "none";
    }
});
