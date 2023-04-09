const make_accumulator = (initial_value) => {
    let sum = initial_value;
    return accum => {
        return sum += accum
    }
}


const a = make_accumulator(5)
console.log(a(10))
console.log(a(10))


