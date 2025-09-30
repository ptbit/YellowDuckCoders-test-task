const showMoreCountriesBtn = document.querySelector('.countries__show-all');

showMoreCountriesBtn.addEventListener('click', () => {
  showMoreCountriesBtn.classList.toggle('countries__show-all--active');
});
