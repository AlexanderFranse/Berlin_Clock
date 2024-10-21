import { isStringNotEmpty } from "../../src/functions";

describe("There is need to determine the order of the braces. Braces have different shapes like (), [] or {}. Every brace that opens should have a closing brace as well", () => {
  describe("First thing to do is to validate if there is actually a brace existing", () => {
    it("(){}[] --> true", () => {
      expect(isStringNotEmpty("(){}[]")).toBe(true);
    });
  });
});
