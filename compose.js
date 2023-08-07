const compose = (f, g) => x => f(g(x));

const upperCase = s => s.toUpperCase();

const trim = s => s[0];

const upperTrim = compose(upperCase, trim);

console.log(upperTrim("yoyo"))