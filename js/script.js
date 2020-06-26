'use strict';

//promo-slider 
try {
  const promoSlides = document.querySelectorAll('.slide');
  const arrowsControlButton = document.querySelectorAll('.arrows-control__button');   
  const dotsControlButton = document.querySelectorAll('.dots-control__button');

  arrowsControlButton.forEach((arrow, arrowIndex) => {

    arrow.addEventListener('click', () => {
      
      let indexOfActiveSlide = 0;
      let activeSlide = promoSlides[0];
      const activeDot = document.querySelector('.dots-control__button--active');

      for (let i = 0; i < promoSlides.length; i++) {
        if (!promoSlides[i].classList.contains('hide')) {
          activeSlide = promoSlides[i];
          indexOfActiveSlide = i;
        }
      }

      if (arrowIndex === 0) {
        activeDot.classList.toggle('dots-control__button--active');
        activeSlide.classList.toggle('hide');
        indexOfActiveSlide--;
        if (indexOfActiveSlide < 0) {indexOfActiveSlide = promoSlides.length-1;}
        promoSlides[indexOfActiveSlide].classList.toggle('hide');
        dotsControlButton[indexOfActiveSlide].classList.toggle('dots-control__button--active');
      }
      else if (arrowIndex === 1) {
        activeDot.classList.toggle('dots-control__button--active');
        activeSlide.classList.toggle('hide');
        indexOfActiveSlide++;
        if (indexOfActiveSlide > promoSlides.length-1) {indexOfActiveSlide = 0;}
        promoSlides[indexOfActiveSlide].classList.toggle('hide');
        dotsControlButton[indexOfActiveSlide].classList.toggle('dots-control__button--active');
      }
    });
  });

  dotsControlButton.forEach((dot, dotIndex) => {

    dot.addEventListener('click', () => {

      let indexOfActiveSlide = 0;
      let activeSlide = promoSlides[0];
      const activeDot = document.querySelector('.dots-control__button--active');

      for (let i = 0; i < promoSlides.length; i++) {
        if (!promoSlides[i].classList.contains('hide')) {
          activeSlide = promoSlides[i];
          indexOfActiveSlide = i;
        }
      }

      if (indexOfActiveSlide !== dotIndex) {
        activeDot.classList.toggle('dots-control__button--active');
        activeSlide.classList.toggle('hide');

        promoSlides[dotIndex].classList.toggle('hide');
        dotsControlButton[dotIndex].classList.toggle('dots-control__button--active');
      }
    });
  });

}
catch(err) {};

//services-slider
try {
  const servicesButton = document.querySelectorAll('.services-slider__button');
  const servicesSlides = document.querySelectorAll('.services-slider__slide');
  let indexOfCurrentSlide = -1;

  servicesButton.forEach((button, index) => {
    button.addEventListener('click', () => {
      const currentActiveButton = document.querySelector('.services-slider__active');

      for (let i = 0; i < servicesButton.length; i++) {
        if (servicesButton[i].classList.contains('services-slider__active')) {
          indexOfCurrentSlide = i;
        }
      }

      if (!button.classList.contains('services-slider__active')) {
        button.classList.add('services-slider__active');
        currentActiveButton.classList.remove('services-slider__active');

        servicesSlides[indexOfCurrentSlide].classList.toggle('hide');
        servicesSlides[index].classList.toggle('hide');
      }
    });
  });

}
catch(err) {};

const escPressed = function(evt, popup, name, email, message) {

    if (evt.keyCode === 27) {

      if (!popup.classList.contains('hide')) {
        evt.preventDefault();
        
        try {
          localStorage.setItem('name', name.value);
          localStorage.setItem('email', email.value);
          localStorage.setItem('message', message.value);

          if (name.classList.contains('modal-error')) {
            name.classList.remove('modal-error');
          } 
          if (email.classList.contains('modal-error')) {
            email.classList.remove('modal-error');
          } 
          if (message.classList.contains('modal-error')) {
            message.classList.remove('modal-error');
          }
        } catch {}
  
        popup.classList.toggle('hide');
        popup.classList.remove('modal-appear');
      }
    }
  };

//mapModal
try {
  const mapOpen = document.querySelector('.contacts__link');
  const mapModal = document.querySelector('.map-modal');
  const mapClose = mapModal.querySelector('.map-modal__close');

  mapOpen.addEventListener('click', (evt) => {

    evt.preventDefault();
    mapModal.classList.add('modal-appear');
    if (mapModal.classList.contains('hide')) {
      mapModal.classList.toggle('hide');
    };

    mapClose.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (!mapModal.classList.contains('hide')) {
        mapModal.classList.toggle('hide');
      }
    });

    window.addEventListener('keydown', (evt) => {
      console.log('поймали нажатие');
      escPressed(evt, mapModal);
    });

  });
}
catch(err) {};

// toCartModal
try {
  const toCartModalOpen = document.querySelectorAll('.card__tocart-button');
  const toCartModal = document.querySelector('.to-cart-modal');
  const toCartClose = toCartModal.querySelector('.to-cart-modal__close');
  const backToCatalog = toCartModal.querySelector('.to-cart-modal__back-to-catalog');
  const cart = document.querySelector('.cart');
  const textInCart = document.querySelector('.cart__text');

  toCartModalOpen.forEach((item) => {

    item.addEventListener('click', (evt) => {

      evt.preventDefault();

      toCartModal.classList.add('modal-appear');

      if (!cart.classList.contains('not-empty')) {
        cart.classList.add('not-empty');
        let counter = textInCart.textContent.slice(textInCart.textContent.indexOf(' '));
        counter++;
        document.querySelector('.cart__text').textContent = `Корзина: ${counter}`;
      }
      else {
        let counter = textInCart.textContent.slice(textInCart.textContent.indexOf(' '));
        counter++;
        document.querySelector('.cart__text').textContent = `Корзина: ${counter}`;
      }
      
      if (toCartModal.classList.contains('hide')) {
        toCartModal.classList.toggle('hide');
      };
    
      toCartClose.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (!toCartModal.classList.contains('hide')) {
          toCartModal.classList.toggle('hide');
        }
      });

      backToCatalog.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (!toCartModal.classList.contains('hide')) {
          toCartModal.classList.toggle('hide');
        }
      });

      window.addEventListener('keydown', (evt) => {
        escPressed(evt, toCartModal);
      });

    });
  });
}
catch(err) {};

//writeUsModal
try {
  const writeUsModalOpen = document.querySelector('.contacts__mail-us-button');
  const writeUsModal = document.querySelector('.write-us-modal');
  const writeUsClose = writeUsModal.querySelector('.write-us-modal__close');
  const userInfo = writeUsModal.querySelectorAll('.write-us-modal__input');
  const writeUsform = writeUsModal.querySelector('.write-us-modal__form');
  const userMessage = writeUsModal.querySelector('.write-us-modal__textarea');

  let isStorageSupport = true;

  writeUsModalOpen.addEventListener('click', (evt) => {
    evt.preventDefault();
    
    writeUsModal.classList.add('modal-appear');

    if (writeUsModal.classList.contains('hide')) {
      writeUsModal.classList.toggle('hide');
    };


    try {
      localStorage.getItem('name');
    } catch {
      isStorageSupport = false;
    }


    if (isStorageSupport) {
        if (localStorage.getItem('name') || localStorage.getItem('email') || false) {
        
        userInfo[0].value = localStorage.getItem('name');
        userInfo[1].value = localStorage.getItem('email');

        if (localStorage.getItem('message') || false) {
          userMessage.value = localStorage.getItem('message');
          userMessage.focus();

        }  
      } 
      else {
        userInfo[0].focus();

      }
    } else {
      userInfo[0].focus();
    }

    writeUsClose.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (!writeUsModal.classList.contains('hide')) {
        if (isStorageSupport) {
          localStorage.setItem('name', userInfo[0].value);
          localStorage.setItem('email', userInfo[1].value);
          localStorage.setItem('message', userMessage.value);
        }
        writeUsModal.classList.remove('modal-appear');
        if (userInfo[0].classList.contains('modal-error')) {
          userInfo[0].classList.remove('modal-error');
        } 
        if (userInfo[1].classList.contains('modal-error')) {
          userInfo[1].classList.remove('modal-error');
        }
        if (userMessage.classList.contains('modal-error')) {
          userMessage.classList.remove('modal-error');
        }
        writeUsModal.classList.toggle('hide');
      }
    });
 
    writeUsform.addEventListener('submit', (evt) => {
      evt.preventDefault();
      writeUsModal.classList.remove('modal-appear');

      userInfo[0].classList.remove('modal-error');
      userInfo[1].classList.remove('modal-error');
      userMessage.classList.remove('modal-error');
      writeUsModal.clientWidth;
      if (!userInfo[0].value || !userInfo[1].value || !userMessage.value) {
        if (!userInfo[0].value) {
          userInfo[0].classList.add('modal-error');
        }
        if (!userInfo[1].value) {
          userInfo[1].classList.add('modal-error');
        }
        if (!userMessage.value) {
          userMessage.classList.add('modal-error');
        }
        
      } else {
        

        if (isStorageSupport) {
          // запоминаем имя и почту
          localStorage.setItem('name', userInfo[0].value);
          localStorage.setItem('email', userInfo[1].value);
        }
        
        //по идее тут еще должна быть какая-то отправка сообщения, вместо дефолтной
        // очищаем поля после отправки
        userMessage.value = '';
        userInfo[0].value = '';
        userInfo[1].value = '';

        // закрываем окно и удаляем класс ошибки после отправки сообщения
        writeUsModal.classList.toggle('hide');
        if (userInfo[0].classList.contains('modal-error')) {
          userInfo[0].classList.remove('modal-error');
        } 
        if (userInfo[1].classList.contains('modal-error')) {
          userInfo[1].classList.remove('modal-error');
        }
        if (userMessage.classList.contains('modal-error')) {
          userMessage.classList.remove('modal-error');
        }
      }
    });

    window.addEventListener('keydown', (evt) => {
      escPressed(evt, writeUsModal, userInfo[0], userInfo[1], userMessage);
    });

  });
}
catch(err) {};