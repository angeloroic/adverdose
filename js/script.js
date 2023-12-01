// MOBILE NAV //

const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
const navbarLinks = document.querySelectorAll('.navbar-link');

btnNav.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

navbarLinks.forEach(link => {
  link.addEventListener('click', function () {
    header.classList.remove('nav-open');
  });
});

// YEAR //

const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// STICKY HEADER //

const sectionHero = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    ent.isIntersecting === false
      ? document.body.classList.add('sticky')
      : document.body.classList.remove('sticky');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-64px',
  }
);
obs.observe(sectionHero);
