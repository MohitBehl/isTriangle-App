var btnSubmit = document.querySelector(".btnSubmit");
var input = document.querySelectorAll(".input");
var output = document.querySelector("#output");

btnSubmit.addEventListener("click", onClickHandler);

function onClickHandler() {
  var side1 = input[0].value,
    side2 = input[1].value,
    side3 = input[2].value;

  if (validate(side1, side2, side3)) {
    side1 = parseInt(side1);
    side2 = parseInt(side2);
    side3 = parseInt(side3);

    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      output.innerText = "Invalid Input";
    } else {
      var s = (side1 + side2 + side3) / 2;
      var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
      output.innerText = "area of triangle : " + area + " sq units";
    }
  } else {
    output.innerText = "Invalid Input";
  }
}

function validate(s1, s2, s3) {
  if (s1.length === 0 || s2.length === 0 || s3.length === 0) {
    return false;
  }

  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    return false;
  }

  return true;
}
