# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

p "Please enter a word:"
word = gets.chomp()
p word.upcase

# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

p "Please enter a number:"
number = gets.chomp().to_i
if number > 100
  p "That's a big number"
end

# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

p "Please enter two numbers seperated by the enter key:"
num1 = gets.chomp().to_i
num2 = gets.chomp().to_i

p num1 + num2

# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

p "Please enter a word:"
word = gets.chomp()
p word.reverse

# 5. Write a program that asks the user to enter a number, then prints the number times 10.

p "Please enter a number:"
num = gets.chomp()
10.times do
  p num
end

# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

p "Please enter two words seperated by the enter key:"
word1 = gets.chomp()
word2 = gets.chomp()

p word1.upcase + " " + word2.upcase

# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

p "Please enter a word:"
word = gets.chomp()
p word.length

# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

p "Please enter a number:"
num = gets.chomp().to_i
if num < 0
  p "That's a negative number"
end

# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

p "Please enter two numbers seperated by the enter key:"
num1 = gets.chomp.to_i
num2 = gets.chomp.to_i

p num1 * num2

# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

p "Please enter a word:"
word = gets.chomp()

if word.length > 5
  p "That's a long word"
end
