var btnSubmit = document.querySelector(".btnSubmit");
var input = document.querySelectorAll(".input");
var output = document.querySelector("#output");

btnSubmit.addEventListener("click", onClickHandler);

function onClickHandler() {
  var base = input[0].value,
    height = input[1].value;

  if (validate(base, height)) {
    base = parseInt(base);
    height = parseInt(height);

    if (base <= 0 || height <= 0) {
      output.innerText = "Invalid Input";
    } else {
      var res = Math.sqrt(base * base + height * height);
      output.innerText = "Hypoteneus : " + res;
    }
  } else {
    output.innerText = "Invalid Input";
  }
}

function validate(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return false;
  }

  if (isNaN(s1) || isNaN(s2)) {
    return false;
  }

  return true;
}
