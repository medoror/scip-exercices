const make_account = (balance, pass) => {
    let password = pass;
    const withdraw = (amount) => {
        if (balance >= amount) {
            balance = balance - amount;
            return balance
        } else {
            return "Insufficient Funds";
        }
    }
    const deposit = (amount) => {
        balance = balance + amount;
        return balance;
    }

    const incorrectPassword = () =>{
        return "Incorrect Password"
    }

    const dispatch = (pass, m) => {
        if (m === "withdraw") {
            if (pass === password) {
                return withdraw
            } else {
                return incorrectPassword
            }
        } else if (m === "deposit") {
            if (pass === password) {
                return withdraw
            } else {
                return incorrectPassword
            }
        } else {
            return console.log(m, "unknown request -- make_account")
        }
    }

    return dispatch
}

const acc = make_account(100, "secret password");

console.log(acc("secret password", "withdraw")(40))
console.log(acc("some other password", "deposit")(40))
