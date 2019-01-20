// Write a function that takes a character and returns true if it is a vowel, false otherwise.

function isVowel (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return str.length === 1 && vowels.includes(str)
    ? 'Is a vowel'
    : 'Something is not right'
}

console.log(isVowel('a'))
// => Is a vowel
