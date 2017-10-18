"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _weakMap = require("babel-runtime/core-js/weak-map");

var _weakMap2 = _interopRequireDefault(_weakMap);

exports.getFixedContainer = getFixedContainer;
exports.getFixedContainerOffsetRect = getFixedContainerOffsetRect;
exports.default = toFixedOffset;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals window, document */

var fixedContainers = new _weakMap2.default();

// feature detect for css fixed position layout.
// IE11 doesn't follow the CSS spec and doesn't need the
// adjustments we implement here
var FIXED_OFFSET = function () {
  var container = document.createElement("div");
  container.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
  container.style.position = "absolute";
  container.style.top = "1px";
  container.style.left = "1px";
  var fixed = document.createElement("div");
  fixed.style.position = "fixed";
  fixed.style.top = "1px";
  fixed.style.left = "1px";
  document.body.appendChild(container);
  container.appendChild(fixed);
  var position = fixed.getBoundingClientRect();
  document.body.removeChild(container);
  return position.top === 2 && position.left === 2;
}();

function parents(element) {
  var parents = [];
  while (element = element.parentElement) {
    parents.push(element);
  }
  return parents;
}

var ROOT_ELEMENT = document.body.parentElement;

function hasTransform(element) {
  var transform = window.getComputedStyle(element).transform || "none";
  return transform !== "none";
}

// position: fixed top and left are calculated from
// the containing block orign, not the document origin
// so, check parents for closest element with transform (if any)
// and use that as fixed base
function getFixedContainer(element) {
  if (fixedContainers.has(element)) return fixedContainers.get(element);

  var container = parents(element).find(function (element) {
    return !element.parentElement || hasTransform(element);
  });
  fixedContainers.set(element, container);

  return container;
}

function getFixedContainerOffsetRect(element) {
  var container = getFixedContainer(element);

  return container === ROOT_ELEMENT ? null : container.getBoundingClientRect();
}

// adjust top and left for position:fixed containing block
// see https://www.w3.org/TR/css-transforms-1/#propdef-transform
function toFixedOffset(placement, element) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$detect = _ref.detect,
      detect = _ref$detect === undefined ? true : _ref$detect;

  if (detect && !FIXED_OFFSET) return placement;

  var base = getFixedContainerOffsetRect(element);

  if (base) {
    var position = placement.position,
        rect = placement.rect;


    return {
      position: position,
      rect: (0, _extends3.default)({}, rect, {
        top: rect.top - base.top,
        left: rect.left - base.left
      })
    };
  } else {
    return placement;
  }
}