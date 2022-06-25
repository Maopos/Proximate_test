import { useParams, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import styles from "../styles/Product.module.css";

const Product = () => {
  // State
  const [product, setProduct] = useState({});

  const { auth } = useAuth();
  const params = useParams();

  useEffect(() => {
    if (auth.status) {
      const list = JSON.parse(auth.data);
      setProduct(list.products.filter((i) => i.path === `/${params.path}`)[0]);
    }
  }, []);

  const { title, image, longDescription } = product;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <img src={image} alt="productImage" className={styles.img} />
        <div>
          <p className={styles.desc}>{longDescription}</p>
          <Link to="/private">
            <button className={styles.button}>Go back ←</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
