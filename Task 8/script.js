/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
const Calculator = function (a, b) {
  this.a = a;
  this.b = b;
};

Calculator.prototype.sum = function (a, b) {
  return this.a + this.b;
};

Calculator.prototype.subtraction = function (a, b) {
  return this.a - this.b;
};
Calculator.prototype.division = function (a, b) {
  return (this.a / this.b).toFixed(2);
};
Calculator.prototype.multiplication = function (a, b) {
  return this.a * this.b;
};
const newCalculator = new Calculator(10, 5);

console.log(newCalculator.sum());
console.log(newCalculator.subtraction());
console.log(newCalculator.multiplication());
console.log(newCalculator.division());

document.querySelector("body").insertAdjacentHTML(
  "afterbegin",
  `<p>Mathematical operations: 
  </p>Addition of ${newCalculator.a} + ${
    newCalculator.b
  } = ${newCalculator.sum()}<p>
  </p>Subtraction of ${newCalculator.a} - ${
    newCalculator.b
  } = ${newCalculator.subtraction()}<p>
  </p>Mutlitplication of ${newCalculator.a} * ${
    newCalculator.b
  } = ${newCalculator.multiplication()}<p>
  </p>Division of ${newCalculator.a} / ${
    newCalculator.b
  } = ${newCalculator.division()}<p>`
);
