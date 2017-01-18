// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel (str) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  if (str.length === 1 && vowels.includes(str)) {
    return 'Is a vowel'
  } else {
    return 'Something is not right'
  }
}

console.log(isVowel('a'))
