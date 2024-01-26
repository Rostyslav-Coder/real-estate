window.addEventListener('scroll', () => {
  const headerBtns = document.querySelectorAll('.header__btn');
  headerBtns.forEach((button) => {
    const section = document.querySelector(button.getAttribute('href'));
    const position = section.getBoundingClientRect();
    if (position.top <= 0 && position.bottom >= 0) {
      // eslint-disable-next-line no-param-reassign
      button.style.borderBottom = '2px solid var(--white, #FFF)';
    } else {
      // eslint-disable-next-line no-param-reassign
      button.style.borderBottom = 'none';
    }
  });
});

window.addEventListener('load', () => {
  const bannerTitle = document.querySelector('.banner__title');
  let text = bannerTitle.textContent;
  text = `${text} ${text}`; // Add spaces and repeat text
  bannerTitle.textContent = text;

  let scrollPos = 0;
  const scrollSpeed = 2; // Scrolling speed can be changed

  function scrollText() {
    if (scrollPos < bannerTitle.scrollWidth / 2) {
      scrollPos += scrollSpeed;
    } else {
      scrollPos = 0;
    }
    bannerTitle.scrollLeft = scrollPos;
    requestAnimationFrame(scrollText);
  }

  scrollText();
});

window.addEventListener('load', () => {
  const partnersIcons = document.querySelector('.partners__icons');
  const icons = Array.from(partnersIcons.children);
  icons.forEach((icon) => partnersIcons.appendChild(icon.cloneNode(true))); // Дублируем иконки

  let scrollPos = 0;
  const scrollSpeed = 1; // Scrolling speed can be changed

  function scrollIcons() {
    if (scrollPos < partnersIcons.scrollWidth / 2) {
      scrollPos += scrollSpeed;
    } else {
      scrollPos = 0;
    }
    partnersIcons.scrollLeft = scrollPos;
    requestAnimationFrame(scrollIcons);
  }

  scrollIcons();
});

window.addEventListener('load', () => {
  const arrows = document.querySelectorAll('.arrow');
  const bannerImages = Array.from(document.querySelectorAll('.banner__image img'));
  let currentImageIndex = 0;

  function changeImage() {
    // Reset the width of all images to 0%
    // eslint-disable-next-line no-return-assign, no-param-reassign
    bannerImages.forEach((img) => img.style.width = '0%');

    // Set the width of the current image to 100%
    bannerImages[currentImageIndex].style.width = '100%';

    // Moving on to the next image
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
  }

  // Change the image by clicking on the arrow
  arrows.forEach((arrow) => arrow.addEventListener('click', changeImage));

  // Change the image every 5 seconds
  setInterval(changeImage, 5000);

  // Let's start with the first image
  changeImage();
});
