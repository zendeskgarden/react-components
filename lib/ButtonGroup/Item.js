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

var _Selectable = require('../core/Selectable');

var _Selectable2 = _interopRequireDefault(_Selectable);

var _ThemedComponent2 = require('../utils/theming/ThemedComponent');

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require('../Button/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function (_ThemedComponent) {
  (0, _inherits3.default)(Item, _ThemedComponent);

  function Item(props, context) {
    (0, _classCallCheck3.default)(this, Item);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: 'Button',
      styles: _styles2.default
    }));
  }

  Item.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        active = _props.active,
        children = _props.children,
        disabled = _props.disabled,
        onClick = _props.onClick,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        selected = _props.selected,
        selectedByMouse = _props.selectedByMouse,
        size = _props.size;
    var theme = this.theme;


    return _react2.default.createElement(
      'button',
      {
        'aria-activedescendant': selected,
        'aria-disabled': disabled,
        'aria-selected': active,
        className: (0, _classnames2.default)(theme.type_default, theme['size_' + size], (_classNames = {}, _classNames[theme.disabled] = disabled, _classNames[theme.active] = active, _classNames[theme.focused] = !selectedByMouse && selected, _classNames)),
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        role: 'tab',
        tabIndex: '-1'
      },
      children
    );
  };

  return Item;
}(_ThemedComponent3.default);

Item.propTypes = {
  active: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  disabled: _react.PropTypes.bool,
  onClick: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  selected: _react.PropTypes.bool,
  selectedByMouse: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
};
Item.defaultProps = {
  size: 'small'
};
exports.default = (0, _Selectable2.default)(Item, { selectOnHover: false, selectEvent: 'onClick' });