const thumbs = new Swiper('.product__thumbs-swiper', {
  slidesPerView: 5,
  spaceBetween: 10,

  // direction: 'horizontal',
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 5,
      direction: 'vertical',
    }
  },
  navigation: {
    nextEl: '.product__thumbs-next',
    prevEl: '.product__thumbs-prev',
  }

})
new Swiper('.product__swiper', {
  slidesPerView: 1,
  thumbs: {
    // loop: true,
    swiper: thumbs,
  },
})


const tableButton = document.querySelector('.product__table-open')
const table = document.querySelector('.product__table')


tableButton.addEventListener('click', () => {
  table.style.height = 'auto'
  tableButton.remove()
})


const productList = document.querySelector('.product__faq-list');
let activeItem = null;

productList.addEventListener('click', (e) => {
  const target = e.target;
  const servicesWrapper = target.closest('.product__faq-item');

  if (servicesWrapper) {
    if (activeItem)
      activeItem.classList.remove("product__faq-item--active");
    activeItem = servicesWrapper;
    activeItem.classList.add("product__faq-item--active");
  }
})



new Swiper('.other-brands__swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    580: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView:3,
    },
    900: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: '.other-brands__nav-next',
    prevEl: '.other-brands__nav-prev',
  }
})