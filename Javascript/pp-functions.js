// 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.
function doubleNumber(num) {
  return num * 2;
}

const inputNum = prompt("Enter a number:");
const result1 = doubleNumber(parseInt(inputNum));
console.log(result1);

// 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.
function capitalizeString(str) {
  return str.toUpperCase();
}

const inputStr = prompt("Enter a string:");
const result2 = capitalizeString(inputStr);
console.log(result2);

// 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.
function subtractNumbers(num1, num2) {
  return num1 - num2;
}

const inputNum1 = prompt("Enter the first number:");
const inputNum2 = prompt("Enter the second number:");
const result3 = subtractNumbers(parseInt(inputNum1), parseInt(inputNum2));
console.log(result3);

// 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.
function squareNumber(num) {
  return num * num;
}

const inputNum4 = prompt("Enter a number:");
const result4 = squareNumber(parseInt(inputNum4));
console.log(result4);

// 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.
function firstLetter(str) {
  return str.charAt(0);
}

const inputStr5 = prompt("Enter a string:");
const result5 = firstLetter(inputStr5);
console.log(result5);

// 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.
function combineStrings(str1, str2, str3) {
  return str1 + " " + str2 + " " + str3;
}

const inputStr6a = prompt("Enter the first string:");
const inputStr6b = prompt("Enter the second string:");
const inputStr6c = prompt("Enter the third string:");
const result6 = combineStrings(inputStr6a, inputStr6b, inputStr6c);
console.log(result6);

// 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.
function numberToString(num) {
  return num.toString();
}

const inputNum7 = prompt("Enter a number:");
const result7 = numberToString(parseInt(inputNum7));
console.log(result7);

// 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.
function repeatString(str) {
  return str.repeat(5);
}

const inputStr8 = prompt("Enter a string:");
const result8 = repeatString(inputStr8);
console.log(result8);

// 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.
function calculateAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

const inputNum9a = prompt("Enter the first number:");
const inputNum9b = prompt("Enter the second number:");
const inputNum9c = prompt("Enter the third number:");
const result9 = calculateAverage(parseInt(inputNum9a), parseInt(inputNum9b), parseInt(inputNum9c));
console.log(result9);

// 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.
function multiplyAndAdd(num) {
  return num * 10 + 30;
}

const inputNum10 = prompt("Enter a number:");
const result10 = multiplyAndAdd(parseInt(inputNum10));
console.log(result10);
