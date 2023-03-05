// # 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a word: ', word => {
  console.log(word.toUpperCase());
  readline.close();
});


// # 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

readline.question('Enter a number: ', number => {
  if (number > 100) {
    console.log("That's a big number");
  }
  readline.close();
});

// # 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

readline.question('Enter the first number: ', num1 => {
  readline.question('Enter the second number: ', num2 => {
    const sum = Number(num1) + Number(num2);
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    readline.close();
  });
});

// # 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

readline.question('Enter a word: ', word => {
  const reversedWord = word.split('').reverse().join('');
  console.log(reversedWord);
  readline.close();
});

// # 5. Write a program that asks the user to enter a number, then prints the number times 10.

readline.question('Enter a number: ', number => {
  console.log(Number(number) * 10);
  readline.close();
});

// # 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

readline.question('Enter the first word: ', word1 => {
  readline.question('Enter the second word: ', word2 => {
    console.log(word1.toUpperCase() + '' + word2.toUpperCase());
    readline.close();
  });
});

// # 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

readline.question('Enter a word: ', word => {
  console.log(`The word '${word}' has ${word.length} letters.`);
  readline.close();
});

// # 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

readline.question('Enter a number: ', number => {
  if (number < 0) {
    console.log("That's a negative number");
  }
  readline.close();
});

// # 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

readline.question('Enter the first number: ', num1 => {
  readline.question('Enter the second number: ', num2 => {
    console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
    readline.close();
  });
});

// # 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

readline.question('Enter a word: ', word => {
  if (word.length > 5) {
    console.log("That's a long word");
  }
  readline.close();
});