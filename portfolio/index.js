// console.log ('Не успеваю сделать 3 часть, в ходе кросс-чека попробую догнать.\nОставьте плиз Ваш ник, чтоб я смогла написать Вам в Дискорд');


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


