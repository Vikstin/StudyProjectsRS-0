
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

// const player = document.querySelector('video-player');
const video = document.querySelector('video.viewer');
// const controlPlay = document.querySelector('div.play-button');
const buttonPlay = document.querySelector('div.play');
const buttonVol = document.querySelector('div.volume');
const controlPlay_hover = document.querySelector('div.play-hover');
const progress = document.querySelector('div.progress');
// const progressVolume = document.querySelector('input.progress-volume');
const rangeVol = document.querySelectorAll('input.progress-volume');
const slider = document.querySelectorAll('input.slider');
// var drag;
// var grap;
// var progression;
 

video.addEventListener('click', togglePlay);
buttonPlay.addEventListener('click', togglePlay);
video.addEventListener('play', updateButtonPlay);
video.addEventListener('pause', updateButtonPlay);
video.addEventListener('timeupdate', updateProgress);
buttonVol.addEventListener('click', updateButtonVol); 
rangeVol.forEach(range => range.addEventListener('change', updateVol));
rangeVol.forEach(range => range.addEventListener('mousemove', updateVol));
slider.forEach(range => range.addEventListener('input', changeColor)); 
progress.addEventListener('click', scrub);

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    } 
}

function updateButtonPlay() {
    if (this.paused) {
        buttonPlay.style.backgroundImage = "url('./assets/video/play.svg')";
        controlPlay_hover.classList.toggle('play-hover');
    } else {
        buttonPlay.style.backgroundImage = "url('./assets/video/pause.svg')";
        controlPlay_hover.classList.remove('play-hover');
    }
}

function updateVol() {
    var volume = this.value;
    video.volume = volume;
}

function updateButtonVol() {
        if (video.volume === 0) {
        buttonVol.style.backgroundImage = "url('./assets/video/mute.svg')";
}    buttonVol.style.backgroundImage = "url('./assets/video/volume.svg')";
} //no ????

function updateProgress() {
    var progress = (video.currentTime / video.duration);
    progress.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//Change color progress
// progress.addEventListener('input', function() {
//   const value = this.value;
//   this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #fff ${value}%, white 100%)`
// })

function changeColor() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #fff ${value}%, white 100%)`;
}