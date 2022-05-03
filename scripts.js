// set the starting number to 0
let number = document.getElementById("number");
number.innerText = 0;
// selecting the numbers as buttons
let numberBtn = document.querySelectorAll(".button");
numberBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    number.innerText = btn.innerText;
  })
);
