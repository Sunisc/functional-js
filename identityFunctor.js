// Use identity monad to keep the value in the box and chain new functions on it
const Box = (x) => {
    return {
        // Returns a function that applies a function and returns it in a box
        map: f => Box(f(x)),
        fold: f => f(x),
        inspect: `Box(${x})`
    }
}

const nextCharForNumberString = str => {
    return Box(str) 
    // you are trapping the states within their own containment
    // you're not creating more and more states
        .map(x => x.trim())
        .map(trimmed => parseInt(trimmed, 10))
        .map(number => new Number(number + 1))
        .fold(String.fromCharCode)
}

const result = nextCharForNumberString(' 65 ');
console.log(result);

const first = xs => xs[0]

const halfTheFirstLargeNumber_ = xs => {
    const found = xs.filter(x => x >= 20)
    const answer = first(found) / 2
    return `The answer is ${answer}`
}

const halfTheFirstLargeNumber = xs => {
    return Box(xs)
        .map(xs => xs.filter(x => x >= 20))
        .map(found => first(found) / 2)
        .fold(answer => `The answer is ${answer}`)
}


console.log(halfTheFirstLargeNumber([1, 3, 50]));