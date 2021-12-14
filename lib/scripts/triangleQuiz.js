var btnSubmit = document.querySelector(".btnSubmit");
var output = document.querySelector("#output");
var ans1 = document.getElementsByName("question1");
var ans2 = document.getElementsByName("question2");
var ans3 = document.getElementsByName("question3");

btnSubmit.addEventListener("click", onClickHandler);

function onClickHandler() {
  var score = 0;
  for (var i = 0; i < ans1.length; i++) {
    if (ans1[i].checked) {
      //   output.innerHTML = ans1[1].name + " value " + ans1[i].value;
      if (ans1[i].value === "90") {
        score += 1;
      }
    }
  }

  for (var i = 0; i < ans2.length; i++) {
    if (ans2[i].checked) {
      //   output.innerHTML = ans1[1].name + " value " + ans1[i].value;
      if (ans2[i].value === "right-angled") {
        score += 1;
      }
    }
  }

  for (var i = 0; i < ans3.length; i++) {
    if (ans3[i].checked) {
      //   output.innerHTML = ans1[1].name + " value " + ans1[i].value;
      if (ans3[i].value === "one-right-angle") {
        score += 1;
      }
    }
  }

  output.innerHTML = "Final Score is <br>" + score;
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
