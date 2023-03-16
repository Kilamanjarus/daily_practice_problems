// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

let person = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com"
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

let peopleArray = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Doe" },
  { firstName: "Bob", lastName: "Smith" }
];
console.log(peopleArray[0].firstName);
console.log(peopleArray[0].lastName);

// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

let menuHash = {
  "burger": 10.99,
  "fries": 3.99,
  "soda": 1.99
};
menuHash["salad"] = 7.99;
console.log(menuHash);

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

let bookHash = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  numPages: 281,
  language: "English"
};
console.log(bookHash.title);
console.log(bookHash.author);
console.log(bookHash.numPages);
console.log(bookHash.language);

// # 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

let booksArray = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" }
];
console.log(booksArray[2].author);

// # 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

let statesHash = {
  "California": "Sacramento",
  "Texas": "Austin",
  "New York": "Albany"
};
statesHash["Florida"] = "Tallahassee";
console.log(statesHash);

// # 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

let laptopHash = {
  brand: "Apple",
  model: "MacBook Pro",
  year: 2021
};
console.log(laptopHash.brand);
console.log(laptopHash.model);
console.log(laptopHash.year);

// # 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

let laptopsArray = [
  { brand: "Dell", model: "XPS 13" },
  { brand: "Lenovo", model: "ThinkPad X1 Carbon" },
  { brand: "HP", model: "Spectre x360" }
];
console.log(laptopsArray[1].model);

// # 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

let dictionaryHash = {
  "apple": "a fruit",
  "carrot": "a vegetable"
};
dictionaryHash["banana"] = "a fruit";
console.log(dictionaryHash);

// # 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

let shirtHash = {
  brand: "Nike",
  color: "Black",
  size: "Large"
};
console.log(shirtHash.brand);
console.log(shirtHash.color);
console.log(shirtHash.size);
