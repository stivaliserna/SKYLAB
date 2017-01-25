describe('a function that', function () {
  it('should exist', function () {
    expect(calculate).toBeDefined()
  })

  it('should return objects', function () {
    expect(typeof calculate([1, 2, -4])).toEqual('object')
  })

  it('should return minimum value of the array', function () {
    expect(calculate([1, 2, -4]).min).toEqual(-4)
  })

  it('should return maximum value of the array', function () {
    expect(calculate([1, 2, -4]).max).toEqual(2)
  })

  it('should return the average of elements in the array', function () {
    expect(calculate([2, 1, 6]).avg).toEqual(3)
  })

  it('should return the length of the array', function () {
    expect(calculate([1, 2, -4]).els).toEqual(3)
  })
})
