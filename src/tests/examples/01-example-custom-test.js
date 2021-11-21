const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

const result = sum(3, 7);
const expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

// fix the bug
// write test for subtract
