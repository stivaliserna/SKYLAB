// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function toReverse (str) {
  return str.split('').reverse('').join('')
}

toReverse('Hello, World')
