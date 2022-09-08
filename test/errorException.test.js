import callMe from "../src/exception";

test("error execption", () => {
  expect(() => callMe("Risu")).toThrow();
});

test("error not trigger", () => {
  expect(callMe("nana")).toBeTruthy();
});
