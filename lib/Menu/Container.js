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

var _ThemedComponent2 = require('../utils/theming/ThemedComponent');

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrowPositions = {
  bottom: 'top',
  bottom_left: 'top_right',
  bottom_right: 'top_left',
  left: 'right',
  right: 'left',
  top: 'bottom',
  top_left: 'bottom_right',
  top_right: 'bottom_left'
};

var Container = function (_ThemedComponent) {
  (0, _inherits3.default)(Container, _ThemedComponent);

  function Container(props, context) {
    (0, _classCallCheck3.default)(this, Container);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: 'Menu',
      styles: _styles2.default
    }));
  }

  Container.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        animate = _props.animate,
        arrow = _props.arrow,
        children = _props.children,
        dir = _props.dir,
        fixedWidth = _props.fixedWidth,
        maxHeight = _props.maxHeight,
        position = _props.position,
        size = _props.size;


    var style = {};
    var innerStyle = {};
    var hasMaxHeight = typeof maxHeight !== 'undefined';

    if (hasMaxHeight) {
      style.maxHeight = typeof maxHeight === 'number' ? maxHeight + 'px' : maxHeight;

      innerStyle.maxHeight = 'calc(' + style.maxHeight + ' - 2px)';
    }

    var theme = this.theme;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.menu, theme['size_' + size], theme['position_' + position], theme[dir], (_classNames = {}, _classNames[theme.animate] = animate, _classNames[theme.fixed_width] = fixedWidth, _classNames[theme.arrow] = arrow, _classNames[theme['arrow_' + arrowPositions[position]]] = arrow, _classNames[theme.scrollable] = hasMaxHeight, _classNames)),
        role: 'menu',
        style: style
      },
      _react2.default.createElement(
        _View2.default,
        { className: theme.inner, style: innerStyle },
        children
      )
    );
  };

  return Container;
}(_ThemedComponent3.default);

Container.propTypes = {
  animate: _propTypes2.default.bool,
  arrow: _propTypes2.default.bool,
  dir: _propTypes2.default.oneOf(['ltr', 'rtl']),
  fixedWidth: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  position: _propTypes2.default.oneOf(['bottom', 'bottom_left', 'bottom_right', 'bottom_stretch', 'left', 'right', 'top', 'top_left', 'top_right', 'top_stretch']),
  size: _propTypes2.default.oneOf(['small', 'large'])
};
Container.defaultProps = {
  animate: false,
  arrow: false,
  dir: 'ltr',
  position: 'bottom_right',
  size: 'small'
};
exports.default = Container;