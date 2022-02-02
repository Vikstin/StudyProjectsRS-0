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

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.photo');

portfolioBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
});
