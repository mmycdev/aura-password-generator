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
  </section>
);
}

export default PasswordCard;