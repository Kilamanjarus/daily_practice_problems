// 1. Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].
const nums1 = [1, 2, 3];
const result1 = nums1.map(num => num * 3);
console.log(result1);

// 2. Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
const strings2 = ["hello", "goodbye"];
const result2 = strings2.map(str => str.toUpperCase());
console.log(result2);

// 3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].
const hashes3 = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
const result3 = hashes3.map(hash => hash.name);
console.log(result3);

// 4. Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].
const nums4 = [1, 2, 3];
const result4 = nums4.map(num => num + 7);
console.log(result4);

// 5. Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].
const strings5 = ["hello", "goodbye"];
const result5 = strings5.map(str => str.length);
console.log(result5);

// 6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].
const hashes6 = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
const result6 = hashes6.map(hash => hash.age);
console.log(result6);

// 7. Start with an array of numbers and create a new array with each number divided by 2.
// For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].
const nums7 = [1, 2, 3];
const result7 = nums7.map(num => num / 2);
console.log(result7);

// 8. Start with an array of strings and create a new array with each string's first letter only.
// For example, ["hello", "goodbye"] becomes ["h", "g"].
const strings8 = ["hello", "goodbye"];
const result8 = strings8.map(str => str[0]);
console.log(result8);

// 9. Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
const people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
const doubleAges = people.map(person => person.age * 2);

// 10. Start with an array of numbers and create a new array with each number converted into a string.
const numbers = [1, 2, 3];
const stringNumbers = numbers.map(number => number.toString());

