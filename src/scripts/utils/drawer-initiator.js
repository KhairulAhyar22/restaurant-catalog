const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      drawer.classList.toggle('open');
    });

    content.addEventListener('click', (event) => {
      event.stopPropagation();
      drawer.classList.remove('open');
    });
  },
};

export default DrawerInitiator;
