import {
  isStringNotEmpty,
  isCharacterValid,
  isBraceOrderValid,
  validateBraceOrder,
} from "../../src/functions";

describe("There is need to determine the order of the braces. Braces have different shapes like (), [] or {}. Every brace that opens should have a closing brace as well", () => {
  describe("First thing to do is to validate if there is actually a brace existing", () => {
    it("(){}[] --> true", () => {
      expect(isStringNotEmpty("(){}[]")).toBe(true);
    });
    it(" '' --> false", () => {
      expect(isStringNotEmpty("")).toBe(false);
    });
  });
  describe("Second thing to do if to validate the right formats that represent the braces", () => {
    it("( / )--> true", () => {
      expect(isCharacterValid("(")).toBe(true);
      expect(isCharacterValid(")")).toBe(true);
    });
    it("{ / }--> true", () => {
      expect(isCharacterValid("{")).toBe(true);
      expect(isCharacterValid("}")).toBe(true);
    });
    it("[ / ]--> true", () => {
      expect(isCharacterValid("[")).toBe(true);
      expect(isCharacterValid("]")).toBe(true);
    });
    it("> / & --> false", () => {
      expect(isCharacterValid(">")).toBe(false);
      expect(isCharacterValid("&")).toBe(false);
    });
  });
  describe("Now we want to validate the order", () => {
    it("() ---> true", () => {
      expect(isBraceOrderValid("()")).toBe(true);
    });
    it("(} ---> true", () => {
      expect(isBraceOrderValid("(}")).toBe(false);
    });
  });
  describe("Final endstep is that we want to validate the order of multiple braces", () => {
    it("(){}[] ---> true", () => {
      expect(validateBraceOrder("(){}[]")).toBe(true);
    });
    it("({})[] ---> true", () => {
      expect(validateBraceOrder("([{}])")).toBe(true);
    });
    it(" '' --> false", () => {
      expect(validateBraceOrder("")).toBe(false);
    });
    it("({)} ---> false", () => {
      expect(validateBraceOrder("(}")).toBe(false);
    });
    it("({)} ---> false", () => {
      expect(validateBraceOrder("[(])")).toBe(false);
    });
    it("({)} ---> false", () => {
      expect(validateBraceOrder("[({})](]")).toBe(false);
    });
  });
});
