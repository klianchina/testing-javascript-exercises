import React from 'react';
import {render} from '@testing-library/react';
import Counter from '../../components/counter';

describe('Component: <Counter/>', () => {
  test('renders correctly', () => {
    const {container} = render(<Counter />);

    expect(container).toMatchSnapshot();
  });

  test('renders correctly', () => {
    const {container} = render(<Counter valuesToCount="tomatoes" />);
    const header = container.querySelector('h1')

    expect(header.textContent).toBe('Current tomatoes count: 0');
  });
})
