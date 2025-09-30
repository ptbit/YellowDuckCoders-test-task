const btn = document.querySelector('.mobile-menu__button');
const nav = document.querySelector('.nav');
const iconMenu = btn.querySelector('.mobile-menu__button__icon-menu');
const iconClose = btn.querySelector('.mobile-menu__button__icon-close-menu');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
  const isOpen = nav.classList.contains('active');

  iconMenu.style.display = isOpen ? 'none' : 'block';
  iconClose.style.display = isOpen ? 'block' : 'none';

  document.body.style.overflow = isOpen ? 'hidden' : '';
});
