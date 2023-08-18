// Either monad

const findColor_ = name => (
        {
            red: '#ff4444',
            blue: '#3b5998',
            yello: '#fff68f',
        }[name]
)


// Right is almost Box
const Right = x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    toString: `Right(${x})`
});

// Left doesn't run any of functions
const Left = x => ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    toString: `Left(${x})`,
});


const fromNullable = x => {
    x != null ? Right(x) : Left()
};


// Even if it isn't found, we still don't have an error. 
const findColor = name => {
    const found = {red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]
    return fromNullable(found)
};


// Usually the caller has to do null checks, but here we can bypass that and worry about
// it after we get a result

const res = (x) => 
    findColor(x) // returns Right if found or Left if missing
    // Left doesn't apply any functions below 
        .map(x => x.toUpperCase())
        .map(x => x.slice(1))
        .fold(
            () => 'no color!',
            color => color
        );

console.log(res('redd'));
