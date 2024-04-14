class BankAccount{
    constructor(accountNumber,ownerName,balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    deposit(amount) { 
        if (amount <=0 ) throw new Error('Deposit amount must be greater than zero');
        this.balance += amount;  
    };
    
    withdraw(amount) {  
        if (this.canWithdraw(amount)) {
            this.balance -= amount;
            return true;
        } else {
            console.log("Insufficient funds");
            return false;
        }
    };
    
    canWithdraw(amount) {
        return amount <= this.balance;
    }
    displayAccountInfo(){
        this.accountNumber ? console.log(`Account Number: ${this.accountNumber}`) : null;
        this.ownerName ? console.log(`Owner Name: ${this.ownerName}`) : null;
        console.log(`Current Balance: $${this.balance.toFixed(2)}`);
    }
};



const acc1 = new BankAccount("2000", "Kamal Hossain", 1000);
const acc2 = new BankAccount("3000", "Samiul Rahman", 200);
console.log(`Initial Balance: ${acc1.balance}`);  
console.log(`Initial Balance:  ${acc2.balance}`); 

//  Test the deposit method
try {
    acc1.deposit(-300);
} catch (e) {
    console.error(e.message); // Outputs Deposit amount must be greater than zero
}

acc1.deposit(700);
console.log(`Balance after one deposit: ${acc1.balance}`); 

// Test the withdraw method
let status = acc2.withdraw(400);
console.log(`Status of first withdrawal: ${status}`); 

status = acc2.withdraw(800);
console.log(`Status of second withdrawal: ${status}`); 

acc1.displayAccountInfo(); 
acc2.displayAccountInfo(); 