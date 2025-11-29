function addItemsSwiperMob(desktop, itemCss, mobile) {
  const swiperSlides = desktop.querySelectorAll(itemCss);
  const mobileWrapper = mobile.querySelector('.swiper-wrapper');
  for (const item of swiperSlides) {
    const clone = item.cloneNode(true);
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.appendChild(clone);
    mobileWrapper.appendChild(div);
  }
}


// Our-works slide


const ourWorksList = document.querySelector('.our-works__list');
const ourWorksSwiperMob = document.querySelector('.our-works__swiper');
addItemsSwiperMob(ourWorksList, '.our-works__item', ourWorksSwiperMob)


new Swiper('.our-works__swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,

  breakpoints: {
    580: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.2,

    }
  }
})


// Cases slide

const casesSwiper = document.querySelector('.cases__swiper');
const casesSwiperMob = document.querySelector('.cases__swiper-mob');
const casesCurrent = document.querySelector('.cases__current');

new Swiper(casesSwiper, {
  clickable: true,
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: '.cases__nav-next',
    prevEl: '.cases__nav-prev',
  },
  on: {
    init() {
      casesCurrent.innerHTML = `<span class="cases__active-current"> 1 </span> <div class="cases__line"></div> ${this.slides.length}`
    },
    slideChange() {
      casesCurrent.innerHTML = `<span class="cases__active-current"> ${this.activeIndex + 1}</span>  <div class="cases__line"></div> ${this.slides.length}`

    }
  }
})


addItemsSwiperMob(casesSwiper, '.cases__item', casesSwiperMob)


new Swiper(casesSwiperMob, {
  clickable: true,
  spaceBetween: 20,
  slidesPerView: 1.2,
  breakpoints: {
    580: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.2,

    }
  }
})


// Import slide

new Swiper('.import__swiper', {
  clickable: true,
  slidesPerView: 4,

  breakpoints: {
    768: {
      spaceBetween: 20,
    }
  },

  navigation: {
    nextEl: '.import__nav-next',
    prevEl: '.import__nav-prev',
  },
})
