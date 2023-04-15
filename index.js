let balance = 500.00;


class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.transactions = [];
  }
  get balance() {
  // Calculate the balance using the transaction objects.
  let balance = 0;
  for (let transaction of this.transactions) {
    balance += transaction.amount;
  }
  return balance;
}
addTransaction(transaction) {
  this.transactions.push(transaction);

}


}
class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }
  commit() {

    if (!this.isAllowed){
      return false
    }
     // Keep track of the time of the transaction
     this.time = new Date();
     // Add the transaction to the account
     this.account.addTransaction(this);
     return true;
  }

}

class Deposit extends Transaction {

  get value(){
    return this.amount
  }
  isAllowed(){
    return true;
  }

}

class Withdrawal extends Transaction {

  get value(){

    return  -this.amount;
  }

  isAllowed(){
    return (this.account.balance - this.amount >= 0);
  }


}

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(-500.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);

console.log(myAccount.transactions)



// class Withdrawal {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.Account.balance -= this.amount;
//   }

// }

// class Deposit {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.Account.balance += this.amount;
//   }

// }




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected


// const myAccount = new Account("snow-patrol");

// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', Account.balance);

// t3 = new Deposit(120.00, myAccount);
// t3.commit();
// console.log('Transaction 3:', t3);
