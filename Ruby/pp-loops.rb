# 1. Write a while loop to print the numbers 1 through 10.

n = 0

while n < 10
  n += 1
  p n
end

# 2. Write a while loop that prints the word "hello" 5 times.

n = 0
while n < 5
  p "hello"
  n += 1
end

# 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

x = ""
while x.downcase != "stop"
  p "Please enter a word: "
  x = gets.chomp()
end

# 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

n = 0
while n <= 100
  p n
  n += 5
end

# 5. Write a while loop that prints the number 9000 ten times.

n = 0
while n < 10
  p "9000"
  n += 1
end

# 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

n = 0
while n <= 10
  p "Please enter a number:"
  n = gets.chomp().to_i
end

# 7. Write a while loop that prints the numbers 50 to 70.

n = 50
while n <= 70
  p n
  n += 1
end

# 8. Write a while loop that prints the phrase "Around the world" 144 times.

n = 0
while n < 144
  p "Around the world"
  n += 1
end

# 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

n = ""
while n.length <= 5
  p "Please enter a word:"
  n = gets.chomp()
end

# 10. Write a while loop that prints the even numbers from 2 to 40.

n = 2
while n <= 40
  p n
  n += 2
end
