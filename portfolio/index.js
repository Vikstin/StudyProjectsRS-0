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
const controlPlay = document.querySelector('div.play-button');
const buttonPlay = document.querySelector('div.play');
const controlPlay_hover = document.querySelector('video.div.play-hover');
const progress = document.querySelector('input.progress');
const progressVolume = document.querySelector('input.progress-volume');
const ranges = document.querySelectorAll('input.range');
// var drag;
// var grap;
// var progression;
 

video.addEventListener('click', togglePlay);
controlPlay.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handelProgress);
ranges.forEach(range => range.addEventListener('change', handelRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handelRangeUpdate));
progress.addEventListener('click', scrub);

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    } 
}

function updateButton() {
    if (this.paused) {
        buttonPlay.style.backgroundImage = "url('./assets/video/play.svg')";
        // controlPlay_hover.classList.toggle('play-hover');
    } else {
        buttonPlay.style.backgroundImage = "url('./assets/video/pause.svg')";
        // controlPlay_hover.classList.remove('play-hover');
    }
}

function handelRangeUpdate() {
    video[this.name] = this.value;
}

function handelProgress() {
    const persent = (video.currentTime / video.duration) * 100;
    progress.style.flexBasic = `${persent}%`;
}

function scrub(e) {
    const sctubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = sctubTime;
}

//Change color progress
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #fff ${value}%, white 100%)`
})
progressVolume.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #fff ${value}%, white 100%)`
  })