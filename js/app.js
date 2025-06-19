document.addEventListener('DOMContentLoaded', () =>{
    const hamburger = document.querySelector('.hamburger');
    const sideBar = document.querySelector('.sidebar');
    const iconClose = document.querySelector('.close');
    const logo = document.querySelector('.logo');
    const slides = document.querySelectorAll('.slide');
    const previous = document.querySelector('.previous');
    const next = document.querySelector('.next');

    console.log(slides)

    let currentIndex = 0;
    
    hamburger.addEventListener('click', () =>{
        sideBar.style.display = 'flex';
        logo.style.display = 'none';
        hamburger.style.display = 'none'
        iconClose.style.display = 'flex';
    });
    
    iconClose.addEventListener('click', () =>{
        sideBar.style.display = 'none';
        logo.style.display = 'flex';
        hamburger.style.display = 'flex';
        iconClose.style.display = 'none'
    });
    
    const nextSlide = (index, slides) => {
        slides.forEach((slide) => {
            slide.classList.remove('active')});
            
        slides[index].classList.add('active');

        currentIndex = index
    };
    
    previous.addEventListener('click', () =>{
        if(currentIndex <= 0){
            nextSlide(slides.length - 1, slides)
        }
        else{
            nextSlide(currentIndex - 1, slides)
        }
    });

    next.addEventListener('click', () =>{
        if(currentIndex >= slides.length - 1){
            nextSlide(0, slides)
        }
        else{
            nextSlide(currentIndex + 1, slides)
        }
    })

})



