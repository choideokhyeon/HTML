// Todo <-> Done 전환 버튼 이벤트
const TodoBtnEl = document.querySelector('.btn--Todo');
const DoneBtnEl = document.querySelector('.btn--Done');
const ClearBtnEl = document.querySelector('.btn--Clear');
const TodoBlockEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do');
const DoneBlockEl = document.querySelector('.TodoContainer>.Todo__body>.body__Done');

DoneBtnEl.addEventListener('click', function () {
  DoneBlockEl.classList.remove('hidden');
  DoneBlockEl.classList.add('active');

  TodoBlockEl.classList.remove('active');
  TodoBlockEl.classList.add('hidden');

  TodoBlockEl.style.animationName = 'ToDone';
  TodoBlockEl.style.animationDuration = '400ms';
})

TodoBtnEl.addEventListener('click', function () {
  DoneBlockEl.classList.remove('active');
  DoneBlockEl.classList.add('hidden');

  TodoBlockEl.classList.remove('hidden');
  TodoBlockEl.classList.add('active');

  DoneBlockEl.style.animationName = 'DoneTo';
  DoneBlockEl.style.animationDuration = '400ms';
})



// Item->TodoListBlock add
const InputEl = document.querySelector('.TodoContainer>.Todo__header>input');
// const TodoListEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul'); ToDo Remove시 날아가므로 append함수안으로 옮김

const appendTodo = () => {

  // 비어있을때는 추가x
  if (InputEl.value == '') {
    alert("할 일을 적어주세요..");
    return;
  }

  const liEl = document.createElement('li');
  let code = '';
  code += '<div><button class="btnicon" onclick="ToDoneList(this);"><i class="bi bi-check-square"></i></button></div>';
  code += '<div><span>' + InputEl.value + '</span></div>';
  code += '<div>'
  code += '<button class="btnicon" onclick="prev(this);"><i class="bi bi-caret-up-square"></i></button>';
  code += '<button class="btnicon" onclick="next(this);"><i class="bi bi-caret-down-square"></i></button>';
  code += '</div>';
  code += '';
  const TodoListEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul');
  liEl.innerHTML = code;
  TodoListEl.append(liEl);
  InputEl.value = '';
  console.log(liEl.innerHTML);
};



// 엔터키 이벤트 추가
InputEl.addEventListener('keydown', function () {
  // console.log(event.keyCode); 키코드 확인용
  if (event.keyCode === 13) {
    appendTodo();
  }
})



// Todo->Done Move
const ToDoneList = function (El) {
  // alert(El) button
  // alert(El.parentNode); div
  // alert(El.parentNode.parentNode); li
  const liEl = El.parentNode.parentNode;

  // 1,3 icon 변경
  const childEl1 = liEl.children[0]; //li안의 1 div 태그(아이콘)
  const childEl2 = liEl.children[1]; //li안의 2 div 태그(내용)
  const childEl3 = liEl.children[2]; //li안의 3 div 태그(아이콘)

  childEl1.children[0].remove(); //1번째 div태그 안의 첫번째 자식 제거
  childEl1.innerHTML = '<button class="btnicon" onclick="ToTodoList(this);"><i class="bi bi-dash-square"></i></button>';

  childEl3.children[0].remove();
  childEl3.innerHTML = '<button class="btnicon" onclick="removeLi(this)";><i class="bi bi-trash btnicon"></i></button>';

  // TodoListUl -> DoneListUl로 li옮기기
  const DoneListUlEl = document.querySelector('.TodoContainer>.Todo__body>.body__Done>ul');
  DoneListUlEl.append(liEl);
};


// DoneList->TodoList li Move
const ToTodoList = function (El) {
  const liEl = El.parentNode.parentNode;

  // 1,3 icon 변경
  const childEl1 = liEl.children[0]; //li안의 1 div 태그(아이콘)
  const childEl2 = liEl.children[1]; //li안의 2 div 태그(내용)
  const childEl3 = liEl.children[2]; //li안의 3 div 태그(아이콘)

  childEl1.children[0].remove(); //1번째 div태그 안의 첫번째 자식 제거
  childEl1.innerHTML = '<button class="btnicon" onclick="ToDoneList(this);"><i class="bi bi-check-square"></i></button>';

  childEl3.children[0].remove();
  childEl3.innerHTML = '<button class="btnicon" onclick="prev(this);"><i class="bi bi-caret-up-square"></i></button>';
  childEl3.innerHTML += '<button class="btnicon" onclick="next(this);"><i class="bi bi-caret-down-square"></i></button>';

  // DoneListUl -> TodoListUl 로 li옮기기
  const TodoListUlEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul');
  TodoListUlEl.append(liEl);
}


// DoneList Remove
const removeLi = function (El) {
  // alert(El.parentNode.parentNode);
  const liEl = El.parentNode.parentNode;
  let isremove = confirm('정말 삭제하시겠습니까?');
  if (isremove) {
    liEl.remove();
  }
}


// Prev Next
const prev = function (El) {
  const liEl = El.parentNode.parentNode;
  const prevliEl = liEl.previousSibling; //Null 리턴
  if (prevliEl.value === undefined) {
    alert('이미 최상위 입니다');
    return;
  } else {
    liEl.after(prevliEl);
  }
}

const next = function (El) {
  const liEl = El.parentNode.parentNode;
  const nextliEl = liEl.nextSibling; //Null 리턴
  if (nextliEl === null) {
    alert('이미 최하위 입니다');
    return;
  } else {
    liEl.before(nextliEl);
  }
}


// 최상위 최하위 보내기



//Clear
ClearBtnEl.addEventListener('click', function () {
  if (DoneBlockEl.classList.contains('active')) {
    if (document.querySelector('.TodoContainer>.Todo__body>.body__Done>ul>li') == null) {
      alert('Done 리스트가 아직 없습니다');
    } else {
      const liEl = document.querySelector('.TodoContainer>.Todo__body>.body__Done>ul')
      // console.log(liEl);
      let isremove = confirm("(전체삭제)\n정말 삭제하시겠습니까?");
      if (isremove) {
        liEl.remove();
        const ulEl = document.querySelector('.TodoContainer>.Todo__body>.body__Done');
        ulEl.innerHTML = '<div><h4>Done List</h4></div>';
        ulEl.innerHTML += '<ul></ul>';
      }
    }
  } else if (!TodoBlockEl.classList.contains('hidden')) {
    if (document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul>li') == null) {
      alert('Todo 리스트가 아직 없습니다');
    } else {
      const liEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul')
      console.log(liEl);
      let isremove = confirm("(전체삭제)\n정말 삭제하시겠습니까?");
      if (isremove) {
        liEl.remove();

        const ulEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do');
        ulEl.innerHTML = '<div><h4>To do List</h4></div>';
        ulEl.innerHTML += '<ul></ul>';
      }
    }
  }
});