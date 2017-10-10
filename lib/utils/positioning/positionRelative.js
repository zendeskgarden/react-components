var calculateTargetBasedOnPosition = {
  bottom: function bottom(_ref) {
    var anchor = _ref.anchor,
        target = _ref.target;
    return {
      top: anchor.top + anchor.margins.bottom + anchor.height,
      left: anchor.left + anchor.width / 2 - target.width / 2,
      height: target.height,
      width: target.width
    };
  },
  bottom_left: function bottom_left(_ref2) {
    var anchor = _ref2.anchor,
        centerPoint = _ref2.centerPoint,
        target = _ref2.target;
    return {
      top: anchor.top + anchor.margins.bottom + anchor.height,
      left: typeof centerPoint === "number" ? anchor.left + anchor.width / 2 - target.width + centerPoint : anchor.left + anchor.width - target.width,
      height: target.height,
      width: target.width
    };
  },
  bottom_right: function bottom_right(_ref3) {
    var anchor = _ref3.anchor,
        centerPoint = _ref3.centerPoint,
        target = _ref3.target;
    return {
      top: anchor.top + anchor.margins.bottom + anchor.height,
      left: typeof centerPoint === "number" ? anchor.left + anchor.width / 2 - centerPoint : anchor.left,
      height: target.height,
      width: target.width
    };
  },
  bottom_stretch: function bottom_stretch(_ref4) {
    var anchor = _ref4.anchor,
        target = _ref4.target;
    return {
      top: anchor.top + anchor.margins.bottom + anchor.height,
      left: anchor.left,
      height: target.height,
      width: anchor.width
    };
  },
  left: function left(_ref5) {
    var anchor = _ref5.anchor,
        target = _ref5.target;
    return {
      top: anchor.top + anchor.height / 2 - target.height / 2,
      left: anchor.left - anchor.margins.left - target.width,
      height: target.height,
      width: target.width
    };
  },
  left_top: function left_top(_ref6) {
    var anchor = _ref6.anchor,
        target = _ref6.target;
    return {
      top: anchor.top,
      left: anchor.left - anchor.margins.left - target.width,
      height: target.height,
      width: target.width
    };
  },
  left_bottom: function left_bottom(_ref7) {
    var anchor = _ref7.anchor,
        target = _ref7.target;
    return {
      top: anchor.top + anchor.margins.top + anchor.height - target.height,
      left: anchor.left - anchor.margins.left - target.width,
      height: target.height,
      width: target.width
    };
  },
  right: function right(_ref8) {
    var anchor = _ref8.anchor,
        target = _ref8.target;
    return {
      top: anchor.top + anchor.height / 2 - target.height / 2,
      left: anchor.left + anchor.margins.right + anchor.width,
      height: target.height,
      width: target.width
    };
  },
  right_top: function right_top(_ref9) {
    var anchor = _ref9.anchor,
        target = _ref9.target;
    return {
      top: anchor.top,
      left: anchor.left + anchor.margins.right + anchor.width,
      height: target.height,
      width: target.width
    };
  },
  right_bottom: function right_bottom(_ref10) {
    var anchor = _ref10.anchor,
        target = _ref10.target;
    return {
      top: anchor.top + anchor.margins.top + anchor.height - target.height,
      left: anchor.left + anchor.margins.right + anchor.width,
      height: target.height,
      width: target.width
    };
  },
  top: function top(_ref11) {
    var anchor = _ref11.anchor,
        target = _ref11.target;
    return {
      top: anchor.top - anchor.margins.top - target.height,
      left: anchor.left + anchor.width / 2 - target.width / 2,
      height: target.height,
      width: target.width
    };
  },
  top_left: function top_left(_ref12) {
    var anchor = _ref12.anchor,
        centerPoint = _ref12.centerPoint,
        target = _ref12.target;
    return {
      top: anchor.top - anchor.margins.top - target.height,
      left: typeof centerPoint === "number" ? anchor.left + anchor.width / 2 - target.width + centerPoint : anchor.left + anchor.width - target.width,
      height: target.height,
      width: target.width
    };
  },
  top_right: function top_right(_ref13) {
    var anchor = _ref13.anchor,
        centerPoint = _ref13.centerPoint,
        target = _ref13.target;
    return {
      top: anchor.top - anchor.margins.top - target.height,
      left: typeof centerPoint === "number" ? anchor.left + anchor.width / 2 - centerPoint : anchor.left,
      height: target.height,
      width: target.width
    };
  },
  top_stretch: function top_stretch(_ref14) {
    var anchor = _ref14.anchor,
        target = _ref14.target;
    return {
      top: anchor.top - anchor.margins.top - target.height,
      left: anchor.left,
      height: target.height,
      width: anchor.width
    };
  }
};

var positionRelative = function positionRelative(_ref15) {
  var anchor = _ref15.anchor,
      centerPoint = _ref15.centerPoint,
      position = _ref15.position,
      target = _ref15.target;

  var repositionedTarget = calculateTargetBasedOnPosition[position]({
    anchor: anchor,
    centerPoint: centerPoint,
    target: target
  });

  return {
    top: repositionedTarget.top,
    left: repositionedTarget.left,
    height: repositionedTarget.height,
    width: repositionedTarget.width
  };
};

export default positionRelative;