# 1. Write a while loop to print the numbers 1 through 10.

i = 1
while i <= 50:
    print(i)
    i += 1

# 2. Write a while loop that prints the word "hello" 5 times.

i = 1
while i <= 5:
    print("hello")
    i += 1

# 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

i = ""
while i.lower() != "stop":
    i = input("Please enter a word: ")

# 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

i = 0
while i <= 100:
    print(i)
    i += 5

# 5. Write a while loop that prints the number 9000 ten times.

i = 0
while i <= 10:
    print(9000)
    i += 1

# 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

i = 0
while i < 10:
    i = int(input("Please enter a number: "))

# 7. Write a while loop that prints the numbers 50 to 70.

i = 50
while i <= 70:
    print(i)
    i += 1

# 8. Write a while loop that prints the phrase "Around the world" 144 times.

i = 0
while i < 144:
    print("Around the world")
    i += 1

# 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

i = ""
while len(i) < 5:
    i = input("Please enter a word: ")

# 10. Write a while loop that prints the even numbers from 2 to 40.

i = 2
while i <= 40:
    print(i)
    i += 2
