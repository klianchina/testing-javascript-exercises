import utils from '../../helpers/utils';
import {thumbWar} from '../../helpers/thumb-war';

// 👨‍💻 write your own mock fn implementation following instructions below
function fn(implementation = () => {}) {
  const mockFn = (...args) => {
    // 👨‍💻 push the arguments to calls array in mock object (declared in line 15) each time the function is called
    // 👨‍💻 uncomment the line 25 and run the test
    // ✅ check it's passed

    return implementation(...args);
  };

  // 💡 this is a mock object that we want to reproduce in our implementation
  mockFn.mock = {calls: []};

  return mockFn;
}

test('returns player1 as winner', () => {
  utils.getWinner = fn((p1, p2) => p1);

  thumbWar('player1', 'player2');

  // expect(utils.getWinner.mock.calls.length).toBe(2);
});
