test('truthiness test', () => {

  let value = null;

  expect(value).toBeNull();
  expect(value).toBeDefined();
  expect(value).toBeFalsy()

  value = undefined;
  expect(value).toBeUndefined()
  expect(value).toBeFalsy()

  value = "risu"
  expect(value).toBeTruthy()
})