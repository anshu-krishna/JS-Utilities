# JS-Utilities

Collection of useful Javascript `Functions` and `Classes`

---

## List:
- [PHPQueryBuilder](#phpquerybuilderobject-data)
- [NumRange](#numrangestart-end--null-step--1)

---

### `PHPQueryBuilder(object data)`

A function for generating PHP compatible GET query string.

```javascript
import QB from '{path}/php-query-builder.js';
const sparseArr = [];
sparseArr[1] = 1;
sparseArr[3] = 2;

const data = {
	a: 10,
	b: null,
	c: {
		d: { e: 1, f: [1, 2.3, true, false, null, 'abcd'] }
	},
	g: sparseArr
};

console.log(QB(data));
// Generates
// a=10&b&c%5Bd%5D%5Be%5D=1&c%5Bd%5D%5Bf%5D%5B%5D=1&c%5Bd%5D%5Bf%5D%5B%5D=2.3&c%5Bd%5D%5Bf%5D%5B%5D=true&c%5Bd%5D%5Bf%5D%5B%5D=false&c%5Bd%5D%5Bf%5D%5B%5D&c%5Bd%5D%5Bf%5D%5B%5D=abcd&g%5B1%5D=1&g%5B3%5D=2

// which in more readable form looks like
// a=10  &b  &c[d][e]=1  &c[d][f][]=1  &c[d][f][]=2.3  &c[d][f][]=true  &c[d][f][]=false  &c[d][f][]  &c[d][f][]=abcd  &g[1]=1  &g[3]=2
```
---

### `NumRange(start, end = null, step = 1)`
A `python` like `range` value `generator`.
[W3Schools: Python range()](https://www.w3schools.com/python/ref_func_range.asp).

**Note: This is a [generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) function.**

```javascript
import RangeN from '{path}/num-range.js';

console.log([...RangeN(10)]);
// Outputs: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

console.log([...RangeN(10, 20)]);
// Outputs: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19

console.log([...RangeN(10, 20, 3)]);
// Outputs: 10, 13, 16, 19

console.log([...RangeN(-50, 0, 7)]);
// Outputs: -50, -43, -36, -29, -22, -15, -8, -1

console.log([...RangeN(0, -100, -10)]);
// Outputs: 0, -10, -20, -30, -40, -50, -60, -70, -80, -90

```