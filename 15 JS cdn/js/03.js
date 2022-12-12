new Swiper('section>.second-banner>.inner>.swiper',{
  direction:'horizontal', //수평 슬라이드(기본)
  autoplay:{  //시작시 바로 재생 여부
    delay:3000,
    disableOnInteraction:false //사용자의 action에 따른 슬라이드 동작 정지여부
},
  loop:true,   //무한재생

  slidesPerView:5,  //한번에 보여주는 slide 개수

  spaceBetween:5,   //slide 간의 간격

  centeredSlides : true,
  

  // navigation(버튼 기능 구현)
  navigation:{
    prevEl:'section>.second-banner>.inner>.swiper>.swiper-button-prev',
    nextEl:'section>.second-banner>.inner>.swiper>.swiper-button-next'
  },


  // //pagination(하단 페이지뷰 구현)
  // pagination:{
  //   el:'.second-banner .swiper-pagination',
  //   type:'fraction', //bullets,progressbar, fraction
  //   clickable:'true'
  // },

  
  // mousewheel:true,
  // effect : 'fade',
  // speed:3000,


  // scrollbar:{
  //   el:'.second-banner .swiper-scrollbar',
  //   draggable:true
  // }
})