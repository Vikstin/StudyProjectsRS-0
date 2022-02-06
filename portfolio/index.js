console.log ('');


//Open-close menu

const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.nav');

function toggleMenu() {
    menu.classList.toggle('open');
    burger.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);


//Close menu at click link

const links = document.querySelectorAll(".nav-link");

function click() {
  menu.classList.remove("open");
  burger.classList.remove("open");
}

links.forEach((burger) => burger.addEventListener("click", click));


//Change image at click

const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioBtns = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.photo');


portfolioBtns.addEventListener('click', changeImage);

function changeImage(event) {
    if(event.target.classList.contains('portfolio-btn')) {
        for (let i = 0; i < portfolioBtn.length; i++){
            portfolioBtn[i].classList.remove('active');
        }
        
        event.target.classList.add('active');
        
        let dataValue = event.target.getAttribute('data-season');
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${dataValue}/${index + 1}.jpg`);
    
}
}

// Video-player

const progress = document.querySelector('.progress');
const progressVolume = document.querySelector('.progress-volume');

progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, ##bdae82 0%, ##bdae82 ${value}%, #fff ${value}%, white 100%)`
})
 