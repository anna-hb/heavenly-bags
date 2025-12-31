const heroImage = document.getElementById('hero-image');
const heroLogo = document.querySelector('.hero-logo');
const images = document.querySelectorAll('#hero-image .image');
let index = 0;

function changeHero() {
  images.forEach((img) => {
    img.classList.remove('active');
  });
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

setInterval(changeHero, 5000);
