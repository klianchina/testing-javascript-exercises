import * as request from '../../helpers/request';

const delay = (milliseconds, callback) => {
  setTimeout(() => {
    callback();
  }, milliseconds);
};

test('calls callback after 200ms', () => {
  const doSomething = jest.fn();

  delay(200, doSomething);

  // expect(doSomething).toHaveBeenCalled();
});

// jest src/tests/examples/06-example-async.test.js

// any kind of wait realization or wrap it in delay itself will slow down the code
// so jest has already cared about it
// jest has utilities to fake the timers

// jest.useFakeTimers()
// jest.advanceTimersByTime(200);
// jest.runAllTimers()

const fetchData = async (callback) => {
  const response = await request.get('https://swapi.dev/api/people/1');
  return callback(response.data.name);
};

test('user is Luke Skywalker', () => {
  // don't forget to mock function that makes real call to API
  // jest.spyOn(request, 'get').mockResolvedValue({data: {name: 'Luke Skywalker'}});

  function callback(response) {
    // expect(response.data.name).toBe('Luke Skywalker');
  }

  fetchData(callback);
});

// mock function not to call real API

// try {
//   expect(response.data.name).toBe('Luke Skywalker');
//   done();
// } catch (error) {
//   done(error);
// }

test('user is Luke Skywalker (with promises)', () => {
  const callback = (name) => name;

  return fetchData(callback).then((name) => {
    expect(name).toBe('Luke Skywalker');
  });

  // the same with async/await
});
