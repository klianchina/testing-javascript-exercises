// Serialization process
// It's not like a JSON stringify
// It's giving a label to each one of these objects so that it's more clear what these things are

const getFrontendAreas = () => (
  [
    {name: 'falcon', membersCount: 4},
    {name: 'mockingbird', membersCount: 5},
    {name: 'falcon', membersCount: 7},
    // {name: 'new', membersCount: 1},
  ]
);

test('getFrontendAreas returns all areas', () => {
  expect(getFrontendAreas()).toMatchInlineSnapshot();
});

// jest src/tests/examples/03-example-snapshot-objects.test.js
