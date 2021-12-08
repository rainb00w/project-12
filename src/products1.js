 (() => {
    const refs = {
      openModalBtn1: document.querySelector('[data-image-text-open1]'),
      closeModalBtn1: document.querySelector('[data-image-text-close1]'),
      modal1: document.querySelector('[data-image-text1]'),
    };
  
    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.closeModalBtn1.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal1.classList.toggle('image__hidden__1');
    }
  })();
  (() => {
    document.querySelector('.js-speaker-form')
      .addEventListener('submit', e => {
      e.preventDefault();
  
      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`),
        );
        e.currentTarget.removeEventListener();
    });
  })();