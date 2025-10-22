const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myGrade = document.getElementById("myGrade");

mySubmit.onclick = function () {
  let marks = Number(myText.value);

  if (marks > 100 || marks < 0) {
    myGrade.textContent = "Invalid marks (0 - 100)";
    myGrade.style.color  = "red";
  }
  else if (marks >= 80) {
    myGrade.textContent = "A";
    myGrade.style.color = "yellow";
  }
  else if (marks >= 60) {
    myGrade.textContent = "B";
    myGrade.style.color = "orange";
  }
  else if (marks >= 50) {
    myGrade.textContent = "C";
    myGrade.style.color = "blue";
  }
  else if (marks >= 30) {
    myGrade.textContent = "D";
    myGrade.style.color = "green";
  }
  else {
    myGrade.textContent = "Fail";
    myGrade.style.color = "purple";
  }
};
