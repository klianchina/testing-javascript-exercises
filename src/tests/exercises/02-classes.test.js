class Rectangle {
  defaultColor = 'white'

  constructor(width, height) {
    this.height = height;
    this.width = width;
    this.color = this.defaultColor;
  }

  init() {
    if (this.color !== this.defaultColor) {
      throw new Error('Color is already set');
    }
  }

  getArea() {
    return this.height * this.width;
  }

  setColor(color) {
    this.color = color;
  }

  getAllData() {
    return {
      height: this.height,
      width: this.width,
      color: this.color,
    }
  }

  resetColor() {
    this.color = this.defaultColor;
  }
}

const instance = new Rectangle(2, 10);

test('returns correct area', () => {
  // 👨‍💻 call getArea and check if the value is equal to expected
})

test('check default data', () => {
  // 👨‍💻 call getAllData and check if it matches expected result
})

test('sets new color', () => {
  // 👨‍💻 call setColor and check if the rectangle color is correct
})

test('check init works correctly', () => {
  // 👨‍💻 call initialization
  // 👨‍💻 find error in console
  // 🔧 fix it (wrap all tests in describe block and use beforeEach for color reset before each test)
  // ✅ check rectangle is initialized
})


