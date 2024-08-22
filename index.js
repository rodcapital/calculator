const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let content = "";

const uiChange = document.querySelector(".ui-change");

uiChange.addEventListener("click", () => {
  const page1 = document.querySelector("#page1");
  const page2 = document.querySelector("#page2");
  page1.classList.remove("show");
  page1.classList.add("hide");
  page2.classList.remove("hide");
});

let secondValue = 0;
let firstValue = 0;
let action = "";
let state = 1;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
   
    

    //to disable the display of =
    if (button.textContent === "=") {
      if (action === "+") {
        content = add(firstValue, secondValue);

      }
      else {
        content = subtract(firstValue, secondValue);
      }
      display.value = content;
      return display.value;
    }

    // the clear button
    if (button.textContent === "AC") {
      content = button.textContent.split(1, 0);
      display.value = content;
      return display.value;
    }

    // to prevent welcome button from displaying its
    if (button.textContent.length > 6) return;

    //to enable repeating one number
    if (button.textContent === "+" || button.textContent === "-") {
      content += button.textContent;
      action = button.textContent;
      state = 2;
    }

    else if(state === 1) {
      content += button.textContent;
      firstValue += Number(button.textContent)
    }
    else {
      content += button.textContent;
      secondValue += Number(button.textContent)
    }
    console.log(firstValue, secondValue)
    display.value = content;
  });
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function percentage(a) {
  return a / 100;
}

function factorial(a) {
  if (a === 0 || a === 1) {
    return 1;

    for (var i = a - 1; i >= 1; i--) {
      a *= 1;
    }
  }
}
