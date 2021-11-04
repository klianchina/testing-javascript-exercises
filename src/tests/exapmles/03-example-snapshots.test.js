import React from 'react';
import ReactDOM from 'react-dom';

// two most common renderer
// Enzyme (shallow render is great feature)
// @testing-library
// or even ReactDOM as in example below

// in most cases you can receive wrapper with a lot of useful things when calling render method
// const {container} = render(<MyComponent/>);

// Snapshots is a good tool for making snaps of your component
// but be careful to make too many snapshots for each state when it's not necessary

let dumpFunction = obj => obj;
const dumpFunctionThatCallsAnotherDump = () => {
  dumpFunction({
    foo: '',
    bar: '',
  });
}

test('check dumpFunctionThatCallsAnotherDump calls dumpFunction with proper params', () => {
  // add spy to allow jest to spy the function
  dumpFunction = jest.fn();
  dumpFunctionThatCallsAnotherDump();

  // first array - it's function calls
  // second array - it's arguments
  expect(dumpFunction.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        Object {
          "bar": "",
          "foo": "",
        },
      ],
    ]
  `);
})

const MyComponent = () => (
  <div id={'my-component'}>
    <h1>My test component</h1>
    <p>Here my awesome text</p>
  </div>
);

// describe('Component: <MyComponent/>', () => {
//   const div = document.createElement('div');
//   document.body.appendChild(div);
//   ReactDOM.render(<MyComponent />, div);
//
//   const component = document.body.querySelector('#my-component');
//
//   test('renders correctly', () => {
//     expect(component).toMatchSnapshot();
//   })
//
//   test('renders correctly (using inline)', () => {
//     expect(component).toMatchInlineSnapshot(`
//       <div
//         id="my-component"
//       >
//         <h1>
//           My test component
//         </h1>
//         <p>
//           Here my awesome text
//         </p>
//       </div>
//     `);
//   })
// })
