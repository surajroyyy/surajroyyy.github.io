/* Your JS here. */
console.log('Hello World!')

// const sections = document.querySelectorAll('section');
// const navOptions = document.querySelectorAll();

const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll("header ul li");

document.getElementById("navbar").style.fontSize = "25px";
document.getElementById("navbar").style.padding = "30px 0px";

window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach(section => {
        const offset = section.offsetTop;
        const height = section.clientHeight;
        if (pageYOffset >= (offset - height / 3)) {
            current = section.getAttribute('id');
        }
    })

    navList.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
            li.classList.add('active');
        }
    })

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.padding = "10px 0px";
        document.getElementById("navbar").style.fontSize = "20px";
    } else {
        document.getElementById("navbar").style.padding = "25px 0px";
        document.getElementById("navbar").style.fontSize = "25px";
    }
}

var modal = document.getElementById("epicModal");
var btn = document.getElementById("epic");
var close = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    console.log("DISPLAY EPIC");
}

close.onclick = function () {
    modal.style.display = "none";
}

var modal2 = document.getElementById("hangModal");
var btn2 = document.getElementById("hang");
var close2 = document.getElementsByClassName("close")[1];

btn2.onclick = function() {
    modal2.style.display = "block";
}

close2.onclick = function () {
    modal2.style.display = "none";
}

var modal3 = document.getElementById("moModal");
var btn3 = document.getElementById("moback");
var close3 = document.getElementsByClassName("close")[2];

btn3.onclick = function() {
    modal3.style.display = "block";
}

close3.onclick = function () {
    modal3.style.display = "none";
}

let slideIndex = 1;
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

function changeSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++)
        slides[i].style.display = "none";

    slides[slideIndex - 1].style.display = "block";
}

