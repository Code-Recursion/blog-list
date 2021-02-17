const palindrome = require('../utils/for_testing').palindrome

test('palindrome of a', () => {
  const result = palindrome('a')

  expect(result).toBe('a')
})

test('palindrome of react', () => {
  const result = palindrome('react')

  expect(result).toBe('tcaer')
})

test('palindrome of releveler', () => {
  const result = palindrome('releveler')

  expect(result).toBe('releveler')
})

test('reversed string', () => {
    const result = palindrome('reverse')
    expect(result).toBe('esrever')
})

test('reverse of batman is', () => {
  const result = palindrome('batman')
  expect(restult).toBe('namtab')
})