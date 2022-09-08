import { greeting } from "../src/asyncFunc";

test("async Test", async () => {
  const res = await greeting("rei");
  expect(res).toBe("Hello rei");
});

test("async test fail", async () => {
  await expect(greeting()).rejects.toBe("name is empty");
});
