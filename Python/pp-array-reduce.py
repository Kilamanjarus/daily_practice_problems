#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

arr = [5, 10, 8, 3]
total = sum(arr)
print(total)

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

arr = ["volleyball", "basketball", "badminton"]
single = "".join(arr)
print(single)

#  3. Start with an array of hashes and compute the sum of the "price"s (from the :"price" key).
#     For example, [{"name": "chair", "price": 100}, {"name": "pencil", "price": 1}, {"name": "book", "price": 4}] becomes 105.

arr = [{"name": "chair", "price": 100}, {
    "name": "pencil", "price": 1}, {"name": "book", "price": 4}]
price = sum([item["price"] for item in arr])
print(price)

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

arr = [5, 10, 8, 3, 9]
minimum = min(arr)
print(minimum)

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

arr = ["volleyball", "basketball", "badminton"]
total = len(arr)
print(total)

#  6. Start with an array of hashes and find the hash with the lowest "price" (from the :"price" key).
#     For example, [{"name": "chair", "price": 100}, {"name": "pencil", "price": 1}, {"name": "book", "price": 4}] becomes {"name": "pencil", "price": 1}.

arr = [{"name": "chair", "price": 100}, {
    "name": "pencil", "price": 1}, {"name": "book", "price": 4}]
price = min([item["price"] for item in arr])
print(price)

#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

arr = [5, 10, 8, 3]
product = 1
for num in arr:
    product *= num
print(product)

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

arr = ["volleyball", "basketball", "badminton"]
single = "-".join(arr)
print(single)

#  9. Start with an array of hashes and find the hash with the shortest "name" (from the :"name" key).
#     For example, [{"name": "chair", "price": 100}, {"name": "pencil", "price": 1}, {"name": "book", "price": 4}] becomes {"name": "book", "price": 4}.

arr = [{"name": "chair", "price": 100}, {
    "name": "pencil", "price": 1}, {"name": "book", "price": 4}]
name = min([item["name"] for item in arr])
print(name)

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

arr = [5, 10, 8, 3]
maximum = max(arr)
print(maximum)
