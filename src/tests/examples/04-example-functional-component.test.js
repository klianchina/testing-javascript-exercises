// React components with classes are easy to test as classes
// To test functional components we need some virtual interactions
// We can do it calling events that changes our component (with the help of native events calls or testing tool)

import React, {useState} from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const Button = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(!isLoading);
  }

  return (
    <button data-testid="button" className={isLoading ? 'button_loading' : 'button'} onClick={handleClick}>
      Click me
    </button>
  );
}

test('calls function on button click', () => {
  render(<Button/>);
  const button = screen.getByTestId('button');

  expect(button.className).toBe('button');

  userEvent.click(button);

  expect(button.className).toBe('button_loading');
})
