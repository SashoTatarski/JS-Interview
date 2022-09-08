// Unit Testing
class Account {
    constructor(balance) {
        this.balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(balance) {
        this._balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

// Arrange
const account = new Account(100);

// Act
account.deposit(50);

// Assert
console.assert(account.balance === 150, "Balance is wrong");

// E2E Testing
const testWithdrawal = (browser) => {
    browser
        .goToURL("http://localhost")
        .click("withdraw")
        .expect("#amount")
        .toContainText(100)
}
