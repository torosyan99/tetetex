const outPhotosCurrent = document.querySelector('.our-photos__current');

new Swiper('.our-photos__swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  on: {
    init() {
      const slidesPerGroup = this.params.slidesPerGroup;
      const totalGroups = Math.ceil(this.slides.length / slidesPerGroup);
      outPhotosCurrent.innerHTML =
        `<span class="slide-current__active"> 1 </span> <div class="slide-current__line"></div> ${totalGroups}`
    },
    slideChange() {
      const slidesPerGroup = this.params.slidesPerGroup;
      const totalGroups = Math.ceil(this.slides.length / slidesPerGroup);
      const currentGroup = Math.ceil(this.activeIndex / slidesPerGroup) + 1;
      outPhotosCurrent.innerHTML =
        `<span class="slide-current__active"> ${currentGroup}</span> 
             <div class="slide-current__line"></div> ${totalGroups}`

    }
  },
  breakpoints: {
    580: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3,
    },
    900: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    }
  }
})

