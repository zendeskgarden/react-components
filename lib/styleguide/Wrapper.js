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

var _ThemeProvider = require('../utils/theming/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _TooltipProvider = require('../utils/tooltips/TooltipProvider');

var _TooltipProvider2 = _interopRequireDefault(_TooltipProvider);

var _exampleTheme = require('../themes/example-theme');

var _exampleTheme2 = _interopRequireDefault(_exampleTheme);

var _electroidDarkTheme = require('../themes/electroid-dark-theme');

var _electroidDarkTheme2 = _interopRequireDefault(_electroidDarkTheme);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function (_Component) {
  (0, _inherits3.default)(Wrapper, _Component);

  function Wrapper() {
    (0, _classCallCheck3.default)(this, Wrapper);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Wrapper.prototype.render = function render() {
    var children = this.props.children;


    var theme = window.localStorage.getItem('rc-theme') || 'default';

    var query = _querystring2.default.parse(window.location.search.slice(1));
    document.body.classList.toggle('u-font-family-system', query.font === 'system');

    switch (theme) {
      case 'example':
        return _react2.default.createElement(
          _ThemeProvider2.default,
          { theme: _exampleTheme2.default },
          _react2.default.createElement(
            _TooltipProvider2.default,
            { id: 'styleguide-tooltips' },
            children
          )
        );
      case 'electroid-dark':
        return _react2.default.createElement(
          _ThemeProvider2.default,
          { theme: _electroidDarkTheme2.default },
          _react2.default.createElement(
            _TooltipProvider2.default,
            { id: 'styleguide-tooltips' },
            _react2.default.createElement(
              'div',
              { className: 'u-bg-daintree u-fg-white', style: { padding: '15px', margin: '-15px' } },
              children
            )
          )
        );
      default:
        return _react2.default.createElement(
          _TooltipProvider2.default,
          { id: 'styleguide-tooltips' },
          children
        );
    }
  };

  return Wrapper;
}(_react.Component);

Wrapper.propTypes = {
  children: _propTypes2.default.node
};
exports.default = Wrapper;