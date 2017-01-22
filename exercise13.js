// Improve the previous function to add a random number between 0 and 1000 every 7 characters

var re = /(.{6})(.)/g

function input (str) {
  return str
    .replace(/t/g, 7)
    .replace(/a/g, 4)
    .replace(/s/g, 5)
    .replace(/o/g, 0)
}

function getRandomInt (match, $1) {
  var min = 0
  var max = 1000
  return $1 + (Math.floor(Math.random() * (max - min)) + min)
}

console.log(input('ttaassjohfgdshdj').replace(re, getRandomInt))

