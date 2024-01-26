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
  const titles = ['.banner__title', '.about__title'];

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

// window.addEventListener('load', () => {
//   const bannerTitle = document.querySelector('.banner__title');
//   let text = bannerTitle.textContent;
//   text = `${text} ${text}`; //
//   bannerTitle.textContent = text;

//   let scrollPos = 0;
//   const scrollSpeed = 2; //

//   function scrollText() {
//     if (scrollPos < bannerTitle.scrollWidth / 2) {
//       scrollPos += scrollSpeed;
//     } else {
//       scrollPos = 0;
//     }
//     bannerTitle.scrollLeft = scrollPos;
//     requestAnimationFrame(scrollText);
//   }

//   scrollText();
// });

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

  // Change the image every 3 seconds
  setInterval(changeImage, 3000);

  // Let's start with the first image
  changeImage();
});

window.addEventListener('load', () => {
  const about = document.querySelector('.about');

  function createDiv() {
    const div = document.createElement('div');
    const size = Math.random() * 50 + 50; // Random size from 50 to 100px

    div.style.transition = '2s';
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.borderRadius = '50%';
    div.style.boxShadow = `
      0px 0px 15px 0px var(--white, #FFF),
      0px 0px 30px 0px var(--white, #FFF),
      0px 0px 45px 0px var(--violet, #9400D3),
      0px 0px 60px 0px var(--violet, #9400D3),
      0px 0px 75px 0px var(--blue, #00DFFC)
    `;
    div.style.position = 'absolute';
    div.style.top = `${Math.random() * (about.offsetHeight - size * 2)}px`;
    div.style.left = `${Math.random() * (about.offsetWidth - size * 2)}px`;
    div.style.transformOrigin = 'center'; // Add transform dot to center
    div.style.zIndex = 6;

    about.appendChild(div);

    // Animation size scale
    setTimeout(() => {
      div.style.transform = 'scale(1.5)';
    }, 100);

    // Removing element after animation
    const randomTime = (Math.floor(Math.random() * 2) + 4) * 1000;
    setTimeout(() => {
      about.removeChild(div);
    }, randomTime);
  }

  // Создание div каждые 5 секунд
  setInterval(createDiv, 5000);
});
