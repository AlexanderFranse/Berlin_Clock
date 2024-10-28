/* eslint-disable no-restricted-syntax */
export function isStringNotEmpty(x: string) {
  return x.length > 0;
}

export function isCharacterValid(x: string) {
  const validCharacters = new Set(["(", ")", "[", "]", "{", "}"]);
  return validCharacters.has(x);
}

export function isBraceOrderValid(s: string): boolean {
  const stack: string[] = [];
  const matchingBrace: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (matchingBrace[char]) {
      if (stack.pop() !== matchingBrace[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

export function validateBraceOrder(s: string) {
  if (!isStringNotEmpty(s) && !isCharacterValid(s)) {
    return false;
  }
  const result = isBraceOrderValid(s);
  return result;
}
