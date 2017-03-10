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

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = ['small', 'medium', 'large'];

var Avatar = function (_Component) {
  (0, _inherits3.default)(Avatar, _Component);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Avatar.prototype.render = function render() {
    var _props = this.props,
        alt = _props.alt,
        onError = _props.onError,
        onLoad = _props.onLoad,
        src = _props.src,
        size = _props.size,
        status = _props.status,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        type = _props.type,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;


    var classes = [_styles2.default.avatar, _styles2.default['status_' + status], _styles2.default['type_' + type]];

    var avatarStyles = {};

    if (sizes.includes(size)) {
      classes.push(_styles2.default['size_' + size]);
    } else {
      avatarStyles.height = size;
      avatarStyles.width = size;
    }

    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(classes),
        style: avatarStyles,
        tabIndex: tabIndex,
        testId: testId,
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      _react2.default.createElement('img', { alt: alt, src: src, onError: onError, onLoad: onLoad })
    );
  };

  return Avatar;
}(_react.Component);

Avatar.propTypes = {
  alt: _react.PropTypes.string,
  onError: _react.PropTypes.func,
  onLoad: _react.PropTypes.func,
  src: _react.PropTypes.string.isRequired,
  size: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(sizes), _react.PropTypes.number, _react.PropTypes.string]).isRequired,
  status: _react.PropTypes.oneOf(['default', 'present', 'away', 'active']).isRequired,
  tabIndex: _react.PropTypes.number,
  testId: _react.PropTypes.string,
  title: _react.PropTypes.string,
  /** <a href="#View">See View</a> */
  tooltipPositioning: function tooltipPositioning() {},
  type: _react.PropTypes.oneOf(['human', 'system']).isRequired
};
Avatar.defaultProps = {
  alt: '',
  size: 'medium',
  status: 'default',
  type: 'human'
};
exports.default = Avatar;