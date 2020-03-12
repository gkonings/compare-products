import React from "react";
import pt from "prop-types";

import styles from "./Badges.module.scss";

const Badges = ({ urls }) => (
  <ul className={styles.badges}>
    {urls &&
      urls.split("|").map(url => (
        <li className={styles.badge} key={url}>
          <img src={url} alt="badge" />
        </li>
      ))}
  </ul>
);

Badges.propTypes = {
  urls: pt.string.isRequired
};

export default Badges;
