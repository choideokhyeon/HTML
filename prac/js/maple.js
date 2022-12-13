//최상단 퀵클릭
new Swiper('header>.inner>.gnb-top>.header-banner>.swiper',{
  direction:'vertical',
  autoplay:true,
  loop:true
})


//메인 배너
new Swiper('.main-banner .swiper',{
  autoplay:{
    delay:1000,
    disableOnInteraction:false
  },
  loop:true,
  slidesPerView:3,
  spaceBetween:250,
  centeredSlides:true,

  navigation:{
    prevEl:'.main-banner .swiper-button-prev',
    nextEl:'.main-banner .swiper-button-next'
  },

  pagination:{
    el:'.main-banner .swiper-pagination',
    type:'bullets',
    clickable:'true'
  }
});