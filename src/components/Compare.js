import React, { useContext } from "react";

import CompareContext from "context/CompareContextProvider";
import Filter from "components/Filter";
import PropertyRow from "components/PropertyRow";
import Product from "components/Product";
import Badges from "components/Badges";

import styles from "./Compare.module.scss";

const Compare = () => {
  const { filteredProducts, productProperties } = useContext(CompareContext);

  return (
    <div className={styles.page}>
      <h1 className={styles.header}>
        {filteredProducts.length > 1
          ? `${filteredProducts.length} producten vergelijken`
          : "Kies minstens 2 producten om te vergelijken"}
      </h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.propertyRow}>
              <Filter />
            </th>
            {filteredProducts.map(product => (
              <th key={product.Artikelnummer}>
                <Product product={product} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.propertyRow}>Keurmerk</td>
            {filteredProducts.map(product => (
              <td key={product.Artikelnummer}>
                <Badges urls={product.badges} />
              </td>
            ))}
          </tr>
          {productProperties.length
            ? productProperties.map(property => (
                <PropertyRow property={property} key={property} />
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Compare;
