import styles from "../styles/ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, image, shortDescription, path } = product;

  return (
    <Link to={`/private/product${path}`}>
      <div className={styles.container}>
        <div className={styles.imgcontainer}>
          <img src={image} alt="prodImg" className={styles.img} />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{shortDescription}</p>
          <button className={styles.button}>Go to Product →</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
