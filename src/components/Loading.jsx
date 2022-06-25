import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <div className={`${styles.circle1} ${styles.child}`}></div>
        <div className={`${styles.circle2} ${styles.child}`}></div>
        <div className={`${styles.circle3} ${styles.child}`}></div>
        <div className={`${styles.circle4} ${styles.child}`}></div>
        <div className={`${styles.circle5} ${styles.child}`}></div>
        <div className={`${styles.circle6} ${styles.child}`}></div>
        <div className={`${styles.circle7} ${styles.child}`}></div>
        <div className={`${styles.circle8} ${styles.child}`}></div>
        <div className={`${styles.circle9} ${styles.child}`}></div>
        <div className={`${styles.circle10} ${styles.child}`}></div>
        <div className={`${styles.circle11} ${styles.child}`}></div>
        <div className={`${styles.circle12} ${styles.child}`}></div>
      </div>
      <h3 className={styles.text}>Cargando...</h3>
    </div>
  );
};

export default Loading;
