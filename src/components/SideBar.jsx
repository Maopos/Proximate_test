import { Link } from "react-router-dom";
import styles from "../styles/SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Web App</h3>
      <Link to="/">
        <p className={styles.link}>Home</p>
      </Link>
      <Link to="/private">
        <p className={styles.link}>Products</p>
      </Link>
      <form>
        <button className={styles.button} onClick={() => localStorage.clear()}>
          Sign out
        </button>
      </form>
    </div>
  );
};

export default SideBar;
