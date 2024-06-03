/*
MENU
*/
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

window.addEventListener("scroll", function(){
    nav.classList.toggle("activeMenu",window.scrollY > 0);
});


/*
CARRUCEL
*/
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carrucelDom = document.querySelector(".carrucel");
let listDom = document.querySelector(".carrucel .list");
let miniaturasDom = document.querySelector(".carrucel .miniaturas");
let itemSlider = document.querySelectorAll (".carrucel .list .item");
let itemMiniatura = document.querySelectorAll (".carrucel .miniaturas .item");

nextDom.onclick = function(){
    showSlider("next");
}
prevDom.onclick = function(){
    showSlider ("prev");
}
let timeRunning = 1500;
let runTimeOut;

function showSlider(params) {

    if (params === "next") {
        listDom.appendChild(itemSlider[0]);
        miniaturasDom.appendChild(itemMiniatura[0]);
        carrucelDom.classList.add("next");
    } else {
        listDom.prepend(itemSlider[itemSlider.length -1]);
        miniaturasDom.prepend(itemMiniatura[itemMiniatura.length -1]);
        carrucelDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carrucelDom.classList.remove("next");
        carrucelDom.classList.remove("prev");
    }, timeRunning)
}

/*let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carrucel');
let SliderDom = carouselDom.querySelector('.carrucel .list');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carrucel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;
nextDom.onclick = function(){
    showSlider('next');    
}
prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carrucel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carrucel .miniaturas .item');

    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}*/