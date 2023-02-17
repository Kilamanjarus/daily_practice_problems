# Convert an array of arrays into a hash.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

arr = [[1, 3], [8, 9], [2, 16]]
hash_map = {key: value for key, value in arr}
print(hash_map)


#  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
#     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

arr = [{'id': 1, 'color': 'blue', 'price': 32},
       {'id': 2, 'color': 'red', 'price': 12}]
hash_map = {hash['id']: hash for hash in arr}
print(hash_map)


#  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
#     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

string = "bookkeeper"
char_count = {}

for char in string:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1

print(char_count)

#  4. Convert a hash into an array of arrays.
#     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

hash_map = {"chair": 100, "book": 14}
arr = [[key, value] for key, value in hash_map.items()]
print(arr)


#  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
#     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

hash_map = {321: {"name": "Alice", "age": 31},
            322: {"name": "Maria", "age": 27}}
arr = [{"id": key, **value} for key, value in hash_map.items()]
print(arr)


#  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
#     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

arr = ["do", "or", "do", "not"]
str_count = {}

for string in arr:
    if string in str_count:
        str_count[string] += 1
    else:
        str_count[string] = 1

print(str_count)


#  7. Convert a hash into a flat array containing all the hash’s keys and values.
#     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

hash_map = {"a": 1, "b": 2, "c": 3, "d": 4}
flat_arr = [item for pair in hash_map.items() for item in pair]
print(flat_arr)

#  8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
#     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

prices = {"chair": 75, "book": 15}
items = [
    {"name": "chair", "color": "red", "weight": 10},
    {"name": "book", "color": "black", "weight": 1}
]

combined = {name: {**items[i], "price": price}
            for i, (name, price) in enumerate(prices.items())}
print(combined)


#  9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
#     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

books = [
    {"author": "Jeff Smith", "title": "Bone"},
    {"author": "George Orwell", "title": "1984"},
    {"author": "Jeff Smith", "title": "RASL"}
]

books_by_author = {}
for book in books:
    if book['author'] in books_by_author:
        books_by_author[book['author']].append(book['title'])
    else:
        books_by_author[book['author']] = [book['title']]

print(books_by_author)


# 10. Given a hash, create a new hash that has the keys and values switched.
#     For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

original_hash = {"a": 1, "b": 2, "c": 3}
new_hash = {}

for key, value in original_hash.items():
    new_hash[value] = key

print(new_hash)
