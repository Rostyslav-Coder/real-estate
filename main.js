// HEADER ACTIVE BUTTON ANIMATION
window.addEventListener('scroll', () => {
  const headerBtns = document.querySelectorAll('.header__btn');
  headerBtns.forEach((btn) => {
    const button = btn;
    const section = document.querySelector(button.getAttribute('href'));
    if (section) { // Checking if an element exists
      const position = section.getBoundingClientRect();
      if (position.top <= 0 && position.bottom >= 0) {
        button.style.borderBottom = '2px solid var(--white, #FFF)';
      } else {
        button.style.borderBottom = 'none';
      }
    }
  });
});

// BANNER & BEST DEAL TITLE SCROLLING ANIMATION
window.addEventListener('load', () => {
  const titles = [
    '.banner__title',
    '.deal__title',
  ];

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

// ABOUT TITLE ANIMANION
window.addEventListener('load', () => {
  const title = document.querySelector('.about__title');
  const letters = title.textContent.split('');
  title.textContent = '';

  letters.forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter === ' ' ? '\u00A0' : letter;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'scale(2.4) translate(0, -50px)';
    title.appendChild(span);
  });

  window.addEventListener('scroll', () => {
    const position = title.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (position.top <= windowHeight && position.bottom >= windowHeight * 0.2) {
      title.querySelectorAll('span').forEach((span, i) => {
        const animatedLetter = span;
        setTimeout(() => {
          animatedLetter.style.transition = '2s';
          animatedLetter.style.opacity = '1';
          animatedLetter.style.transform = 'scale(1) translate(0, 0)';
        }, 100 * i);
      });
    } else {
      title.querySelectorAll('span').forEach((span) => {
        const animatedLetter = span;
        animatedLetter.style.opacity = '0';
        animatedLetter.style.transform = 'scale(2.4) translate(0, -50px)';
      });
    }
  });
});

// OFFER & REVIEW TITLE ANIMANION
window.addEventListener('load', () => {
  const titles = ['.offer__title', '.review__title'];

  titles.forEach((selector) => {
    const title = document.querySelector(selector);
    const words = title.textContent.split(' ');
    title.textContent = '';

    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = `${word}\u00A0`; // Add whitespace after each word
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = i % 2 === 0 ? 'translateX(calc(-80% - 0.5rem))' : 'translateX(calc(80% + 0.5rem))';
      title.appendChild(span);
    });

    window.addEventListener('scroll', () => {
      const position = title.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (position.top <= windowHeight && position.bottom >= windowHeight * 0.2) {
        title.querySelectorAll('span').forEach((span, i) => {
          const animatedLetter = span;
          setTimeout(() => {
            animatedLetter.style.transition = '2s';
            animatedLetter.style.opacity = '1';
            animatedLetter.style.transform = 'translateX(0)';
          }, 100 * i);
        });
      } else {
        title.querySelectorAll('span').forEach((span, i) => {
          const animatedLetter = span;
          animatedLetter.style.opacity = '0';
          animatedLetter.style.transform = i % 2 === 0 ? 'translateX(calc(-80% - 0.5rem))' : 'translateX(calc(80% + 0.5rem))';
        });
      }
    });
  });
});

// ABOUT & REVIEW CARDS ANIMATION
window.addEventListener('load', () => {
  const cardsList = ['.about__card', '.review__card'];

  cardsList.forEach((selector) => {
    const cards = document.querySelectorAll(selector);
    cards.forEach((card) => {
      const animatedCard = card;
      animatedCard.style.transform = 'translateY(200px) scale(0.6)';
      animatedCard.style.opacity = '0.2';
      animatedCard.style.transition = '2s';
    });

    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;

      cards.forEach((card) => {
        const position = card.getBoundingClientRect();

        if (position.top <= windowHeight && position.bottom >= windowHeight * 0.1) {
          const animatedCard = card;
          animatedCard.style.transform = 'translateY(0) scale(1)';
          animatedCard.style.opacity = '1';
        } else if (position.top > windowHeight || position.bottom < windowHeight * 0.1) {
          const animatedCard = card;
          animatedCard.style.transform = 'translateY(200px) scale(0.6)';
          animatedCard.style.opacity = '0.2';
        }
      });
    });
  });
});

// CONTACT TITLE ANIMANION
window.addEventListener('load', () => {
  const title = document.querySelector('.contact__title');
  const words = title.textContent.split(' ');
  title.textContent = '';

  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.textContent = `${word}\u00A0`; // Add whitespace after each word
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'scale(2.4)';
    span.style.filter = 'blur(12px)';
    title.appendChild(span);

    window.addEventListener('scroll', () => {
      const position = title.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (position.top <= windowHeight && position.bottom >= windowHeight * 0.2) {
        setTimeout(() => {
          span.style.transition = '2s';
          span.style.opacity = '1';
          span.style.transform = 'scale(1)';
          span.style.filter = 'blur(0)';
        }, 100 * i);
      } else {
        span.style.opacity = '0';
        span.style.transform = 'scale(2.4)';
        span.style.filter = 'blur(12px)';
      }
    });
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

// BEST-DEAL IMAGES SLIDER ANIMATION
window.addEventListener('load', () => {
  const arrows = document.querySelectorAll('.arrow');
  const bannerImages = Array.from(document.querySelectorAll('.deal__images img'));
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
// eslint-disable-next-line prefer-arrow-callback, func-names
document.querySelectorAll('.mobile__touch').forEach(function (img) {
  // eslint-disable-next-line func-names
  img.addEventListener('touchstart', function () {
    this.style.filter = 'none';
  });
  // eslint-disable-next-line func-names
  img.addEventListener('touchend', function () {
    this.style.filter = 'grayscale(1)';
  });
});
