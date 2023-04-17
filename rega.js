const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-menu li');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

dropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    dropdownToggle.textContent = item.textContent;
    dropdownMenu.classList.remove('show');
  });
});
