// Write a function filterLongWords() that takes an array of words
// and an integer 'i' and returns the array of words that are longer than 'i'.

function findLongestWord (list) {
  return list.reduce(function (a, b) {
    return function getInt (integer) {
      return Math.max(a, b.length)
    }
  }, 0)
}

findLongestWord(['hi', 'hola', 'hello'])
