function make_withdraw_balance_100() {
    let balance = 100;
    return amount => {
        if (balance >= amount) {
            return balance = balance - amount;
        } else {
            return "Insufficient funds";
        }
    }
}

const new_withdraw = make_withdraw_balance_100()

console.log(new_withdraw(10));