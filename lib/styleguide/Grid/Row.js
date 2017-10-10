import React from "react";
import PropTypes from "prop-types";

import View from "../../core/View";
import styles from "./styles";

var Row = function Row(_ref) {
  var children = _ref.children;
  return React.createElement(
    View,
    { className: styles.row },
    children
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired
};

export default Row;