// Define a function called 'isString' that receives a value and
// return true if the value received is a string

function isString (str) {
  if (typeof str === 'string') {
    return true
  } else {
    return false
  }
}

isString(5)
