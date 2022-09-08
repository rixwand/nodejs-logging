afterAll(() => console.log("after All outer"));
beforeAll(() => console.log("before All outer"));
beforeEach(() => console.log("before Each outer"));
afterEach(() => console.log("after Each outer"));

test("test 1", () => {
  console.info("test 1 outer");
});
test("test 2", () => {
  console.info("test 2 outer");
});

describe("inner", () => {
  beforeEach(() => console.log("before Each inner"));
  afterEach(() => console.log("after Each inner"));

  test("test 1 inner", () => {
    console.info("test 1 inner");
  });
  test("test 2 inner", () => {
    console.info("test 2 inner");
  });
});

test("test describe ", () => {});
