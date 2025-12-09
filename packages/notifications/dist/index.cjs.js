/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');
var reactTheming = require('@zendeskgarden/react-theming');
var reactButtons = require('@zendeskgarden/react-buttons');
var polished = require('polished');
var reactTransitionGroup = require('react-transition-group');
var reactUid = require('react-uid');

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

const TYPE = ['success', 'warning', 'error', 'info'];

var _g$2, _circle$2;
function _extends$4() { return _extends$4 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$4.apply(null, arguments); }
var SvgAlertErrorStroke = function SvgAlertErrorStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _g$2 || (_g$2 = /*#__PURE__*/React__namespace.createElement("g", {
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 8.5,
    r: 7
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    d: "M7.5 4.5V9"
  }))), _circle$2 || (_circle$2 = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    fill: "currentColor"
  })));
};

var _g$1;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgCheckCircleStroke = function SvgCheckCircleStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React__namespace.createElement("g", {
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 9l2.5 2.5 5-5"
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 8.5,
    r: 7
  }))));
};

var _path$1, _circle$1;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgAlertWarningStroke = function SvgAlertWarningStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5"
  })), _circle$1 || (_circle$1 = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    fill: "currentColor"
  })));
};

var _g, _circle;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgInfoStroke = function SvgInfoStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    stroke: "currentColor"
  }, /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 8.5,
    r: 7,
    fill: "none"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    d: "M7.5 12.5V8"
  }))), _circle || (_circle = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 5,
    r: 1,
    fill: "currentColor"
  })));
};

const validationIcons = {
  success: SvgCheckCircleStroke,
  error: SvgAlertErrorStroke,
  warning: SvgAlertWarningStroke,
  info: SvgInfoStroke
};
const validationTypes = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
};

const COMPONENT_ID$d = 'notifications.close';
const colorStyles$a = ({
  theme,
  $type
}) => {
  let variable;
  switch ($type) {
    case validationTypes.warning:
      variable = 'foreground.warning';
      break;
    case validationTypes.error:
      variable = 'foreground.danger';
      break;
    case validationTypes.success:
      variable = 'foreground.success';
      break;
    default:
      variable = 'foreground.subtle';
      break;
  }
  const color = reactTheming.getColor({
    variable,
    theme
  });
  const hoverColor = reactTheming.getColor({
    variable,
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    },
    theme
  });
  const activeColor = reactTheming.getColor({
    variable,
    light: {
      offset: 200
    },
    dark: {
      offset: -200
    },
    theme
  });
  return styled.css(["color:", ";&:hover{background-color:transparent;color:", ";}&:active{background-color:transparent;color:", ";}"], color, hoverColor, activeColor);
};
const StyledClose = styled__default.default(reactButtons.IconButton).attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledClose",
  componentId: "sc-1mr9nx1-0"
})(["position:absolute;top:", "px;right:", ";left:", ";", " ", ";"], props => props.theme.space.base, p => !p.theme.rtl && `${p.theme.space.base}px`, p => p.theme.rtl && `${p.theme.space.base}px`, colorStyles$a, reactTheming.componentStyles);

const COMPONENT_ID$c = 'notifications.paragraph';
const StyledParagraph = styled__default.default.p.attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledParagraph",
  componentId: "sc-12tmd6p-0"
})(["margin:", "px 0 0;", ";"], props => props.theme.space.base * 2, reactTheming.componentStyles);

const COMPONENT_ID$b = 'notifications.title';
const StyledTitle = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTitle",
  componentId: "sc-xx4jsv-0"
})(["margin:0;color:", ";font-weight:", ";", ";"], p => reactTheming.getColor({
  variable: 'foreground.default',
  theme: p.theme
}), props => props.$isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold, reactTheming.componentStyles);

const COMPONENT_ID$a = 'notifications.base_container';
const colorStyles$9 = ({
  theme,
  $type,
  $isFloating
}) => {
  const {
    space,
    shadows
  } = theme;
  let bgVariable;
  let borderVariable;
  let fgVariable;
  if (!$isFloating && $type && !!validationTypes[$type]) {
    switch ($type) {
      case validationTypes.success:
        bgVariable = 'background.success';
        borderVariable = 'border.success';
        fgVariable = 'foreground.success';
        break;
      case validationTypes.error:
        bgVariable = 'background.danger';
        borderVariable = 'border.danger';
        fgVariable = 'foreground.danger';
        break;
      case validationTypes.warning:
        bgVariable = 'background.warning';
        borderVariable = 'border.warning';
        fgVariable = 'foreground.warning';
        break;
      case validationTypes.info:
        bgVariable = 'background.subtle';
        borderVariable = 'border.default';
        fgVariable = 'foreground.subtle';
        break;
    }
  } else {
    bgVariable = 'background.raised';
    borderVariable = 'border.default';
    fgVariable = 'foreground.default';
  }
  const backgroundColor = reactTheming.getColor({
    variable: bgVariable,
    theme
  });
  const borderColor = reactTheming.getColor({
    variable: borderVariable,
    theme
  });
  const foregroundColor = reactTheming.getColor({
    variable: fgVariable,
    theme
  });
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const boxShadow = $isFloating ? shadows.lg(offsetY, blurRadius, reactTheming.getColor({
    variable: 'shadow.large',
    theme
  })) : undefined;
  return styled.css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";"], borderColor, boxShadow, backgroundColor, foregroundColor);
};
const padding = props => {
  const {
    space
  } = props.theme;
  const paddingVertical = `${space.base * 5}px`;
  const paddingHorizontal = `${space.base * 10}px`;
  return `${paddingVertical} ${paddingHorizontal}`;
};
const StyledBase = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBase",
  componentId: "sc-14syaqw-0"
})(["position:relative;border:", ";border-radius:", ";padding:", ";line-height:", ";font-size:", ";direction:", ";", ";", ""], props => props.theme.borders.sm, props => props.theme.borderRadii.md, padding, props => reactTheming.getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => props.theme.fontSizes.md, props => props.theme.rtl && 'rtl', colorStyles$9, reactTheming.componentStyles);

const COMPONENT_ID$9 = 'notifications.alert';
const colorStyles$8 = props => {
  const {
    $type,
    theme
  } = props;
  let variable;
  switch ($type) {
    case validationTypes.success:
      variable = 'foreground.successEmphasis';
      break;
    case validationTypes.error:
      variable = 'foreground.dangerEmphasis';
      break;
    case validationTypes.warning:
      variable = 'foreground.warningEmphasis';
      break;
    case validationTypes.info:
      variable = 'foreground.default';
      break;
  }
  const color = variable ? reactTheming.getColor({
    variable,
    theme
  }) : undefined;
  return styled.css(["", "{color:", ";}"], StyledTitle, color);
};
const StyledAlert = styled__default.default(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledAlert",
  componentId: "sc-fyn8jp-0"
})(["", " ", ";"], colorStyles$8, reactTheming.componentStyles);

const COMPONENT_ID$8 = 'notifications.notification';
const colorStyles$7 = props => {
  const {
    $type,
    theme
  } = props;
  let variable;
  switch ($type) {
    case validationTypes.success:
      variable = 'foreground.success';
      break;
    case validationTypes.error:
      variable = 'foreground.danger';
      break;
    case validationTypes.warning:
      variable = 'foreground.warning';
      break;
    case validationTypes.info:
      variable = 'foreground.default';
      break;
  }
  const color = variable ? reactTheming.getColor({
    variable,
    theme
  }) : 'inherit';
  return styled.css(["", "{color:", ";}"], StyledTitle, color);
};
const StyledNotification = styled__default.default(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNotification",
  componentId: "sc-uf6jh-0"
})(["", " ", ";"], colorStyles$7, reactTheming.componentStyles);
StyledNotification.propTypes = {
  $type: PropTypes__default.default.oneOf(TYPE)
};

const COMPONENT_ID$7 = 'notifications.well';
const colorStyles$6 = ({
  theme,
  $isFloating,
  $isRecessed
}) => {
  let backgroundVariable;
  if ($isRecessed) {
    backgroundVariable = 'background.recessed';
  } else if ($isFloating) {
    backgroundVariable = 'background.raised';
  } else {
    backgroundVariable = 'background.default';
  }
  const foreground = reactTheming.getColor({
    variable: 'foreground.subtle',
    theme
  });
  const background = reactTheming.getColor({
    variable: backgroundVariable,
    theme
  });
  return styled.css(["background-color:", ";color:", ";"], background, foreground);
};
const StyledWell = styled__default.default(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledWell",
  componentId: "sc-a5831c-0"
})(["", " ", ";"], colorStyles$6, reactTheming.componentStyles);

const COMPONENT_ID$6 = 'notifications.icon';
const sizeStyles$4 = ({
  theme: {
    rtl,
    space
  }
}) => {
  return styled.css(["right:", ";left:", ";margin-top:", "px;"], rtl && `${space.base * 4}px`, !rtl && `${space.base * 4}px`, space.base / 2);
};
const colorStyles$5 = ({
  theme,
  $type
}) => {
  let variable;
  switch ($type) {
    case validationTypes.success:
      variable = 'foreground.success';
      break;
    case validationTypes.error:
      variable = 'foreground.danger';
      break;
    case validationTypes.warning:
      variable = 'foreground.warning';
      break;
    case validationTypes.info:
      variable = 'foreground.subtle';
      break;
    default:
      variable = 'foreground.default';
      break;
  }
  const color = reactTheming.getColor({
    variable,
    theme
  });
  return styled.css(["color:", ";"], color);
};
const StyledIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-msklws-0"
})(["position:absolute;", " ", " ", ""], sizeStyles$4, colorStyles$5, reactTheming.componentStyles);

const COMPONENT_ID$5 = 'notifications.global_alert';
const colorStyles$4 = ({
  theme,
  $alertType
}) => {
  let borderColor;
  let backgroundColor;
  let foregroundColor;
  let anchorHoverColor;
  let anchorActiveColor;
  let focusVariable;
  switch ($alertType) {
    case 'success':
      {
        borderColor = reactTheming.getColor({
          variable: 'border.successEmphasis',
          offset: 100,
          theme
        });
        backgroundColor = reactTheming.getColor({
          variable: 'background.successEmphasis',
          theme
        });
        foregroundColor = reactTheming.getColor({
          variable: 'foreground.success',
          offset: -600,
          theme
        });
        anchorHoverColor = theme.palette.white;
        anchorActiveColor = theme.palette.white;
        focusVariable = 'foreground.successEmphasis';
        break;
      }
    case 'error':
      {
        borderColor = reactTheming.getColor({
          variable: 'border.dangerEmphasis',
          offset: 100,
          theme
        });
        backgroundColor = reactTheming.getColor({
          variable: 'background.dangerEmphasis',
          theme
        });
        foregroundColor = reactTheming.getColor({
          variable: 'foreground.danger',
          offset: -600,
          theme
        });
        anchorActiveColor = theme.palette.white;
        anchorHoverColor = theme.palette.white;
        focusVariable = 'foreground.dangerEmphasis';
        break;
      }
    case 'warning':
      {
        borderColor = reactTheming.getColor({
          variable: 'border.warningEmphasis',
          offset: -300,
          theme
        });
        backgroundColor = reactTheming.getColor({
          variable: 'background.warningEmphasis',
          offset: -400,
          theme
        });
        const fgVariable = 'foreground.warning';
        foregroundColor = reactTheming.getColor({
          variable: fgVariable,
          offset: 100,
          theme
        });
        anchorHoverColor = reactTheming.getColor({
          variable: fgVariable,
          offset: 200,
          theme
        });
        anchorActiveColor = reactTheming.getColor({
          variable: fgVariable,
          offset: 300,
          theme
        });
        focusVariable = fgVariable;
        break;
      }
    case 'info':
      {
        borderColor = reactTheming.getColor({
          variable: 'border.primaryEmphasis',
          offset: -300,
          theme
        });
        backgroundColor = reactTheming.getColor({
          variable: 'background.primaryEmphasis',
          offset: -400,
          theme
        });
        const fgVariable = 'foreground.primary';
        foregroundColor = reactTheming.getColor({
          variable: fgVariable,
          offset: 100,
          theme
        });
        anchorHoverColor = reactTheming.getColor({
          variable: fgVariable,
          offset: 200,
          theme
        });
        anchorActiveColor = reactTheming.getColor({
          variable: fgVariable,
          offset: 300,
          theme
        });
        focusVariable = fgVariable;
        break;
      }
  }
  const boxShadow = `inset 0 -${theme.borderWidths.sm} 0 ${borderColor}`;
  return styled.css(["box-shadow:", ";background-color:", ";color:", ";& a{color:inherit;", " &:hover{color:", ";}&:active{color:", ";}}"], boxShadow, backgroundColor, foregroundColor, reactTheming.focusStyles({
    theme,
    color: {
      variable: focusVariable
    },
    styles: {
      color: 'inherit'
    }
  }), anchorHoverColor, anchorActiveColor);
};
const sizeStyles$3 = props => {
  const {
    fontSizes,
    space
  } = props.theme;
  const minHeight = space.base * 13;
  const padding = space.base * 4;
  const lineHeight = reactTheming.getLineHeight(space.base * 5, fontSizes.md);
  return styled.css(["padding:", "px;min-height:", "px;line-height:", ";font-size:", ";"], padding, minHeight, lineHeight, fontSizes.md);
};
const StyledGlobalAlert = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlert",
  componentId: "sc-k6rimt-0"
})(["display:flex;flex-wrap:nowrap;overflow:auto;overflow-x:hidden;box-sizing:border-box;direction:", ";", " ", " && a{border-radius:", ";text-decoration:underline;}", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', sizeStyles$3, colorStyles$4, props => props.theme.borderRadii.sm, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'notifications.global_alert.close';
const colorStyles$3 = props => {
  const {
    $alertType,
    theme
  } = props;
  let hoverBackgroundColor;
  let hoverForegroundColor;
  let activeBackgroundColor;
  let activeForegroundColor;
  let focusVariable;
  switch ($alertType) {
    case 'success':
      hoverBackgroundColor = reactTheming.getColor({
        variable: 'background.success',
        theme,
        transparency: theme.opacity[100]
      });
      hoverForegroundColor = theme.palette.white;
      activeBackgroundColor = reactTheming.getColor({
        variable: 'background.success',
        theme,
        transparency: theme.opacity[200]
      });
      activeForegroundColor = theme.palette.white;
      focusVariable = 'foreground.successEmphasis';
      break;
    case 'error':
      hoverBackgroundColor = reactTheming.getColor({
        variable: 'background.danger',
        theme,
        transparency: theme.opacity[100]
      });
      hoverForegroundColor = theme.palette.white;
      activeBackgroundColor = reactTheming.getColor({
        variable: 'background.danger',
        theme,
        transparency: theme.opacity[200]
      });
      activeForegroundColor = theme.palette.white;
      focusVariable = 'foreground.dangerEmphasis';
      break;
    case 'warning':
      hoverBackgroundColor = reactTheming.getColor({
        variable: 'background.warningEmphasis',
        transparency: theme.opacity[100],
        theme
      });
      hoverForegroundColor = reactTheming.getColor({
        variable: 'foreground.warningEmphasis',
        offset: 200,
        theme
      });
      activeBackgroundColor = reactTheming.getColor({
        variable: 'background.warningEmphasis',
        transparency: theme.opacity[200],
        theme
      });
      activeForegroundColor = reactTheming.getColor({
        variable: 'foreground.warningEmphasis',
        offset: 300,
        theme
      });
      focusVariable = 'foreground.warning';
      break;
    default:
      focusVariable = 'foreground.primary';
  }
  return styled.css(["color:inherit;&:hover{background-color:", ";color:", ";}", " &:active{background-color:", ";color:", ";}"], hoverBackgroundColor, hoverForegroundColor, reactTheming.focusStyles({
    theme,
    color: {
      variable: focusVariable
    }
  }), activeBackgroundColor, activeForegroundColor);
};
const sizeStyles$2 = props => {
  const marginVertical = `-${props.theme.space.base * 1.5}px`;
  const marginStart = `${props.theme.space.base * 2}px`;
  const marginEnd = `-${props.theme.space.base * 2}px`;
  return styled.css(["margin:", " ", " ", " ", ";"], marginVertical, props.theme.rtl ? marginStart : marginEnd, marginVertical, props.theme.rtl ? marginEnd : marginStart);
};
const StyledGlobalAlertClose = styled__default.default(reactButtons.IconButton).attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlertClose",
  componentId: "sc-1g5s93s-0"
})(["", ";", ";", ";"], sizeStyles$2, colorStyles$3, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'notifications.global_alert.button';
function colorStyles$2(props) {
  const {
    $alertType,
    isBasic,
    theme
  } = props;
  if (isBasic) {
    return colorStyles$3(props);
  }
  let bgVariable;
  let offsetOptions;
  let offsetHoverOptions;
  let offsetActiveOptions;
  let focusVariable;
  switch ($alertType) {
    case 'success':
      bgVariable = 'background.successEmphasis';
      offsetOptions = {
        offset: 200
      };
      offsetHoverOptions = {
        offset: 300
      };
      offsetActiveOptions = {
        offset: 400
      };
      focusVariable = 'foreground.successEmphasis';
      break;
    case 'error':
      bgVariable = 'background.dangerEmphasis';
      offsetOptions = {
        offset: 200
      };
      offsetHoverOptions = {
        offset: 300
      };
      offsetActiveOptions = {
        offset: 400
      };
      focusVariable = 'foreground.dangerEmphasis';
      break;
    case 'warning':
      bgVariable = 'background.warningEmphasis';
      offsetOptions = {};
      offsetHoverOptions = {
        offset: 100
      };
      offsetActiveOptions = {
        offset: 200
      };
      focusVariable = 'foreground.warning';
      break;
    case 'info':
      bgVariable = 'background.primaryEmphasis';
      offsetOptions = {};
      offsetHoverOptions = {
        offset: 100
      };
      offsetActiveOptions = {
        offset: 200
      };
      focusVariable = 'foreground.primary';
      break;
  }
  const backgroundColor = reactTheming.getColor({
    variable: bgVariable,
    ...offsetOptions,
    theme
  });
  const hoverBackgroundColor = reactTheming.getColor({
    variable: bgVariable,
    ...offsetHoverOptions,
    theme
  });
  const activeBackgroundColor = reactTheming.getColor({
    variable: bgVariable,
    ...offsetActiveOptions,
    theme
  });
  return styled.css(["background-color:", ";color:", ";&:hover{background-color:", ";}", " &:active{background-color:", ";}"], backgroundColor, reactTheming.getColor({
    hue: 'white',
    theme
  }), hoverBackgroundColor, reactTheming.focusStyles({
    theme,
    color: {
      variable: focusVariable
    }
  }), activeBackgroundColor);
}
function sizeStyles$1(props) {
  const marginVertical = `-${props.theme.space.base * 1.5}px`;
  const marginStart = `${props.theme.space.base * 2}px`;
  return styled.css(["margin:", " ", " ", " ", ";"], marginVertical, props.theme.rtl ? marginStart : 0, marginVertical, props.theme.rtl ? 0 : marginStart);
}
const StyledGlobalAlertButton = styled__default.default(reactButtons.Button).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlertButton",
  componentId: "sc-1txe91a-0"
})(["flex-shrink:0;", ";", ";", ";"], sizeStyles$1, colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'notifications.global_alert.content';
const StyledGlobalAlertContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlertContent",
  componentId: "sc-rept0u-0"
})(["flex-grow:1;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$1 = 'notifications.global_alert.icon';
const sizeStyles = props => {
  const size = props.theme.iconSizes.md;
  const marginTop = polished.math(`(${props.theme.space.base * 5} - ${size}) / 2`);
  const marginHorizontal = `${props.theme.space.base * 2}px`;
  return styled.css(["margin-top:", ";margin-", ":", ";width:", ";height:", ";"], marginTop, props.theme.rtl ? 'left' : 'right', marginHorizontal, size, size);
};
const colorStyles$1 = ({
  theme,
  $alertType
}) => {
  let color;
  switch ($alertType) {
    case 'success':
      color = reactTheming.getColor({
        variable: 'foreground.success',
        offset: -400,
        theme
      });
      break;
    case 'error':
      color = reactTheming.getColor({
        variable: 'foreground.danger',
        offset: -400,
        theme
      });
      break;
    case 'warning':
      color = reactTheming.getColor({
        variable: 'foreground.warning',
        theme
      });
      break;
    case 'info':
      color = reactTheming.getColor({
        variable: 'foreground.primary',
        theme
      });
      break;
  }
  return styled.css(["color:", ";"], color);
};
const StyledGlobalAlertIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlertIcon",
  componentId: "sc-84ne9k-0"
})(["flex-shrink:0;", ";", ";", ";"], sizeStyles, colorStyles$1, reactTheming.componentStyles);

const COMPONENT_ID = 'notifications.global_alert.title';
const colorStyles = ({
  theme,
  $alertType
}) => {
  let color;
  switch ($alertType) {
    case 'success':
    case 'error':
      color = theme.palette.white;
      break;
    case 'warning':
      color = reactTheming.getColor({
        variable: 'foreground.warningEmphasis',
        theme
      });
      break;
    case 'info':
      color = reactTheming.getColor({
        variable: 'foreground.primary',
        offset: 200,
        theme
      });
      break;
  }
  return styled.css(["color:", ";"], color);
};
const StyledGlobalAlertTitle = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlertTitle",
  componentId: "sc-10clqbo-0"
})(["display:inline;margin-", ":", "px;font-weight:", ";", ";", ";"], props => props.theme.rtl ? 'left' : 'right', props => props.theme.space.base * 2, props => props.$isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold, colorStyles, reactTheming.componentStyles);

const NotificationsContext = React.createContext(undefined);
const useNotificationsContext = () => {
  return React.useContext(NotificationsContext);
};

const Title$1 = React__namespace.default.forwardRef(({
  isRegular,
  ...props
}, ref) => React__namespace.default.createElement(StyledTitle, Object.assign({
  ref: ref,
  $isRegular: isRegular
}, props)));
Title$1.displayName = 'Alert.Title';

const Paragraph$1 = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(StyledParagraph, Object.assign({
  ref: ref
}, props)));
Paragraph$1.displayName = 'Alert.Paragraph';

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

const Close$1 = React__namespace.default.forwardRef((props, ref) => {
  const ariaLabel = reactTheming.useText(Close$1, props, 'aria-label', 'Close');
  const type = useNotificationsContext();
  return React__namespace.default.createElement(StyledClose, Object.assign({
    ref: ref,
    $type: type,
    "aria-label": ariaLabel
  }, props, {
    focusInset: true,
    size: "small"
  }), React__namespace.default.createElement(SvgXStroke, null));
});
Close$1.displayName = 'Alert.Close';

const AlertComponent = React__namespace.default.forwardRef(({
  role,
  type,
  ...props
}, ref) => {
  const Icon = validationIcons[type];
  return React__namespace.default.createElement(NotificationsContext.Provider, {
    value: type
  }, React__namespace.default.createElement(StyledAlert, Object.assign({
    ref: ref,
    $type: type,
    role: role === undefined ? 'alert' : role
  }, props), React__namespace.default.createElement(StyledIcon, {
    $type: type
  }, React__namespace.default.createElement(Icon, null)), props.children));
});
AlertComponent.displayName = 'Alert';
AlertComponent.propTypes = {
  type: PropTypes__default.default.oneOf(TYPE).isRequired
};
const Alert = AlertComponent;
Alert.Close = Close$1;
Alert.Paragraph = Paragraph$1;
Alert.Title = Title$1;

const Title = React__namespace.default.forwardRef(({
  isRegular,
  ...props
}, ref) => React__namespace.default.createElement(StyledTitle, Object.assign({
  ref: ref,
  $isRegular: isRegular
}, props)));
Title.displayName = 'Notification.Title';

const Paragraph = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(StyledParagraph, Object.assign({
  ref: ref
}, props)));
Paragraph.displayName = 'Notification.Paragraph';

const Close = React__namespace.default.forwardRef((props, ref) => {
  const ariaLabel = reactTheming.useText(Close, props, 'aria-label', 'Close');
  const type = useNotificationsContext();
  return React__namespace.default.createElement(StyledClose, Object.assign({
    ref: ref,
    $type: type,
    "aria-label": ariaLabel
  }, props, {
    focusInset: true,
    size: "small"
  }), React__namespace.default.createElement(SvgXStroke, null));
});
Close.displayName = 'Notification.Close';

const NotificationComponent = React.forwardRef(({
  children,
  type,
  ...props
}, ref) => {
  const Icon = type ? validationIcons[type] : SvgInfoStroke;
  return React__namespace.default.createElement(StyledNotification, Object.assign({
    ref: ref,
    $type: type,
    $isFloating: true,
    role: "alert"
  }, props), !!type && React__namespace.default.createElement(StyledIcon, {
    $type: type
  }, React__namespace.default.createElement(Icon, null)), children);
});
NotificationComponent.displayName = 'Notification';
NotificationComponent.propTypes = {
  type: PropTypes__default.default.oneOf(TYPE)
};
const Notification = NotificationComponent;
Notification.Close = Close;
Notification.Paragraph = Paragraph;
Notification.Title = Title;

const WellComponent = React__namespace.default.forwardRef(({
  isFloating,
  isRecessed,
  ...props
}, ref) => React__namespace.default.createElement(StyledWell, Object.assign({
  ref: ref,
  $isFloating: isFloating,
  $isRecessed: isRecessed
}, props)));
WellComponent.displayName = 'Well';
WellComponent.propTypes = {
  isRecessed: PropTypes__default.default.bool,
  isFloating: PropTypes__default.default.bool
};
const Well = WellComponent;
Well.Paragraph = Paragraph;
Well.Title = Title;

const getInitialState = () => {
  return {
    toasts: []
  };
};
const toasterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      {
        return {
          ...state,
          toasts: [...state.toasts, action.payload]
        };
      }
    case 'REMOVE_TOAST':
      {
        const filteredToasts = state.toasts.filter(toast => toast.id !== action.payload);
        return {
          ...state,
          toasts: filteredToasts
        };
      }
    case 'UPDATE_TOAST':
      {
        const updatedToasts = state.toasts.map(toast => {
          if (toast.id !== action.payload.id) {
            return toast;
          }
          const updatedToast = toast;
          const {
            content,
            ...newOptions
          } = action.payload.options;
          if (content) {
            updatedToast.content = content;
          }
          updatedToast.options = {
            ...updatedToast.options,
            ...newOptions
          };
          return updatedToast;
        });
        return {
          ...state,
          toasts: updatedToasts
        };
      }
    case 'REMOVE_ALL_TOASTS':
      {
        return {
          ...state,
          toasts: []
        };
      }
    default:
      throw new Error('Invalid toaster reducer action');
  }
};

const ToastContext = React.createContext(undefined);

const DEFAULT_TOAST_OPTIONS = {
  autoDismiss: 5000,
  placement: 'top-end'
};
const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast() must be used within a "ToastProvider"');
  }
  const {
    dispatch,
    state
  } = context;
  const addToast = React.useCallback((content, options = {}) => {
    const mergedOptions = {
      ...DEFAULT_TOAST_OPTIONS,
      ...options
    };
    const newToast = {
      id: mergedOptions.id || reactUid.uid(content),
      content,
      options: mergedOptions
    };
    dispatch({
      type: 'ADD_TOAST',
      payload: newToast
    });
    return newToast.id;
  }, [dispatch]);
  const removeToast = React.useCallback(id => {
    dispatch({
      type: 'REMOVE_TOAST',
      payload: id
    });
  }, [dispatch]);
  const updateToast = React.useCallback((id, options) => {
    dispatch({
      type: 'UPDATE_TOAST',
      payload: {
        id,
        options
      }
    });
  }, [dispatch]);
  const removeAllToasts = React.useCallback(() => {
    dispatch({
      type: 'REMOVE_ALL_TOASTS'
    });
  }, [dispatch]);
  return {
    addToast,
    removeToast,
    updateToast,
    removeAllToasts,
    toasts: state.toasts
  };
};

const Toast = ({
  toast,
  pauseTimers
}) => {
  const {
    removeToast
  } = useToast();
  const {
    id
  } = toast;
  const {
    autoDismiss
  } = toast.options;
  const [remainingTime, setRemainingTime] = React.useState(NaN);
  const startTimeRef = React.useRef(Date.now());
  const previousRemainingTimeRef = React.useRef(remainingTime);
  React.useEffect(() => {
    if (typeof autoDismiss === 'number') {
      setRemainingTime(autoDismiss);
    } else {
      setRemainingTime(NaN);
    }
  }, [autoDismiss]);
  React.useEffect(() => {
    if (pauseTimers && !isNaN(remainingTime)) {
      previousRemainingTimeRef.current = remainingTime - (Date.now() - startTimeRef.current);
      setRemainingTime(NaN);
    } else if (!pauseTimers && isNaN(remainingTime) && !isNaN(previousRemainingTimeRef.current)) {
      setRemainingTime(previousRemainingTimeRef.current);
    }
  }, [pauseTimers, remainingTime]);
  React.useEffect(() => {
    let timeout;
    if (!isNaN(remainingTime)) {
      startTimeRef.current = Date.now();
      timeout = setTimeout(() => {
        removeToast(id);
      }, remainingTime);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [id, pauseTimers, remainingTime, removeToast]);
  const close = React.useCallback(() => {
    removeToast(toast.id);
  }, [removeToast, toast.id]);
  return toast.content({
    close
  });
};

const TRANSITION_CLASS = 'garden-toast-transition';
const DEFAULT_DURATION = '400ms';
const StyledFadeInTransition = styled__default.default.div.withConfig({
  displayName: "styled__StyledFadeInTransition",
  componentId: "sc-nq0usb-0"
})(["transition:opacity ", " ease-in 300ms;opacity:", ";margin-bottom:", "px;", " &.", "-enter{transform:translateY( ", " );opacity:0;max-height:0;}&.", "-enter-active{transform:translateY(0);transition:opacity ", " ease-in,transform ", " cubic-bezier(0.15,0.85,0.35,1.2),max-height ", ";opacity:1;max-height:500px;}&.", "-exit{opacity:1;max-height:500px;}&.", "-exit-active{transition:opacity 550ms ease-out,max-height ", " linear 150ms;opacity:0;max-height:0;}"], DEFAULT_DURATION, p => p.$isHidden ? '0 !important' : 1, p => p.theme.space.base * 2, p => p.$isHidden && polished.hideVisually(), TRANSITION_CLASS, props => {
  if (props.$placement === 'bottom-start' || props.$placement === 'bottom' || props.$placement === 'bottom-end') {
    return '100px';
  }
  return '-100px';
}, TRANSITION_CLASS, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, TRANSITION_CLASS, TRANSITION_CLASS, DEFAULT_DURATION);
const placementStyles = props => {
  const verticalDistance = `${props.theme.space.base * 16}px`;
  const horizontalDistance = `${props.theme.space.base * 3}px`;
  const topLeftStyles = styled.css(["top:", ";left:", ";"], verticalDistance, horizontalDistance);
  const topStyles = styled.css(["top:", ";left:50%;transform:translate(-50%,0);"], verticalDistance);
  const topRightStyles = styled.css(["top:", ";right:", ";"], verticalDistance, horizontalDistance);
  const bottomLeftStyles = styled.css(["bottom:", ";left:", ";"], verticalDistance, horizontalDistance);
  const bottomStyles = styled.css(["bottom:", ";left:50%;transform:translate(-50%,0);"], verticalDistance);
  const bottomRightStyles = styled.css(["right:", ";bottom:", ";"], horizontalDistance, verticalDistance);
  switch (props.$toastPlacement) {
    case 'top-start':
      if (props.theme.rtl) {
        return topRightStyles;
      }
      return topLeftStyles;
    case 'top':
      return topStyles;
    case 'top-end':
      if (props.theme.rtl) {
        return topLeftStyles;
      }
      return topRightStyles;
    case 'bottom-start':
      if (props.theme.rtl) {
        return bottomRightStyles;
      }
      return bottomLeftStyles;
    case 'bottom':
      return bottomStyles;
    case 'bottom-end':
      if (props.theme.rtl) {
        return bottomLeftStyles;
      }
      return bottomRightStyles;
    default:
      return '';
  }
};
const StyledTransitionContainer = styled__default.default.div.withConfig({
  displayName: "styled__StyledTransitionContainer",
  componentId: "sc-nq0usb-1"
})(["position:fixed;z-index:", ";", ";"], props => props.$toastZIndex, placementStyles);

const ToastSlot = ({
  toasts,
  placement,
  zIndex,
  limit,
  ...props
}) => {
  const [pauseTimers, setPauseTimers] = React.useState(false);
  const theme = React.useContext(styled.ThemeContext);
  const environment = reactTheming.useDocument(theme);
  const handleVisibilityChange = React.useCallback(e => {
    if (e.target.visibilityState === 'visible') {
      setPauseTimers(false);
    } else {
      setPauseTimers(true);
    }
  }, []);
  React.useEffect(() => {
    if (environment) {
      environment.addEventListener('visibilitychange', handleVisibilityChange);
    }
    return () => {
      if (environment) {
        environment.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };
  }, [environment, handleVisibilityChange]);
  const handleMouseEnter = React.useCallback(() => {
    setPauseTimers(true);
  }, []);
  const handleMouseLeave = React.useCallback(() => {
    setPauseTimers(false);
  }, []);
  const isHidden = React.useCallback(index => {
    if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
      return index < toasts.length - limit;
    }
    return index >= limit;
  }, [limit, placement, toasts.length]);
  return React__namespace.default.createElement(StyledTransitionContainer, Object.assign({
    key: placement,
    $toastPlacement: placement,
    $toastZIndex: zIndex,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, props), React__namespace.default.createElement(reactTransitionGroup.TransitionGroup, null, toasts.map((toast, index) => {
    const transitionRef = React__namespace.default.createRef();
    return React__namespace.default.createElement(reactTransitionGroup.CSSTransition, {
      key: toast.id,
      timeout: {
        enter: 400,
        exit: 550
      },
      unmountOnExit: true,
      classNames: TRANSITION_CLASS,
      nodeRef: transitionRef
    }, React__namespace.default.createElement(StyledFadeInTransition, {
      ref: transitionRef,
      $placement: placement,
      $isHidden: isHidden(index)
    }, React__namespace.default.createElement(Toast, {
      toast: toast,
      pauseTimers: pauseTimers || isHidden(index)
    })));
  })));
};

const ToastProvider = ({
  limit = 4,
  zIndex,
  placementProps = {},
  children
}) => {
  const [state, dispatch] = React.useReducer(toasterReducer, getInitialState());
  const contextValue = React.useMemo(() => ({
    state,
    dispatch
  }), [state, dispatch]);
  const toastsByPlacement = React.useCallback(placement => {
    let matchingToasts = state.toasts.filter(toast => toast.options.placement === placement);
    if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
      matchingToasts = matchingToasts.reverse();
    }
    return React__namespace.default.createElement(ToastSlot, Object.assign({
      placement: placement,
      toasts: matchingToasts,
      zIndex: zIndex,
      limit: limit
    }, placementProps[placement]));
  }, [limit, state.toasts, zIndex, placementProps]);
  return React__namespace.default.createElement(ToastContext.Provider, {
    value: contextValue
  }, toastsByPlacement('top-start'), toastsByPlacement('top'), toastsByPlacement('top-end'), children, toastsByPlacement('bottom-start'), toastsByPlacement('bottom'), toastsByPlacement('bottom-end'));
};
ToastProvider.displayName = 'ToastProvider';
ToastProvider.propTypes = {
  limit: PropTypes__default.default.number,
  zIndex: PropTypes__default.default.number,
  placementProps: PropTypes__default.default.object
};

const GlobalAlertContext = React.createContext({
  type: 'info'
});
const useGlobalAlertContext = () => React.useContext(GlobalAlertContext);

const GlobalAlertButton = React.forwardRef(({
  isBasic,
  ...props
}, ref) => {
  const {
    type
  } = useGlobalAlertContext();
  return React__namespace.default.createElement(StyledGlobalAlertButton, Object.assign({
    ref: ref,
    $alertType: type
  }, props, {
    size: "small",
    isPrimary: !isBasic,
    isBasic: isBasic
  }));
});
GlobalAlertButton.displayName = 'GlobalAlert.Button';
GlobalAlertButton.propTypes = {
  isBasic: PropTypes__default.default.bool
};

const GlobalAlertClose = React.forwardRef((props, ref) => {
  const {
    type
  } = useGlobalAlertContext();
  const label = reactTheming.useText(GlobalAlertClose, props, 'aria-label', 'Close');
  return React__namespace.default.createElement(StyledGlobalAlertClose, Object.assign({
    ref: ref,
    $alertType: type
  }, props, {
    size: "small"
  }), React__namespace.default.createElement(SvgXStroke, {
    role: "img",
    "aria-label": label
  }));
});
GlobalAlertClose.displayName = 'GlobalAlert.Close';

const GlobalAlertContent = React.forwardRef((props, ref) => {
  return React__namespace.default.createElement(StyledGlobalAlertContent, Object.assign({
    ref: ref
  }, props));
});
GlobalAlertContent.displayName = 'GlobalAlert.Content';

const GlobalAlertTitle = React.forwardRef(({
  isRegular,
  ...props
}, ref) => {
  const {
    type
  } = useGlobalAlertContext();
  return React__namespace.default.createElement(StyledGlobalAlertTitle, Object.assign({
    $alertType: type,
    $isRegular: isRegular,
    ref: ref
  }, props));
});
GlobalAlertTitle.displayName = 'GlobalAlert.Title';
GlobalAlertTitle.propTypes = {
  isRegular: PropTypes__default.default.bool
};

const GlobalAlertComponent = React.forwardRef(({
  type,
  ...props
}, ref) => {
  const icon = {
    success: React__namespace.default.createElement(SvgCheckCircleStroke, null),
    error: React__namespace.default.createElement(SvgAlertErrorStroke, null),
    warning: React__namespace.default.createElement(SvgAlertWarningStroke, null),
    info: React__namespace.default.createElement(SvgInfoStroke, null)
  }[type];
  return  React__namespace.default.createElement(reactTheming.ThemeProvider, {
    theme: theme => ({
      ...theme,
      colors: {
        ...theme.colors,
        base: 'light'
      }
    })
  }, React__namespace.default.createElement(GlobalAlertContext.Provider, {
    value: React.useMemo(() => ({
      type
    }), [type])
  }, React__namespace.default.createElement(StyledGlobalAlert, Object.assign({
    ref: ref,
    role: "status",
    $alertType: type
  }, props), React__namespace.default.createElement(StyledGlobalAlertIcon, {
    $alertType: type
  }, icon), props.children)));
});
GlobalAlertComponent.displayName = 'GlobalAlert';
const GlobalAlert = GlobalAlertComponent;
GlobalAlert.Button = GlobalAlertButton;
GlobalAlert.Close = GlobalAlertClose;
GlobalAlert.Content = GlobalAlertContent;
GlobalAlert.Title = GlobalAlertTitle;
GlobalAlert.propTypes = {
  type: PropTypes__default.default.oneOf(TYPE).isRequired
};

exports.Alert = Alert;
exports.Close = Close;
exports.GlobalAlert = GlobalAlert;
exports.Notification = Notification;
exports.Paragraph = Paragraph;
exports.Title = Title;
exports.ToastProvider = ToastProvider;
exports.Well = Well;
exports.useToast = useToast;
