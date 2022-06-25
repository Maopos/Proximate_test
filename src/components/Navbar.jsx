import styles from "../styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logoText from "../img/logoText.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo} onClick={() => setMenu(false)}>
        <img src={logoText} alt="logotext" className={styles.logoText} />
        <h1 className={styles.title}>Web App</h1>
      </Link>
      <GiHamburgerMenu onClick={() => setMenu(!menu)} className={styles.icon} />
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.anchor}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/private" className={styles.anchor}>
              Products
            </Link>
          </li>
        </ul>
        <form>
          <button
            className={styles.button}
            onClick={() => localStorage.clear()}
          >
            Sign out
          </button>
        </form>
      </div>

      <div
        className={`${styles.menu2} ${menu ? styles.showOn : styles.showOff}`}
      >
        <ul className={styles.list}>
          <li>
            <Link
              to="/"
              className={styles.anchor}
              onClick={() => setMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/private"
              className={styles.anchor}
              onClick={() => setMenu(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <form>
              <button
                className={styles.button}
                onClick={() => localStorage.clear()}
              >
                Sign out
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
