/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name){
  alert(`Hello ${name}`);
}
sayHello("Manish");
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName,lastName){
  return `${firstName} ${lastName}`;
}
let fullName = getFullName("Manish","Kushare");
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(firstNum,secondNum) {
  if(typeof(firstNum) == "number" && typeof(secondNum) == "number"){
    return firstNum + secondNum;
  }
  else {
    alert("Enter Valid Input");
  }
}
let sum = addTwoNumbers(2,2);
console.log(sum);
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA,numB,operation) {
  if(typeof(numA) == "number" && typeof(numB) == "number") {
    return (operation == "add")? numA+numB:
    (operation == "sub")? ((numA > numB)? numA-numB:numB-numA):
    (operation == "mul")? numA*numB:
    (operation == "div")? ((numA > numB)? numA/numB:numB/numA): "Enter valid operation"

  }
  else {
    alert("Enter Valid Input");
  }
}

let finalValue = calc(1,12,"sub");

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year) {
  if(year % 4 == 0) {
    if(year % 100 == 0){
      if(year % 400 == 0){
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    }
  }
  else {
    return false;
  }
}

let isLeap = isLeapYear(2020);

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(number){
  let factorial= 1;
  for(let i=number; i >= 1; i--){
    factorial *= i
  }
  return factorial
}
let total = getFactorial(5);
