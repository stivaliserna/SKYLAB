// Your task is to process a sequence of integer numbers
// to determine the following statistics:

//     o) minimum value
//     o) maximum value
//     o) number of elements in the sequence
//     o) average value

// For example: function calculate([6, 9, 15, -2, 92, 11])

//     o) minimum value = -2
//     o) maximum value = 92
//     o) number of elements in the sequence = 6
//     o) average value = 21.833333

var numbersArray = [1, 2, 3, -4, 5]

console.log(calculate(numbersArray))

function minValue (numbers) {
  return Math.min.apply(null, numbers)
}

function maxValue (numbers) {
  return Math.max.apply(null, numbers)
}

function sum (numbers) {
  return numbers.reduce(function (a, b) {
    return a + b
  }, 0)
}

function average (numbers) {
  return sum(numbers) / numbers.length
}

function calculate (numbers) {
  return {
    min: minValue(numbers),
    max: maxValue(numbers),
    avg: average(numbers),
    els: numbers.length
  }
}
