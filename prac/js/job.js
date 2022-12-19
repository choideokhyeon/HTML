new Swiper('#jobinfo .swiper', {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  loop: true,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true'
  }
});