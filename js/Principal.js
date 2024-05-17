const body = document.querySelector("body"), 
        nav = document.querySelector("nav"), 
        modeToggle = document.querySelector(".darlight"), 
        searchToggle = document.querySelector(".searchToggle"),
        sliderclose = document.querySelector(".sliderclose"),
        slideropen = document.querySelector(".slideropen");

        let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body,classList.add("dark");
        }

modeToggle.addEventListener("click" , () => {
    modeToggle.classList.toggle("activeLight");
    body.classList.toggle("dark");
    if (!bpdy.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode");
    }else{
        localStorage.setItem("mode", "dark-mode");
    }
});
searchToggle.addEventListener("click" , () => {
    searchToggle.classList.toggle("activeBar");
});

slideropen.addEventListener("click" , () => {
    nav.classList.add("active");
});

body.addEventListener("click" , e => {
    let clickedElm = e.target;
    if (!clickedElm.classList.contains("slideropen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

let menuToggle = document.querySelector(".menu-toggle");
let menuRedes = document.querySelector(".menu-redes");
menuToggle.onclick = function(){
    menuRedes.classList.toggle("activeColor");
};

/*
const coords = {x: 0, y: 10};
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
circle.x = 0;
circle.y = 0;
});

window.addEventListener("mousemove", function(e){
coords.x = e.clientX;
coords.y = e.clientY;
    
animateCircles();
});
    
function animateCircles() {
let x = coords.x;
let y = coords.y;
    
circles.forEach(function (circle, index) {
circle.style.left = x - 12 + "px";
circle.style.top = y - 12 + "px";

circle.style.scale = (circles.length - index) / circles.length;

circle.x = x;
circle.y = y;
    
const nextCircle = circles[index + 1] || circles[0];
x += (nextCircle.x - x) * 0.3; 
y += (nextCircle.y - y) * 0.3;
});

requestAnimationFrame(animateCircles);

}

animateCircles();
*/