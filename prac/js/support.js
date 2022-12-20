// 파일첨부 및 미리보기
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('preview').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById('preview').src = "";
  }
}



// 문의유형 select와 option 동적 할당
var mainSelect = document.querySelector('#select1');

mainSelect.onchange = function () {
  var subSelect = document.querySelector('#select2');
  var mainOption = mainSelect.options[mainSelect.selectedIndex].value;

  //select1의 선택에 따른 배열선언
  var subOptions = {
    inquiry: ['건의하기', '칭찬하기', '복구신청'],
    report: ['불법프로그램신고', '불량유저신고', '게시물신고']
  }
  
  //select1에 따라 select2의 선택자 부여
  if(mainOption == "inquiry")
  {
    subSelect.options.length = 0;
    var subOption = subOptions.inquiry;
    for (var i = 0; i < subOption.length; i++) {
      var option = document.createElement('option');
      option.innerText = subOption[i];
      subSelect.append(option);
    }
  }

  else if(mainOption == "report")
  {
    subSelect.options.length = 0;
    var subOption = subOptions.report;
    for (var i = 0; i < subOption.length; i++) {
      var option = document.createElement('option');
      option.innerText = subOption[i];
      subSelect.append(option);
    }
  }
}


