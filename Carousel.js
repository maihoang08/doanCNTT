const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const dot_1 = document.querySelector("#dot-1");
const dot_2 = document.querySelector("#dot-2");
const dot_3 = document.querySelector("#dot-3");
const dots = document.querySelectorAll('.dot');
//Counter
let counter = 0;
let size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + -(size * counter) + 'px)';

dot_1.addEventListener('click',()=> {
    counter = 0;
    updateDot(counter);
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + -(size * counter) + 'px)';
})

dot_2.addEventListener('click',()=> {
    counter = 1;
    updateDot(counter);
    dots.forEach(element => {
        element.classList.remove('active');
    });
    dot_2.classList.add('active');
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + -(size * counter) + 'px)';
})

dot_3.addEventListener('click',()=> {
    counter = 3;
    updateDot(counter);
    dots.forEach(element => {
        element.classList.remove('active');
    });
    dot_3.classList.add('active');
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + -(size * counter) + 'px)';
})

const updateDot = (index) => {
    switch(index){
        case 0:
            dots.forEach(element => {
                element.classList.remove('active');
            });
            dot_1.classList.add('active');
            break;
        case 1:
            dots.forEach(element => {
                element.classList.remove('active');
            });
            dot_2.classList.add('active');
            break;
        case 2:
            dots.forEach(element => {
                element.classList.remove('active');
            });
            dot_3.classList.add('active');
            break;
    }
}

setInterval(() =>{
    counter++;
    if (counter > 2){
        counter = 0;
    }
    updateDot(counter);
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + -(size * counter) + 'px)';
},2000)
