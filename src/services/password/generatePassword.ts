type GeneratePasswordOptions = {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

const UPPERCASE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARACTERS = "0123456789";
const SYMBOL_CHARACTERS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword(options: GeneratePasswordOptions): string {
  let availableCharacters = "";

  if (options.includeUppercase) {
    availableCharacters += UPPERCASE_CHARACTERS;
  }

  if (options.includeLowercase) {
    availableCharacters += LOWERCASE_CHARACTERS;
  }

  if (options.includeNumbers) {
    availableCharacters += NUMBER_CHARACTERS;
  }

  if (options.includeSymbols) {
    availableCharacters += SYMBOL_CHARACTERS;
  }

  if (availableCharacters.length === 0) {
    return "";
  }

  let password = "";

  for (let index = 0; index < options.length; index++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);

    const randomCharacter = availableCharacters[randomIndex];
    password += randomCharacter;
  }

  return password;
}

export default generatePassword;
