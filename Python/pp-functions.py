# 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

def times_two(num):
    return num * 2


result = times_two(5)
print(result)


# 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

def to_uppercase(str):
    return str.upper()


result = to_uppercase("hello")
print(result)


# 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

def subtract(num1, num2):
    return num1 - num2


result = subtract(10, 5)
print(result)


# 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

def square(num):
    return num**2


result = square(5)
print(result)


# 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

def first_letter(str):
    return str[0]


result = first_letter("hello")
print(result)


# 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

def combine_strings(str1, str2, str3):
    return str1 + " " + str2 + " " + str3


result = combine_strings("hello", "world", "!")
print(result)


# 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

def to_string(num):
    return str(num)


result = to_string(5)
print(result)


# 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

def repeat_string(str):
    return str * 5


result = repeat_string("hello")
print(result)


# 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

def average(num1, num2, num3):
    return (num1 + num2 + num3) / 3.0


result = average(2, 4, 6)
print(result)


# 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

def times_ten_plus_thirty(num):
    return num * 10 + 30


result = times_ten_plus_thirty(5)
print(result)
