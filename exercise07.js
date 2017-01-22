// Define a function called calculator that receives an operation
// and two numbers and returns the result of the operation applied
// to the values passed as parameters

function calculator (operation, num1, num2) {
  if (operation === 'adition') {
    return num1 + num2
  } else if (operation === 'subtraction') {
    return num1 - num2
  } else if (operation === 'multiplication') {
    return num1 * num2
  } else if (operation === 'division') {
    return num1 / num2
  } else {
    return 'This only solves a math operation'
  }
}

calculator('adition', 3, 7)
