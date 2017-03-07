'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _positionRelative = require('./positionRelative');

var _positionRelative2 = _interopRequireDefault(_positionRelative);

var _isInsideViewport = require('./isInsideViewport');

var _isInsideViewport2 = _interopRequireDefault(_isInsideViewport);

var _distance = require('./distance');

var _distance2 = _interopRequireDefault(_distance);

var _keepInViewport = require('./keepInViewport');

var _keepInViewport2 = _interopRequireDefault(_keepInViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBestRelativePlacement = function getBestRelativePlacement(_ref) {
  var anchor = _ref.anchor,
      centerPoint = _ref.centerPoint,
      positions = _ref.positions,
      target = _ref.target,
      viewport = _ref.viewport;

  var possiblePlacements = positions.map(function (position) {
    return {
      rect: (0, _positionRelative2.default)({
        anchor: anchor,
        centerPoint: centerPoint,
        position: position,
        target: target
      }),
      position: position
    };
  });

  var placementWithinViewport = possiblePlacements.find(function (placement) {
    return (0, _isInsideViewport2.default)({
      target: placement.rect,
      viewport: viewport
    });
  });

  if (placementWithinViewport) {
    return placementWithinViewport;
  }

  var bestPlacement = possiblePlacements.map(function (placement) {
    return (0, _extends3.default)({
      distance: (0, _distance2.default)(placement.rect, (0, _keepInViewport2.default)({
        target: placement.rect,
        viewport: viewport
      }))
    }, placement);
  }).sort(function (a, b) {
    return a.distance - b.distance;
  })[0];

  var anchorIsInsideViewport = (0, _isInsideViewport2.default)({
    target: anchor,
    viewport: viewport
  });

  if (anchorIsInsideViewport) {
    return {
      rect: (0, _keepInViewport2.default)({
        target: bestPlacement.rect,
        viewport: viewport
      }),
      position: bestPlacement.position
    };
  } else {
    return {
      rect: bestPlacement.rect,
      position: bestPlacement.position
    };
  }
};

exports.default = getBestRelativePlacement;