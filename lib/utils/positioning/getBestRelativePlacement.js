import _extends from "babel-runtime/helpers/extends";
import positionRelative from "./positionRelative";
import isInsideViewport from "./isInsideViewport";
import distance from "./distance";
import keepInViewport from "./keepInViewport";

var getBestRelativePlacement = function getBestRelativePlacement(_ref) {
  var anchor = _ref.anchor,
      centerPoint = _ref.centerPoint,
      positions = _ref.positions,
      target = _ref.target,
      viewport = _ref.viewport;

  var possiblePlacements = positions.map(function (position) {
    return {
      rect: positionRelative({
        anchor: anchor,
        centerPoint: centerPoint,
        position: position,
        target: target
      }),
      position: position
    };
  });

  var placementWithinViewport = possiblePlacements.find(function (placement) {
    return isInsideViewport({
      target: placement.rect,
      viewport: viewport
    });
  });

  if (placementWithinViewport) {
    return placementWithinViewport;
  }

  var bestPlacement = possiblePlacements.map(function (placement) {
    return _extends({
      distance: distance(placement.rect, keepInViewport({
        target: placement.rect,
        viewport: viewport
      }))
    }, placement);
  }).sort(function (a, b) {
    return a.distance - b.distance;
  })[0];

  var anchorIsInsideViewport = isInsideViewport({
    target: anchor,
    viewport: viewport
  });

  if (anchorIsInsideViewport) {
    return {
      rect: keepInViewport({
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

export default getBestRelativePlacement;