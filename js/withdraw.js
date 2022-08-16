document.getElementById("btn-withdraw").addEventListener("click", function() {
  // New Withdraw
  const newWithdrawInput = document.getElementById("input-withdraw");
  const newWithdrawString = newWithdrawInput.value;
  const newWithdraw = parseFloat(newWithdrawString);
  // Input emtey
  newWithdrawInput.value = "";
  // Input Validation
  if (isNaN(newWithdraw)) {
    alert("Not a valid Number");
    return;
  }
  // Previous Withdraw
  const prevWithdrawText = document.getElementById("withdraw-display");
  const prevWithdrawString = prevWithdrawText.innerText;
  const prevWithdraw = parseFloat(prevWithdrawString);
  // Blance
  const blance = document.getElementById("blance-display");
  const blanceString = blance.innerText;
  const prevBlance = parseFloat(blanceString);
  // Validation
  if (newWithdraw > prevBlance) {
    alert("Your Blance is low");
    return;
  }
  // Previous Withdraw calclution
  const withdraw = prevWithdraw + newWithdraw;
  prevWithdrawText.innerText = withdraw;
  // New Blance culclution
  const newBlance = prevBlance - newWithdraw;
  blance.innerText = newBlance;
});