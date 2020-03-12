import React, { useContext } from "react";
import pt from "prop-types";

import CompareContext from "context/CompareContextProvider";
import styles from "./Product.module.scss";

const Product = ({ product }) => {
  const { toggleFilter } = useContext(CompareContext);
  const { productImage, name, salePrice } = product;

  return (
    <div className={styles.product}>
      <button
        className={styles.button}
        type="button"
        onClick={() => toggleFilter(product)}
      >
        verwijder
      </button>
      <img src={productImage} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.price}>{salePrice}</span>
      <span className={styles.perPiece}>per stuk / excl. btw</span>
    </div>
  );
};

Product.propTypes = {
  product: pt.shape({
    productImage: pt.string,
    name: pt.string,
    salePrice: pt.string
  }).isRequired
};

export default Product;
