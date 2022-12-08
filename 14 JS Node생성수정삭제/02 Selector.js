const menuEl = document.querySelector('.menu>li:nth-child(2)');
menuEl.style.backgroundColor='red';

const submenuEls = document.querySelectorAll('.submenu>li');
submenuEls.forEach((El)=>{
  El.style.backgroundColor='blue';
})

const menu2El = document.querySelector('.menu>li:nth-child(3)');
menu2El.style.backgroundColor='green';