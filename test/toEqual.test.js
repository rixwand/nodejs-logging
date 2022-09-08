test("test equal", ()=> {

  const person = {id: 12}
  person.name = "Risu"

  expect(person).toEqual({id: 12, name: "Risu"})
})


test("test equal3", ()=> {

  const person = {id: 12}
  person.name = "Risu"

  expect(person).toEqual({id: 12, name: "Risu"})
})