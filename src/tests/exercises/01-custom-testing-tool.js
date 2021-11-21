const obj = {
  foo: 'baz',
  bar: 'zzz'
};

const expected = 'foo';

// expect(obj).toHaveProperty(expected);

// test('check if obj contains foo', () => {
// 	expect(obj).toHaveProperty(expected);
// })

function expect(actualResult) {
  return {
    toBe(expected) {
      if (actualResult !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    }
    // 👨‍💻 write method for expect that will check if the object has property
    // ‍✅ apply uncomment the line 8 and run `node src/tests/exercises/01-custom-testing-tool.js`
  };
}

// 👨‍💻 write test tool that will receive title of your test and callback (hint: use try-catch for it)
// 👨‍💻 this function should show an error message if test did NOT pass and successful message if it passed
// ✅ uncomment 10-12 lines and run `node src/tests/exercises/01-custom-testing-tool.js`
