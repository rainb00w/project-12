 (() => {
    const refs = {
      openModalBtn2: document.querySelector('[data-image-text-open2]'),
      closeModalBtn2: document.querySelector('[data-image-text-close2]'),
      modal2: document.querySelector('[data-image-text2]'),
    };
  
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.closeModalBtn2.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal2.classList.toggle('image__hidden__2');
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