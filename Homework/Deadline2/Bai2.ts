class BankAccount {
    accountNumber: string;
    balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive number!");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdraw: ${amount}. Your balance: ${this.balance}`);
        } else {
            console.log("Have problems when withdraw");
        }
    }
}

class SavingAccount extends BankAccount {
    interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        return this.balance * this.interestRate / 100;
    }
}

// Example usage
const savingAccount = new SavingAccount("030120052005", 1000, 5);
savingAccount.deposit(500);
savingAccount.withdraw(200);
console.log(`Interest: ${savingAccount.calculateInterest()}`);
