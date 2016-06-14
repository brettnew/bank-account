function Account(name, initial, total) {
  this.nameAccount = name;
  this.initialAccount = initial;
  this.totalAccount = total;
}

// Account.prototype.totalAmount = function(deposit, withdrawal) {
//   return this.initialAccount + deposit - withdrawal;
// }

function Amount(initial, deposit, withdrawal){
  return initial + deposit - withdrawal;
}


$(document).ready(function(){
  $("#blanks").submit(function(event){
  debugger;
  event.preventDefault();
  var inputName = $("input#newName").val();
  var inputInitialAmount = parseFloat($("input#initialDeposit").val());

  if (inputName === ""){
    alert("Please enter your name");
    return false;
  }

  if (inputInitialAmount != inputInitialAmount){
    var inputInitialAmount = 0;
  }
  $("#displayBalance").val(inputInitialAmount);

  $("#register").fadeOut();
  $("#user").fadeIn();
  $(".username").text(inputName);
});

  $("#transactions").submit(function(event){
    event.preventDefault();
  var inputDeposit = parseFloat($("input#deposit").val());
  var inputWithdrawal = parseFloat($("input#withdraw").val());

  if (inputDeposit != inputDeposit){
    var inputDeposit = 0;
  }

  if (inputWithdrawal != inputWithdrawal){
    var inputWithdrawal = 0;
  }

  // Account.initialAccount = inputInitialAmount;

  currentBalance = parseFloat($("#displayBalance").val());

  var totalAmount = Amount(currentBalance, inputDeposit, inputWithdrawal);
  Account.totalAccount = totalAmount;
  console.log(Account.totalAccount);

  $("#displayBalance").val(totalAmount);

  console.log(totalAmount);

  $("input#deposit").val("");
  $("input#withdraw").val("");



  });
});
