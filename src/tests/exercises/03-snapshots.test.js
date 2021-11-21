import {render} from '@testing-library/react';
import Counter from '../../components/counter';

describe('Component: <Counter/>', () => {
  // 👨‍💻 write test 1 that will make a snapshot for Counter with the help of render from @testing-library/react
  // 👨‍💻 then write test 2 with the valuesToCount prop for example 'tomatoes' 🍅 and make the snapshot with this prop
  // 👨‍💻 run test
  // ‍✅ check the snapshots __snapshot__ folder
  // 👨‍💻 change the Counter component (but not too much), for example capitalize letter in word "current"
  // ‍✅ check what changed in console
  // 👨‍💻 press U in console to update snapshots due to new updates in the component

  test('renders properly without props', () => {});

  test('renders properly with valuesToCount prop', () => {});

  // ⭐ to avoid a lot of similar snapshots you can get the changed line with selector
  // and to compare it to expected result
  // hint: use querySelector on container for getting h1
  // 👨‍💻 write test expect(header.textContent).toBe('Current tomatoes count: 0')
  // 👨‍💻 remove unnecessary test with similar snapshot
});
