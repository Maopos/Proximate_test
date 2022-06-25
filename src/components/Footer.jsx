import styles from "../styles/Footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter, BsTwitch } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <a href="https://www.facebook.com/" target="_blank">
          <BsFacebook className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <BsInstagram className={styles.icon} />
        </a>
        <a href="https://twitter.com/?lang=es" target="_blank">
          <BsTwitter className={styles.icon} />
        </a>
        <a href="https://www.twitch.tv/" target="_blank">
          <BsTwitch className={styles.icon} />
        </a>
      </div>
      <p>© Copyright 2022 - WebApp - All rights reserved.</p>
    </div>
  );
};

export default Footer;
