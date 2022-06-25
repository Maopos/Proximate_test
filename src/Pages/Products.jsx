import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Products.module.css";

const Products = () => {
  // State
  const [products, setProducts] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      const list = JSON.parse(auth.data);
      setProducts(list.products);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Products</h3>
      {products.length > 0
        ? products.map((i) => <ProductCard key={i.id} product={i} />)
        : "There aren't products yet..."}
    </div>
  );
};

export default Products;
