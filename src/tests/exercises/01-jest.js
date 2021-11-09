// 👨‍💻 remove your custom "expect" and "test" functions
// 👨‍💻 rename the file to 01-jest.test.js
// 👨‍💻 run `yarn test:watch` and see that Jest is running and show error in console
// 👨‍💻 find the bug and fix it

const obj = {
  foo: 'baz',
  bar: 'zzz'
};

const expected = 'foo';

expect(obj).toHaveProperty(expected);

test('check if obj contains foo', () => {
  expect(obj).toHaveProperty(expected);
})

function expect(actualResult) {
  return {
    toBe(expected) {
      if (actualResult !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
    toHaveProperty(expected) {
      if (!(expected in actualResult)) {
        throw new Error(`${JSON.stringify(actualResult)} do not have ${expected} property`);
      }
    }
  }
}

function test(testName, callback) {
  try {
    callback();
    console.log(`${testName}: passed`);
  } catch (error) {
    console.error(testName);
    console.error(error);
  }
}

