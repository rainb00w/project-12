 (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-image-text-open]'),
      closeModalBtn: document.querySelector('[data-image-text-close]'),
      modal: document.querySelector('[data-image-text]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('image__hidden');
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
 