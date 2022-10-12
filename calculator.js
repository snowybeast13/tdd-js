//Add calculation
const addCalculator = (num1, num2) => {
  if (
    num1 === undefined ||
    num2 === undefined ||
    (num1 === undefined && num2 === undefined)
  ) {
    throw new Error("Some parameters are missing");
  } else return num1 + num2;
};

//Substract calculation
const substractCalc = (num1, num2) => {
  return num1 - num2;
};

//Multiply calculation
const multiply = (num1, num2) => {
  if (num1 === "" || num2 === "") {
    throw new Error("One of arguments are string");
  } else return num1 * num2;
};

//Devid calculation
const devide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Unable to devide with 0");
  } else return num1 / num2;
};

//Complex calculation
const complex = (num1, num2, num3) => {
  return (num1 + num2) * num3;
};

//Array
let arr = [7, "c1", "d2", 18, "dr", 21, 2];
let numbers = arr.filter(numbersOnly);

function numbersOnly(value) {
  if (typeof value === "") {
    throw Error("There's string in number array");
  } else if (typeof value === "number") {
    return value;
  }
}

const arrayOfNumbers = (total, avarage, maxNum, minNum) => {
  total = numbers.length;
  avarage = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  console.log(avarage);
  maxNum = Math.max(...numbers);
  minNum = Math.min(...numbers);
};
arrayOfNumbers()

//Exports
module.exports = {
  addCalculator,
  substractCalc,
  multiply,
  devide,
  complex,
  numbersOnly,
};
