import styles from "./PasswordCard.module.css";
import { Copy } from "lucide-react";
import { useState } from "react";
import { generatePassword } from "../../services/password";

function PasswordCard() {
  const [password, setPassword] = useState("Click Generate");  
  function handleGeneratePassword() {
  const newPassword = generatePassword({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  setPassword(newPassword);
}
  return (
  <section className={styles.card}>
    <div className={styles.passwordHeader}>
      <span className={styles.password}>
     {password}
      </span>

      <button className={styles.copyButton}>
        <Copy size={18} />

        <span>Copy</span>
      </button>
    </div>
    <div className={styles.lengthSection}>
  <div className={styles.lengthHeader}>
    <span>Password Length</span>

    <span className={styles.lengthValue}>16</span>
  </div>

  <input
    className={styles.slider}
    type="range"
    min="8"
    max="32"
    value="16"
    readOnly
  />
    </div>  
    <div className={styles.options}>
  <label className={styles.option}>
    <input type="checkbox" defaultChecked />
    <span>Uppercase letters</span>
  </label>

  <label className={styles.option}>
    <input type="checkbox" defaultChecked />
    <span>Lowercase letters</span>
  </label>

  <label className={styles.option}>
    <input type="checkbox" defaultChecked />
    <span>Numbers</span>
  </label>

  <label className={styles.option}>
    <input type="checkbox" defaultChecked />
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