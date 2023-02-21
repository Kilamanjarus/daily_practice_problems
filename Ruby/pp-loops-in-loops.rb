# 1. Use a nested loop to convert an array of number pairs into a single flattened array.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

arr = [[1, 3], [8, 9], [2, 16]]
result = []
arr.each do |pair|
  pair.each do |num|
    result << num
  end
end

#  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
#     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

arr1 = ["a", "b", "c"]
arr2 = ["d", "e", "f", "g"]
result = []
arr1.each do |str1|
  arr2.each do |str2|
    result << str1 + str2
  end
end

#  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
#     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

arr = ["a", "b", "c", "d"]
result = []
arr.each do |str1|
  arr.each do |str2|
    if str1 != str2
      result << str1 + str2
    end
  end
end
result.uniq!

#  4. Use a nested loop to find the largest product of any two different numbers within a given array.
#     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

arr = [5, -2, 1, -9, -7, 2, 6]
max_product = arr[0] * arr[1]
arr.each_with_index do |num1, index1|
  arr.each_with_index do |num2, index2|
    if index1 != index2
      product = num1 * num2
      if product > max_product
        max_product = product
      end
    end
  end
end

#  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
#     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

arr = [[1, 3], [8, 9], [2, 16]]
sum = 0
arr.each do |pair|
  pair.each do |num|
    sum += num
  end
end

#  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
#     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

arr1 = [1, 2]
arr2 = [6, 7, 8]
result = []
arr1.each do |num1|
  arr2.each do |num2|
    result << num1 + num2
  end
end

#  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
#     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

arr = [2, 8, 3]
result = []
arr.each do |num1|
  arr.each do |num2|
    result << num1 * num2
  end
end

#  8. Use a nested loop to find the largest sum of any two different numbers within an array.
#     For example, [1, 8, 3, 10] becomes 18.

arr = [1, 8, 3, 10]
max_sum = arr[0] + arr[1]
arr.each_with_index do |num1, index1|
  arr.each_with_index do |num2, index2|
    if index1 != index2
      sum = num1 + num2
      if sum > max_sum
        max_sum = sum
      end
    end
  end
end

#  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
#     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

arr = [2, 5, 3, 1, 0, 7, 11]
result = false

(0..arr.length - 1).each do |i|
  (i + 1..arr.length - 1).each do |j|
    if arr[i] + arr[j] == 10
      result = [arr[i], arr[j]]
      break
    end
  end
end

puts result

# 10. Use a nested loop to convert an array of string arrays into a single string.
#     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

arr = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]]
result = ""

arr.each do |sub_arr|
  sub_arr.each do |str|
    result += str
  end
end

puts result
