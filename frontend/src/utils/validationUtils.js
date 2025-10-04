export function isAlphabetic(str) {
  return /^[A-Za-z]+$/.test(str);
}

export function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

export function isNumeric(str) {
  return /^[0-9]+$/.test(str);
}

export function containsSpecialCharacters(str) {
  return /[^a-zA-Z0-9]/.test(str);
}

export function isAlphabeticWithSpaces(str) {
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(str);
}
