import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          Built with <span className={styles.heart}>❤</span> by Maazin Ahmed
        </p>
        <p className={styles.subtext}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
