# 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

words = ["first", "second", "third"]
words.push("fourth", "fifth")
p words.join(" ")

# 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

letters = ["a", "b", "c", "d"]
letters[2] = 4
p letters.join(" ")

# 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

numbers = [1, 2, 3, 4, 5]
i = 0
while i < numbers.length
  puts numbers[i]
  i += 1
end

# 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

numbers = [1]
numbers << 2 << 3 << 4
puts numbers.join(" ")

# 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

strings = ["abc", "def", "ghi"]
strings[2] = strings[2].upcase
p strings.join(" ")

# 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

names = ["John", "Deer", "Brown"]
i = 0
while i < 3
  p names[i]
  i += 1
end

# 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

strings = ["Still", "going"]
strings << "strong"
p strings.join(" ")

# 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

numbers = [1, 2, 3, 4, 5]
numbers[0] = numbers[0] * 10
p numbers.join(" ")

# 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

numbers = [6, 9]
i = 0
while i < 2
  p numbers[i]
  i += 1
end

# 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

countries = ["Australia", "Thailand", "Russia"]
countries << "Germany"
p countries.join(" ")
