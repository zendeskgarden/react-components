import React from "react";

import styles from "./styles";
import View from "../core/View";

var Separator = function Separator() {
  return React.createElement(View, { className: styles.separator, role: "separator" });
};

export default Separator;