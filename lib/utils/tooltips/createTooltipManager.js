'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _TooltipContainer = require('./TooltipContainer');

var _TooltipContainer2 = _interopRequireDefault(_TooltipContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTooltipManager = function createTooltipManager(renderNode) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var currentTooltipId = 0;

  var show = function show(anchor, content, positions) {
    (0, _reactDom.render)(_react2.default.createElement(_TooltipContainer2.default, {
      anchor: anchor,
      content: content,
      dir: options.dir,
      positions: positions,
      zIndex: options.zIndex
    }), renderNode);

    return ++currentTooltipId;
  };

  var hide = function hide(tooltipId) {
    if (typeof tooltipId !== 'number' || tooltipId === currentTooltipId) {
      (0, _reactDom.render)(_react2.default.createElement(_TooltipContainer2.default, null), renderNode);
    }
  };

  // Initial empty render that creates the container element
  (0, _reactDom.render)(_react2.default.createElement(_TooltipContainer2.default, null), renderNode);

  // Event handlers
  document.body.addEventListener('scroll', hide);
  window.addEventListener('resize', hide);

  return { show: show, hide: hide };
};

exports.default = createTooltipManager;