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

export function validateFields(newInput, value) {
  if (
    newInput.validations?.minLength &&
    value.length < newInput.validations.minLength
  ) {
    return `${newInput.label} must be at least ${newInput.validations.minLength} characters.`;
  }

  if (newInput.validations?.alphabetic && !isAlphabetic(value)) {
    return `${newInput.label} requires alphabetic characters only.`;
  }

  if (newInput.validations?.numeric && !isNumeric(value)) {
    return `${newInput.label} requires numeric characters only.`;
  }

  if (
    newInput.validations?.special === false &&
    containsSpecialCharacters(value)
  ) {
    return `${newInput.label} must not contain special characters.`;
  }

  if (newInput.validations?.isEmail && !isEmail(value)) {
    return `Please enter a valid email.`;
  }

  if (
    newInput.validations?.isAlphabeticWithSpaces &&
    !isAlphabeticWithSpaces(value)
  ) {
    return `Please enter a valid Name.`;
  }

  return "";
}
