// Define a function called 'isNumber' that receives a value and
// return true if the value received is a number

function isNumber (num) {
  return typeof num === 'number'
}

console.log(isNumber(5))
// => true