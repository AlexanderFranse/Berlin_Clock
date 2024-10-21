import { isStringNotEmpty, isCharacterValid } from "../../src/functions";

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
    it("( --> true", () => {
      expect(isCharacterValid("(")).toBe(true);
    });
    it("{ --> true", () => {
      expect(isCharacterValid("{")).toBe(false);
    });
    it("[ --> true", () => {
      expect(isCharacterValid("[")).toBe(true);
    });
    it("> --> false", () => {
      expect(isCharacterValid(">")).toBe(false);
    });
  });
});
