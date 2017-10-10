import _extends from "babel-runtime/helpers/extends";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import { Component } from "react";
import PropTypes from "prop-types";

var State = function (_Component) {
  _inherits(State, _Component);

  function State(props) {
    _classCallCheck(this, State);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = _extends({}, props.initialState);
    return _this;
  }

  State.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        initialState = _props.initialState;


    return children(this.state || initialState, this.setState.bind(this));
  };

  return State;
}(Component);

State.propTypes = {
  children: PropTypes.func,
  initialState: PropTypes.object
};
State.defaultProps = {
  initialState: {}
};
export default State;