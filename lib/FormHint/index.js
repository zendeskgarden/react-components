import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles";

var FormHint = function (_ThemedComponent) {
  _inherits(FormHint, _ThemedComponent);

  function FormHint(props, context) {
    _classCallCheck(this, FormHint);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "FormHint",
      styles: styles
    }));
  }

  FormHint.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className;
    var theme = this.theme;


    return React.createElement(
      "small",
      { className: classNames(theme.hint, className) },
      children
    );
  };

  return FormHint;
}(ThemedComponent);

FormHint.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
export default FormHint;