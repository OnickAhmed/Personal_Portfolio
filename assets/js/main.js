// MENU SHOW HIDDEN
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//SHOW MENU
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
//HIDE menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//ACCORDION SKILLS
const skillsContent = document.getElementsByClassName('skills_content'),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills)
})

//QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target'),
      tabContents = document.querySelectorAll('[data-content]');

      tabs.forEach(tab => {
          tab.addEventListener('click', () => {
              const target = document.querySelector(tab.dataset.target);

              tabContents.forEach(tabContent => {
                  tabContent.classList.remove('qualification_active')
              })              
              target.classList.add('qualification_active');

              tab.forEach(tab => {
                  tab.classList.remove('qualification_active')
              })
              tab.classList.add('qualification_active')
          })
      })

//SERVICES MODAL
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

//PORTFOLIO SWIPER
let swiperPortfolio = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    mousewheel: false,
    keyboard: true,
});

//TESTIMONIAL
let swiperTestimonial = new Swiper('.testimonial_container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },
  breakpoints:{
    568:{
      slidesPerView: 2,
    }
  }
});

//SCROLL SECTION ACTIVE LINK_
const section = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset;
  section.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}

window.addEventListener('scroll', scrollActive);

//CHANGE BACKGROUND HEADER
function scrollHeader() {
  const nav = document.getElementById('header');
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// //SCROLL TOP
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// DARK LIGHT THEME

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

    //Previously Selected
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Active / Deactive the theme manually with the button
themeButton.addEventListener('click', () => {
  console.log('click');
  //ADD or Remove the Dark Theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //Save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})