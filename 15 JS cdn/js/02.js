new Swiper('section>.main-banner>.inner>.swiper',{
  direction:'horizontal', //수평 슬라이드(기본)
  autoplay:{  //시작시 바로 재생 여부
    delay:3000,
    disableOnInteraction:false //사용자의 action에 따른 슬라이드 동작 정지여부
},
  loop:true,   //무한재생
  
  // navigation(버튼 기능 구현)
  navigation:{
    prevEl:'section>.main-banner>.inner>.swiper>.swiper-button-prev',
    nextEl:'section>.main-banner>.inner>.swiper>.swiper-button-next'
  },

  //pagination(하단 페이지뷰 구현)
  pagination:{
    el:'.main-banner .swiper-pagination',
    type:'fraction', //bullets,progressbar, fraction
    clickable:'true'
  },

  mousewheel:false,
  effect : 'fade',
  speed:3000,

  scrollbar:{
    el:'.main-banner .swiper-scrollbar',
    draggable:true
  }
})