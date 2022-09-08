import { sumAll } from "../src/sum";

const table = [
  {
    number: [10, 10],
    expected: 20,
  },
  {
    number: [10, 10, 10],
    expected: 30,
  },
  {
    number: [10, 10, 10, 10, 10, 10],
    expected: 60,
  },
];

it.each(table)(
  "sumAll($number) should be $expected",
  ({ number, expected }) => {
    expect(sumAll(number)).toBe(expected);
  }
);
