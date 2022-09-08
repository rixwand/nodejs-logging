test('array test', () => {

  const arr = ["one", "two", "three"]
  expect(arr).toContain("three")

  const objarr = [{id: 1}, {id: 2}, {id: 3}]
  expect(objarr).toContainEqual({id:1})

})