import { sumAll } from "../src/sum";

test("should be 70", () => {
  expect(sumAll([10, 10, 10, 10, 10, 10, 10])).toBe(70);
});
