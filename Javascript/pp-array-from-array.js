// # 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

let wordsArray = ["apple", "banana", "cherry"];
wordsArray.push("orange", "grape");
console.log(wordsArray.join(" "));

// # 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

let lettersArray = ["a", "b", "c", "d"];
lettersArray[1] = 2;
console.log(lettersArray.join(""));

// # 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

let numbersArray = [1, 2, 3, 4, 5];
let i = 0;
while (i < numbersArray.length) {
  console.log(numbersArray[i]);
  i++;
}

// # 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

let numArray = [1];
numArray.push(2, 3, 4);
console.log(numArray.join(" "));

// # 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

let stringsArray = ["apple", "banana", "cherry"];
stringsArray[2] = stringsArray[2].toUpperCase();
console.log(stringsArray.join(" "));

// # 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

let namesArray = ["Alice", "Bob", "Charlie"];
let i = 0;
while (i < namesArray.length) {
  console.log(namesArray[i]);
  i++;
}

// # 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

let stringsArray = ["apple", "banana"];
stringsArray.push("cherry");
console.log(stringsArray.join(" "));

// # 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

let numbersArray = [1, 2, 3, 4, 5];
numbersArray[0] *= 10;
console.log(numbersArray.join(" "));

// # 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

let numbersArray = [1, 2];
let i = 0;
while (i < numbersArray.length) {
  console.log(numbersArray[i]);
  i++;
}

// # 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

let countriesArray = ["USA", "Canada", "Mexico"];
countriesArray.push("Brazil");
console.log(countriesArray.join(" "));
