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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Selectable = require('../core/Selectable');

var _Selectable2 = _interopRequireDefault(_Selectable);

var _ThemedComponent2 = require('../utils/theming/ThemedComponent');

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function (_ThemedComponent) {
  (0, _inherits3.default)(Label, _ThemedComponent);

  function Label(props, context) {
    (0, _classCallCheck3.default)(this, Label);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: 'Tabs',
      styles: _styles2.default
    }));
  }

  Label.prototype.render = function render() {
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
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;
    var theme = this.theme;


    return _react2.default.createElement(
      'li',
      {
        'aria-activedescendant': selected,
        'aria-disabled': disabled,
        'aria-selected': active,
        className: (0, _classnames2.default)(theme.label, (_classNames = {}, _classNames[theme.disabled] = disabled, _classNames[theme.selected] = active, _classNames[theme.focused] = !selectedByMouse && selected, _classNames)),
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        role: 'tab'
      },
      _react2.default.createElement(
        _View2.default,
        { title: title, tooltipPositioning: tooltipPositioning },
        children
      )
    );
  };

  return Label;
}(_ThemedComponent3.default);

Label.propTypes = {
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  selectedByMouse: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  /** <a href="#View">See View</a> */
  tooltipPositioning: function tooltipPositioning() {}
};
exports.default = (0, _Selectable2.default)(Label, {
  selectOnHover: false,
  selectEvent: 'onClick'
});