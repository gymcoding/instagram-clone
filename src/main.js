function toggleMenu() {
  const $navMenu = document.getElementById('nav-menu');
  $navMenu.classList.toggle('show');
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link');
  $navLinkList.forEach((n) => n.addEventListener('click', toggleMenu));

  const $body = document.querySelector('body');
  $body.addEventListener('click', () => {
    const $navMenu = document.getElementById('nav-menu');
    if ($navMenu.classList.contains('show')) {
      $navMenu.classList.remove('show');
    }
  });
}

init();
