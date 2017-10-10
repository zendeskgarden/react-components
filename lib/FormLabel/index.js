import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles";

var FormLabel = function (_ThemedComponent) {
  _inherits(FormLabel, _ThemedComponent);

  function FormLabel(props, context) {
    _classCallCheck(this, FormLabel);

    return _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "FormLabel",
      styles: styles
    }));
  }

  FormLabel.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        htmlFor = _props.htmlFor,
        className = _props.className;
    var theme = this.theme;


    return React.createElement(
      "label",
      { htmlFor: htmlFor, className: classNames(theme.label, className) },
      children
    );
  };

  return FormLabel;
}(ThemedComponent);

FormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string
};
export default FormLabel;