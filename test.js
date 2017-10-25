const proofRead = require('./')

test('should be defined', () => {
  expect(proofRead).toBeDefined()
})

test('should provide suggestions and typos', () => {
  const text = `
    So the cat was stolen.
    Cuz for reasons.
`

  expect(proofRead(text)).resolves.toHaveProperty('suggestions')
  expect(proofRead(text)).resolves.toHaveProperty('typos')
})
