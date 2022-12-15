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