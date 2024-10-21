export function isStringNotEmpty(x: string) {
  return x.length > 0;
}

export function isCharacterValid(x: string) {
  const validCharacters = new Set(["(", ")", "[", "]"]);
  return validCharacters.has(x);
}
