// set the starting number to 0
let number = document.getElementById("number");
number.innerText = null;

//set an empty variable to store the number we desire
let prevNum = 0;

// selecting the numbers as buttons
let numberBtn = document.querySelectorAll(".button");
numberBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (+btn.innerText) {
      number.innerText += btn.innerText;
    } else if (!+btn.innerText && btn.innerText !== "=") {
      prevNum = number.innerText;
      number.innerText = null;
      console.log(prevNum);
    } else if (btn.innerText === "=") {
      number.innerText = +prevNum + +number.innerText;
    }
  })
);
