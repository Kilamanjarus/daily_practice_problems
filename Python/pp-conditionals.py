# 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

x = int(input("1 - Please enter a number: "))
if x == 10:
    print(0)
else:
    print(-1)

# 2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

x = int(input("2 - Please enter a number: "))
if x < 10:
    print(-1)
elif x > 10:
    print(1)
else:
    print(0)


# 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

x = int(input("3 - Please enter a number: "))
y = int(input("3 - Please enter a second number: "))
if x < 10 and y < 10:
    print(1)
else:
    print(0)

# 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.
x = int(input("4 - Please enter a number: "))
if x > 9000:
    print(1)
else:
    print(-1)

# 5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

x = int(input("5 - Please enter a number: "))
if x < 10:
    print(9)
elif x < 20:
    print(19)
elif x < 30:
    print(29)
else:
    print(-1)

# 6. Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

x = int(input("6 - Please enter a number: "))
y = int(input("6 - Please enter a second number: "))

if x > 100 or y > 100:
    print(100)
else:
    print(-100)

# 7. Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

x = int(input("7 - Please enter a number: "))
if x < 0:
    print(1776)
else:
    print(1979)

# 8. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

x = int(input("8 - Please enter a number: "))
if x == 100:
    print(100)
elif x == 99:
    print(99)
else:
    print(0)

# 9. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

x = int(input("9 - Please enter a number: "))
y = int(input("9 - Please enter a second number: "))
if x < 0 and y > 0:
    print(1)
else:
    print(0)

# 10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

x = int(input("10 - Please enter a number: "))
if x > 80:
    print(5)
if x > 60:
    print(4)
if x > 40:
    print(3)
if x > 20:
    print(2)
else:
    print(1)
