/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var reactTheming = require('@zendeskgarden/react-theming');
var reactTypography = require('@zendeskgarden/react-typography');
var styled = require('styled-components');
var polished = require('polished');

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
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var styled__default = /*#__PURE__*/_interopDefault(styled);

var _g$1;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgClockStroke$1 = function SvgClockStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React__namespace.createElement("g", {
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 6,
    cy: 6,
    r: 5.5
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5.5 3v3.5H8"
  }))));
};

var _g;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgClockStroke = function SvgClockStroke(props) {
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
    cx: 8,
    cy: 8,
    r: 7.5
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7.5 3v5.5H11"
  }))));
};

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgArrowLeftSmStroke$1 = function SvgArrowLeftSmStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M2.146 6.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L3.707 6H9.5a.5.5 0 0 1 0 1H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2Z"
  })));
};

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgArrowLeftSmStroke = function SvgArrowLeftSmStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3.146 8.854a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L4.707 8H12.5a.5.5 0 0 1 0 1H4.707l2.147 2.146a.5.5 0 1 1-.708.707l-3-3Z"
  })));
};

const SIZE = ['extraextrasmall', 'extrasmall', 'small', 'medium', 'large'];
const STATUS = ['available', 'away', 'transfers', 'offline'];

const COMPONENT_ID$6 = 'avatars.text';
const StyledText = styled__default.default.span.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledText",
  componentId: "sc-1a6hivh-0"
})(["overflow:hidden;text-align:center;white-space:nowrap;", ";"], reactTheming.componentStyles);

const [xxs$1, xs$1, s$1, m$1, l$1] = SIZE;
const TRANSITION_DURATION = 0.25;
const StatusColorParams = {
  active: {
    hue: 'crimson',
    light: {
      shade: 700
    },
    dark: {
      shade: 600
    }
  },
  available: {
    hue: 'mint',
    light: {
      shade: 500
    },
    dark: {
      shade: 400
    }
  },
  away: {
    hue: 'orange',
    light: {
      shade: 500
    },
    dark: {
      shade: 400
    }
  },
  transfers: {
    hue: 'azure',
    light: {
      shade: 500
    },
    dark: {
      shade: 400
    }
  },
  offline: {
    hue: 'grey',
    light: {
      shade: 500
    },
    dark: {
      shade: 400
    }
  }
};
function getStatusColor(theme, type) {
  if (type === undefined) {
    return 'transparent';
  }
  const colorArgs = StatusColorParams[type];
  return colorArgs ? reactTheming.getColor({
    ...colorArgs,
    theme
  }) : 'transparent';
}
function getStatusBorderOffset(props) {
  return props.$size === xxs$1 ? polished.math(`${props.theme.shadowWidths.sm} - 1`) : props.theme.shadowWidths.sm;
}
function getStatusSize(props, offset) {
  const isActive = props.$type === 'active';
  switch (props.$size) {
    case xxs$1:
      return polished.math(`${props.theme.space.base}px - ${offset}`);
    case xs$1:
      return polished.math(`${props.theme.space.base * 2}px - (${offset} * 2)`);
    case s$1:
      return polished.math(`${props.theme.space.base * 3}px ${isActive ? '' : `- (${offset} * 2)`}`);
    case m$1:
    case l$1:
      return polished.math(`${props.theme.space.base * 4}px ${isActive ? '' : `- (${offset} * 2)`}`);
    default:
      return '0';
  }
}
function includes(array, element) {
  return array.includes(element);
}

const COMPONENT_ID$5 = 'avatars.status-indicator.base';
const iconFadeIn = styled.keyframes(["0%{opacity:0;}100%{opacity:1;}"]);
const sizeStyles$3 = props => {
  const offset = getStatusBorderOffset(props);
  const size = getStatusSize(props, offset);
  return styled.css(["border:", " ", ";border-radius:", ";min-width:", ";height:", ";line-height:", ";& > svg{position:absolute;top:-", ";inset-inline-start:-", ";transform-origin:50% 50%;animation:", " ", "s;max-height:unset;&[data-icon-status='transfers']{transform:scale(", ",1);inset-inline-start:", ";}&[data-icon-status='away'] circle{display:none;}}"], offset, props.theme.borderStyles.solid, size, size, size, size, offset, offset, iconFadeIn, TRANSITION_DURATION, props.theme.rtl ? -1 : 1, props.$size === 'extrasmall' ? '-1px' : undefined);
};
const colorStyles$2 = _ref => {
  let {
    theme,
    $type
  } = _ref;
  const foregroundColor = reactTheming.getColor({
    variable: 'foreground.onEmphasis',
    theme
  });
  let backgroundColor;
  let borderColor;
  if ($type === 'offline') {
    borderColor = getStatusColor(theme, $type);
    backgroundColor = reactTheming.getColor({
      variable: 'background.default',
      theme
    });
  } else {
    backgroundColor = getStatusColor(theme, $type);
    borderColor = backgroundColor;
  }
  return styled.css(["border-color:", ";background-color:", ";color:", ";"], borderColor, backgroundColor, foregroundColor);
};
const StyledStatusIndicatorBase = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStatusIndicatorBase",
  componentId: "sc-1rininy-0"
})(["transition:inherit;", " ", " ", ";"], sizeStyles$3, colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'avatars.status_indicator';
const [xxs, xs, s, m, l] = SIZE;
const sizeStyles$2 = props => {
  const isVisible = props.$size !== xxs;
  const iconSize = props.$size === xs ? `${props.theme.space.base * 2}px` : undefined;
  const borderWidth = getStatusBorderOffset(props);
  let padding = '0';
  if (props.$size === s) {
    padding = polished.math(`${props.theme.space.base + 1}px - (${borderWidth} * 2)`);
  } else if (includes([m, l], props.$size)) {
    padding = polished.math(`${props.theme.space.base + 3}px - (${borderWidth} * 2)`);
  }
  return styled.css(["max-width:calc(2em + (", " * 3));box-sizing:content-box;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;font-size:", ";font-weight:", ";& > span{display:", ";padding:0 ", ";max-width:2em;overflow:inherit;text-align:inherit;text-overflow:inherit;white-space:inherit;}& > svg{", " width:", ";height:", ";}"], borderWidth, props.theme.fontSizes.xs, props.theme.fontWeights.semibold, isVisible ? 'inline-block' : 'none', padding, !isVisible && 'display: none;', iconSize, iconSize);
};
const colorStyles$1 = _ref => {
  let {
    theme,
    $type,
    $size,
    $borderColor,
    $surfaceColor
  } = _ref;
  const shadowSize = $size === xxs ? 'xs' : 'sm';
  let boxShadow;
  const surfaceColor = $surfaceColor?.includes('.') ? reactTheming.getColor({
    variable: $surfaceColor,
    theme
  }) : $surfaceColor;
  if ($type) {
    boxShadow = theme.shadows[shadowSize](surfaceColor || reactTheming.getColor({
      theme,
      variable: 'background.default'
    }));
  } else {
    boxShadow = theme.shadows[shadowSize](surfaceColor || theme.palette.white);
  }
  return styled.css(["border-color:", ";box-shadow:", ";"], $borderColor, boxShadow);
};
const StyledStatusIndicator = styled__default.default(StyledStatusIndicatorBase).attrs(props => ({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3',
  $size: props.$size ?? 'medium'
})).withConfig({
  displayName: "StyledStatusIndicator",
  componentId: "sc-16t9if3-0"
})(["", " ", " ", ";"], sizeStyles$2, colorStyles$1, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'avatars.avatar';
const badgeStyles = props => {
  const [xxs, xs, s, m, l] = SIZE;
  let position = `${props.theme.space.base * -1}px`;
  switch (props.$size) {
    case xxs:
    case xs:
      position = polished.math(`${position}  + 3`);
      break;
    case s:
    case m:
    case l:
      position = polished.math(`${position}  + 2`);
      break;
  }
  const animation = styled.keyframes(["0%{transform:scale(.1);}"]);
  return styled.css(["position:absolute;", ":", ";bottom:", ";transition:all ", "s ease-in-out;", ""], props.theme.rtl ? 'left' : 'right', position, position, TRANSITION_DURATION, props.$status === 'active' && styled.css(["animation:", " ", "s ease-in-out;"], animation, TRANSITION_DURATION * 1.5));
};
const colorStyles = _ref => {
  let {
    theme,
    $foregroundColor,
    $surfaceColor,
    $backgroundColor,
    $status
  } = _ref;
  const statusColor = getStatusColor(theme, $status);
  let backgroundColor = 'transparent';
  let foregroundColor = theme.palette.white;
  let surfaceColor;
  if ($backgroundColor) {
    backgroundColor = $backgroundColor.includes('.') ? reactTheming.getColor({
      theme,
      variable: $backgroundColor
    }) : $backgroundColor;
  }
  if ($foregroundColor) {
    foregroundColor = $foregroundColor.includes('.') ? reactTheming.getColor({
      theme,
      variable: $foregroundColor
    }) : $foregroundColor;
  }
  if ($status) {
    surfaceColor = $surfaceColor?.includes('.') ? reactTheming.getColor({
      variable: $surfaceColor,
      theme
    }) : $surfaceColor || reactTheming.getColor({
      variable: 'background.default',
      theme
    });
  } else {
    surfaceColor = 'transparent';
  }
  return styled.css(["box-shadow:", ";background-color:", ";&&{color:", ";}& > svg,& ", "{color:", ";}"], theme.shadows.sm(statusColor), backgroundColor, surfaceColor, StyledText, foregroundColor);
};
const sizeStyles$1 = props => {
  let boxShadow;
  let borderRadius;
  let size;
  let fontSize;
  let svgSize;
  if (props.$size === 'extraextrasmall') {
    boxShadow = `0 0 0 ${polished.math(`${props.theme.shadowWidths.sm} - 1`)}`;
    borderRadius = props.$isSystem ? polished.math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = `${props.theme.space.base * 4}px`;
    fontSize = 0;
    svgSize = `${props.theme.space.base * 3}px`;
  } else if (props.$size === 'extrasmall') {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.$isSystem ? polished.math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = `${props.theme.space.base * 6}px`;
    fontSize = props.theme.fontSizes.sm;
    svgSize = `${props.theme.space.base * 3}px`;
  } else if (props.$size === 'small') {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.$isSystem ? polished.math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = `${props.theme.space.base * 8}px`;
    fontSize = props.theme.fontSizes.md;
    svgSize = `${props.theme.space.base * 3}px`;
  } else if (props.$size === 'large') {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.$isSystem ? polished.math(`${props.theme.borderRadii.md} + 1`) : '50%';
    size = `${props.theme.space.base * 12}px`;
    fontSize = props.theme.fontSizes.xl;
    svgSize = `${props.theme.space.base * 6}px`;
  } else {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.$isSystem ? props.theme.borderRadii.md : '50%';
    size = `${props.theme.space.base * 10}px`;
    fontSize = props.theme.fontSizes.lg;
    svgSize = `${props.theme.space.base * 4}px`;
  }
  return styled.css(["border-radius:", ";width:", " !important;height:", " !important;&::before{box-shadow:", ";}& > svg{font-size:", ";}& ", "{line-height:", ";font-size:", ";}"], borderRadius, size, size, boxShadow, svgSize, StyledText, size, fontSize);
};
const StyledAvatar = styled__default.default.figure.attrs(props => ({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3',
  $size: props.$size ?? 'medium'
})).withConfig({
  displayName: "StyledAvatar",
  componentId: "sc-608m04-0"
})(["display:inline-flex;position:relative;align-items:center;justify-content:center;transition:box-shadow ", "s ease-in-out,color 0.1s ease-in-out;margin:0;vertical-align:middle;box-sizing:border-box;", ";", ";&::before{position:absolute;top:0;left:0;transition:box-shadow ", "s ease-in-out;content:'';}&::before,&& > img{border-radius:inherit;width:100%;height:100%;}&& > img{box-sizing:inherit;vertical-align:bottom;object-fit:cover;}&& > svg{width:1em;height:1em;}& > ", "{", ";}", ";"], TRANSITION_DURATION, props => sizeStyles$1(props), props => colorStyles(props), TRANSITION_DURATION, StyledStatusIndicator, badgeStyles, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'avatars.status-indicator.status';
const StyledStandaloneStatus = styled__default.default.figure.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStandaloneStatus",
  componentId: "sc-1ow4nfj-0"
})(["display:inline-flex;flex-flow:row nowrap;transition:all ", "s ease-in-out;margin:0;box-sizing:content-box;", ";"], TRANSITION_DURATION, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'avatars.status-indicator.caption';
function sizeStyles(props) {
  const marginRule = `margin-${props.theme.rtl ? 'right' : 'left'}: ${props.theme.space.base * 2}px;`;
  return styled.css(["", " line-height:", ";font-size:", ";"], marginRule, reactTheming.getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), props.theme.fontSizes.md);
}
const StyledStandaloneStatusCaption = styled__default.default.figcaption.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStandaloneStatusCaption",
  componentId: "sc-aalyk1-0"
})(["", " ", ";"], sizeStyles, reactTheming.componentStyles);

const COMPONENT_ID = 'avatars.status-indicator.indicator';
const StyledStandaloneStatusIndicator = styled__default.default(StyledStatusIndicatorBase).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  $type: props.$type ?? 'offline'
})).withConfig({
  displayName: "StyledStandaloneStatusIndicator",
  componentId: "sc-1xt1heq-0"
})(["position:relative;box-sizing:content-box;margin-top:", ";", ";"], props => `calc((${props.theme.lineHeights.md} - ${getStatusSize(props, '0')}) / 2)`, reactTheming.componentStyles);

const TextComponent = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledText, Object.assign({
  ref: ref
}, props)));
TextComponent.displayName = 'Avatar.Text';
const Text = TextComponent;

const AvatarComponent = React.forwardRef((_ref, ref) => {
  let {
    'aria-hidden': ariaHidden,
    backgroundColor,
    badge,
    children,
    foregroundColor,
    isSystem,
    size = 'medium',
    status,
    statusLabel,
    surfaceColor,
    ...other
  } = _ref;
  const computedStatus = badge === undefined ? status : 'active';
  let ClockIcon = SvgClockStroke$1;
  let ArrowLeftIcon = SvgArrowLeftSmStroke$1;
  if (['large', 'medium'].includes(size)) {
    ClockIcon = SvgClockStroke;
    ArrowLeftIcon = SvgArrowLeftSmStroke;
  }
  const defaultStatusLabel = React.useMemo(() => {
    let statusMessage = computedStatus;
    if (computedStatus === 'active') {
      const count = typeof badge === 'string' ? parseInt(badge, 10) : badge;
      statusMessage = `active. ${count > 0 ? `${count} notification${count > 1 ? 's' : ''}` : 'no notifications'}`;
    }
    return ['status'].concat(statusMessage || []).join(': ');
  }, [computedStatus, badge]);
  const shouldValidate = computedStatus !== undefined && ariaHidden !== true;
  const label = reactTheming.useText(AvatarComponent, {
    statusLabel
  }, 'statusLabel', defaultStatusLabel, shouldValidate);
  return React__namespace.default.createElement(StyledAvatar, Object.assign({
    ref: ref,
    $isSystem: isSystem,
    $size: size,
    $status: computedStatus,
    $surfaceColor: surfaceColor,
    $backgroundColor: backgroundColor,
    $foregroundColor: foregroundColor,
    "aria-atomic": "true",
    "aria-hidden": ariaHidden,
    "aria-live": "polite"
  }, other), React.Children.only(children), !!computedStatus && React__namespace.default.createElement(StyledStatusIndicator, {
    $size: size,
    $type: computedStatus,
    $surfaceColor: surfaceColor,
    as: "figcaption"
  }, ariaHidden !== true && React__namespace.default.createElement(reactTypography.Span, {
    hidden: true
  }, label), computedStatus === 'active' ? React__namespace.default.createElement("span", {
    "aria-hidden": true
  }, badge) : React__namespace.default.createElement(React__namespace.default.Fragment, null, computedStatus === 'away' ? React__namespace.default.createElement(ClockIcon, {
    "data-icon-status": computedStatus
  }) : null, computedStatus === 'transfers' ? React__namespace.default.createElement(ArrowLeftIcon, {
    "data-icon-status": computedStatus
  }) : null)));
});
AvatarComponent.displayName = 'Avatar';
AvatarComponent.propTypes = {
  backgroundColor: PropTypes__default.default.string,
  foregroundColor: PropTypes__default.default.string,
  surfaceColor: PropTypes__default.default.string,
  isSystem: PropTypes__default.default.bool,
  badge: PropTypes__default.default.oneOfType([PropTypes__default.default.string, PropTypes__default.default.number]),
  size: PropTypes__default.default.oneOf(SIZE),
  status: PropTypes__default.default.oneOf(STATUS),
  statusLabel: PropTypes__default.default.string
};
const Avatar = AvatarComponent;
Avatar.Text = Text;

const StatusIndicator = React.forwardRef((_ref, ref) => {
  let {
    children,
    type = 'offline',
    isCompact,
    'aria-label': label,
    ...props
  } = _ref;
  let ClockIcon = SvgClockStroke;
  let ArrowLeftIcon = SvgArrowLeftSmStroke;
  if (isCompact) {
    ClockIcon = SvgClockStroke$1;
    ArrowLeftIcon = SvgArrowLeftSmStroke$1;
  }
  const defaultLabel = React.useMemo(() => ['status'].concat(type || []).join(': '), [type]);
  const ariaLabel = reactTheming.useText(StatusIndicator, {
    'aria-label': label
  }, 'aria-label', defaultLabel, label !== null);
  return (
    React__namespace.default.createElement(StyledStandaloneStatus, Object.assign({
      role: "status",
      ref: ref
    }, props), React__namespace.default.createElement(StyledStandaloneStatusIndicator, {
      "aria-hidden": label === null ? true : undefined,
      "aria-label": ariaLabel,
      role: "img",
      $type: type,
      $size: isCompact ? 'small' : 'medium'
    }, type === 'away' ? React__namespace.default.createElement(ClockIcon, {
      "data-icon-status": type,
      "aria-hidden": "true"
    }) : null, type === 'transfers' ? React__namespace.default.createElement(ArrowLeftIcon, {
      "data-icon-status": type,
      "aria-hidden": "true"
    }) : null), !!children && React__namespace.default.createElement(StyledStandaloneStatusCaption, null, children))
  );
});
StatusIndicator.displayName = 'StatusIndicator';
StatusIndicator.propTypes = {
  'aria-label': PropTypes__default.default.string,
  type: PropTypes__default.default.oneOf(STATUS),
  isCompact: PropTypes__default.default.bool
};

exports.Avatar = Avatar;
exports.StatusIndicator = StatusIndicator;
