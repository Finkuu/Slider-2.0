// const images = document.querySelectorAll('.slider .slider__line img');
// const sliderDots = document.querySelectorAll('.dots');
// const sliderLine = document.querySelector('.slider__line');
// const fontSize = document.querySelectorAll('.btn');
// let dotIndex;
// let count = 0;
// let width;
// function rollSlider() {
//     sliderLine.style.transform = 'translate(-' + count * width + 'px';
// }

// function init (){

//     width = document.querySelector('.slider').offsetWidth;
//  
//     sliderLine.style.width = width * images.length + 'px';
//     images.forEach(item =>{
//         item.style.width = width +'px';
//         item.style.height = 'auto'; 
//     })
//     fontSize.forEach (item2 =>{
//         item2.style.fontSize = (width/35)+'px';
//     })
//     rollSlider();

// }
// init();
// window.addEventListener('resize',init);

// document.querySelector('.btn__next').addEventListener('click', function () {
//     count++;
//     if(count>=images.length){
//         count=0;
//         document.querySelector('.slider__line').style.transition = 'all ease .1s';
//     }
//     if (count !=0) {   document.querySelector('.slider__line').style.transition = 'all ease 1s';}
//     rollSlider();
// });

// document.querySelector('.btn__prev').addEventListener('click', function () {
//     count--;
//     if(count<0){
//         count=images.length-1;
//         document.querySelector('.slider__line').style.transition = 'all ease .1s';
//     }
//     if (count != images.length-1) {   document.querySelector('.slider__line').style.transition = 'all ease 1s';}
//     rollSlider();
// });  
let width; 
const sliderLine = document.querySelector('.slider__line'), 
    prevButton = document.querySelector('.btn__prev'),  
    nextButton = document.querySelector('.btn__next'), 
    dots = document.querySelectorAll('.dot');
    let position = 0, dotIndex = 0;

    const nextSlide = () =>{
       if (position<(dots.length-1)*document.querySelector('.slider__line').offsetWidth) {
        position += document.querySelector('.slider__line').offsetWidth; dotIndex++;
       } else {
        position = 0; dotIndex = 0;
       }
       sliderLine.style.left = -position+'px'
       thisSlide(dotIndex);
    };
    
    const prevSlide = () =>{
        if (position>0) {
        position -= document.querySelector('.slider__line').offsetWidth; dotIndex--;
       } else {
        position = (dots.length-1)*document.querySelector('.slider__line').offsetWidth; dotIndex = dots.length-1;
       }
       sliderLine.style.left = -position+'px'
       thisSlide(dotIndex);
    };


    nextButton.addEventListener('click', nextSlide)

    
    prevButton.addEventListener('click', prevSlide)

    console.log(document.querySelector('.slider__line').offsetWidth)
window.addEventListener('resize',()=>{ position =document.querySelector('.slider__line').offsetWidth*dotIndex;
sliderLine.style.left = -position + 'px';})



dots.forEach((dot,index)=> {
dot.addEventListener('click',()=>{
    position =document.querySelector('.slider__line').offsetWidth *index
    sliderLine.style.left = -position +'px'
    dotIndex = index  
    thisSlide(dotIndex)
})
})
const thisSlide = () => {
    for(let dot of dots){
        dot.classList.remove('active')
    }
    dots[dotIndex].classList.add('active')
}