import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
