import styles from "./PasswordPage.module.css";
import PasswordCard from "../components/PasswordCard";
import logo from "/src/assets/logo.svg";

function PasswordPage() {
  return (
    <section className={styles.container}>
      <img
  src={logo}
  alt="AU-RA"
  className={styles.logo}
/>

      <h2>Password Generator</h2>

      <p>Generate secure passwords instantly.</p>

      <PasswordCard />
    </section>
  );
}

export default PasswordPage;
