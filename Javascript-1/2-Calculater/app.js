// const selectAllButton = document.querySelectorAll(".btn ");
// const screenInput = document.querySelector(".screen");
// const equalBtn = document.querySelector(".btn-equal ");
// const clearbtn = document.querySelector(".btn-clear ");

// selectAllButton.forEach(function (singleBtn) {
//   singleBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     const currentElement = event.target;
//     // const buttonValue = currentElement.getAttribute('data-num');
//     const buttonValue = currentElement.dataset.num;
//     screenInput.value += buttonValue;
//     // console.log(buttonValue);
//   });
// });

// equalBtn.addEventListener("click", equalnumber);

// function equalnumber(event) {
//   event.preventDefault();
//   screenInput.value = eval(screenInput.value);
// }

// clearbtn.addEventListener("click", clearTask);

// function clearTask(event) {
//   event.preventDefault();
//   screenInput.value = "";
// }

// screenInput.addEventListener("input", screenInputValue);

// function screenInputValue(event) {
//   event.preventDefault();
//   const currentElement = event.target;
//   if (onlyLetters(currentElement.value)) {
//     currentElement.value = "";
//   }
// }

// // regex

// function onlyLetters(string) {
//   return /[a-zA-z]+$/.test(string);
// }

// const selectBtns = document.querySelector(".buttons");
// const screenInput = document.querySelector(".screen");
// const btnClear = document.querySelector(".btn-clear");
// const btnEqual = document.querySelector(".btn-equal");

// selectBtns.addEventListener("click", function (e) {
//   e.preventDefault();
//   const currentElement = e.target;
//   if (currentElement.classList.contains("btn")) {
//     const dataNum = currentElement.getAttribute("data-num");
//     screenInput.value += dataNum;
//   }
// });

// btnClear.addEventListener("click", function (e) {
//   e.preventDefault();
//   screenInput.value = 0;
// });

// btnEqual.addEventListener("click", function (e) {
//   e.preventDefault();
//   screenInput.value = eval(screenInput.value);
// });

// screenInput.addEventListener("input", function (e) {
//   e.preventDefault();
//   const currentElement = e.target;
//   if (testOnlyLetters(currentElement.value)) {
//     screenInput.value = "";
//   }
// });
// function testOnlyLetters(string = "") {
//   return /[a-zA-Z]+$/.test(string);
// }
