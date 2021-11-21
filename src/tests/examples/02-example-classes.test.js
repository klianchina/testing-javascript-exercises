class Rectangle {
  initialHeight = 0;
  initialWidth = 0;

  init(height, width) {
    this.height = height;
    this.width = width;
  }

  reset() {
    this.height = this.initialHeight;
    this.width = this.initialWidth;
  }
}

const instance = new Rectangle();

test('Rectangle', () => {
  instance.init(2, 2);
  expect(instance.height).toBe(2);
});

describe('My module', () => {
  // beforeAll(() => {
  // });
  // mock functions
  // reset smth
  // init smth
  // jest.resetAllMocks() or jest one
  // jest.restoreAllMocks() or jest one

  // beforeEach(() => {});

  // afterAll(() => {});

  // afterEach(() => {});
});
