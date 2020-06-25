'use strict';

const escPressed = function(evt, popup, name, email, message ){

  if (evt.keyCode === 27) {
    console.log('тут');
    if (!popup.classList.contains('hide')) {
      evt.preventDefault();
      
      let isStorageSupport = true;
      try {
        localStorage.getItem('name');
      } catch {
        isStorageSupport = false;
      }
      if (isStorageSupport) {
        localStorage.setItem('name', name);
        localStorage.setItem('email',email);
        localStorage.setItem('message', message);
      }

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

