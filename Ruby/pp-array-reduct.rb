#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

arr = [5, 10, 8, 3]
sum = 0
arr.each do |num| sum += num end
p sum

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

arr = ["volleyball", "basketball", "badminton"]
single_string = arr.join("")
p single_string

#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

arr = [{ name: "chair", price: 100 }, { name: "pencil, price: 1", price: 1 }, { name: "book, price: 4", price: 4 }]
sum = 0
arr.each do |hash| sum += hash[:price] end
p sum

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

arr = [5, 10, 8, 3, 9]
min = arr.min
p min

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

arr = ["volleyball", "basketball", "badminton"]
total_length = 0
arr.each do |string| total_length += string.length end
p total_length

#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

arr = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
min_price = 0
arr.each do |hash| min_price = hash if hash[:price] < min_price end
p min_price

#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

arr = [5, 10, 8, 3]
product = 0
arr.each do |num| product *= num end
p product

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

arr = ["volleyball", "basketball", "badminton"]
single_string = "-" + arr.join("-") + "-"
p single_string

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

arr = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]
shortest_name = ""
arr.each do |hash| shortest_name = hash[:name] if hash[:name] end
p shortest_name

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

arr = [5, 10, 8, 3]
maximum = arr.max()
p maximum
