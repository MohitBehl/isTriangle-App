var btnSubmit = document.querySelector("#btnSubmit");
var inps = document.querySelectorAll(".input");
var out = document.querySelector("#output");

btnSubmit.addEventListener("click", () => {
  var angle1 = inps[0].value;
  var angle2 = inps[1].value;
  var angle3 = inps[2].value;

  var isValidInput = validate(angle1, angle2, angle3);

  if (isValidInput) {
    angle1 = parseInt(angle1);
    angle2 = parseInt(angle2);
    angle3 = parseInt(angle3);

    var res = angle1 + angle2 + angle3 === 180;

    if (res) {
      out.innerText = "Yes, it is a triangle";
    } else {
      out.innerText = "No, it is not a triangle";
    }
  } else {
    out.innerText = "Invalid input format";
  }
});

function validate(num1, num2, num3) {
  if (num1.length === 0 || num2.length === 0 || num3.length === 0) {
    return false;
  }

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    return false;
  }
  return true;
}
