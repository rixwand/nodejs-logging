import { greeting } from "../src/asyncFunc";

test.concurrent("test concur 1", async () => {
  await expect(greeting("risu")).resolves.toBe("Hello risu");
});

test.concurrent("test concur 2", async () => {
  await expect(greeting("risu")).resolves.toBe("Hello risu");
});

test.concurrent("test concur 3", async () => {
  await expect(greeting("risu")).resolves.toBe("Hello risu");
});
