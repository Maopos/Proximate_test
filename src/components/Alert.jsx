import styles from "../styles/Alert.module.css";

const Alert = ({ msg, error }) => {
  return <p className={error ? styles.redAlert : styles.blueAlert}>{msg}</p>;
};

export default Alert;
