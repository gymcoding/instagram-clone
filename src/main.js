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

  document.addEventListener('click', (e) => {
    e.stopPropagation();
    const $navMenu = document.getElementById('nav-menu');
    if ($navMenu.classList.contains('show')) {
      $navMenu.classList.remove('show');
    }
  });

  handleIntersectionObserver();
}

init();

function handleIntersectionObserver() {
  // IntersectionObserver 등록
  const options = {
    root: null,
    // 타겟 이미지 접근 전 이미지를 불러오기 위해 rootMargin을 설정했습니다.
    rootMargin: '0px 0px 0px 0px',
    threshold: 1,
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;

      if (entry.isIntersecting) {
        // 관찰 대상이 viewport 안에 들어온 경우 'active' 클래스 추가
        document
          .querySelector(`.nav__link[href*=${sectionId}]`)
          .classList.add('active-link');
        const disables = document.querySelectorAll(
          `.nav__link:not([href*=${sectionId}])`,
        );
        disables.forEach((el) => el.classList.remove('active-link'));
      }
    });
  }, options);

  // 관찰할 대상을 선언하고, 해당 속성을 관찰
  const sectionList = document.querySelectorAll('.section');
  sectionList.forEach((el) => io.observe(el));
}

// eslint-disable-next-line no-undef
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  //     reset: true
});
// 빠른 로딩
scrollReveal.reveal(
  '.home__data, .about__img, .skills__subtitle, .skills__text',
  {},
);
scrollReveal.reveal('.home__img, .about__data, .skills__img', { delay: 400 });
scrollReveal.reveal('.home__social-icon', { interval: 200 });

scrollReveal.reveal('.skills__data, .work__link, .contact__input', {
  interval: 200,
});

/* -------------------------- Floating Button Click ------------------------- */
const $floatingButton = document.getElementById('floating-button');
$floatingButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// 짐코딩
// eslint-disable-next-line no-undef
new TypeIt('#typeit', {
  strings: [
    '안녕하세요!',
    '<strong class="home__title-color">코딩 교육 크리에이터</strong>',
    '<strong class="home__title-color">짐코딩</strong>입니다!',
  ],
  speed: 50,
  waitUntilVisible: true,
}).go();
