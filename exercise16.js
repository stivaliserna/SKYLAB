// Write a function findLongestWord() that takes an array
// of words and returns the length of the longest one.

function findLongestWord (list) {
  return list.reduce(function (a, b) {
    return Math.max(a, b.length)
  }, 0)
}

findLongestWord(['hi', 'hola', 'hello'])
