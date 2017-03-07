'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

var _Selectable = require('../core/Selectable');

var _Selectable2 = _interopRequireDefault(_Selectable);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function (_Component) {
  (0, _inherits3.default)(Item, _Component);

  function Item() {
    (0, _classCallCheck3.default)(this, Item);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Item.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        disabled = _props.disabled,
        onMouseDown = _props.onMouseDown,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        role = _props.role,
        selected = _props.selected,
        testId = _props.testId;


    return _react2.default.createElement(
      _View2.default,
      {
        'aria-activedescendant': selected,
        'aria-disabled': disabled,
        className: (0, _classnames2.default)(_styles2.default.item, (_classNames = {}, _classNames[_styles2.default.disabled] = disabled, _classNames[_styles2.default.selected] = selected, _classNames)),
        disabled: disabled,
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        role: role,
        testId: testId
      },
      children
    );
  };

  return Item;
}(_react.Component);

Item.propTypes = {
  children: _react.PropTypes.node.isRequired,
  disabled: _react.PropTypes.bool,
  onMouseDown: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  role: _react.PropTypes.string,
  selected: _react.PropTypes.bool,
  testId: _react.PropTypes.string,
  value: _react.PropTypes.any
};
Item.defaultProps = {
  disabled: false,
  role: 'menuitem'
};
exports.default = (0, _Selectable2.default)(Item, {
  action: function action(props, event) {
    var onSelect = props.onSelect,
        value = props.value;


    onSelect && onSelect(value);
  },
  preventDefault: true
});