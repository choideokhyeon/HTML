//최상단 퀵클릭
new Swiper('header>.inner>.gnb-top>.header-banner>.swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})


//메인 배너
new Swiper('.main-banner .swiper', {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 250,
  centeredSlides: true,

  navigation: {
    prevEl: '.main-banner .swiper-button-prev',
    nextEl: '.main-banner .swiper-button-next'
  },

  pagination: {
    el: '.main-banner .swiper-pagination',
    type: 'bullets',
    clickable: 'true'
  }
});


//메뉴바 애니메이션
const gnbsecond = document.querySelector('header>.inner>.gnb-second');
const submenu1 = document.querySelector('header>.inner>.gnb-second>.sub-menu>li>.inner-menu');
const submenu2 = document.querySelector('header>.inner>.gnb-second>.sub-menu>li:nth-child(2)>.inner-menu');
const submenu3 = document.querySelector('header>.inner>.gnb-second>.sub-menu>li:nth-child(3)>.inner-menu');
const submenu4 = document.querySelector('header>.inner>.gnb-second>.sub-menu>li:nth-child(4)>.inner-menu');
const submenu5 = document.querySelector('header>.inner>.gnb-second>.sub-menu>li:nth-child(5)>.inner-menu');
const submenu6 = document.querySelector('header>.inner>.gnb-second>.sub-menu>li:nth-child(6)>.inner-menu');


gnbsecond.addEventListener('mouseover', function () {
  gnbsecond.style.height = '150px';
  gnbsecond.style.transition = '1s';
  gnbsecond.style.backgroundColor = 'black';
  gnbsecond.style.border = '2px solid white';
  submenu1.style.display = 'block';
  submenu2.style.display = 'block';
  submenu3.style.display = 'block';
  submenu4.style.display = 'block';
  submenu5.style.display = 'block';
  submenu6.style.display = 'block';
})
gnbsecond.addEventListener('mouseout', function () {
  gnbsecond.style.height = '60px';
  gnbsecond.style.transition = '1s';
  gnbsecond.style.backgroundColor = 'gainsboro';
  gnbsecond.style.border = '1px solid black';
  submenu1.style.display = 'none';
  submenu2.style.display = 'none';
  submenu3.style.display = 'none';
  submenu4.style.display = 'none';
  submenu5.style.display = 'none';
  submenu6.style.display = 'none';
})



//로그인창 버튼
const loginbtn = document.querySelector('.login-btn');

const findpwbtn = document.querySelector('.findpw-btn');

const joinbtn = document.querySelector('.join-btn');


loginbtn.addEventListener('click',function(){
  alert('로그인 하셨습니다');
});

findpwbtn.addEventListener('click',function(){
  alert('비밀번호 찾기');
});

joinbtn.addEventListener('click',function(){
  alert('회원가입하기');
});


//회원가입창 버튼
const authbtn = document.querySelector('.auth-btn');

const cancelbtn = document.querySelector('.cancel-btn');

authbtn.addEventListener('click',function(){
  alert('전화번호 인증 완료');
});

cancelbtn.addEventListener('click',function(event){
  alert('취소합니다');
})