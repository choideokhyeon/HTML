const ballEl = document.querySelector('.box>#ball');
const start=()=>{
  ballEl.style.animationPlayState='running';
}

const pause=()=>{
  ballEl.style.animationPlayState='paused';
}