console.log ('');

//Change image at click

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.photo');

portfolioBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
});
