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

    this.initialized = true;
  }

  getArea() {
    return this.height * this.width;
  }

  setColor(color) {
    this.color = color;
  }

  resetColor() {
    this.color = this.defaultColor;
  }
}

describe('Rectangle', () => {
  const instance = new Rectangle(2, 10);

  beforeEach(() => {
    instance.resetColor();
  })

  test('returns correct area', () => {
    expect(instance.getArea()).toEqual(20);
  })

  test('sets new color', () => {
    instance.setColor('black');
    expect(instance.color).toBe('black');
  })

  test('check init works correctly', () => {
    instance.init();

    expect(instance.initialized).toBe(true);
  })
})


