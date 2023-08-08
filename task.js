// Task monad - like promise but lazy

import { compose } from "rambda";

const Box = f => ({
    map: g => Box(compose(f, g)),
    fold: f
})