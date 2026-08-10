export type PasswordStrength = {
  score: number;
  label:
    | "Very Weak"
    | "Weak"
    | "Fair"
    | "Strong"
    | "Very Strong";
};

export function calculatePasswordStrength(
  password: string,
): PasswordStrength {

const hasUppercase = /[A-Z]/.test(password);

const hasLowercase = /[a-z]/.test(password);

const hasNumbers = /[0-9]/.test(password);

const hasSymbols = /[^A-Za-z0-9]/.test(password);

let score:number;

const length = password.length;

if (length < 8) {
  score = 0;
} else if (length < 12) {
  score = 15;
} else if (length < 16) {
  score = 30;
} else if (length < 20) {
  score = 40;
} else if (length < 24) {
  score = 50;
} else {
  score = 60;
}

if (hasUppercase) {
  score += 10;
}

if (hasLowercase) {
  score += 10;
}

if (hasNumbers) {
  score += 10;
}

if (hasSymbols) {
  score += 10;
}

let label: PasswordStrength["label"];

if (score <= 20) {
  label = "Very Weak";
} else if (score <= 40) {
  label = "Weak";
} else if (score <= 60) {
  label = "Fair";
} else if (score <= 80) {
  label = "Strong";
} else {
  label = "Very Strong";
}

return {
  score,
  label,
};
}