import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles";

import DotsAluminum from "./assets/dots.100x85.aluminum.gif";
import DotsPelorous from "./assets/dots.100x85.pelorous.gif";
import SpinnerAluminum from "./assets/spinner.100x100.aluminum.gif";
import SpinnerPelorous from "./assets/spinner.100x100.pelorous.gif";

var Loader = function (_ThemedComponent) {
  _inherits(Loader, _ThemedComponent);

  function Loader(props, context) {
    _classCallCheck(this, Loader);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Loader",
      styles: styles
    }));

    _this.retrieveLoader = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          color = _this$props.color;


      if (type === "dots") {
        return color === "aluminum" ? DotsAluminum : DotsPelorous;
      }

      return color === "aluminum" ? SpinnerAluminum : SpinnerPelorous;
    };

    return _this;
  }

  Loader.prototype.render = function render() {
    var _props = this.props,
        alt = _props.alt,
        className = _props.className,
        size = _props.size,
        testId = _props.testId;
    var theme = this.theme;

    var loaderSrc = this.retrieveLoader();

    return React.createElement("img", {
      className: classNames(theme.loader, className),
      src: loaderSrc,
      width: size,
      alt: alt,
      title: alt,
      "data-test-id": testId
    });
  };

  return Loader;
}(ThemedComponent);

Loader.propTypes = {
  /**
     * The alt value to be applied to the GIF
     */
  alt: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(["aluminum", "pelorous"]),
  testId: PropTypes.string,
  type: PropTypes.oneOf(["dots", "spinner"]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Loader.defaultProps = {
  alt: "Loading",
  color: "pelorous",
  type: "dots",
  size: 50
};
export default Loader;