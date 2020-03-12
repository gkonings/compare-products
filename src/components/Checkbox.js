import React, { useContext } from "react";
import pt from "prop-types";

import CompareContext from "context/CompareContextProvider";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ product }) => {
  const { isSelected, toggleFilter } = useContext(CompareContext);
  const handleChange = () => {
    toggleFilter(product);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        id={`checkbox_${product.Artikelnummer}`}
        type="checkbox"
        onChange={handleChange}
        checked={isSelected(product)}
      />
      <label
        className={styles.label}
        htmlFor={`checkbox_${product.Artikelnummer}`}
      >
        {product.name}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  product: pt.shape({
    name: pt.string,
    Artikelnummer: pt.string
  }).isRequired
};

export default Checkbox;
