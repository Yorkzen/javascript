function welcomeMsg(name) {
  return "Welcome, " + name + "!";
}
let personName = "Jane";
let welcomeMessage = welcomeMsg(personName);
console.log(welcomeMessage);

function calcGrossPrice(netPrice, taxRate) {
  let grossPrice = netPrice + netPrice * (taxRate / 100);
  return grossPrice;
}
let netPrice = 20;
let taxRate = 19;
let grossPrice = calcGrossPrice(netPrice, taxRate);
console.log(grossPrice);

function addPositive(num1, num2) {
  if (num1 < 0) {
    num1 = -num1;
  }
  if (num2 < 0) {
    num2 = -num2;
  }

  let result = num1 + num2;
  return result;
}
let num1 = "-1";
let num2 = "-8";
let sum = addPositive(num1, num2);
console.log(sum);
