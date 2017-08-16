import React from "react";
import PropTypes from "prop-types";

import View from "../../core/View";
import styles from "./styles.css";

const Row = ({ children }) =>
  <View className={styles.row}>
    {children}
  </View>;

Row.propTypes = {
  children: PropTypes.node.isRequired
};

export default Row;
