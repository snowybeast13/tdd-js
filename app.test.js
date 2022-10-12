const calculator = require("./calculator");

//Add test
describe("Addition of two numbers", () => {
  test("Addition of 10 and 3 to equal 13", () => {
    expect(calculator.addCalculator(10, 3)).toBe(13);
  });
});

//Substract test
describe("Substraction of two numbers", () => {
  test("Substraction of 10 and 3 to equal 7", () => {
    expect(calculator.substractCalc(10, 3)).toBe(7);
  });
});

//Multiplication test
describe("Multiplication of two numbers", () => {
  test("Multiplication of 3 and 7 to equal 21", () => {
    expect(calculator.multiply(7, 3)).toBe(21);
  });
});

//Dividing test
describe("Devision of two numbers", () => {
  test("Devision of 2424 and 6 to equal 404", () => {
    expect(calculator.devide(2424, 6)).toBe(404);
  });
});

//Calculation with more than 2 arguments
describe("Calculation with more than two parameters", () => {
  test("Sum 3 and 4 and multiply with 3 to equal 21", () => {
    expect(calculator.complex(3, 4, 3)).toBe(21);
  });
});

//Addition with only one parameter
describe("Addition with only one parameter", () => {
  test("Addition with one parameter", () => {
    expect(() => calculator.addCalculator(3)).toThrow(
      "Some parameters are missing"
    );
  });
});

//Addition with none of the parameters
describe("Addition with none of parameters", () => {
  test("Addition with none of parameters", () => {
    expect(() => calculator.addCalculator()).toThrow(
      "Some parameters are missing"
    );
  });
});

//Dividing with 0
describe("Devision with 0", () => {
  test("Devision of 5 with 0 to throw error", () => {
    expect(() => calculator.devide(5, 0)).toThrow("Unable to devide with 0");
  });
});

//Multiplication with string
describe("Multiplication of two numbers if one is string", () => {
  test("Multiplication of 3 and 7 but 7 is string", () => {
    expect(() =>
      calculator.multiply(3, "hello").toThrow("One of arguments are string")
    );
  });
});

//Array of numbers
describe("Array of numbers", () => {
  test("Array", () => {
    expect(() =>
      calculator.numbersOnly("Hello").toThrow("There's string in number array")
    );
  });
});
