import React, { useContext } from "react";

import CompareContext from "context/CompareContextProvider";
import Checkbox from "components/Checkbox";
import styles from "./Filter.module.scss";

const Filter = () => {
  const { allProducts } = useContext(CompareContext);

  return (
    <>
      <h3 className={styles.header}>Je selectie</h3>
      <ul className={styles.filter}>
        {allProducts &&
          allProducts.map(product => (
            <li key={product.Artikelnummer}>
              <Checkbox product={product} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Filter;
