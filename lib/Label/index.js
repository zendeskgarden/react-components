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

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function (_Component) {
  (0, _inherits3.default)(Label, _Component);

  function Label() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Label);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.renderAvatar = function (avatar) {
      return _react2.default.cloneElement(avatar, {
        className: (0, _classnames2.default)(_styles2.default.avatar, avatar.props.className)
      });
    }, _this.onKeyboardRemove = function (e) {
      var onRemove = _this.props.onRemove;


      e.preventDefault();
      onRemove(e);
    }, _this.renderRemove = function (onRemove) {
      return _react2.default.createElement('button', { tabIndex: -1, className: _styles2.default.remove, onClick: onRemove });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Label.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        avatar = _props.avatar,
        children = _props.children,
        className = _props.className,
        dir = _props.dir,
        onRemove = _props.onRemove,
        pill = _props.pill,
        round = _props.round,
        size = _props.size,
        stretched = _props.stretched,
        tabIndex = _props.tabIndex,
        type = _props.type,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(_styles2.default[type], _styles2.default[size], (_classNames = {}, _classNames[_styles2.default.pill] = pill, _classNames[_styles2.default.round] = round, _classNames[_styles2.default.rtl] = dir === 'rtl', _classNames[_styles2.default.stretched] = stretched, _classNames), className),
        onDelete: onRemove && this.onKeyboardRemove,
        tabIndex: tabIndex,
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      avatar && this.renderAvatar(avatar),
      children,
      onRemove && this.renderRemove(onRemove)
    );
  };

  return Label;
}(_react.Component);

Label.propTypes = {
  avatar: _propTypes2.default.node,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  dir: _propTypes2.default.oneOf(['ltr', 'rtl']),
  onRemove: _propTypes2.default.func,
  pill: _propTypes2.default.bool,
  round: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  stretched: _propTypes2.default.bool,
  tabIndex: _propTypes2.default.number,
  title: _propTypes2.default.string,
  /** <a href="#View">See View</a> */
  tooltipPositioning: function tooltipPositioning() {},
  type: _propTypes2.default.oneOf(['default', 'dark', 'light', 'success', 'warning', 'error'])
};
Label.defaultProps = {
  dir: 'ltr',
  size: 'medium',
  stretched: false,
  type: 'default'
};
exports.default = Label;