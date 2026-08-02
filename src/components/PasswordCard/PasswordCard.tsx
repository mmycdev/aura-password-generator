import styles from "./PasswordCard.module.css";
import { Copy } from "lucide-react";

function PasswordCard() {
  return (
  <section className={styles.card}>
    <div className={styles.passwordHeader}>
      <span className={styles.password}>
        hG8$L!x2Qm@9Pw#K
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
    <button className={styles.generateButton}>
  Generate Password
    </button>
  </section>
);
}

export default PasswordCard;