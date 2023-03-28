# 1. Convert an array of arrays into a hash.
# For example, [[1, 3], [8, 9], [2, 16]] becomes { 1 => 3, 8 => 9, 2 => 16 }.
hash1 = {}
[[1, 3], [8, 9], [2, 16]].each do | pair |
  hash1[pair[0]] = pair[1]
end
puts hash1.inspect

# 2. Convert an array of hashes into a hash using the:id key from the array's hashes as the keys in the new hash.
# For example, [{ id: 1, color: "blue", price: 32 }, { id: 2, color: "red", price: 12 }] becomes { 1 => { id: 1, color: "blue", price: 32 }, 2 => { id: 2, color: "red", price: 12 } }.
hash2 = {}
[{ id: 1, color: "blue", price: 32 }, { id: 2, color: "red", price: 12 }].each do | hsh |
  hash2[hsh[:id]] = hsh
end
puts hash2.inspect

# 3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
# For example, "bookkeeper" becomes { "b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1 }.
hash3 = Hash.new(0)
"bookkeeper".chars.each do | char |
  hash3[char] += 1
end
puts hash3.inspect

# 4. Convert a hash into an array of arrays.
# For example, { "chair" => 100, "book" => 14 } becomes[["chair", 100], ["book", 14]].
  array4 = []
{ "chair" => 100, "book" => 14 }.each do | k, v |
  array4 << [k, v]
end
puts array4.inspect

# 5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
# For example, { 321 => { name: "Alice", age: 31 }, 322 => { name: "Maria", age: 27 } } becomes[{ id: 321, name: "Alice", age: 31 }, { id: 322, name: "Maria", age: 27 }].
  array5 = []
{ 321 => { name: "Alice", age: 31 }, 322 => { name: "Maria", age: 27 } }.each do | k, v |
  array5 << { id: k }.merge(v)
end
puts array5.inspect

# 6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
# For example, ["do", "or", "do", "not"] becomes { "do" => 2, "or" => 1, "not" => 1 }.
hash6 = Hash.new(0)
["do", "or", "do", "not"].each do | word |
  hash6[word] += 1
end
puts hash6.inspect
7. Convert a hash into a flat array containing all the hash’s keys and values.
For example, { "a" => 1, "b" => 2, "c" => 3, "d" => 4 } becomes["a", 1, "b", 2, "c", 3, "d", 4].
  hash = { "a" => 1, "b" => 2, "c" => 3, "d" => 4 }
flat_array = hash.to_a.flatten
puts flat_array.inspect

8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
For example, { "chair" => 75, "book" => 15 } and[{ name: "chair", color: "red", weight: 10 }, { name: "book", color: "black", weight: 1 }] becomes { "chair" => { price: 75, color: "red", weight: 10 }, "book" => { price: 15, color: "black", weight: 1 } }.
prices = { "chair" => 75, "book" => 15 }
items = [{ name: "chair", color: "red", weight: 10 }, { name: "book", color: "black", weight: 1 }]
result = {}

items.each do | item |
  name = item[:name]
result[name] = item.merge({ price: prices[name] })
end

puts result.inspect

9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
For example, [{ author: "Jeff Smith", title: "Bone" }, { author: "George Orwell", title: "1984" }, { author: "Jeff Smith", title: "RASL" }] becomes { "Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"] }.
books = [
  { author: "Jeff Smith", title: "Bone" },
  { author: "George Orwell", title: "1984" },
  { author: "Jeff Smith", title: "RASL" }
]

result = Hash.new { | h, k | h[k] =[] }

books.each do | book |
  result[book[:author]] << book[:title]
end

puts result.inspect

10. Given a hash, create a new hash that has the keys and values switched.
For example, { "a" => 1, "b" => 2, "c" => 3 } becomes { 1 => "a", 2 => "b", 3 => "c" }.
hash = { "a" => 1, "b" => 2, "c" => 3 }
result = hash.invert
puts result.inspect