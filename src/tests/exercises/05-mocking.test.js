import utils from '../../helpers/utils';
import {thumbWar} from '../../helpers/thumb-war';

test('returns player1 as winner', () => {
  // 💡 we use jest.fn to mock the method and later we will try to make our own implementation
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar('player1', 'player2');
  expect(winner).toBe('player1');

  // 💡 how to test function calls in jest
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith('player1', 'player2');

  // ✅ uncomment next line and see all methods and properties of this mock in console
  // console.log('==========', utils.getWinner);

  // ✅ uncomment next line and see the mock object that contains all calls and its' args
  // console.log('==========', utils.getWinner.mock);

  // 💡 so you can replace the assertion in line 12 with the following code and it will be equal
  expect(utils.getWinner.mock.calls.length).toBe(2);

  // 👨‍💻 now go to file ./05-mocking-custom.test.js and try to make your own implementation of jest.fn
});
