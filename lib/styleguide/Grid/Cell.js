import React from "react";
import PropTypes from "prop-types";

import View from "../../core/View";
import styles from "./styles";

var Cell = function Cell(_ref) {
  var children = _ref.children;
  return React.createElement(
    View,
    { className: styles.cell },
    children
  );
};

Cell.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cell;