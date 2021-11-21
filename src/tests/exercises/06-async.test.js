import * as request from '../../helpers/request';

const fetchData = async (callback) => {
  const response = await request.get('https://swapi.dev/api/people/1');

  setTimeout(() => {
    callback(response.data.name);
  }, 200);
};

// use fake timers from jest (jest.useFakeTimers())

test('user is Luke Skywalker', async () => {
  // 👨‍💻 at first mock request.get with mock resolved value (follow the API link to see data structure )
  // 💡 if you forget how to do it have a look in src/tests/examples/06-example-async.js

  // 👨‍💻 create a mocked callback using jest.fn and pass implementation (name) => name
  // 💡 if you forget how to do it have a look in src/tests/examples/05-example-mocking.test.js

  // 👨‍💻 call fetchData with callback as an argument
  // 💡 don't forget that it's async function

  // 👨‍💻 run the timer forward to 200ms

  // ✅ uncomment the next line and check the result
  // expect(callback).toHaveBeenLastCalledWith('Luke Skywalker');
})
