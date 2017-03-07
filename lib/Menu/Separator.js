'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Separator = function Separator() {
  return _react2.default.createElement(_View2.default, {
    className: _styles2.default.separator,
    role: 'separator'
  });
};

exports.default = Separator;