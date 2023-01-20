# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

word = input("Please enter a word: ")
print(word.upper())

# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

num = int(input("Please enter a number: "))
if num > 100:
    print("That's a big number")

# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

num1 = int(input("Please enter a number: "))
num2 = int(input("Please enter a second number: "))

print(num1 + num2)

# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

word = input("Please enter a word: ")
print(word[::-1])

# 5. Write a program that asks the user to enter a number, then prints the number times 10.

num = int(input("Please enter a number: "))
print(num*10)

# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

word1 = input("Please enter a word: ")
word2 = input("Please enter a second word: ")

print(word1.upper() + " " + word2.upper())

# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

word = input("Please enter a word: ")
print(len(word))

# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.

num = int(input("Please enter a number: "))
if num < 0:
    print("That is a negative number")

# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.

num1 = int(input("Please enter a number: "))
num2 = int(input("Please enter a second number: "))

print(num1*num2)

# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

word = input("Please enter a word: ")
if len(word) > 5:
    print("That is a long word")
