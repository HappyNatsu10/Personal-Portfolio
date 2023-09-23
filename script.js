let number = document.getElementById("number")
let counter =0;
setInterval(() => {
    if(counter == 65){
        clearInterval();
    }
    else{
        counter += 1;
        number.innerHTML = counter + "%"
    }
   
}, 9);

let number2 = document.getElementById("number2")
let counter2 =0;
setInterval(() => {
    if(counter2 == 75){
        clearInterval();
    }
    else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%"
    }
   
}, 4);

let number3 = document.getElementById("number3")
let counter3 =0;
setInterval(() => {
    if(counter3 == 10){
        clearInterval();
    }
    else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%"
    }
   
}, 130);

let number4 = document.getElementById("number4")
let counter4 =0;
setInterval(() => {
    if(counter4 == 50){
        clearInterval();
    }
    else{
        counter4 += 1;
        number4.innerHTML = counter4 + "%"
    }
   
}, 10);

let number5 = document.getElementById("number5")
let counter5 =0;
setInterval(() => {
    if(counter5 == 5){
        clearInterval();
    }
    else{
        counter5 += 1;
        number5.innerHTML = counter5 + "%"
    }
   
}, 290);

let number6 = document.getElementById("number6")
let counter6 =0;
setInterval(() => {
    if(counter6 == 80){
        clearInterval();
    }
    else{
        counter6 += 1;
        number6.innerHTML = counter6 + "%"
    }
   
}, 2);


const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items] 
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

const toggleBtn =document.querySelector('.toggle_btn')
const toggleBtnIcon =document.querySelector('.toggle_btn i')
const dropDownMenu =document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}