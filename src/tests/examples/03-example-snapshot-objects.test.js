let dumpFunc = (obj) => obj;

const dumpFunctionThatCallsAnotherDump = () => {
  dumpFunc({
    foo: '',
    bar: '',
  });
};

test('check dumpFunctionThatCallsAnotherDump calls dumpFunction with proper params', () => {
  // add spy to allow jest to spy the function
  dumpFunc = jest.fn();
  dumpFunctionThatCallsAnotherDump();

  // first array - it's function calls
  // second array - it's arguments
  expect(dumpFunc.mock.calls[0][0]).toMatchInlineSnapshot(`
    Object {
      "bar": "",
      "foo": "",
    }
  `);
});
