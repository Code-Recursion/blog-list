const sum = require('../utils/for_testing').sum

describe('test for sum', () => {
  test('array sum', () => {
    expect(sum([])).toBe(0)
  })
})
