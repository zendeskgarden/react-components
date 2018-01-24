import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const Cell = ({ children }) =>
  <div className={styles.cell}>
    {children}
  </div>;

Cell.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cell;
