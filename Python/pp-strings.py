# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

first = input("Please enter a first name: ")
last = input("Please enter a last name: ")
full = first + " " + last
print(full)

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

first = input("Please enter a first name: ")
last = input("Please enter a last name: ")
full = f"{first} {last}"
print(full)

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

word = input("We're playing marco-polo you are it: ")
if word.lower() == "marco":
    print("Polo!")

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

first = input("Please enter a color: ")
second = input("Please enter a color: ")
third = input("Please enter a color: ")
phrase = "You chose the colors of " + first + \
    ", " + second + ", and " + third + "."
print(phrase)

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

first = input("Please enter a color: ")
second = input("Please enter a color: ")
third = input("Please enter a color: ")
phrase = f"You chose the colors of {first}, {second}, and {third}."
print(phrase)

# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

name = input("What is your name? ")
if name != "Santa":
    print("You are not Santa!")

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

title = input("Please enter a book title: ")
author = input("Please enter the book's author: ")
phrase = "The book, " + title + ", is by the author " + author + "."
print(phrase)

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

title = input("Please enter a book title: ")
author = input("Please enter the book's author: ")
phrase = f"The book, {title}, is by the author {author}."
print(phrase)

# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

password = input("Please enter the password: ")
if password == "Joshua":
    print("Shall we play a game?")
else:
    print("Access denied")

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

first = input("Please enter the name of a city: ")
second = input("Please enter the name of a city: ")
third = input("Please enter the name of a city: ")
phrase = "Some great cities to visit are " + \
    first + ", " + second + ", and " + third + "."
print(phrase)
