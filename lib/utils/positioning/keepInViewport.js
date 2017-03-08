"use strict";

exports.__esModule = true;
var keepInViewport = function keepInViewport(_ref) {
  var target = _ref.target,
      viewport = _ref.viewport;

  var result = {
    top: target.top,
    left: target.left,
    height: target.height,
    width: target.width,
    margins: target.margins
  };

  if (target.top + target.height > viewport.height) {
    result.top = Math.max(viewport.height - target.height, 0);
  }

  if (target.left + target.width > viewport.width) {
    result.left = Math.max(viewport.width - target.width, 0);
  }

  result.left = Math.max(0, result.left);
  result.top = Math.max(0, result.top);

  return result;
};

exports.default = keepInViewport;