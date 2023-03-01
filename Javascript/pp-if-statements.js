// # 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints - 1 otherwise.

let num = 5;
if (num === 10) {
  console.log(0);
} else {
  console.log(-1);
}

// # 2. Use a variable to store a number, then write a condition that prints - 1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

let num2 = 15;
if (num2 < 10) {
  console.log(-1);
} else if (num2 > 10) {
  console.log(1);
} else {
  console.log(0);
}

// # 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

let num3a = 8;
let num3b = 12;
if (num3a < 10 && num3b < 10) {
  console.log(1);
} else {
  console.log(0);
}

// # 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints - 1 otherwise.

let num4 = 10000;
if (num4 > 9000) {
  console.log(1);
} else {
  console.log(-1);
}

// # 5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints - 1 otherwise(only one print statement should occur).

let num5 = 25;
if (num5 < 10) {
  console.log(9);
} else if (num5 < 20) {
  console.log(19);
} else if (num5 < 30) {
  console.log(29);
} else {
  console.log(-1);
}



// # 6. Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints - 100 otherwise.

let num6a = 5;
let num6b = 12;
if (num6a > 10 || num6b > 10) {
  console.log(100);
} else {
  console.log(-100);
}

// # 7. Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

let num7 = 10;
if (num7 < 0) {
  console.log(1776);
} else {
  console.log(1979);
}

// # 8. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

let num8 = 100;
if (num8 === 100) {
  console.log(100);
} else if (num8 === 99) {
  console.log(99);
} else {
  console.log(0);
}

// # 9. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.
let num9a = -5;
let num9b = 7;
if (num9a < 0 && num9b > 0) {
  console.log(1);
} else {
  console.log(0);
}

// # 10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise(only one print statement should occur).

let num10 = 50;
if (num10 > 80) {
  console.log(5);
} else if (num10 > 60) {
  console.log(4);
} else if (num10 > 40) {
  console.log(3);
} else if (num10 > 20) {
  console.log(2);
} else {
  console.log(1);
}





