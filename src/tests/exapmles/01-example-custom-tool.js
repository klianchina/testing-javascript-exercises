const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

const result = sum(3, 7);
const expected = 10;

expect(result).toBe(expected);

function expect(actualResult) {
	return {
		toBe(expected) {
			if (actualResult !== expected) {
				console.error(`${result} is not equal to ${expected}`);
			}
		},
	}
}
