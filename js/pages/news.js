new Swiper('.news__swiper', {
  slidesPerView: 1.4,
  spaceBetween: 60,
  loop: true,

  breakpoints: {
    560: {
      slidesPerView: 2,
    }
  }
})
new Swiper('.popular-news__swiper', {
  slidesPerView: 8,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.popular-news__nav-next',
    prevEl: '.popular-news__nav-prev',
  }
})

