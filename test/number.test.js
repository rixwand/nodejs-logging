test('number test', () => {

  const number = 2 +2;

  expect(number).toBeGreaterThan(3)
  expect(number).toBeGreaterThanOrEqual(4)
  expect(number).toBeLessThan(5)
  expect(number).toBeLessThanOrEqual(6)

})