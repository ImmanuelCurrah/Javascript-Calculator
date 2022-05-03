// set the starting number to 0
let number = document.getElementById("number");
number.innerText = null;

//set an empty variable to store the number we desire
let prevNum = 0;
// set a variable to track the operation
let operation = null;
//set a function to do the math
const doTheMath = (prevNum, operation, currentNum) => {
  if (operation === "x") {
    return prevNum * currentNum;
  } else if (operation === "/") {
    return prevNum / currentNum;
  } else if (operation === "+") {
    return prevNum + currentNum;
  } else if (operation === "-") {
    return prevNum - currentNum;
  }
};

// selecting the numbers as buttons
let numberBtn = document.querySelectorAll(".button");
numberBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (+btn.innerText) {
      number.innerText += btn.innerText;
    } else if (!+btn.innerText && btn.innerText !== "=") {
      prevNum = number.innerText;
      operation = btn.innerText;
      console.log(operation);
      number.innerText = null;
      console.log(prevNum);
    } else if (btn.innerText === "=") {
      number.innerText = doTheMath(+prevNum, operation, +number.innerText);
    }
  })
);
