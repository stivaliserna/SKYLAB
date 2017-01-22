// Define a function sum() and a function multiply() that sums and multiplies
// all the numbers in an array

var sum = [1, 2, 3, 4].reduce(function (a, b) {
  return a + b
}, 0)

var multiply = [1, 2, 3, 4].reduce(function (a, b) {
  return a * b
})

console.log(sum + ', ' + multiply)
