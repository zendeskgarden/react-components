import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import classNames from "classnames";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

var Gap = function (_ThemedComponent) {
  _inherits(Gap, _ThemedComponent);

  function Gap(props, context) {
    _classCallCheck(this, Gap);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Pagination",
      styles: styles
    }));
  }

  Gap.prototype.render = function render() {
    var theme = this.theme;

    return React.createElement(View, { className: classNames(theme.page, theme.page_gap) });
  };

  return Gap;
}(ThemedComponent);

export default Gap;