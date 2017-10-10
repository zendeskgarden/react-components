var isInsideViewport = function isInsideViewport(_ref) {
  var target = _ref.target,
      viewport = _ref.viewport;

  return target.top >= 0 && target.left >= 0 && target.left + target.width <= viewport.width && target.top + target.height <= viewport.height;
};

export default isInsideViewport;