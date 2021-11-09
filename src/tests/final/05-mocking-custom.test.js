import utils from '../../helpers/utils';
import {thumbWar} from '../../helpers/thumb-war';

function fn(implementation = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);

    return implementation(...args);
  };

  mockFn.mock = {calls: []};

  return mockFn;
}

test('returns player1 as winner', () => {
  utils.getWinner = fn((p1, p2) => p1);

  thumbWar('player1', 'player2');

  expect(utils.getWinner.mock.calls.length).toBe(2);
});
