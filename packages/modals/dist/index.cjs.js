/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var styled = require('styled-components');
var PropTypes = require('prop-types');
var reactTheming = require('@zendeskgarden/react-theming');
var containerModal = require('@zendeskgarden/container-modal');
var reactMergeRefs = require('react-merge-refs');
var isWindow = require('dom-helpers/isWindow');
var ownerDocument = require('dom-helpers/ownerDocument');
var ownerWindow = require('dom-helpers/ownerWindow');
var css = require('dom-helpers/css');
var getScrollbarSize = require('dom-helpers/scrollbarSize');
var reactButtons = require('@zendeskgarden/react-buttons');
var reactTransitionGroup = require('react-transition-group');
var reactDom = require('@floating-ui/react-dom');
var activeElement = require('dom-helpers/activeElement');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var ReactDOM__default = /*#__PURE__*/_interopDefault(ReactDOM);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var isWindow__default = /*#__PURE__*/_interopDefault(isWindow);
var ownerDocument__default = /*#__PURE__*/_interopDefault(ownerDocument);
var ownerWindow__default = /*#__PURE__*/_interopDefault(ownerWindow);
var css__default = /*#__PURE__*/_interopDefault(css);
var getScrollbarSize__default = /*#__PURE__*/_interopDefault(getScrollbarSize);
var activeElement__default = /*#__PURE__*/_interopDefault(activeElement);

const COMPONENT_ID$j = 'modals.backdrop';
const animationName$1 = styled.keyframes(["0%{opacity:0;}100%{opacity:1;}"]);
const animationStyles$1 = props => {
  if (props.$isAnimated) {
    return styled.css(["animation:", " 0.15s ease-in;"], animationName$1);
  }
  return '';
};
const StyledBackdrop = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBackdrop",
  componentId: "sc-mzdjpo-0"
})(["display:flex;position:fixed;inset:0;align-items:", ";justify-content:", ";z-index:400;background-color:", ";overflow:auto;-webkit-overflow-scrolling:touch;font-family:", ";direction:", ";", ";", ";"], props => props.$isCentered && 'center', props => props.$isCentered && 'center', _ref => {
  let {
    theme
  } = _ref;
  return reactTheming.getColor({
    theme,
    hue: 'neutralHue',
    transparency: theme.opacity[1000],
    light: {
      shade: 900
    },
    dark: {
      shade: 1200
    }
  });
}, props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', animationStyles$1, reactTheming.componentStyles);
StyledBackdrop.propTypes = {
  $isCentered: PropTypes__default.default.bool,
  $isAnimated: PropTypes__default.default.bool
};

const COMPONENT_ID$i = 'modals.body';
const StyledBody = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBody",
  componentId: "sc-14rzecg-0"
})(["display:block;margin:0;padding:", ";height:100%;overflow:auto;line-height:", ";color-scheme:only ", ";color:", ";font-size:", ";", ";"], props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`, props => reactTheming.getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), p => p.theme.colors.base, _ref => {
  let {
    theme
  } = _ref;
  return reactTheming.getColor({
    theme,
    variable: 'foreground.default'
  });
}, props => props.theme.fontSizes.md, reactTheming.componentStyles);

const COMPONENT_ID$h = 'modals.close';
const BASE_MULTIPLIERS$1 = {
  top: 2.5,
  side: 6.5,
  size: 10
};
const StyledClose = styled__default.default(reactButtons.IconButton).attrs({
  'data-garden-id': COMPONENT_ID$h,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledClose",
  componentId: "sc-iseudj-0"
})(["position:absolute;top:", "px;", ":", ";", ";"], props => props.theme.space.base * BASE_MULTIPLIERS$1.top, props => props.theme.rtl ? 'left' : 'right', props => `${props.theme.space.base * BASE_MULTIPLIERS$1.side}px`, reactTheming.componentStyles);

const COMPONENT_ID$g = 'modals.footer';
const StyledFooter = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFooter",
  componentId: "sc-d8pfdu-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:flex-end;border-top:", ";padding:", ";", ";"], props => props.$isLarge && `${props.theme.borders.sm} ${reactTheming.getColor({
  theme: props.theme,
  variable: 'border.default'
})}`, props => props.$isLarge ? `${props.theme.space.base * 8}px ${props.theme.space.base * 10}px` : `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px ${props.theme.space.base * 8}px`, reactTheming.componentStyles);

const COMPONENT_ID$f = 'modals.footer_item';
const StyledFooterItem = styled__default.default.span.attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFooterItem",
  componentId: "sc-1mb76hl-0"
})(["display:flex;margin-", ":", "px;min-width:0;&:first-child{margin-", ":0;}", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 5, props => props.theme.rtl ? 'right' : 'left', reactTheming.componentStyles);

const COMPONENT_ID$e = 'modals.header';
const colorStyles$2 = _ref => {
  let {
    $isDanger,
    theme
  } = _ref;
  const bottomBorderColor = reactTheming.getColor({
    theme,
    variable: 'border.subtle'
  });
  const color = reactTheming.getColor({
    theme,
    variable: $isDanger ? 'foreground.danger' : 'foreground.default'
  });
  return styled.css(["border-bottom-color:", ";color:", ";"], bottomBorderColor, color);
};
const StyledHeader = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$e,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeader",
  componentId: "sc-1787r9v-0"
})(["display:block;position:", ";margin:0;border-bottom:", ";padding:", ";", "  line-height:", ";font-size:", ";font-weight:", ";", ";", ";"], props => props.$isDanger && 'relative', props => props.theme.borders.sm, props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`, props => props.$isCloseButtonPresent && `padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * (BASE_MULTIPLIERS$1.size + BASE_MULTIPLIERS$1.side + 2)}px;`, props => reactTheming.getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), props => props.theme.fontSizes.md, props => props.theme.fontWeights.semibold, colorStyles$2, reactTheming.componentStyles);

var _g, _circle;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgAlertErrorStroke = function SvgAlertErrorStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 8.5,
    r: 7
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    d: "M7.5 4.5V9"
  }))), _circle || (_circle = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    fill: "currentColor"
  })));
};

const StyledDangerIcon = styled__default.default(SvgAlertErrorStroke).withConfig({
  displayName: "StyledDangerIcon",
  componentId: "sc-1kwbb39-0"
})(["position:absolute;top:", "px;", ":", ";"], props => props.theme.space.base * 5.5, props => props.theme.rtl ? 'right' : 'left', props => `${props.theme.space.base * 4}px`);

const COMPONENT_ID$d = 'modals.modal';
const animationName = styled.keyframes(["0%{transform:scale(0);opacity:0;}50%{transform:scale(1.05);}100%{opacity:1;}"]);
const animationStyles = props => {
  if (props.$isAnimated) {
    return styled.css(["animation:", " 0.3s ease-in;"], animationName);
  }
  return '';
};
const colorStyles$1 = _ref => {
  let {
    theme
  } = _ref;
  const offsetY = `${theme.space.base * 5}px`;
  const blurRadius = `${theme.space.base * 7}px`;
  const shadowColor = reactTheming.getColor({
    variable: 'shadow.large',
    theme
  });
  const shadow = theme.shadows.lg(offsetY, blurRadius, shadowColor);
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.raised'
  });
  return styled.css(["border-color:", ";box-shadow:", ";background-color:", ";"], borderColor, shadow, backgroundColor);
};
const sizeStyles$2 = props => {
  return styled.css(["", "{width:", ";}"], reactTheming.mediaQuery('up', props.$isLarge ? 'md' : 'sm', props.theme), props.$isLarge ? props.theme.breakpoints.md : props.theme.breakpoints.sm);
};
const StyledModal = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledModal",
  componentId: "sc-1pe1axu-0"
})(["display:flex;position:fixed;flex-direction:column;animation-delay:0.01s;margin:", ";border:", ";border-radius:", ";min-height:60px;max-height:calc(100vh - ", "px);overflow:auto;direction:", ";", ";", ";", ";&:focus{outline:none;}@media (max-height:399px){top:", "px;bottom:auto;margin-bottom:", "px;max-height:calc(100vh - ", "px);}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){right:", ";bottom:", ";transform:", ";}", ";"], props => props.$isCentered ? '0' : `${props.theme.space.base * 12}px`, props => props.theme.borders.sm, props => props.theme.borderRadii.md, props => props.theme.space.base * 24, props => props.theme.rtl && 'rtl', animationStyles, sizeStyles$2, colorStyles$1, props => props.theme.space.base * 6, props => props.theme.space.base * 6, props => props.theme.space.base * 12, props => props.$isCentered && '50%', props => props.$isCentered && '50%', props => props.$isCentered && 'translate(50%, 50%)', reactTheming.componentStyles);
StyledModal.propTypes = {
  $isLarge: PropTypes__default.default.bool,
  $isAnimated: PropTypes__default.default.bool
};

function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}

function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": "remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n",
  "78": "base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"
};
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var a = args[0];
  var b = [];
  var c;
  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }
  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
var PolishedError = function (_Error) {
  _inheritsLoose(PolishedError, _Error);
  function PolishedError(code) {
    var _this;
    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError;
}(_wrapNativeSuper(Error));
function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }
  if (saturation === 0) {
    return convert(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color) {
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;
  if (max === min) {
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }
  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }
  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}
function parseToHsl(color) {
  return rgbToHsl(parseToRgb(color));
}
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }
  throw new PolishedError(1);
}
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }
  throw new PolishedError(2);
}
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};
var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};
var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};
var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}
function curried(f, length, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
}
function curry(f) {
  return curried(f, f.length, []);
}
function adjustHue(degree, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    hue: hslColor.hue + parseFloat(degree)
  }));
}
curry (adjustHue);
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}
curry (darken);
function desaturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
}
curry (desaturate);
function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}
curry (lighten);
function mix(weight, color, otherColor) {
  if (color === 'transparent') return otherColor;
  if (otherColor === 'transparent') return color;
  if (weight === 0) return otherColor;
  var parsedColor1 = parseToRgb(color);
  var color1 = _extends$1({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });
  var parsedColor2 = parseToRgb(otherColor);
  var color2 = _extends$1({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1
  });
  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha * parseFloat(weight) + color2.alpha * (1 - parseFloat(weight))
  };
  return rgba(mixedColor);
}
var curriedMix = curry (mix);
var mix$1 = curriedMix;
function opacify(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });
  return rgba(colorWithAlpha);
}
curry (opacify);
function saturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
}
curry (saturate);
function setHue(hue, color) {
  if (color === 'transparent') return color;
  return toColorString(_extends$1({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
}
curry (setHue);
function setLightness(lightness, color) {
  if (color === 'transparent') return color;
  return toColorString(_extends$1({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
}
curry (setLightness);
function setSaturation(saturation, color) {
  if (color === 'transparent') return color;
  return toColorString(_extends$1({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
}
curry (setSaturation);
function shade(percentage, color) {
  if (color === 'transparent') return color;
  return mix$1(parseFloat(percentage), 'rgb(0, 0, 0)', color);
}
curry (shade);
function tint(percentage, color) {
  if (color === 'transparent') return color;
  return mix$1(parseFloat(percentage), 'rgb(255, 255, 255)', color);
}
curry (tint);
function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba(colorWithAlpha);
}
curry (transparentize);

const COMPONENT_ID$c = 'modals.tooltip_dialog.backdrop';
const StyledTooltipDialogBackdrop = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogBackdrop",
  componentId: "sc-zrk625-0"
})(["position:fixed;inset:0;z-index:400;overflow:hidden;-webkit-overflow-scrolling:touch;font-family:", ";direction:", ";&.garden-tooltip-modal-transition-exit-active{pointer-events:none;}&.garden-tooltip-modal-transition-exit-active div{transition:opacity 200ms;opacity:0;}", " ", ";"], props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', props => props['aria-hidden'] && hideVisually(), reactTheming.componentStyles);

const StyledTooltipWrapper = styled__default.default.div.attrs(props => ({
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledTooltipWrapper",
  componentId: "sc-1xk05kf-0"
})(["top:0;left:0;", ";"], props => reactTheming.menuStyles(reactTheming.getMenuPosition(props.$placement), {
  theme: props.theme,
  hidden: false,
  zIndex: props.$zIndex,
  animationModifier: '.is-animated'
}));

const COMPONENT_ID$b = 'modals.tooltip_dialog.close';
const StyledTooltipDialogClose = styled__default.default(StyledClose).attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogClose",
  componentId: "sc-18xlgfi-0"
})(["top:", "px;", ":", ";", ";"], props => props.theme.space.base * 3.5, props => props.theme.rtl ? 'left' : 'right', props => `${props.theme.space.base * 3}px`, reactTheming.componentStyles);

const COMPONENT_ID$a = 'modals.tooltip_dialog';
const sizeStyles$1 = props => `
  padding: ${props.theme.space.base * 5}px;
  width: 400px;
  
  &:has(${StyledTooltipDialogClose}) > :first-child {
    padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * 8}px;
  }
`;
const StyledTooltipDialog = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3',
  className: props.$isAnimated ? 'is-animated' : undefined
})).withConfig({
  displayName: "StyledTooltipDialog",
  componentId: "sc-iv3db-0"
})(["", ";", " ", ";"], props => {
  const computedArrowStyles = reactTheming.arrowStyles(reactTheming.getArrowPosition(props.theme, props.$placement), {
    size: `${props.theme.space.base * 2}px`,
    inset: '1px',
    animationModifier: '.is-animated'
  });
  if (props.$isAnimated) {
    return props.$hasArrow && props.$transitionState === 'entered' && computedArrowStyles;
  }
  return props.$hasArrow && computedArrowStyles;
}, sizeStyles$1, reactTheming.componentStyles);

const COMPONENT_ID$9 = 'modals.tooltip_dialog.title';
const sizeStyles = props => `
  /* stylelint-disable-next-line property-no-unknown */
  line-height: ${reactTheming.getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  font-size: ${props.theme.fontSizes.md};
`;
const StyledTooltipDialogTitle = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogTitle",
  componentId: "sc-1rceixg-0"
})(["margin:0;color:", ";font-weight:", ";", ";", ";"], _ref => {
  let {
    theme
  } = _ref;
  return reactTheming.getColor({
    variable: 'foreground.default',
    theme
  });
}, props => props.theme.fontWeights.semibold, props => sizeStyles(props), reactTheming.componentStyles);

const COMPONENT_ID$8 = 'modals.tooltip_dialog.body';
const StyledTooltipDialogBody = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogBody",
  componentId: "sc-132lcoq-0"
})(["display:block;margin:0;padding-top:", "px;line-height:", ";color-scheme:only ", ";color:", ";font-size:", ";", ";"], props => props.theme.space.base * 1.5, props => reactTheming.getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), p => p.theme.colors.base, _ref => {
  let {
    theme
  } = _ref;
  return reactTheming.getColor({
    variable: 'foreground.default',
    theme
  });
}, props => props.theme.fontSizes.md, reactTheming.componentStyles);

const COMPONENT_ID$7 = 'modals.tooltip_dialog.footer';
const StyledTooltipDialogFooter = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogFooter",
  componentId: "sc-kjomsm-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:flex-end;padding-top:", "px;", ";"], p => p.theme.space.base * 5, reactTheming.componentStyles);

const COMPONENT_ID$6 = 'modals.tooltip_dialog.footer_item';
const StyledTooltipDialogFooterItem = styled__default.default(StyledFooterItem).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogFooterItem",
  componentId: "sc-u2rmo8-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$5 = 'modals.drawer_modal';
const DRAWER_WIDTH = 380;
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const offsetY = `${theme.space.base * 5}px`;
  const blurRadius = `${theme.space.base * 7}px`;
  const shadowColor = reactTheming.getColor({
    variable: 'shadow.large',
    theme
  });
  const shadow = theme.shadows.lg(offsetY, blurRadius, shadowColor);
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.raised'
  });
  return styled.css(["border-color:", ";box-shadow:", ";background-color:", ";"], borderColor, shadow, backgroundColor);
};
const StyledDrawer = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawer",
  componentId: "sc-zp66t3-0"
})(["display:flex;position:fixed;top:0;", ":0;flex-direction:column;z-index:500;", ":", ";width:", "px;height:100%;overflow:auto;-webkit-overflow-scrolling:touch;font-family:", ";direction:", ";&.garden-drawer-transition-enter{transform:translateX(", "px);}&.garden-drawer-transition-enter-active{transform:translateX(0);transition:transform 0.25s ease-in-out;}&.garden-drawer-transition-exit-active{transform:translateX(", "px);transition:transform 0.25s ease-in-out;}&:focus{outline:none;}", " ", ";"], props => props.theme.rtl ? 'left' : 'right', props => props.theme.rtl ? 'border-right' : 'border-left', props => props.theme.borders.sm, DRAWER_WIDTH, props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', props => props.theme.rtl ? -DRAWER_WIDTH : DRAWER_WIDTH, props => props.theme.rtl ? -DRAWER_WIDTH : DRAWER_WIDTH, colorStyles, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'modals.drawer_modal.close';
const BASE_MULTIPLIERS = {
  top: BASE_MULTIPLIERS$1.top,
  side: 2,
  size: BASE_MULTIPLIERS$1.size
};
const StyledDrawerClose = styled__default.default(StyledClose).attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerClose",
  componentId: "sc-1a0xt3x-0"
})(["", ":", ";", ";"], props => props.theme.rtl ? 'left' : 'right', props => `${props.theme.space.base * BASE_MULTIPLIERS.side}px`, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'modals.drawer_modal.header';
const StyledDrawerHeader = styled__default.default(StyledHeader).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerHeader",
  componentId: "sc-y4mgkj-0"
})(["padding:", "px;", "  ", ";"], props => props.theme.space.base * 5, props => props.$isCloseButtonPresent && `padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * (BASE_MULTIPLIERS.size + BASE_MULTIPLIERS.side + 2)}px;`, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'modals.drawer_modal.body';
const StyledDrawerBody = styled__default.default(StyledBody).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerBody",
  componentId: "sc-13qufyn-0"
})(["padding:", "px;color-scheme:only ", ";", ";"], props => props.theme.space.base * 5, p => p.theme.colors.base, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'modals.drawer_modal.footer';
const StyledDrawerFooter = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerFooter",
  componentId: "sc-kc7e6p-0"
})(["display:flex;flex-shrink:0;justify-content:flex-end;border-top:", ";padding:", "px;", ";"], _ref => {
  let {
    theme
  } = _ref;
  return `${theme.borders.sm} ${reactTheming.getColor({
    theme,
    variable: 'border.subtle'
  })}`;
}, props => props.theme.space.base * 5, reactTheming.componentStyles);

const COMPONENT_ID = 'modals.drawer_modal.footer_item';
const StyledDrawerFooterItem = styled__default.default(StyledFooterItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerFooterItem",
  componentId: "sc-m2yul4-0"
})(["", ";"], reactTheming.componentStyles);

const ModalsContext = React.createContext(undefined);
const useModalContext = () => {
  const context = React.useContext(ModalsContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalsContext.Provider');
  }
  return context;
};

const Body$2 = React.forwardRef((props, ref) => {
  const {
    getContentProps
  } = useModalContext();
  return React__namespace.default.createElement(StyledBody, Object.assign({}, getContentProps(props), {
    ref: ref
  }));
});
Body$2.displayName = 'Modal.Body';

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgXStroke = function SvgXStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3 13L13 3m0 10L3 3"
  })));
};

const Close$2 = React.forwardRef((props, ref) => {
  const {
    getCloseProps,
    setIsCloseButtonPresent
  } = useModalContext();
  React.useEffect(() => {
    setIsCloseButtonPresent(true);
    return () => setIsCloseButtonPresent(false);
  });
  const ariaLabel = reactTheming.useText(Close$2, props, 'aria-label', 'Close modal', props['aria-describedby'] === undefined );
  return React__namespace.default.createElement(StyledClose, Object.assign({}, getCloseProps({
    ...props,
    'aria-label': ariaLabel
  }), {
    ref: ref
  }), React__namespace.default.createElement(SvgXStroke, null));
});
Close$2.displayName = 'Modal.Close';

const Footer$2 = React__namespace.default.forwardRef((props, ref) => {
  const {
    isLarge
  } = useModalContext();
  return React__namespace.default.createElement(StyledFooter, Object.assign({
    ref: ref,
    $isLarge: isLarge
  }, props));
});
Footer$2.displayName = 'Modal.Footer';

const FooterItem$2 = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(StyledFooterItem, Object.assign({
  ref: ref
}, props)));
FooterItem$2.displayName = 'Modal.FooterItem';

const Header$1 = React.forwardRef((_ref, ref) => {
  let {
    children,
    isDanger,
    tag = 'div',
    ...other
  } = _ref;
  const {
    isCloseButtonPresent,
    hasHeader,
    setHasHeader,
    getTitleProps
  } = useModalContext();
  React.useEffect(() => {
    if (!hasHeader && setHasHeader) {
      setHasHeader(true);
    }
    return () => {
      if (hasHeader && setHasHeader) {
        setHasHeader(false);
      }
    };
  }, [hasHeader, setHasHeader]);
  return React__namespace.default.createElement(StyledHeader, Object.assign({}, getTitleProps(other), {
    as: tag,
    $isCloseButtonPresent: isCloseButtonPresent,
    $isDanger: isDanger,
    ref: ref
  }), !!isDanger && React__namespace.default.createElement(StyledDangerIcon, null), children);
});
Header$1.displayName = 'Modal.Header';
Header$1.propTypes = {
  isDanger: PropTypes__default.default.bool,
  tag: PropTypes__default.default.any
};

const isOverflowing = element => {
  const doc = ownerDocument__default.default(element);
  const win = ownerWindow__default.default(doc);
  const isBody = element && element.tagName.toLowerCase() === 'body';
  if (!isWindow__default.default(doc) && !isBody) {
    return element.scrollHeight > element.clientHeight;
  }
  const style = win.getComputedStyle(doc.body);
  const marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  const marginRight = parseInt(style.getPropertyValue('margin-right'), 10);
  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
};
const ModalComponent = React.forwardRef((_ref, ref) => {
  let {
    backdropProps,
    children,
    onClose,
    isLarge,
    isCentered = true,
    isAnimated = true,
    id,
    appendToNode,
    focusOnMount,
    restoreFocus,
    ...modalProps
  } = _ref;
  const theme = React.useContext(styled.ThemeContext);
  const modalRef = React.useRef(null);
  const environment = reactTheming.useDocument(theme);
  const [isCloseButtonPresent, setIsCloseButtonPresent] = React.useState(false);
  const [hasHeader, setHasHeader] = React.useState(false);
  const {
    getBackdropProps,
    getModalProps,
    getTitleProps,
    getContentProps,
    getCloseProps
  } = containerModal.useModal({
    idPrefix: id,
    onClose,
    modalRef,
    focusOnMount,
    restoreFocus,
    environment
  });
  React.useEffect(() => {
    if (!environment) {
      return undefined;
    }
    const htmlElement = environment.querySelector('html');
    const bodyElement = environment.querySelector('body');
    let previousHtmlOverflow;
    let previousBodyPaddingRight;
    if (bodyElement) {
      if (isOverflowing(bodyElement)) {
        const scrollbarSize = getScrollbarSize__default.default();
        const bodyPaddingRight = parseInt(css__default.default(bodyElement, 'paddingRight') || '0', 10);
        previousBodyPaddingRight = bodyElement.style.paddingRight;
        bodyElement.style.paddingRight = `${bodyPaddingRight + scrollbarSize}px`;
      }
      if (htmlElement) {
        previousHtmlOverflow = htmlElement.style.overflow;
        htmlElement.style.overflow = 'hidden';
      }
      return () => {
        if (htmlElement) {
          htmlElement.style.overflow = previousHtmlOverflow;
        }
        bodyElement.style.paddingRight = previousBodyPaddingRight;
      };
    }
    return undefined;
  }, [environment]);
  const rootNode = React.useMemo(() => {
    if (appendToNode) {
      return appendToNode;
    }
    if (environment) {
      return environment.body;
    }
    return undefined;
  }, [appendToNode, environment]);
  const value = React.useMemo(() => ({
    isLarge,
    isCloseButtonPresent,
    hasHeader,
    setHasHeader,
    getTitleProps,
    getContentProps,
    getCloseProps,
    setIsCloseButtonPresent
  }), [isLarge, hasHeader, isCloseButtonPresent, getTitleProps, getContentProps, getCloseProps]);
  const modalContainerProps = getModalProps({
    'aria-describedby': undefined,
    ...(hasHeader ? {} : {
      'aria-labelledby': undefined
    })
  });
  const attribute = hasHeader ? 'aria-labelledby' : 'aria-label';
  const defaultValue = hasHeader ? modalContainerProps['aria-labelledby'] : 'Modal dialog';
  const labelValue = hasHeader ? modalContainerProps['aria-labelledby'] : modalProps['aria-label'];
  const ariaProps = {
    [attribute]: reactTheming.useText(ModalComponent, {
      [attribute]: labelValue
    }, attribute, defaultValue, modalRef.current !== null )
  };
  if (!rootNode) {
    return null;
  }
  return ReactDOM.createPortal(React__namespace.default.createElement(ModalsContext.Provider, {
    value: value
  }, React__namespace.default.createElement(StyledBackdrop, Object.assign({
    $isCentered: isCentered,
    $isAnimated: isAnimated
  }, getBackdropProps(backdropProps)), React__namespace.default.createElement(StyledModal, Object.assign({
    $isCentered: isCentered,
    $isAnimated: isAnimated,
    $isLarge: isLarge
  }, modalContainerProps, ariaProps, modalProps, {
    ref: reactMergeRefs.mergeRefs([ref, modalRef])
  }), children))), rootNode);
});
ModalComponent.displayName = 'Modal';
ModalComponent.propTypes = {
  backdropProps: PropTypes__default.default.object,
  isLarge: PropTypes__default.default.bool,
  isAnimated: PropTypes__default.default.bool,
  isCentered: PropTypes__default.default.bool,
  focusOnMount: PropTypes__default.default.bool,
  restoreFocus: PropTypes__default.default.bool,
  onClose: PropTypes__default.default.func,
  appendToNode: PropTypes__default.default.any
};
const Modal = ModalComponent;
Modal.Body = Body$2;
Modal.Close = Close$2;
Modal.Footer = Footer$2;
Modal.FooterItem = FooterItem$2;
Modal.Header = Header$1;

const TooltipDialogContext = React.createContext(undefined);
const useTooltipDialogContext = () => {
  const context = React.useContext(TooltipDialogContext);
  if (context === undefined) {
    throw new Error('Element must be used within a TooltipDialog component.');
  }
  return context;
};

const PLACEMENT = ['auto', ...reactTheming.PLACEMENT];

const TitleComponent = React.forwardRef((_ref, ref) => {
  let {
    children,
    tag = 'div',
    ...other
  } = _ref;
  const {
    getTitleProps,
    hasTitle,
    setHasTitle
  } = useTooltipDialogContext();
  React.useEffect(() => {
    if (!hasTitle && setHasTitle) {
      setHasTitle(true);
    }
    return () => {
      if (hasTitle && setHasTitle) {
        setHasTitle(false);
      }
    };
  }, [hasTitle, setHasTitle]);
  return React__namespace.default.createElement(StyledTooltipDialogTitle, Object.assign({}, getTitleProps(other), {
    as: tag,
    ref: ref
  }), children);
});
TitleComponent.displayName = 'TooltipDialog.Title';
TitleComponent.propTypes = {
  tag: PropTypes__default.default.any
};
const Title = TitleComponent;

const BodyComponent$1 = React.forwardRef((props, ref) => {
  const {
    getContentProps
  } = useTooltipDialogContext();
  return React__namespace.default.createElement(StyledTooltipDialogBody, Object.assign({}, getContentProps(props), {
    ref: ref
  }));
});
BodyComponent$1.displayName = 'TooltipDialog.Body';
const Body$1 = BodyComponent$1;

const CloseComponent$1 = React.forwardRef((props, ref) => {
  const {
    getCloseProps
  } = useTooltipDialogContext();
  const ariaLabel = reactTheming.useText(CloseComponent$1, props, 'aria-label', 'Close tooltip', props['aria-describedby'] === undefined );
  return React__namespace.default.createElement(StyledTooltipDialogClose, Object.assign({}, getCloseProps({
    ...props,
    'aria-label': ariaLabel
  }), {
    ref: ref,
    size: "small"
  }), React__namespace.default.createElement(SvgXStroke, null));
});
CloseComponent$1.displayName = 'TooltipDialog.Close';
const Close$1 = CloseComponent$1;

const FooterComponent$1 = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledTooltipDialogFooter, Object.assign({
  ref: ref
}, props)));
FooterComponent$1.displayName = 'TooltipDialog.Footer';
const Footer$1 = FooterComponent$1;

const FooterItemComponent$1 = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledTooltipDialogFooterItem, Object.assign({
  ref: ref
}, props)));
FooterItemComponent$1.displayName = 'TooltipDialog.FooterItem';
const FooterItem$1 = FooterItemComponent$1;

const PLACEMENT_DEFAULT = 'top';
const TooltipDialogComponent = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    appendToNode,
    referenceElement,
    placement: _placement = 'auto',
    fallbackPlacements: _fallbackPlacements,
    offset: _offset,
    onClose,
    hasArrow = true,
    keepMounted,
    isAnimated,
    zIndex,
    backdropProps,
    focusOnMount = true,
    restoreFocus = true,
    id,
    ...props
  } = _ref;
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const environment = reactTheming.useDocument(theme);
  const previousReferenceElementRef = React.useRef();
  const modalRef = React.useRef(null);
  const transitionRef = React.useRef(null);
  const [floatingElement, setFloatingElement] = React.useState();
  const [hasTitle, setHasTitle] = React.useState(false);
  const {
    getTitleProps,
    getCloseProps,
    getContentProps,
    getBackdropProps,
    getModalProps
  } = containerModal.useModal({
    idPrefix: id,
    onClose,
    modalRef,
    focusOnMount,
    restoreFocus: false,
    environment
  });
  const [floatingPlacement, fallbackPlacements] = reactTheming.getFloatingPlacements(theme, _placement === 'auto' ? PLACEMENT_DEFAULT : _placement, _fallbackPlacements);
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = reactDom.useFloating({
    platform: {
      ...reactDom.platform,
      isRTL: () => theme.rtl
    },
    elements: {
      reference: referenceElement,
      floating: floatingElement
    },
    placement: floatingPlacement,
    middleware: [reactDom.offset(_offset === undefined ? theme.space.base * 3 : _offset), _placement === 'auto' ? reactDom.autoPlacement() : reactDom.flip({
      fallbackPlacements
    })]
  });
  React.useEffect(() => {
    let cleanup;
    if (referenceElement && floatingElement && refs.reference.current && refs.floating.current) {
      cleanup = reactDom.autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [referenceElement, floatingElement, refs.reference, refs.floating, update]);
  React.useEffect(() => {
    if (!referenceElement && previousReferenceElementRef.current && restoreFocus) {
      previousReferenceElementRef.current.focus();
    }
    previousReferenceElementRef.current = referenceElement;
  }, [referenceElement, restoreFocus]);
  const modalProps = getModalProps({
    'aria-describedby': undefined,
    ...(hasTitle ? {} : {
      'aria-labelledby': undefined
    })
  });
  const attribute = hasTitle ? 'aria-labelledby' : 'aria-label';
  const defaultValue = hasTitle ? modalProps['aria-labelledby'] : 'Modal dialog';
  const labelValue = hasTitle ? modalProps['aria-labelledby'] : props['aria-label'];
  const ariaProps = {
    [attribute]: reactTheming.useText(TooltipDialogComponent, {
      [attribute]: labelValue
    }, attribute, defaultValue, modalRef.current !== null )
  };
  const value = {
    hasTitle,
    setHasTitle,
    getTitleProps,
    getContentProps,
    getCloseProps
  };
  const Node = React__namespace.default.createElement(reactTransitionGroup.CSSTransition, {
    unmountOnExit: !keepMounted,
    timeout: isAnimated ? 200 : 0,
    in: Boolean(referenceElement),
    classNames: isAnimated ? 'garden-tooltip-modal-transition' : '',
    nodeRef: transitionRef,
    onEntered: () => {
      if (keepMounted && focusOnMount && modalRef.current) {
        modalRef.current.focus();
      }
    }
  }, transitionState => {
    const isHidden = keepMounted && transitionState === 'exited';
    return React__namespace.default.createElement(TooltipDialogContext.Provider, {
      value: value
    }, React__namespace.default.createElement(StyledTooltipDialogBackdrop, Object.assign({}, getBackdropProps(), backdropProps, {
      ref: transitionRef,
      "aria-hidden": isHidden ? true : undefined
    }), React__namespace.default.createElement(StyledTooltipWrapper, {
      ref: setFloatingElement,
      style: {
        transform
      },
      $placement: placement,
      $zIndex: zIndex,
      $isAnimated: isAnimated
    }, React__namespace.default.createElement(StyledTooltipDialog, Object.assign({
      $transitionState: transitionState,
      $placement: placement,
      $hasArrow: hasArrow,
      $isAnimated: isAnimated,
      inert: isHidden ? '' : undefined
    }, modalProps, ariaProps, props, {
      ref: reactMergeRefs.mergeRefs([modalRef, ref])
    })))));
  });
  return appendToNode ? ReactDOM.createPortal(Node, appendToNode) : Node;
});
TooltipDialogComponent.displayName = 'TooltipDialog';
TooltipDialogComponent.propTypes = {
  appendToNode: PropTypes__default.default.any,
  referenceElement: PropTypes__default.default.any,
  placement: PropTypes__default.default.any,
  fallbackPlacements: PropTypes__default.default.arrayOf(PropTypes__default.default.oneOf(PLACEMENT.filter(placement => placement !== 'auto'))),
  isAnimated: PropTypes__default.default.bool,
  hasArrow: PropTypes__default.default.bool,
  keepMounted: PropTypes__default.default.bool,
  zIndex: PropTypes__default.default.number,
  onClose: PropTypes__default.default.func,
  backdropProps: PropTypes__default.default.any,
  focusOnMount: PropTypes__default.default.bool,
  restoreFocus: PropTypes__default.default.bool
};
const TooltipDialog = TooltipDialogComponent;
TooltipDialog.Body = Body$1;
TooltipDialog.Close = Close$1;
TooltipDialog.Footer = Footer$1;
TooltipDialog.FooterItem = FooterItem$1;
TooltipDialog.Title = Title;

const HeaderComponent = React.forwardRef((_ref, ref) => {
  let {
    tag = 'div',
    ...other
  } = _ref;
  const {
    isCloseButtonPresent,
    hasHeader,
    setHasHeader,
    getTitleProps
  } = useModalContext();
  React.useEffect(() => {
    if (!hasHeader && setHasHeader) {
      setHasHeader(true);
    }
    return () => {
      if (hasHeader && setHasHeader) {
        setHasHeader(false);
      }
    };
  }, [hasHeader, setHasHeader]);
  return React__namespace.default.createElement(StyledDrawerHeader, Object.assign({}, getTitleProps(other), {
    as: tag,
    $isCloseButtonPresent: isCloseButtonPresent,
    ref: ref
  }));
});
HeaderComponent.displayName = 'Drawer.Header';
HeaderComponent.propTypes = {
  tag: PropTypes__default.default.any
};
const Header = HeaderComponent;

const BodyComponent = React.forwardRef((props, ref) => {
  const {
    getContentProps
  } = useModalContext();
  return React__namespace.default.createElement(StyledDrawerBody, Object.assign({}, getContentProps(props), {
    ref: ref
  }), props.children);
});
BodyComponent.displayName = 'Drawer.Body';
const Body = BodyComponent;

const CloseComponent = React.forwardRef((props, ref) => {
  const {
    getCloseProps,
    setIsCloseButtonPresent
  } = useModalContext();
  React.useEffect(() => {
    setIsCloseButtonPresent(true);
    return () => setIsCloseButtonPresent(false);
  });
  const ariaLabel = reactTheming.useText(CloseComponent, props, 'aria-label', 'Close drawer', props['aria-describedby'] === undefined );
  return React__namespace.default.createElement(StyledDrawerClose, Object.assign({}, getCloseProps({
    ...props,
    'aria-label': ariaLabel
  }), {
    ref: ref
  }), React__namespace.default.createElement(SvgXStroke, null));
});
CloseComponent.displayName = 'Drawer.Close';
const Close = CloseComponent;

const FooterComponent = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledDrawerFooter, Object.assign({
  ref: ref
}, props)));
FooterComponent.displayName = 'Drawer.Footer';
const Footer = FooterComponent;

const FooterItemComponent = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledDrawerFooterItem, Object.assign({
  ref: ref
}, props)));
FooterItemComponent.displayName = 'Drawer.FooterItem';
const FooterItem = FooterItemComponent;

const DrawerComponent = React.forwardRef((_ref, ref) => {
  let {
    id,
    isOpen,
    onClose,
    backdropProps,
    appendToNode,
    focusOnMount = true,
    restoreFocus = true,
    ...props
  } = _ref;
  const modalRef = React.useRef(null);
  const transitionRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const theme = React.useContext(styled.ThemeContext);
  const environment = reactTheming.useDocument(theme);
  const [isCloseButtonPresent, setIsCloseButtonPresent] = React.useState(false);
  const [hasHeader, setHasHeader] = React.useState(false);
  const {
    getTitleProps,
    getCloseProps,
    getContentProps,
    getBackdropProps,
    getModalProps
  } = containerModal.useModal({
    idPrefix: id,
    modalRef,
    focusOnMount: false ,
    restoreFocus: false ,
    environment,
    onClose
  });
  React.useEffect(() => {
    if (environment) {
      if (isOpen && modalRef.current) {
        if (restoreFocus) {
          triggerRef.current = activeElement__default.default(environment);
        }
        if (focusOnMount) {
          modalRef.current.focus();
        }
      }
      if (!isOpen && triggerRef.current) {
        triggerRef.current.focus();
      }
    }
    return () => {
      if (!(restoreFocus && isOpen)) {
        triggerRef.current = null;
      }
    };
  }, [environment, restoreFocus, focusOnMount, isOpen]);
  React.useEffect(() => {
    if (!environment) {
      return undefined;
    }
    const htmlElement = environment.querySelector('html');
    let previousHtmlOverflow;
    if (htmlElement && isOpen) {
      previousHtmlOverflow = htmlElement.style.overflow;
      htmlElement.style.overflow = 'hidden';
    }
    return () => {
      if (htmlElement && isOpen) {
        htmlElement.style.overflow = previousHtmlOverflow;
      }
    };
  }, [environment, isOpen]);
  const rootNode = React.useMemo(() => {
    if (appendToNode) {
      return appendToNode;
    }
    if (environment) {
      return environment.body;
    }
    return undefined;
  }, [appendToNode, environment]);
  const value = React.useMemo(() => ({
    isCloseButtonPresent,
    hasHeader,
    setHasHeader,
    getTitleProps,
    getContentProps,
    getCloseProps,
    setIsCloseButtonPresent
  }), [isCloseButtonPresent, hasHeader, getTitleProps, getContentProps, getCloseProps]);
  const modalProps = getModalProps({
    'aria-describedby': undefined,
    ...(hasHeader ? {} : {
      'aria-labelledby': undefined
    })
  });
  const attribute = hasHeader ? 'aria-labelledby' : 'aria-label';
  const defaultValue = hasHeader ? modalProps['aria-labelledby'] : 'Modal dialog';
  const labelValue = hasHeader ? modalProps['aria-labelledby'] : props['aria-label'];
  const ariaProps = {
    [attribute]: reactTheming.useText(DrawerComponent, {
      [attribute]: labelValue
    }, attribute, defaultValue, modalRef.current !== null )
  };
  if (!rootNode) {
    return null;
  }
  return ReactDOM__default.default.createPortal(React__namespace.default.createElement(ModalsContext.Provider, {
    value: value
  }, React__namespace.default.createElement(reactTransitionGroup.CSSTransition, {
    in: isOpen,
    timeout: 250,
    unmountOnExit: true,
    classNames: "garden-drawer-transition",
    nodeRef: transitionRef
  }, React__namespace.default.createElement(StyledBackdrop, Object.assign({
    $isAnimated: true
  }, getBackdropProps(backdropProps)), React__namespace.default.createElement(StyledDrawer, Object.assign({}, modalProps, ariaProps, props, {
    ref: reactMergeRefs.mergeRefs([ref, modalRef, transitionRef])
  }))))), rootNode);
});
DrawerComponent.displayName = 'Drawer';
DrawerComponent.propTypes = {
  backdropProps: PropTypes__default.default.object,
  focusOnMount: PropTypes__default.default.bool,
  restoreFocus: PropTypes__default.default.bool,
  onClose: PropTypes__default.default.func,
  appendToNode: PropTypes__default.default.any,
  isOpen: PropTypes__default.default.bool
};
const Drawer = DrawerComponent;
Drawer.Body = Body;
Drawer.Close = Close;
Drawer.Footer = Footer;
Drawer.FooterItem = FooterItem;
Drawer.Header = Header;

exports.Body = Body$2;
exports.Close = Close$2;
exports.Drawer = Drawer;
exports.Footer = Footer$2;
exports.FooterItem = FooterItem$2;
exports.Header = Header$1;
exports.Modal = Modal;
exports.PLACEMENT = PLACEMENT;
exports.TooltipDialog = TooltipDialog;
