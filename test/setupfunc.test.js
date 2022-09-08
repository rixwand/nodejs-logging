import { sum } from "../src/sum";

afterAll(()=> console.log('after All'))
beforeAll(()=> console.log('before All'))
beforeEach(() => console.log('before Each'))
afterEach(()=>console.log("after Each"))


test('setup function 1', () => {
  console.info('test 1')
  expect(sum(1,2)).toBe(3)
});
test('setup function 2', () => {
  console.info('test 2')
  expect(sum(1,2)).toBe(3)
});