// debugger;

// Business Logic
function Account(name, balance) {
   this.nameAccount = name;
   this.balance = balance;
 }

Account.prototype.accountDeposit = function() {
  return this.balance + deposit;
}

Account.prototype.accountWithdrawal = function() {
  return this.balance - withdraw;
}


// var newAccount = new Account("Name", 5);
// var deposit = 50;
// var withdraw = 60;
// console.log("Your balance after deposit is" + newAccount.accountDeposit() + "!");
// console.log("Your balance after withdrawal is" + newAccount.accountWithdrawal() + "!");


//User Interface

$(document).ready(function(){

  $("#blanks").submit(function(event){
    debugger;
    event.preventDefault();
    // debugger;
    var inputName = $("input#newName").val();
    var initial = parseFloat($("input#initialDeposit").val());

    newAccount = new Account(inputName, initial);
    console.log(newAccount);

    $("#displayBalance").val(initial);

    // withdraw = 20;
    // console.log("hey" + newAccount.accountWithdrawal() + "!");

  });

  $("#transactions").submit(function(event){
    debugger;
    event.preventDefault();
    // debugger;
    var withdraw = parseFloat($("input#withdraw").val());
    var deposit = parseFloat($("input#deposit").val());

    console.log(withdraw, deposit, newAccount);

    console.log("fgdgg" + newAccount.accountWithdrawal() + "!");


    // withdraw = 20;
    // console.log("hey" + newAccount.accountWithdrawal() + "!");

  });
});
