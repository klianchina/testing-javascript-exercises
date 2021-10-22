const obj = {
	foo: 'baz',
	bar: 'zzz'
};

const expected = 'foo';

expect(obj).toHaveProperty(expected);

test('check if obj contains foo', () => {
	expect(obj).toHaveProperty(expected);
})

function expect(actualResult) {
	return {
		toBe(expected) {
			if (actualResult !== expected) {
				throw new Error(`${result} is not equal to ${expected}`);
			}
		},
		toHaveProperty(expected) {
			if (!(expected in actualResult)) {
				throw new Error(`${JSON.stringify(actualResult)} do not have ${expected} property`);
			}
		}
	}
}

// 👨‍💻 write test tool that will receive title of your test and callback
// 👨‍💻 this function should show an error message if NOT test passed and successful message if it passed
// ✅ uncomment 10-12 lines and run `node src/tests/exercises/01-custom-testing-tool.js`
function test(testName, callback) {
	try {
		callback();
		console.log(`${testName}: passed`);
	} catch (error) {
		console.error(testName);
		console.error(error);
	}
}
