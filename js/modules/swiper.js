export const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true,

  breakpoints: {
    0: {
      spaceBetween: 70,
      slidesPerView: 2
    },
    768: {
      spaceBetween: 150,
      slidesPerView: 2
    },
    1280: {
      spaceBetween: 200,
      slidesPerView: 3
    }
  }
});
