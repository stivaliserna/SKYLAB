// Writes a function that convert a hexadecimal color in its RGB representation

function splitColors (color) {
  color = color.slice(1)
  const red = color.slice(0, 2)
  const green = color.slice(2, 4)
  const blue = color.slice(4, 6)
  return [red, green, blue]
}

function hexToRGB (hexColor) {
  const components = splitColors(hexColor)

  const colors = components.map(color => Number.parseInt(color, 16))

  const convertedRed = colors[0]
  const convertedGreen = colors[1]
  const convertedBlue = colors[2]

  return 'rgb(' + convertedRed + ',' + convertedGreen + ',' + convertedBlue + ')'
}

console.log(hexToRGB('#AA23F5'))
// => rgb(170,35,245)
