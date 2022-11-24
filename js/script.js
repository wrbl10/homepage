console.log("Hello!");


let button = document.querySelector(".button");
let body = document.querySelector(".body");
let nextcolorname = document.querySelector(".nextcolorname")

button.addEventListener("click", () => {
    body.classList.toggle("greybackground");
    nextcolorname.innerText = body.classList.contains("greybackground") ? "białe" : "szare"
});