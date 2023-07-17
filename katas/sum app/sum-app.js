class SumApp {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    if (this.numbers.length === 0) {
      return 0;
    }

    return this.numbers.reduce((sum, num) => sum + num, 0);
  }

  reset() {
    this.numbers = [];
  }
}

// Test Example
const sumApp = new SumApp();

sumApp.addNumber(1);
sumApp.addNumber(2);

console.log(sumApp.numbers.length); // 2
console.log(sumApp.getSum()); // 3

sumApp.reset();

console.log(sumApp.numbers.length); // 0
console.log(sumApp.getSum()); // 0
