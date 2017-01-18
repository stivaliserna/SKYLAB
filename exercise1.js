var rows = '\n'

for (var i = 1; i <= 10; i++) {
  var cols = ''
  for (var j = 1; j <= 10; j++) {
    cols += j * i + '\t'
  }
  rows += cols + '\n'
}

