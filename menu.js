const burgerBtn = document.querySelector('.mobile-menu__button');
const navBlock = document.querySelector('.nav');
const iconMenu = burgerBtn.querySelector('.mobile-menu__button__icon-menu');
const iconClose = burgerBtn.querySelector('.mobile-menu__button__icon-close-menu');

burgerBtn.addEventListener('click', () => {
  const isOpen = navBlock.classList.toggle('active');

  if (isOpen) {
    iconMenu.style.display = 'none';
    iconClose.style.display = 'block';
    burgerBtn.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden'; 
  } else {
    iconMenu.style.display = 'block';
    iconClose.style.display = 'none';
    burgerBtn.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }
});
