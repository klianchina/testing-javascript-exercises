// two most common renderer
// Enzyme (shallow render is great feature)
// @testing-library
// or even ReactDOM as in example below

// Snapshots is a good tool for making snaps of your component
// but be careful to make too many snapshots for each state when it's not necessary

import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';

const MyComponent = () => (
  <div id="my-component">
    <h1>My test component</h1>
    <p>Here my awesome text</p>
  </div>
);

describe('Component: <MyComponent/>', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<MyComponent />, div);

  const component = document.body.querySelector('#my-component');

  // const {container: component} = render(<MyComponent />);

  test('renders correctly', () => {
    // expect(component).toMatchSnapshot();
  });

  // test('renders correctly (using inline)', () => {
  //   expect(component).toMatchInlineSnapshot(`
  //     <div
  //       id="my-component"
  //     >
  //       <h1>
  //         My test component
  //       </h1>
  //       <p>
  //         Here my awesome text
  //       </p>
  //     </div>
  //   `);
  // })
});

// jest src/tests/examples/03-example-snapshot-component.test.js
