// HEADER ACTIVE BUTTON ANIMATION
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

// TITLE SCROLLING ANIMATION
window.addEventListener('load', () => {
  const titles = ['.banner__title', '.about__title', '.offer__title'];

  titles.forEach((selector) => {
    const title = document.querySelector(selector);
    let text = title.textContent;
    text = `${text} ${text} ${text}`; // Add spaces and repeat text
    title.textContent = text;

    let scrollPos = 0;
    const scrollSpeed = 1; // Scrolling speed can be changed

    function scrollText() {
      if (scrollPos < title.scrollWidth / 2) {
        scrollPos += scrollSpeed;
      } else {
        scrollPos = 0;
      }
      title.scrollLeft = scrollPos;
      requestAnimationFrame(scrollText);
    }

    scrollText();
  });
});

// PARTNERS ICONS SCROLLING ANIMATION
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

// BANNER IMAGES SLIDER ANIMATION
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

// MOBILE TOUCH ANIMATION
document.querySelectorAll('.mobile__touch').forEach((img) => {
  img.addEventListener('touchstart', () => {
    this.style.filter = 'none';
  });
});

// ABOUT BACKGROUND ANIMATION
window.addEventListener('load', () => {
  const about = document.querySelector('.about');
  const images = ['../img/animat/img-1.png', '../img/animat/img-2.png', '../img/animat/img-3.png'];

  function createImg() {
    const img = document.createElement('img');
    const size = Math.random() * 50 + 50; // Random size from 50 to 100px

    img.style.transition = '2s';
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.padding = '0.5rem';
    img.style.borderRadius = '50%';
    img.style.boxShadow = `
      0px 0px 15px 0px var(--white, #FFF),
      0px 0px 30px 0px var(--white, #FFF),
      0px 0px 45px 0px var(--violet, #9400D3),
      0px 0px 60px 0px var(--violet, #9400D3),
      0px 0px 75px 0px var(--blue, #00DFFC)
    `;
    img.style.position = 'absolute';
    img.style.top = `${Math.random() * (about.offsetHeight - size * 2)}px`;
    img.style.left = `${Math.random() * (about.offsetWidth - size * 2)}px`;
    img.style.transformOrigin = 'center'; // Add transform dot to center
    img.style.zIndex = '2';
    img.src = images[Math.floor(Math.random() * images.length)]; // Random image

    about.appendChild(img);

    // Animation size scale
    setTimeout(() => {
      img.style.transform = 'scale(1.5)';
    }, 100);

    // Removing element after animation
    const randomTime = (Math.floor(Math.random() * 2) + 4) * 1000;
    setTimeout(() => {
      about.removeChild(img);
    }, randomTime);
  }

  // Generate img onse in 5 sec
  setInterval(createImg, 5000);
});

// OFFER BACKGROUND ANIMATION
window.addEventListener('load', () => {
  const about = document.querySelector('.offer');
  const image = '../img/animat/img-4.png';

  function createImg() {
    const img = document.createElement('img');
    const size = Math.random() * 50 + 50; // Random size from 50 to 100px

    img.style.transition = '2s';
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.padding = '0.5rem';
    img.style.borderRadius = '50%';
    img.style.boxShadow = `
      0px 0px 15px 0px var(--white, #FFF),
      0px 0px 30px 0px var(--white, #FFF),
      0px 0px 45px 0px var(--violet, #9400D3),
      0px 0px 60px 0px var(--violet, #9400D3),
      0px 0px 75px 0px var(--blue, #00DFFC)
    `;
    img.style.position = 'absolute';
    img.style.top = `${Math.random() * (about.offsetHeight - size * 2)}px`;
    img.style.left = `${Math.random() * (about.offsetWidth - size * 2)}px`;
    img.style.transformOrigin = 'center'; // Add transform dot to center
    img.style.zIndex = '2';
    img.src = image;

    about.appendChild(img);

    // Animation size scale
    setTimeout(() => {
      img.style.transform = 'scale(1.5)';
    }, 100);

    // Removing element after animation
    const randomTime = (Math.floor(Math.random() * 2) + 4) * 1000;
    setTimeout(() => {
      about.removeChild(img);
    }, randomTime);
  }

  // Generate img onse in 5 sec
  setInterval(createImg, 5000);
});
