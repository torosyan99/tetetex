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





// Services accordion

const servicesList = document.querySelector('.services__list');
let activeItem = document.querySelector('.services__item--active');

servicesList.addEventListener('click', (e) => {
  const target = e.target;
  const servicesWrapper = target.closest('.services__wrapper');

  if(servicesWrapper) {
    activeItem.classList.remove("services__item--active");
    activeItem = servicesWrapper.parentElement;
    activeItem.classList.add("services__item--active");
  }
})