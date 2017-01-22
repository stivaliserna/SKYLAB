describe('a function that', function () {
  it('should exist', function () {
    expect(fizzBuzz).toBeDefined()
  })

  it('should return an array', function () {
    var result = fizzBuzz()
    expect(Array.isArray(result)).toEqual(true)
  })

  it('should return an array of 100 elements', function () {
    var result = fizzBuzz().length
    expect(result).toEqual(100)
  })

  it('should return "Fizz" if the number is divisible by three', function () {
    var result = fizzBuzz()[2]
    expect(result).toEqual('Fizz')
  })

  it('should return "Buzz" if the number is divisible by five', function () {
    var result = fizzBuzz()[4]
    expect(result).toEqual('Buzz')
  })

  it('should return "FizzBuzz" if the number is divisible by both', function () {
    var result = fizzBuzz()[14]
    expect(result).toEqual('FizzBuzz')
  })
})
