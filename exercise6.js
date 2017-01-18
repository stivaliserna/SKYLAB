// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation

function splitColors (color) {
  color = color.slice(1)
  var red = color.slice(0, 2)
  var green = color.slice(2, 4)
  var blue = color.slice(4, 6)
  return [red, green, blue]
}

function hexToRGB (hexColor) {
  var components = splitColors(hexColor)
  var red = components[0]
  var green = components[1]
  var blue = components[2]
  var convertedRed = Number.parseInt(red, 16)
  var convertedGreen = Number.parseInt(green, 16)
  var convertedBlue = Number.parseInt(blue, 16)
  return 'rgb(' + convertedRed + ',' + convertedGreen + ',' + convertedBlue + ')'
}

hexToRGB('#AA23F5')
