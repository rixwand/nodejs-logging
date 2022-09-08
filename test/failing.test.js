import { sayHello } from "../src/greet";

test.failing("test failing", () => {
  sayHello(undefined);
});
