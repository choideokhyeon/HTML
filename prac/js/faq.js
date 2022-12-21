var textEl = document.getElementsByClassName("text");

var textpEl = document.getElementsByClassName("text-p");

      function handleClick(event) {
        console.log(event.target);

        console.log(event.target.classList);

        if (event.target.classList[1] === "clicked") {
          event.target.classList.remove("clicked");
        } else {
          for (var i = 0; i < textEl.length; i++) {
            textEl[i].classList.remove("clicked");
          }

          event.target.classList.add("clicked");
        }
      }

      function init() {
        for (var i = 0; i < textEl.length; i++) {
          textEl[i].addEventListener("click", handleClick);
        }
      }

      init();