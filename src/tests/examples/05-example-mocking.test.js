import utils from '../../helpers/utils';
import {thumbWar} from '../../helpers/thumb-war';

// monkey-patching.js (no jest version)
// const originalGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar('player1', 'player2');

test('thumbWar returns player 1', () => {
  expect(winner).toBe('player1');
});

// cleanup
// utils.getWinner = originalGetWinner

// mock-fn
// utils.getWinner = jest.fn((p1, p2) => p1);

// spy
// jest.spyOn(utils, 'getWinner').mockImplementation((p1, p2) => p1);

// external-mock-module
// jest.mock('../../helpers/utils', () => ({
//   ...jest.requireActual('../../helpers/utils'),
//   getWinner: jest.fn(),
// }));

// external with __mocks__
