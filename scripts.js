// set the starting number to 0
let number = document.getElementById("number");
number.innerText = 0;

//set an empty variable to store the number we desire
let prevNum = 0;

//set variable for incrementing subtraction and division
let subOrDiv = 0;

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
  } else if (!operation) {
    return currentNum;
  }
};

// selecting the numbers as buttons
let numberBtn = document.querySelectorAll(".button");
//mapping through the buttons and telling each one what to do
numberBtn.forEach((btn) =>
  //adding an event listener to make them buttons
  btn.addEventListener("click", () => {
    //checking to see if it is a number or not
    if (+btn.innerText || btn.innerText === "0") {
      //checking if this is the first time you are entering a number
      if (number.innerText === "0") {
        number.innerText = null;
      } else if (number.innerText === "0" && btn.innerText === "0") {
        number.innerText = 0;
      }
      //setting the number to the display and reads the number until you select an operation
      number.innerText += btn.innerText;

      // sees if there is an operation present to fulfill the sub or div logic
      if (operation) {
        subOrDiv += btn.innerText;
      }
      //if the button contains an operation then set the operation and the prevNum to track the calculation
    } else if (
      !+btn.innerText &&
      btn.innerText !== "=" &&
      btn.innerText !== "." &&
      btn.innerText !== "clear"
    ) {
      //sets the previous number
      prevNum = +number.innerText;
      // sets the operation to be used
      if (btn.innerText === "0") {
        return;
      } else {
        operation = btn.innerText;
      }
      //sets the display back to null so you can enter a new number
      number.innerText = 0;
      //if the button is an equal sign execute the logic to calculate the operation
    } else if (btn.innerText === "=") {
      //send all the variables through our function
      if (operation === "-" || operation === "/") {
        number.innerText = doTheMath(+prevNum, operation, +subOrDiv);
        prevNum = number.innerText;
      } else {
        number.innerText = doTheMath(+prevNum, operation, +number.innerText);
      }
      //check to see if the button hit is a .
    } else if (btn.innerText === ".") {
      // check to see if it already contains a decimal
      if (number.innerText.split("").includes(".")) {
        // if it does we are going to stop the function and just not do anything
        return;
      } else {
        // add the decimal one time
        number.innerText += ".";
      }
      // if the btn the clear button clean away all memory from the variables
    } else if (btn.innerText === "clear") {
      number.innerText = "0";
      prevNum = 0;
      operation = null;
    }
  })
);
