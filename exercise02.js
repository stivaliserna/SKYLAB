// Write a function that prints in the console the multiplication
// table of any number passed as parameter

function mult (num) {
  let result = ''
  for (let i = 1; i <= 10; i++) {
    result = result + num * i + ' '
  }
  return result
}

console.log(mult(5))
// => 5 10 15 20 25 30 35 40 45 50
