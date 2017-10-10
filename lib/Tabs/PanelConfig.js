import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import { Component } from "react";
import PropTypes from "prop-types";

var PanelConfig = function (_Component) {
  _inherits(PanelConfig, _Component);

  function PanelConfig() {
    _classCallCheck(this, PanelConfig);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  PanelConfig.prototype.render = function render() {
    return null;
  };

  return PanelConfig;
}(Component);

PanelConfig.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  title: PropTypes.string,
  /** <a href="#view">See View</a> */
  tooltipPositioning: function tooltipPositioning() {}
};
export default PanelConfig;