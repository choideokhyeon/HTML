//회원가입창 버튼
const authbtn = document.querySelector('.auth-btn');

const authinput = document.getElementById('authnum');

const authokbtn = document.querySelector('.authok-btn');

const resetbtn = document.querySelector('.reset-btn');

const cancelbtn = document.querySelector('.cancel-btn');

const inputslot = document.getElementsByClassName('inputslot');


//인풋창

authbtn.addEventListener('click', function () {
  alert('전화번호 인증 완료');
  authinput.disabled = false;
});

resetbtn.addEventListener('click', function () {
  alert('작성된 내용을 초기화 합니다');
  for (let i = 0; i < inputslot.length; i++) {
    console.log(inputslot[i]);
    console.log(inputslot[i].value);
    inputslot[i].value = null;
  }
})

cancelbtn.addEventListener('click', function (event) {
  alert('취소합니다');
})