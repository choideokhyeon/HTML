//메인 배너 파트

new Swiper('section>.main-banner>.inner>.swiper',{
  direction : 'horizontal',
  autoplay:{
    delay:1000,
    disableOnInteraction:false
  },
  loop : true,

  navigation:{
    prevEl : '.main-banner .swiper-button-prev',
    nextEl : '.main-banner .swiper-button-next'
  },

  pagination:{
    el:'.main-banner .swiper-pagination',
    type:'bullets',
    clickable:'true'
  }
})