const nav=document.querySelector(".nav");
window.addEventListener("scroll", function(){
    nav.classList.toggle("active",window.scrollY > 0);
});

let menuToggle = document.querySelector(".menu-toggle");
let menuRedes = document.querySelector(".menu-redes");
menuToggle.onclick = function(){
    menuRedes.classList.toggle("activeColor");
}

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