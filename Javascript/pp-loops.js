// # 1. Write a while loop to print the numbers 1 through 10.

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// # 2. Write a while loop that prints the word "hello" 5 times.

let i = 1;
while (i <= 5) {
  console.log("hello");
  i++;
}

// # 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

while (true) {
  let input = prompt("Enter a word:");
  if (input === "stop") {
    break;
  }
}

// # 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

let i = 0;
while (i <= 100) {
  console.log(i);
  i += 5;
}

// # 5. Write a while loop that prints the number 9000 ten times.

let i = 1;
while (i <= 10) {
  console.log(9000);
  i++;
}

// # 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

while (true) {
  let input = prompt("Enter a number:");
  if (Number(input) > 10) {
    break;
  }
}

// # 7. Write a while loop that prints the numbers 50 to 70.

let i = 50;
while (i <= 70) {
  console.log(i);
  i++;
}

// # 8. Write a while loop that prints the phrase "Around the world" 144 times.

let i = 1;
while (i <= 144) {
  console.log("Around the world");
  i++;
}

// # 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

while (true) {
  let input = prompt("Enter a word:");
  if (input.length > 5) {
    break;
  }
}

// # 10. Write a while loop that prints the even numbers from 2 to 40.

let i = 2;
while (i <= 40) {
  console.log(i);
  i += 2;
}
