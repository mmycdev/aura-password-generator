import styles from "./PasswordPage.module.css";
import PasswordCard from "../components/PasswordCard";

function PasswordPage() {
  return (
    <section className={styles.container}>
      <h1>AU-RA</h1>

      <h2>Password Generator</h2>

      <p>Generate secure passwords instantly.</p>

      <PasswordCard />
    </section>
  );
}

export default PasswordPage;