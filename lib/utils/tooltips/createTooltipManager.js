'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _TooltipContainer = require('./TooltipContainer');

var _TooltipContainer2 = _interopRequireDefault(_TooltipContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTooltipManager = function createTooltipManager(renderNode) {
  var show = function show(anchor, content, positions) {
    (0, _reactDom.render)(_react2.default.createElement(_TooltipContainer2.default, {
      anchor: anchor,
      content: content,
      positions: positions
    }), renderNode);
  };

  var hide = function hide() {
    (0, _reactDom.render)(_react2.default.createElement(_TooltipContainer2.default, null), renderNode);
  };

  // Event handlers
  document.body.addEventListener('scroll', hide);
  window.addEventListener('resize', hide);

  return { show: show, hide: hide };
};

exports.default = createTooltipManager;