// React components with classes are easy to test as classes
// To test functional components we need some virtual interactions
// We can do it calling events that changes our component (with the help of native events calls or testing tool)

import React, {useState} from 'react';
import {render, fireEvent} from '@testing-library/react';

const Button = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(!isLoading);
  }

  return (
    <button className={isLoading ? 'button_loading' : 'button'} onClick={handleClick}>
      Click me
    </button>
  );
}

test('calls function on button click', () => {
  const {container} = render(<Button/>);
  const button = container.querySelector('button');

  expect(button.className).toBe('button');

  fireEvent.click(button);

  expect(button.className).toBe('button_loading');
})
