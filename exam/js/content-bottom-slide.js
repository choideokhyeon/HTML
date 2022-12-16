new Swiper('.swiper1 .swiper',{
    direction:'horizontal',
    autoplay:{
      delay:2000,
      disableOnInteraction:false
    },
  
    navigation:{
      prevEl:'.swiper .swiper-button-prev',
      nextEl:'.swiper .swiper-button-next'
    }
  })