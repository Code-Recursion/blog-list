const dummy = require('../utils/list_helper').dummy

describe('demo', () => {
    const blogs = []
  test('test', () => {
    expect(dummy(blogs)).toBe(1)
  })
})
