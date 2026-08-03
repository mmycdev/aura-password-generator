import styles from "./PasswordCard.module.css";
import { Copy } from "lucide-react";
import { useState } from "react";
import { generatePassword } from "../../services/password";

function PasswordCard() {
const [password, setPassword] = useState(() =>
  generatePassword({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  }),
);
const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
});

function updatePassword() {
  const newPassword = generatePassword({
    length,
    ...options,
  });

  setPassword(newPassword);
}

  function handleGeneratePassword() {
  updatePassword();
}

function handleOptionChange(
  option: keyof typeof options,
  checked: boolean,
) {
  setOptions((previousOptions) => {
    const updatedOptions = {
      ...previousOptions,
      [option]: checked,
    };

    const enabledOptions = Object.values(updatedOptions).filter(Boolean).length;

    if (enabledOptions === 0) {
      return previousOptions;
    }

    return updatedOptions;
  });
}
async function handleCopyPassword() {
  await navigator.clipboard.writeText(password);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
}
  return (
  <section className={styles.card}>
    <div className={styles.passwordHeader}>
      <span className={styles.password}>
     {password}
      </span>

      <button
  className={styles.copyButton}
  onClick={handleCopyPassword}
>
        <Copy size={18} />

        <span>
  {copied ? "Copied!" : "Copy"}
</span>
      </button>
    </div>
    <div className={styles.lengthSection}>
  <div className={styles.lengthHeader}>
    <span>Password Length</span>

    <span className={styles.lengthValue}>{length}</span>
  </div>

  <input
  className={styles.slider}
  type="range"
  min={8}
  max={32}
  value={length}
  onChange={(event) => {
    setLength(Number(event.target.value));
  }}
/>
    </div>  
    <div className={styles.options}>
<label className={styles.option}>
    <input
  type="checkbox"
  checked={options.includeUppercase}
  onChange={(event) =>
  handleOptionChange(
    "includeUppercase",
    event.target.checked,
  )
}
/>
    <span>Uppercase letters</span>
</label>

  <label className={styles.option}>
<input
  type="checkbox"
  checked={options.includeLowercase}
  onChange={(event) =>
  handleOptionChange(
    "includeLowercase",
    event.target.checked,
  )
}
/>
    <span>Lowercase letters</span>
  </label>

  <label className={styles.option}>
<input

  type="checkbox"

  checked={options.includeNumbers}

  onChange={(event) =>
  handleOptionChange(
    "includeNumbers",
    event.target.checked,
  )
}

/>
    <span>Numbers</span>
  </label>

  <label className={styles.option}>
<input

  type="checkbox"

  checked={options.includeSymbols}

  onChange={(event) =>
  handleOptionChange(
    "includeSymbols",
    event.target.checked,
  )
}

/>
    <span>Symbols</span>
  </label>
    </div>
    <button
  className={styles.generateButton}
  onClick={handleGeneratePassword}
>
  Generate Password
    </button>
  </section>
);
}

export default PasswordCard;