import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
