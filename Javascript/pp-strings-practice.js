// # 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

let firstName_1 = "John";
let lastName_1 = "Doe";
console.log(firstName_1 + " " + lastName_1);

// # 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

let firstName_2 = "John";
let lastName_2 = "Doe";
console.log(`${firstName_2} ${lastName_2}`);


// # 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a word: ", word => {
  if (word === "marco") {
    console.log("polo");
  }
});

// # 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

let color4_1 = "red";
let color4_2 = "blue";
let color4_3 = "green";
console.log("I like " + color4_1 + ", " + color4_2 + ", and " + color4_3 + " colors.");

// # 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

let color5_1 = "red";
let color5_2 = "blue";
let color5_3 = "green";
console.log(`I like ${color5_1}, ${color5_2}, and ${color5_3} colors.`);

// # 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

readline.question("Enter a name: ", name => {
  ;
  if (name !== "Santa") {
    console.log("You're not Santa.");
  }
})

// # 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

let bookTitle_7 = "The Great Gatsby";
let bookAuthor_7 = "F. Scott Fitzgerald";
console.log("The book " + bookTitle_7 + " was written by " + bookAuthor_7 + ".");

// # 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

let bookTitle_8 = "The Great Gatsby";
let bookAuthor_8 = "F. Scott Fitzgerald";
console.log(`The book ${bookTitle_8} was written by ${bookAuthor_8}.`);


// # 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

readline.question('Enter password: ', password => {
  if (password === "Joshua") {
    console.log("Shall we play a game?");
  } else {
    console.log("Access denied");
  }
  readline.close();
});

// # 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

let city1 = "New York";
let city2 = "Paris";
let city3 = "Tokyo";
console.log("I have visited " + city1 + ", " + city2 + ", and " + city3 + ".");
