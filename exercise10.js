// Define a function called 'isNumber' that receives a value and
// return true if the value received is a number

function isNumber (num) {
  if (typeof num === 'number') {
    return true
  } else {
    return false
  }
}

isNumber(5)
