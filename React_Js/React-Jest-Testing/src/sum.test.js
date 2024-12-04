import sum from "./sum";

test("Testing For Sum Function", () => {
  let a = 20;
  let b = 10;
  let output = 30;
  expect(sum(a, b)).toBe(output);
});

test("Testing For Sum Function 2", () => {
  let a = 200;
  let b = 100;
  let output = 300;
  expect(sum(a, b)).toBe(output);
});
