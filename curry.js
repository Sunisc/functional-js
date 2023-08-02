import { curry } from 'rambda';

// const curry = (f) => (x) => (y) => f(x, y);

const uncurry = (f) => (x, y) => f(x)(y);

const add = (x, y) => x + y;
const curriedAdd = curry(add);
const increment = curriedAdd(1);
console.log(increment(4));
console.log(uncurry(curriedAdd)(3, 4));

const modulo = curry((x, y) => y % x);
const isOdd = modulo(2);
const filter = curry((f, array) => array.filter(f));
const getOdds = filter(isOdd);
console.log(getOdds([1, 2, 3, 4, 5]));

const replace = curry((regex, replacement, str) =>
  str.replace(regex, replacement)
);

const replaceVowels = replace(/[AEIOU]/gi, '!');
const result = replaceVowels('Hey I have words');

console.log(result);

// curry is useful if you want to save configuration
// curry is useful to prevent creating abstract variables
// only pass in the things you need to and build slowly
