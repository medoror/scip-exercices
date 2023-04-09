const make_monitored = (func) => {
    let counter = 0;
    const dispatch = (arg) => {
        if (arg === "how many calls") {
            return counter;
        } else if (arg === "reset count") {
            counter = 0;
        } else {
            ++counter;
            return func(arg)
        }
    }
    return dispatch
}

const s = make_monitored(Math.sqrt)
console.log(s(100))
console.log(s("how many calls"))