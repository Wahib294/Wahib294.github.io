import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
export default Layout;
