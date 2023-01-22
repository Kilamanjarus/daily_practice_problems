# 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

words = ["apple", "banana", "cherry"]
words.append("date")
words.append("elderberry")
print(" ".join(words))

# 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

letters = ["a", "b", "c", "d"]
letters[1] = "1"
print(" ".join(letters))

# 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

numbers = [1, 2, 3, 4, 5]
i = 0
while i < 5:
    print(numbers[i])
    i += 1

# 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

numbers2 = [1]
numbers2.extend([2, 3, 4])
print(" ".join(map(str, numbers2)))

# 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

strs = ["first", "second", "third"]
strs[2] = strs[2].upper()
print(" ".join(strs))

# 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

names = ["Max", "Jeremy", "James"]
i = 0
while i < 3:
    print(names[i])
    i += 1

# 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

strings = ["testing", "my python"]
strings.append("coding")
print(" ".join(strings))

# 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

numbers = [1, 2, 3, 4, 5]
numbers[0] = numbers[0]*10
print(" ".join(map(str, numbers)))

# 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

nums = [1, 2]
i = 0
while i < 2:
    print(nums[i])
    i += 1

# 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

countries = ["Japan", "Korea", "Germany"]
countries.append("USA")
print(" ".join(countries))
