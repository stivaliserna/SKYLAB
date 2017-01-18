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
