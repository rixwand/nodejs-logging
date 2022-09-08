import { calculate } from "../src/sum";

test("mock fn", () => {
  // const callback = jest.fn();

  // calculate([1, 2, 3, 4, 5, 6, 7], callback);

  calculate([1, 2, 3, 4, 5, 6, 7], (total) => {
    console.info(total);
  });
});
