import * as request from '../../helpers/request';

const fetchData = async (callback) => {
  const response = await request.get('https://swapi.dev/api/people/1');

  setTimeout(() => {
    callback(response.data.name);
  });
};

jest.useFakeTimers();

test('user is Luke Skywaker', async () => {
  jest
    .spyOn(request, 'get')
    .mockResolvedValue({data: {name: 'Luke Skywalker'}});

  const callback = jest.fn((name) => name);

  await fetchData(callback);
  jest.advanceTimersByTime(200);

  expect(callback).toHaveBeenLastCalledWith('Luke Skywalker');
});
