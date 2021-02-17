const palindrome = require('../utils/for_testing').palindrome

describe('palindrome of', () => {
  test('a', () => {
    const result = palindrome('a')

    expect(result).toBe('a')
  })

  test('react', () => {
    const result = palindrome('react')

    expect(result).toBe('tcaer')
  })

  test('releveler', () => {
    const result = palindrome('releveler')

    expect(result).toBe('releveler')
  })

  test('reversed string', () => {
    const result = palindrome('reverse')
    expect(result).toBe('esrever')
  })
})