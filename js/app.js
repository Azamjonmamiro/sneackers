const show = document.getElementById('show-btn')
const modal = document.querySelector('.modal')
const btn = document.querySelector('.modal-btn-korzin ')
const wrapper = document.getElementById('show-main')
const wrapp = document.querySelector('.mysliders-modal-3')
const lider = document.querySelector('.mysliders-section ')
const cards = document.querySelector('.cards')
const show2 = document.getElementById('show-button')
const body = document.querySelector('body')
const minus = document.querySelector('#min-btn')
const nol = document.querySelector('#nol')
const puls= document.querySelector('#puls-btn') 
const add= document.querySelector('#add-btn') 
const bnd= document.querySelector('#band-show') 
const chic= document.querySelector('.band-chic') 
const bands= document.querySelector('.main-cards-btn-bands') 

let score = 0 
let band = 0

add.addEventListener('click', () => {
    band++
    bnd.textContent  = band
    bands.classList.add('band-chic')
})


minus.addEventListener('click',()=>{
    score--
    nol.textContent =  score
    if(score <= 1 ){
        score = 1
    }
})
puls.addEventListener('click',()=>{
    score++
    nol.textContent =  score
});


wrapper.addEventListener('click', () => {
    lider.classList.toggle('mysliders-modal-3')
    body.classList.toggle('body')
})

show.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.toggle('modal-show')
    cards.classList.remove('modal-2')
    bands.classList.remove('band-chic')
})

// show2.addEventListener('click', () => {
//     cards.classList.toggle('modal-2')
// })

btn.addEventListener('click', (e) => {
    e.preventDefault()
    cards.classList.toggle('modal-2')
    modal.style.display = 'none'
    setTimeout(() => {
        window.location.reload()
    }, 2000)
})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}