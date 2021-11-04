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

// 💡 see implementation of this tool in jest repo https://github.com/facebook/jest/blob/eaee8a61165a14ae0da4075697d1e6c8a6c90edd/packages/expect/src/matchers.js
