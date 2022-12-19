//회원가입창 버튼
const authbtn = document.querySelector('.auth-btn');

const authinput = document.getElementById('authnum');

const authokbtn = document.querySelector('.authok-btn');

const resetbtn = document.querySelector('.reset-btn');

const cancelbtn = document.querySelector('.cancel-btn');

const inputslot = document.getElementsByClassName('inputslot');

var password1 = document.getElementById("pw1");

var password2 = document.getElementById("pw2");

const submitbtn = document.querySelector('.submit-btn');

//비밀번호 확인
function pwcheck(){
  if(password1.value != password2.value)
  {
    password2.setCustomValidity("비밀번호가 일치하지 않습니다");
  }
  else{
    // if(password)
    password2.setCustomValidity('');
  }
}

password1.onchange = pwcheck;
password2.onkeyup = pwcheck;





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




//인풋창 누락 확인
function inputcheck(){
  for(let i = 0; i < inputslot.length; i++){
    if(inputslot[i].value="")
    {
      inputslot[i].setCustomValidity('빈칸으로 둘 수 없습니다');
      return;
    }
  }
}
submitbtn.onclick=inputcheck;