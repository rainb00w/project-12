(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-about-open]'),
      closeModalBtn: document.querySelector('[data-about-close]'),
      modal: document.querySelector('[data-about]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('about-hidden');
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