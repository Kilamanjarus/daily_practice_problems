// 1. Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

const pairs = [[1, 3], [8, 9], [2, 16]];
const flattened = [];

for (let i = 0; i < pairs.length; i++) {
  for (let j = 0; j < pairs[i].length; j++) {
    flattened.push(pairs[i][j]);
  }
}

console.log(flattened);

// 2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f", "g"];
const combined = [];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    combined.push(array1[i] + array2[j]);
  }
}

console.log(combined);

// 3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

const strings = ["a", "b", "c", "d"];
const combinations = [];

for (let i = 0; i < strings.length; i++) {
  for (let j = 0; j < strings.length; j++) {
    if (i !== j) {
      combinations.push(strings[i] + strings[j]);
    }
  }
}

console.log(combinations);

// 4. Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

const numbers = [5, -2, 1, -9, -7, 2, 6];
let largestProduct = numbers[0] * numbers[1];

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    const product = numbers[i] * numbers[j];
    if (product > largestProduct) {
      largestProduct = product;
    }
  }
}

console.log(largestProduct);

// #  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

const arr1 = [[1, 3], [8, 9], [2, 16]];
let sum = 0;

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
    sum += arr1[i][j];
  }
}

console.log(sum);

// #  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// #     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

const arr2 = [1, 2];
const arr3 = [6, 7, 8];
const sums = [];

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    sums.push(arr2[i] + arr3[j]);
  }
}

console.log(sums);

// #  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// #     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

const arr4 = [2, 8, 3];
const products = [];

for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4.length; j++) {
    if (i !== j) {
      products.push(arr4[i] * arr4[j]);
    }
  }
}

console.log(products);

// #  8. Use a nested loop to find the largest sum of any two different numbers within an array.
// #     For example, [1, 8, 3, 10] becomes 18.

const arr5 = [1, 8, 3, 10];
let largestSum = arr5[0] + arr5[1];

for (let i = 0; i < arr5.length; i++) {
  for (let j = i + 1; j < arr5.length; j++) {
    const sum = arr5[i] + arr5[j];
    if (sum > largestSum) {
      largestSum = sum;
    }
  }
}

console.log(largestSum);

// 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [5, 5].

function findNumbersThatAddUpTo10(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 10) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return false;
}

console.log(findNumbersThatAddUpTo10([2, 5, 3, 1, 0, 7, 11])); // Output: [5, 5]
console.log(findNumbersThatAddUpTo10([2, 5, 3, 1, 0, 7, 9])); // Output: [2, 8]
console.log(findNumbersThatAddUpTo10([2, 5, 3, 1, 0, 7, 8])); // Output: false

// 10. Use a nested loop to convert an array of string arrays into a single string.
// For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

function concatenateStringArrays(stringArrays) {
  let concatenatedString = "";
  for (let i = 0; i < stringArrays.length; i++) {
    for (let j = 0; j < stringArrays[i].length; j++) {
      concatenatedString += stringArrays[i][j];
    }
  }
  return concatenatedString;
}

console.log(concatenateStringArrays([["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]])); // Output: "amanaplanacanalpanama"
console.log(concatenateStringArrays([["hello", "world"], ["this", "is", "a", "test"]])) // Output: "helloworldthisisatest"
