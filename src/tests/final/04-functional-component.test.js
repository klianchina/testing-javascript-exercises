import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../../components/counter';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Using React DOM render */
test('counter increments when the button is clicked', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(<Counter />, div)
  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.querySelector('h1')

  expect(message.textContent).toBe('Current count: 0')
  increment.click()
  expect(message.textContent).toBe('Current count: 1')
  decrement.click()
  expect(message.textContent).toBe('Current count: 0')

  document.body.removeChild(div)
});

/* With @testing-library/react */
test('counter increments when the button is clicked with testing-library', () => {
  const {container, debug} = render(<Counter />);

  const [decrement, increment] = container.querySelectorAll('button');
  const message = container.querySelector('h1');

  // debug();
  // screen.debug();

  expect(message.textContent).toBe('Current count: 0');

  userEvent.click(increment);
  expect(message.textContent).toBe('Current count: 1');
  userEvent.click(decrement);
  expect(message.textContent).toBe('Current count: 0');
});













