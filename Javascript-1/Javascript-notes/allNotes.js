// alert("working");

//you can store information in variables

// DATAYPES
// there are two data types

// 1-primitive type
// 2-reference type / object type

//REFERENCE TYPE
// Accessed by reference Objects that are stored
// on the heap a pointer to a location in memory.

let store = [
  "aaa",
  123123123,
  true,
  null,
  undefined,
  Symbol("asdasd"),
  "bbb",
  "ccc",
  "ddd",
]; //Array

store = {
  a: 1,
  b: 2,
  c: 3,
}; //object literal / object

//console.log(store["c"]);

// console.log(store);
// console.log(store2);

//Primitive Type Variables
//store directly in the location the variable accesses stored on the stack.

//text/number/boolean/null/undefined/symbol

store = "something"; //string = text
store = 12345; // Number = number
store = true; // Boolean // 0 = false, 1 = true
store = false; // boolean
store = null; // null (khali hai)
store = undefined; // undefined
store = Symbol("values of symbol"); //symbol

// console.log(store);

//Primitive Vs Reference Type

//primitive example

let muzammil_marks = 100;
let musaddiq_marks = muzammil_marks;

musaddiq_marks = 90;

// console.log(muzammil_marks, "muzammil marks"); //100
// console.log(musaddiq_marks, "musaddiq_marks"); //90

//Reference Type Example

let muzammil_marks_obj = {
  marks: 100,
};
// let musaddiq_marks_obj = muzammil_marks_obj; //it will assign the reference if you change the variable it will also change the reference original variable
let musaddiq_marks_obj = { ...muzammil_marks_obj }; //spread opreator it will not assign reference it will create new copy of the object

musaddiq_marks_obj.marks = 90;

// console.log(muzammil_marks_obj.marks, "muzammil_marks_obj"); // 100
// console.log(musaddiq_marks_obj.marks, "musaddiq_marks_obj"); //90

const arrayOne = [1, 2, 3];
const arrayTwo = arrayOne;
// const arrayTwo = [...arrayOne]; //spread operator with square bracket
arrayTwo.push(4);

//expected
// console.log(arrayOne); // [1,2,3]
// console.log(arrayTwo); // [1,2,3,4]
//output
// console.log(arrayOne); // [1,2,3,4]
// console.log(arrayTwo); // [1,2,3,4]

//There are three types of variables
// 1-let
// 2-const
// 3-var

// {} = scope

//function name(){
//}

//let variable will work only inside of the scope
{
  let working = "aaa";
  // console.log(working, "working");
}

// console.log(working, "working"); //undefined

//constant variable
//it will also work only inside of the scope and we cannot change constant variables

{
  const coachingName = "Squad Coders dev";
  // console.log(coachingName);
}
// coachingName = "Dev Dev Dev"; //it will give you the assignment error

//var

//var will not work in scope except function scope

{
  var headphonename = "sony";
}
// console.log(headphonename); //sony;

// or

{
  var headphonename = "sony";
  // console.log(headphonename); //sony;
}

function name() {
  var playstation = "sony";
}

// console.log(playstation);

//developer say that we should not use var is javascript code

//1st prioty is const
//2nd is let

//javascript is case sensitive

//variables mein capital or small letter se faraq parta hai = case sensitive
let some = "123123";
let Some = "111";

// console.log(some, "some");
// console.log(Some, "Some");

//naming of variables
// letters,
// underscore,
// camelcase,
// pascal case

const asdasdasd = "aaaa"; //letters = (a to z and A to Z and 1 to 10)
const company12311212 = "aaaa";
const html_css_javascript_react_react_native = "course"; //underscore
const htmlCssJavascriptReactReactNative = "course"; //camel case
const HtmlCssJavascriptReactReactNative = "course"; //pascal case

//"" = double quote
//'' = single quote

//Type Conversion
// console.log(HtmlCssJavascriptReactReactNative);
// console.log(typeof HtmlCssJavascriptReactReactNative); //iski type kia hai

const mousePrice = "200";
// console.log(mousePrice, "mouse Price");
// console.log(typeof mousePrice, "type mouse"); //string

//convert string to number

// we will use parseInt for number
// console.log(parseInt(mousePrice), "convert string to number");
// console.log(typeof parseInt(mousePrice), "convert string to number");

//2nd method
let testing_variable = new Number("2");
testing_variable = new Number(true); // 1
testing_variable = new Number(false); // 0
testing_variable = new Number(null); // 0
testing_variable = new Number("hello"); // Nan = Not a Number
testing_variable = new Number([1, 2, 3, 4]); // Nan = Not a Number

testing_variable = parseFloat("2340.20");

// console.log(testing_variable, "testing_variable");

//String Methods

testing_variable = "this is string and string is equal to text";
testing_variable = new String(12121); // "12121"
testing_variable = new String(true); // "true"

//2nd method
let someVariable = 1;

testing_variable = someVariable.toString(); // "1"
testing_variable = (1222222).String(); // "ASDASD"

// Boolean methodstoString(); // "1"
testing_variable = "asdasd".toUpperCase;

testing_variable = new Boolean(1); //true
testing_variable = new Boolean(0); //false
testing_variable = new Boolean(null); //false
testing_variable = new Boolean(""); //false
testing_variable = new Boolean("asdasd"); //true

// console.log(testing_variable, "testing_variable");
// console.log(typeof testing_variable, "testing_variable");

testing_variable = {
  name: "Muzammil",
  designation: "Senoir Developer",
  companyName: "Koderlabs",
};

//Console methods

// console.table(testing_variable);
// console.warn(testing_variable);
// console.error(testing_variable);
// console.info(testing_variable);
// console.log(testing_variable);

// you can use arthmetic operators in javascript
testing_variable = 5 + 5;
testing_variable = 5 - 5;
testing_variable = 5 / 5;
testing_variable = 5 % 5;
testing_variable = 5 * 5;

//Math Object

testing_variable = Math.PI; // 3.14
testing_variable = Math.E; // 3.14
// testing_variable = Math.round(2.5);

// The Math.floor() function returns the largest number less than or equal to a given number.

/*==================================
  =            math floor            =
  ==================================*/
//for positive numbers
val = Math.floor(2.4); //2
val = Math.floor(2.3); //2
val = Math.floor(2.59); //2
val = Math.floor("2.3"); //2
val = Math.floor(2); //2

//for negative number
val = Math.floor(-2.4); //-3
val = Math.floor(-2.3); //-3
val = Math.floor(-2.5); //-3
/*=====  End of math floor  ======*/

testing_variable = Math.pow(8, 4); // 8 * 8 * 8 * 8
testing_variable = Math.min(1, 2, 1, 36, 3, 4, 5, 6, 7, 8, 9, 0); //return minimum value
testing_variable = Math.max(1, 2, 1, 36, 3, 4, 5, 6, 7, 8, 9, 0); //return maximum value
testing_variable = Math.random() * 20 + 1;
// console.log(testing_variable);

//String Concatination (text ko jorne ki bat hori hai)

const firstName = "Muzammil";
const lastName = "Mustaqeem";

const fullName = firstName + " " + lastName;

// console.log(fullName);
// const testString = 'Hello, World my name is \'Muzammil Mustaqeem and my age \'is 26';

//line break chahiye text mein

//\n = line break
// const testString =
// "Hello, World my name \n \n is'Muzammil Mustaqeem and my age 'is 26";

// const testString =
//   "Hello, World my name \n \n is'" + fullName + " and my age 'is 26";

// console.log(testString);
// Template Literal

// `` = back tag
// ${} = interpolation

// "asdfasdfasdfasdf " + variableName
// `asdfasdfasdfasdf ${variableName}`;
let testString = `Hello, World my name 
  
  is'${fullName} and my age "is 26`;

testString = testString.concat(
  " new thing",
  " one more thing",
  " one more thing"
);

testString = testString.replace("26", "20");

//check exist text
// testString = testString.includes("Muzammil"); //true
// COMPARISON

const productName = "Briyani";
const customerLocation = "north karachi"; // string
const dummyLocation = 11; //number
let deliveryCharges = 0;

// == equal to

if (customerLocation == "orangi town") {
  deliveryCharges = 300;
} else if (customerLocation == "north karachi") {
  deliveryCharges = 90;
} else {
  deliveryCharges = 400;
}

console.log(customerLocation, "customer location");
console.log(productName, "customer location");
console.log(dummyLocation, "customer location");
console.log(deliveryCharges, "customer location");

// console.log(deliveryCharges, "delivery charges");

// === three equal to / it will check data type also

// console.log(typeof customerLocation); //string
// console.log(typeof dummyLocation); //number

if (customerLocation === dummyLocation) {
  deliveryCharges = 0;
}

// console.log(deliveryCharges, "delivery charges");
// console.log(testString, "testString");

//not equal to = !=

const mobile = "iphone";
// const mobile = "china";

if (mobile != "china") {
  // console.log("mobile is not from china");
} else {
  // console.log("your mobile is from china");
}

//not equal !== / so it will check the both type
const mobiletwo = 1;
if (mobiletwo !== "1") {
  // console.log("mobile two is working");
}

// GREATER OR LESS THAN

// > greater than
// < less than

// 8 > 10 // false
// 8 < 10 // true

let id = 100;

if (id < 40) {
  //false
  // console.log("correct");
} else {
  // console.log("in correct");
}

if (id > 40) {
  // console.log("CORRECT");
} else {
  // console.log("INCORRECT");
}

// LOGICAL OPERATORS

//&& AND = both condition should be true
//|| AND = one condition should be true

const laptop = "hp";
const ram = "4gb";

//dono condition true honi chahiye
if (laptop == "hp" && ram == "6gb") {
  // console.log("i will purchase this laptop");
} else {
  // console.log("i will not purchase this laptop");
}

//dono me se koi ek condition bi true hogi o true hai
if (laptop == "hp" || laptop == "dell") {
  // console.log("hp & dell is good brand for laptop");
} else {
  // console.log("not recommended");
}

//Ternary Operator

// single line if else condition

// "100" === 100 //false

if (id === 100) {
  // console.log("id is 100");
} else {
  // console.log("id is not 100");
}

//ternary operator example
// const condition =
// id === 100 ? console.log("id is 100") : console.log("id is not 100");

//multiple if else conditions

if (id == 101) {
  // console.log("101 is true");
} else if (id == 100) {
  // console.log("100 is true");
} else if (id == 102) {
  // console.log("102 is true");
} else if (id == 103) {
  // console.log("103 is true");
} else if (id == 104) {
  // console.log("104 is true");
} else if (id == 105) {
  // console.log("105 is true");
} else if (id == 106) {
  // console.log("106 is true");
} else if (id == 107) {
  // console.log("107 is true");
} else {
  // console.log("not match any conditions");
}

// you can define conditions without braces
if (id === 100) console.log("id is 100");
// if (id !== 100) console.log("id is not 100");

//switch statement

// const color2 = "red";
const color2 = "blue";

if (color2 == "red") {
  console.log("color is red");
} else if (color2 != "blue") {
  console.log("color is blue");
} else {
  console.log("color is not blue nor red");
}

//it will also check data type
//and it will only work on equal to
switch (color2) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case color2 !== "blue":
    console.log("color is not blue");
    break;
  default:
    console.log("color is not blue nor red");
    break;
}

//Date Object

//it will get the date from your computer
let dateValue;
const today = new Date();
// console.log(today, "today");

// let birthday = new Date("9-10-1981");
// console.log(birthday, "birthday");

// let birthday = new Date("November 27 1996"); //Month Date Year
// let birthday = new Date("11/27/1996"); //Month Date Year

// console.log(birthday);

dateValue = today.getMonth() + 1;
dateValue = today.getFullYear();
dateValue = today.getMinutes();
dateValue = today.getHours();
dateValue = today.getSeconds();
dateValue = today.getMilliseconds();
dateValue = today.getTime();

today.setMonth(1); // -1
today.setDate(2); // -1
today.setFullYear(1985);
today.setHours(3);
today.setMinutes(22);
today.setSeconds(25);

// console.log(dateValue, "date value");

// console.log(
//   `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`
// );

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
// console.log(today.getDay());
// console.log(day);

//Functions
//A function is simply a â€œchunkâ€ of code that
//you can use over and over again, rather
//than writing it out multiple times.Functions
// enable programmers to break down or decompose
//a problem into smaller chunks, each of which performs a particular task.

function normalFunction() {
  console.log(`normal function`);
}

// normalFunction() //function call

//with parameter
function printMyName(name) {
  console.log(`My Name is ${name}`);
}

printMyName("Muzammil Mustaqeem");
printMyName("Fahad Uddin");
printMyName("Abdul Rehman");

//with multiple parameter
function printMyFullName(firstName = "", lastName = "") {
  console.log(`My Name is ${firstName} ${lastName}`);
}

printMyFullName("Muzammil", "Musaqeem");
printMyFullName(); // ""

//we can return things from functions

function checkCondition() {
  return false;
}
const checkConditionVariable = checkCondition();
// const checkConditionVariable = false;

// console.log(checkConditionVariable, "checkConditionVariable");

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

function normalFunction2() {
  console.log("console karado");
}

normalFunction2(); //call

//foran call hojata hai declate hote hi call karane ki need nai hai
const variableNeedHai = "one";
const variableNeedHai2 = "two";

// (function (firstVariable, secondVariable) {
//   console.log("foran console karado");
// })("one", "two");

//object
const simpleObject = {
  keyFirst: function () {
    console.log("Add Todo");
  },
  keySecond: function (id) {
    console.log(`edit this todo ${id}`);
  },
};

simpleObject.keyFirst();
simpleObject.keySecond(20);

//Closures

//Global = azad
let a = 4;
function myFunction() {
  return a * a;
}

// console.log(myFunction()); //16

//local scope
//scope = {}
function myFunction2() {
  let b = 4;
  return b * b;
}

// console.log(b); //undefined
// console.log(myFunction2());

//counter function

let counter = 0;

function add() {
  counter += 1;
}

add(); //1
add(); //2
add(); //3
add(); //4

counter = 1000;

add(); // 1001

//isko scope me kardete hein
function add2() {
  let counter = 0;
  return counter + 1;
}

add2(); //1
add2(); //1
add2(); //1
add2(); //1

//solve

//clouser
//iffe k function k andar function hoga
const add3 = (function () {
  let counter = 0;

  return function () {
    counter += 1; //short cut
    // counter = counter + 1; full form
    return counter;
  };
})();

add3(); //1
add3(); //2
add3(); //3

counter = 2999; //undefined

// second

//var , let & const
// {} = scope

//let variable work in scope
// {}

// {
//     let wwww = "aa";
// }

// console.log(wwww,"wwww"); //error

//const variable work in scope and you cannot reassign/change the variable
const companyName = "xyz";
// companyName = "asdasd"; //error

/*
  
  If you use var outside of a function, it belongs to the global scope.
  
  If you use var inside of a function, it belongs to that function.
  
  If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.
  
  */

// var muzammil = "working";

// function nasdasd() {
//   console.log(muzammil);

//   var insideOfVarCustomVariable = "asdasd";
// }

// console.log(insideOfVarCustomVariable); // error

// if (true) {
//   var insideOfVarCustomVariable2 = "asdasd";
// }

// console.log(insideOfVarCustomVariable2); //it will work

//template literal

//   const firstName = "Muhammad";
//   const lastName = "Muzammil";

// const fullName = firstName + " " + lastName;
//   const fullName = `${firstName} ${lastName}`; //line break

//Array Methods
const products = [
  {
    id: 1,
    name: "Product One",
    price: 100,
  },
  {
    id: 2,
    name: "Product Two",
    price: 200,
  },
  {
    id: 3,
    name: "Product Three",
    price: 300,
  },
  {
    id: 4,
    name: "Product Four",
    price: 400,
  },
];

// console.time();
// products.forEach(function (singleProduct) {
//   console.log(singleProduct);
// });
// console.timeEnd();

//foreach method will take default: 3.034912109375 ms

/*
  
  -Loop Methods
  map
  filter
  forEach
  some
  every
  find
  findIndex
  reduce
  
  -Array Changes method
  push
  pop
  unshift
  slice
  shift
  */

let productNewArray;
console.time();
productNewArray = products.map((single) => {
  // return single.id;
  return {
    productNameAAAA: single.name,
  };
});
console.timeEnd();

// let productNewArray2 = [];
// products.forEach((single) => {
//   productNewArray2.push({
//     productNameAAAA: single.name,
//   })
// });

//map will return new array depend on your return condition

// console.log(productNewArray, "productNewArray");

//wo product filter kar ke lao jis ki id brabar ho 1 ke
// productNewArray = products.filter((singleProduct) => singleProduct.id === 1);
// productNewArray = products.filter((singleProduct) => singleProduct.price > 100);

//it will return single object or value
// productNewArray = products.find((singleProduct) => singleProduct.id === 1);

// productNewArray = products
//   .map((singleProduct) => singleProduct.id)
//   .find((singleProduct) => singleProduct === 1);
// console.log(productNewArray, products, "product new array");

//it will find array index
productNewArray = products.findIndex((singleProduct) => singleProduct.id === 3);

//array every (return boolean)
//agar sab ki condition true hein to true return karta hai

productNewArray = products.every((singleProduct) => singleProduct.price > 0);
// console.log(productNewArray, products, "productNewArray");

//agar ksi ek ki  condition true hein to true return karta hai warna false
productNewArray = products.some((singleProduct) => singleProduct.price > 200);

//reduce
// 1st param me condition return hogi jo jama karna hai
//2nd me ap doge accumulator = jama karne wala

//initial value 0 hai

productNewArray = products.reduce((jamaKarneWala, singleProduct) => {
  // console.log(jamaKarneWala, singleProduct.price, "jamaKarneWala");
  return jamaKarneWala + singleProduct.price;
}, 0);

// console.log(productNewArray, "productNewArray");

//destructuring with array

const vehicles = ["mustang", "f-150", "expedition"];
// const car = vehicles[0]; //mustang
// const truck = vehicles[1]; //f150
// const suv = vehicles[2]; //expedition

//short hand
// const [car, truck, suv] = vehicles;
// const [car, , suv] = vehicles; //you can also skip values

//destructuring with objects

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

const { brand, model, type } = vehicleOne;

//primitive vs reference
//Object & Array are reference type

//problem
// const objectOne = { name: "muzammil" };
// const objectTwo = objectOne;
// objectTwo.name = "musaddiq";

// console.log(objectOne.name); //musaddiq
// console.log(objectTwo.name); //musaddiq

//solution

const objectOne = { name: "muzammil" };
const objectTwo = { ...objectOne }; //with spread operator it will create shallow copy of object
objectTwo.name = "musaddiq";

console.log(objectOne.name); //muzammil
console.log(objectTwo.name); //musaddiq

//primitive type example
const numberOne = 10;
let numberTwo = numberOne;

numberTwo = 20;

console.log(numberOne); //10
console.log(numberTwo); //20

//Spread Operator = ... in array / object

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, 10, 30, ...numbersTwo];
//in dono array ki andar ki values copy hokar numbersCombined variable me ajaegi with spread operator

//with objects

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const combineObject = { ...myVehicle, ...updateMyVehicle };

// console.log(combineObject, "combineObject");

//Optional chaining '?.'

let user = {}; // a user without "address" property

// console.log(user.address.street); // Error!
console.log(user?.address?.street); // undefined

//Nullish coalescing operator '??'

let userTwo;

console.log(userTwo ?? "anoymouse");
// console.log(userTwo !== null && userTwo !== undefined ? "anoymouse" : "");

//Comparison with ||
let firstNameTwo = null;
let lastNameTwo = null;
let nickName = "Supercoder";

// // shows the first truthy value:
// alert(firstNameTwo || lastNameTwo || nickName || "Anonymous"); // Supercoder

// height = 0
// alert(height || 100); // 100
// alert(height ?? 100); // 0

// alert(true || true); // true
// alert(false || true); // true
// alert(true || false); // true
// alert(false || false); // false

//phli wali condition true honi chahiey

// alert(true && true); // true
// alert(false && true); // false
// alert(true && false); // false
// alert(false && false); // false

//rest operator

function check(firstParam, ...restParamName) {
  console.log(firstParam, restParamName);
  // return { firstParam, restParamName };
}

check(1, 2, 3, 4, 5, 6, 7, 8);

// third

//DOM stands for DOCUMENT OBJECT MODEL

//console.log(document) //you have all html in this document object

const selectTaskButton = document.querySelector("#task-button");
// const selectTaskButton = document.getElementById("task-button");
console.log(selectTaskButton, "selectTaskButton");

selectTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log("clicked!");

  // return;
  //prevent = rokna
  //default functionality
  const selectTaskListText = document.querySelector(".card-title");

  // console.log(selectTaskListText, "selectTaskListText");
  // console.log(previousText, "previousText");

  // return;

  if (selectTaskListText.innerText === "Task List") {
    selectTaskListText.innerText = "AAAAA";
    // selectTaskListText.style.color = "yellow";
  } else {
    selectTaskListText.innerText = "Task List";
    // selectTaskListText.style.color = "red";
  }
  //   console.log(selectTaskListText, "selectTaskListText");
});

let valOfDom;
valOfDom = document;
// valOfDom = document.all;
// valOfDom = document.all.length;
// valOfDom = document.body;
// valOfDom = document.head;
// valOfDom = document.doctype;
// valOfDom = document.URL;
// valOfDom = document.characterSet;
// valOfDom = document.contentType;
valOfDom = document.forms;
valOfDom = document.forms[0];
valOfDom = document.forms[1];
valOfDom = document.links; //ancor tag
valOfDom = document.links[0]; //ancor tag
valOfDom = document.links[0].className; //ancor tag
valOfDom = document.links[0].classList; //ancor tag
// valOfDom = document.links[0].classList.add("asdasd"); //ancor tag
valOfDom = document.links[0].classList.remove("asdasd"); //ancor tag
valOfDom = document.links[0];

valOfDom = document.images;

valOfDom = document.scripts;
valOfDom = document.scripts[0].getAttribute("src");

const cardTitle = document.querySelector(".card-title");
// console.log(cardTitle, "cardTitle");

cardTitle.style.color = "yellow";
cardTitle.style.background = "red";
cardTitle.style.padding = "20px";
cardTitle.style.marginBottom = "20px";
cardTitle.style.display = "none";
cardTitle.style.display = "block";
cardTitle.textContent = "Changed Text";
cardTitle.innerHTML = "<p style='color:purple'>ASDASDASDASD</p>";

// console.log(valOfDom);

// let allLiElements = document.querySelectorAll("ul li");
// let allLiElements = (document.querySelector(
//   "ul li:nth-child(2)"
// ).innerHTML = `<li class="collection-item">
//                   List Item
//                   <a href="#" class="delete-item secondary-content">
//                     <i class="fa fa-remove"></i>
//                   </a>
//                 </li>`);

//even number = 2,4,6,8
//odd number = 1,3,5,7

const selectAllLiElement = document.querySelectorAll("ul li:nth-child(even)");

//array ko ek ek kar ke access karega foreach k zariye see isko loop kehte hein
selectAllLiElement.forEach(function (singleUlElement, index) {
  singleUlElement.style.color = "red";
});

const selectOddLiElements = document.querySelectorAll("ul li:nth-child(odd)");
selectOddLiElements.forEach(function (singleElement) {
  singleElement.style.color = "yellow";
});

//Traversing in Dom

//up down in dom

const selectAllDeleteButtons = document.querySelectorAll(".fa-remove");

selectAllDeleteButtons.forEach(function (singleElement) {
  singleElement.addEventListener("click", function (event) {
    event.preventDefault(); // default functionality
    const currentElement = event.target;
    // console.log(currentElement, "currentElement");
    if (confirm("Are you sure ?")) {
      currentElement.parentElement.parentElement.remove();
    }
    // console.log(
    //   ,
    //   "currentElement.parentElement"
    // );
  });
});

//traversing in children

// document.querySelector(".collection-item").children;

//get children nodes

//node type
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node (line break)
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

let valTraversingDom;
const list = document.querySelector("ul.collection");

valTraversingDom = list.childNodes;

valTraversingDom = list.parentNode; //

//select first and last child

valTraversingDom = list.firstChild;
valTraversingDom = list.firstElementChild;

// Last child
valTraversingDom = list.lastChild; //with nodes
valTraversingDom = list.lastElementChild; //only get element

valTraversingDom = list.childElementCount; //only get element

const firstUlElement = document.querySelector("li.collection-item:first-child");

valTraversingDom = firstUlElement.nextSibling; //with nodes
valTraversingDom = firstUlElement.nextElementSibling; //with out nodes

valTraversingDom = firstUlElement.nextElementSibling.previousElementSibling;

// console.log(valTraversingDom, "valTraversingDom");

//closest
// find close element in parent element
// document.querySelector(".fa-remove").closest('.collection-item')

//Create Element In Dom

//<h1 id="print-my-name">My Name is Muzammil</h1>;
const h1Element = document.createElement("h1"); //<h1></h1>
h1Element.innerText = "My Name is Muzammil"; //<h1>My Name is Muzammil</h1>
h1Element.setAttribute("id", "print-my-name"); //<h1 id="print-my-name">My Name is Muzammil</h1>;

console.log(h1Element); //<h1 id="print-my-name">My Name is Muzammil</h1>;

//Add Html In to Dom
// document.querySelector(".collection").append(`ASDASDASD`);
// document.querySelector(".collection").append(h1Element);
// document.querySelector(".collection").appendChild(h1Element);

/*
  <li class="collection-item" >
                    List Item
                    <a href="#" class="delete-item secondary-content">
                      <i class="fa fa-remove"></i>
                    </a>
                  </li>
  */

//if we want to create this type of html in dom

const liElement = document.createElement("li");
liElement.className = "collection-item";
liElement.innerHTML = ` List Item
                    <a href="#" class="delete-item secondary-content">
                      <i class="fa fa-remove"></i>
                    </a>`;

// console.log(liElement, "liElement");

// REPLACE ELEMENT

const newHeading = document.createElement("h2"); //<h2></h2>
newHeading.id = "task-title"; //<h2 id="task-title"></h2>
newHeading.innerText = "NEW TEXT TEXT"; //<h2 id="task-title">NEW TEXT TEXT</h2>

//Select Parent Element
const selectParentActionElement = document.querySelector(".card-action");

//Find Old Element
const oldElement = document.querySelector("#task-title");

selectParentActionElement.replaceChild(newHeading, oldElement); //replace kardo purane element ko new wale se

//Event Listner

/* In JavaScript, an event listener is a function that waits for a specific event to occur 
  and then responds to that event. Events can be various user interactions with a web page, 
  such as clicking a button, moving the mouse, pressing a key, submitting a form, etc. */

const clearTaskButton = document.querySelector(".clear-tasks");
// clearTaskButton.addEventListener("click", runEvent);
// clearTaskButton.addEventListener("dblclick", runEvent);
// clearTaskButton.addEventListener("mousedown", runEvent);
// clearTaskButton.addEventListener("mouseup", runEvent);
// clearTaskButton.addEventListener("mouseenter", runEvent);
// clearTaskButton.addEventListener("mouseleave", runEvent);
// clearTaskButton.addEventListener("mouseover", runEvent);

/*
  mouseover vs mouseenter
  The mouseover event triggers when the mouse pointer enters the div element, 
  and its child elements. The mouseenter event is only triggered 
  when the mouse pointer enters the div element.
  
  */

//input field events
const taskInputField = document.getElementById("task");

// taskInputField.addEventListener("input", runEvent); //jab jab input aye event fire hoga
// taskInputField.addEventListener("change", runEvent); //jab jab input me change ayega event fire hoga
// taskInputField.addEventListener("keyup", runEvent);
// taskInputField.addEventListener("keydown", runEvent);
// taskInputField.addEventListener("keypress", runEvent);
// taskInputField.addEventListener("focus", runEvent);
// taskInputField.addEventListener("blur", runEvent);
// taskInputField.addEventListener("cut", runEvent);
// taskInputField.addEventListener("paste", runEvent);

function runEvent(event) {
  event.preventDefault();
  console.log(`Event Type: ${event.type}`);
  // console.log("working");
  // console.log(event.target.value, "input value");
  // const inputValue = event.target.value;
  // const taskTitle = document.querySelector("#task-title");
  // taskTitle.innerText = inputValue;
}

// const selectDropdownElement = document.querySelector("#abc-dropdown");
// selectDropdownElement.addEventListener("change", function (event) {
//   event.preventDefault();

//   // console.log(event.target.value, "dropdown is changed");
//   console.log(event.target.value);
// });

const selectSpecialDropdown = document.querySelector("#special-btn");

selectSpecialDropdown.addEventListener("click", function (e) {
  e.preventDefault();
  const selectCustomDropdownUlElement =
    document.querySelector("#custom-dropdown");
  console.log(selectCustomDropdownUlElement, "selectCustomDropdownUlElement");

  //agar active-special-dropdown class mujood hai to true warna false = contains
  if (
    selectCustomDropdownUlElement.classList.contains("active-special-dropdown")
  ) {
    selectCustomDropdownUlElement.className = "";
  } else {
    selectCustomDropdownUlElement.className = "active-special-dropdown";
  }

  // console.log("clicked special dropdown");
});

// fourth

//oop stands for object oriented programming

//every thing is object in javascript

//object literal
const muzammil = {
  name: "Muzammil Mustaqeem",
  age: 27,
};

console.log(muzammil);

//we can create same object using functions
function personOne() {
  //this refer to current function
  this.name = "Muzammil Mustaqeem";
  this.age = 27;
  this.birthday = "27-11-1996";
}

const sameObject = new personOne();

console.log(sameObject);

//constructor functions

// new personOne(); = you are initializing the function

function PersonTwo(name, age, birthday) {
  this.name = name;
  this.age = age;
  this.birthday = birthday;

  this.calculateAge = function () {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    //absolute value + wali
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const person = new PersonTwo("Muzammil", 27, "1996-11-27");

// console.log(person, "person");

//create object using class
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age; //class properties
  }

  hello() {
    //class methods
    return "hello";
  }

  checkName() {
    return this.name;
  }
}

const personClass = new PersonClass("Muzammil Mustaqeem", 27); //initialize
const hello = personClass.hello();
const checkName = personClass.checkName();

console.log({ personClass, hello, checkName });

//static methods in class
// when you use the static method you will not need to initialize the class
class PersonFour {
  static genericHello() {
    return "Hello Checking";
  }
}

PersonFour.genericHello(); //call function without initialize

//Four Pillars In OOP

/*
  Inheritance = Wirasat
  Abstraction = Chupa wa
  Polymorphism = talk with multiple
  Encapsulation = properties wali chizen public/private
  
  in javascript one more thing Prototype Inheritance
  */

// Inheritance Wirasat ÙˆØ±Ø§Ø«Øª

class Parent {
  motherLanguage() {
    return "Urdu";
  }
}

class Children extends Parent {}

const children = new Children();
children.motherLanguage(); //or hamare pas ye function mujood nai hai children class mein

// PROTOTYPE INHERITANCE
//Object.prototype
//Children.prototype

//misal k toor par hamare pas array hai usk andar hmare pas foreach ka method hota hai

//wo forEach or is jaise dusre methods

//wo prototype inheritance k zariye ate hein

const exampleArr = [];

console.log(exampleArr.__proto__); //we have all methods from prototype inheritance
// exampleArr.__proto__.forEach

//create custom prototype function
function PersonProto(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// {firstName: "Muzammil"}
PersonProto.prototype.calculateAge = function () {
  console.log("calculate age function is working");
  // const diff = Date.now() - this.birthday.getTime();
  // const ageDate = new Date(diff);
  // return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const check = new PersonProto("Muzammil", "Mustaqeem", "1996-11-27");
console.log(check, "check");
// console.log(check.__proto__.calculateAge(), "check");
check.calculateAge();

//Accessing parent function method in prototype functions

function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
// {firstName:"Muzammil",lastName:"lastName"}
Person2.prototype.greeting = function () {
  return `Hello there my name is ${this.firstName} ${this.lastName}`;
};

// const person2 = new Person2("Muzammil", "Mustaqeem");
// console.log(person2.greeting());

function Customer(firstName, lastName, phone, membership) {
  Person2.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

Customer.prototype = Object.create(Person2.prototype);

const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

console.log(customer1, "customer1");
console.log(customer1.greeting(), "customer1.greeting()");

//Polymorphism
//ek class muliple class se connected ho

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method to make a sound
  makeSound() {
    return "Generic animal sound";
  }
}

// Derived class 1
class Dog extends Animal {
  // Override the makeSound method for Dog
  makeSound() {
    return "Woof! Woof!";
  }

  // Additional method specific to Dog
  fetch() {
    return `${this.name} is fetching the ball.`;
  }
}

class Cat extends Animal {
  // Override the makeSound method for Cat
  makeSound() {
    return "Meow!";
  }

  // Additional method specific to Cat
  purr() {
    return `${this.name} is purring.`;
  }
}

// Example usage
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

console.log(dog.name); // Output: Buddy
console.log(dog.makeSound()); // Output: Woof! Woof!
console.log(dog.fetch()); // Output: Buddy is fetching the ball.

console.log(cat.name); // Output: Whiskers
console.log(cat.makeSound()); // Output: Meow!
console.log(cat.purr()); // Output: Whiskers is purring.

//ek class animal ki multiple animalsClass se connect hai like cat or dog
//

// fifth

//Syncronous = execute code line by line
console.log("html css");
console.log("js");
// asdasdasdasd;
console.log("react js");
console.log("react native");

//asynchronous programming
//we have to wait some thing in code
console.log("html css");
console.log("js");
setTimeout(function () {
  asdasdasdasd;
}, 0);
console.log("react js");
console.log("react native");

//is js is asyncronous by default ?
//answer is no

//thread
//javascript is single thread
//multi threading task is posible in javascript

//Event Loop

//chrome = v8 engine
//internet explorer = chakra engine
//firefox = spidermonkey

//v8 engine is compiler (translator)

//binary code = 0101010101010101

//how we can convert our normal syncrhronous code to asynchronous
//we have three methdos for that

// 1-Callback (Web Api Callback)
// 2-Promise
// 3-Async Await

//1- Callback example

setTimeout(function () {
  console.log("asdasdasd");
}, 0);

//2-Promise

const doSomething = new Promise(function (resolve, reject) {
  const success = 1;
  if (success == 0) {
    resolve("your code is resolved!");
  } else {
    reject("your code is rejected!");
  }
});

console.log(doSomething, "doSomething");

// resolve wali chiz then me ayegi
// reject wali chiz catch me ayegi

doSomething
  .then(function (firstParam) {
    console.log(firstParam, "firstParam");
  })
  .catch(function (error) {
    console.log(error, "error");
  });

//fetch is builtin method in javascript and it is used for api
//and fetch is promise
//return karne bad ek or then lagasakte ho

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (resolveParam) {
    // console.log(resolveParam, "resolveParam");
    return resolveParam.json();
  })
  .then(function (joReturnKarayaHaiWoData) {
    console.log(joReturnKarayaHaiWoData, "joReturnKarayaHaiWoData");
  })
  .catch(function (rejectParam) {
    console.log(rejectParam, "rejectParam");
  });

//3. Async Await

// you can handle multiple promises from async await method

const getTodosData = function () {
  //you are returning the promise
  return (
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(function (resolve) {
        return resolve.json();
      })
      //chaining in promise
      .then(function (resolve) {
        return resolve;
      })
      .catch(function (reject) {
        console.log(reject);
      })
  );
};

const doSomethingAsyncMethod = async function () {
  const dataOne = await getTodosData(); //  ka matlab wait karo jab tak promise resolve nai hojata
  const dataTwo = await getTodosData();
  const dataThree = await getTodosData();
  console.log(dataOne, "dataOne async method");
  console.log(dataTwo, "dataTwo async method");
  console.log(dataThree, "dataThree async method");
};
doSomethingAsyncMethod();

//Another Topic
//Arrow Function
// hello = function () {
//   return "Hello World!";
// };

// hello = () => {
//   return "Hello World!";
// };

// Arrow Functions Return Value by Default:
// hello = () => "Hello World!";

// Arrow Function Without Parentheses if you have only one param:
// hello = (val) => "Hello " + val;
// hello = val => "Hello " + val ;

// hello('asdadasd')
// arrow function

//Types of Promises

// Promise.all
// Promise.allSettled
// Promise.race
// Promise.any

//Promise all
//it will wait for all promises and if any one of promise is
//reject it will reject the whole promise
// () => {} = function (){}

// Promise.all([
//   new Promise(function (resolve) {
//     setTimeout(() => resolve(1), 3000);
//   }), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ])
//   .then(function (resolve) {
//     // alert(resolve);
//   })
//   .catch(function (error) {
//     console.log(error, "error");
//   }); // 1,2,3 when promises are ready: each promise
//contributes an array member

//Promise.allSettled
//it will not reject the whole promise if anyone promise is rejected
// Promise.allSettled([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then((resolve) => console.log(resolve));
// .catch(alert); // Error: Whoops!

//Promise.race
//phle aye phle payye

//jo phle resolve hua hai wuhi ayega

//it will not reject other promises

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(alert); // 1

//Promise.any
//it will resolve first promise and reject other promises (return promise resolve)

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(alert); // 1

// JSON VS XML
// Both are format and use send & recieve data asyncronusly

// JSON Example
// {
//   "employees":[
//       { "firstName":"John", "lastName":"Doe" },
//       { "firstName":"Anna", "lastName":"Smith" },
//       { "firstName":"Peter", "lastName":"Jones" }
//   ]
// }

// XML Example
{
  /* <employees>
    <employee>
     <lastName>Doe</lastName  <firstName>John</firstName>Name>
    </employee>
    <employee>
      <firstName>Anna</firstName> <lastName>Smith</lastName>
    </employee>
    <employee>
      <firstName>Peter</firstName> <lastName>Jones</lastName>
    </employee>
  </employees> */
}

// AJAX STANDS FOR Asynchronous Javascript AND Xml
// Set of Web Technologies
// Send & Receive Data asynchronously
// Does not interfere with the current
// Json has replaced XML for the most part

//Ajax Features

// make async requests in the background
// no page reload/
// fetch Data
// Very Intractive
// Display The Data or Append the Data

//API
// Application programming interface

//get data from url & send data from url

// Popular tools for ajax

// Fetch Api
// Axios
// Superaragent
// JQuery
// Node Http

/*
  REQUEST METHODS
  
  GET = get data
  POST = store/create data   
  PUT = update data
  PATCH = partially update date
  DELETE = delete data 
  
  */
//

/*  
  Rest Api Pattern
  
  Request Methods
  
  GET	    /posts              (get all posts)
  GET	    /posts/1            (get post by id)
  GET	    /comments?postId=1  (get post comments by postId)
  POST	  /posts              (create post)
  PUT	    /posts/1            (update specific post with all data like title,body)
  PATCH	  /posts/1            (update specific post partially with some data like only title or body)
  DELETE  /posts/1            (delete post by id)
  
  */
