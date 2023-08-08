// Either monad

const findColor = name => (
        {
            red: '#ff4444',
            blue: '#3b5998',
            yello: '#fff68f',
        }[name]
)

const res = findColor('redd').toUpperCase()
console.log(res);