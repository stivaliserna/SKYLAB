describe('a function that', function () {
  it('should exist', function () {
    expect(gradeBook).toBeDefined()
  })

  it('should return "A" if score average is between 90 and 100', function () {
    expect(gradeBook(90, 95, 100)).toEqual('A')
  })

  it('should return "B" if score average is between 80 and 89', function () {
    expect(gradeBook(80, 85, 90)).toEqual('B')
  })

  it('should return "C" if score average is between 70 and 79', function () {
    expect(gradeBook(70, 77, 78)).toEqual('C')
  })

  it('should return "D" if score average is between 60 and 69', function () {
    expect(gradeBook(60, 70, 66)).toEqual('D')
  })

  it('should return "F" if score average is between 0 and 59', function () {
    expect(gradeBook(10, 58, 23)).toEqual('F')
  })
})
