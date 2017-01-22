// Write a function that prints in the console the multiplication
// table of any number passed as parameter

function mult (num) {
  var result = ''
  for (var i = 1; i <= 10; i++) {
    result = num * i + ' '
  }
  return result
}

console.log(mult(5))
