# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

p "Please enter a first name:"
f_name = gets.chomp()
p "Please enter a last name:"
l_name = gets.chomp()

p "Hi " + f_name + " " + l_name + "."

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

p "Please enter a first name:"
f_name = gets.chomp()
p "Please enter a last name:"
l_name = gets.chomp()

p "Hi #{f_name} #{l_name}."

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

p "Wanna play marco-polo? You are it! Start..."
word = gets.chomp()
if word.downcase() == "marco"
  p "Polo!"
end

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

p "Please enter three colors seperated by the enter key:"
first_color = gets.chomp()
second_color = gets.chomp()
third_color = gets.chomp()

p "You chose the colors of " + first_color + ", " + second_color + ", " + "and " + third_color + "."

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

p "Please enter three colors seperated by the enter key:"
first_color = gets.chomp()
second_color = gets.chomp()
third_color = gets.chomp()

p "You chose the colors of #{first_color}, #{second_color}, and #{third_color}."

# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

p "Hi, what is your name?"
name = gets.chomp()

if name != "Santa"
  p "You're not Santa."
end

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

p "Please enter the name of a book and its author seperated by an enter:"
title = gets.chomp()
author = gets.chomp()

p "The book called " + title + " is by the author " + author + "."

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

title = gets.chomp()
author = gets.chomp()

p "The book called #{title} is by the author #{author}."

# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

p "Please enter password:"
pass = gets.chomp()

if pass != "Joshua"
  p "Access denied"
else
  p "Shall we play a game?"
end

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

p "Please enter three cities seperated by the enter key:"
first_city = gets.chomp()
second_city = gets.chomp()
third_city = gets.chomp()

p "You should travel to the cities of " + first_city + ", " + second_city + ", and " + third_city + "."
