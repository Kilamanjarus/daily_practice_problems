# 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

def times_two(num)
  num * 2
end

result = times_two(5)
puts result

# 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

def to_uppercase(str)
  str.upcase
end

result = to_uppercase("hello")
puts result

# 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

def subtract(num1, num2)
  num1 - num2
end

result = subtract(10, 5)
puts result

# 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

def square(num)
  num ** 2
end

result = square(5)
puts result

# 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

def first_letter(str)
  str[0]
end

result = first_letter("hello")
puts result

# 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

def combine_strings(str1, str2, str3)
  "#{str1} #{str2} #{str3}"
end

result = combine_strings("hello", "world", "!")
puts result

# 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

def to_string(num)
  num.to_s
end

result = to_string(5)
puts result

# 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

def repeat_string(str)
  str * 5
end

result = repeat_string("hello")
puts result

# 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

def average(num1, num2, num3)
  (num1 + num2 + num3) / 3.0
end

result = average(2, 4, 6)
puts result

# 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

def times_ten_plus_thirty(num)
  num * 10 + 30
end

result = times_ten_plus_thirty(5)
puts result
