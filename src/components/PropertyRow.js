import React, { useContext } from "react";
import pt from "prop-types";

import CompareContext from "context/CompareContextProvider";
import styles from "./Compare.module.scss";

const PropertyRow = ({ property }) => {
  const { filteredProducts } = useContext(CompareContext);

  const values =
    filteredProducts && filteredProducts.map(product => product[property]);
  const highlightRow = !values.every((val, i, arr) => val === arr[0]);

  return (
    <tr className={highlightRow ? styles.highlight : ""}>
      <td className={styles.propertyRow}>{property}</td>
      {values.map((value, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <td key={i} className={styles.value}>
          {value}
        </td>
      ))}
    </tr>
  );
};

PropertyRow.propTypes = {
  property: pt.string.isRequired
};

export default PropertyRow;
