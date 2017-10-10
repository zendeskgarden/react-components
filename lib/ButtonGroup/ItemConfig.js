import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import { Component } from "react";
import PropTypes from "prop-types";

var ItemConfig = function (_Component) {
  _inherits(ItemConfig, _Component);

  function ItemConfig() {
    _classCallCheck(this, ItemConfig);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ItemConfig.prototype.render = function render() {
    return null;
  };

  return ItemConfig;
}(Component);

ItemConfig.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired
};
export default ItemConfig;