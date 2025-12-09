/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var styled = require('styled-components');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var reactMergeRefs = require('react-merge-refs');
var reactTheming = require('@zendeskgarden/react-theming');
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
var styled__default = /*#__PURE__*/_interopDefault(styled);
var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);

const SIZE$1 = ['small', 'medium', 'large'];

const COMPONENT_ID$6 = 'buttons.button_group_view';
const StyledSplitButton = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.7.1'
}).withConfig({
  displayName: "StyledSplitButton",
  componentId: "sc-1u4v04v-0"
})(["display:inline-flex;position:relative;z-index:0;direction:", ";white-space:nowrap;", ";"], props => props.theme.rtl && 'rtl', reactTheming.componentStyles);

const COMPONENT_ID$5 = 'buttons.icon';
const sizeStyles$2 = props => {
  let marginProperty;
  if (props.$position === 'start') {
    marginProperty = `margin-${props.theme.rtl ? 'left' : 'right'}`;
  } else if (props.$position === 'end') {
    marginProperty = `margin-${props.theme.rtl ? 'right' : 'left'}`;
  }
  return marginProperty && styled.css(["", ":", "px;"], marginProperty, props.theme.space.base * 2);
};
const StyledIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.7.1'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-19meqgg-0"
})(["transform:", ";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;", ";", ";"], props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, props => sizeStyles$2(props), reactTheming.componentStyles);

const COMPONENT_ID$4 = 'buttons.button';
const getBorderRadius = props => {
  if (props.$isPill) {
    return '100px';
  }
  return props.theme.borderRadii.md;
};
const getHeight = props => {
  if (props.$size === 'small') {
    return `${props.theme.space.base * 8}px`;
  } else if (props.$size === 'large') {
    return `${props.theme.space.base * 12}px`;
  }
  return `${props.theme.space.base * 10}px`;
};
const colorStyles$1 = _ref => {
  let {
    theme,
    $isLink,
    $isBasic,
    $isDanger,
    $isNeutral,
    $isPrimary,
    $focusInset
  } = _ref;
  let retVal;
  const disabledBackgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.disabled'
  });
  const disabledForegroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.disabled'
  });
  const offset100 = {
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  };
  const offset200 = {
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  };
  if ($isLink) {
    const options = {
      theme,
      variable: $isDanger ? 'foreground.danger' : 'foreground.primary'
    };
    const foregroundColor = reactTheming.getColor(options);
    const hoverForegroundColor = reactTheming.getColor({
      ...options,
      ...offset100
    });
    const activeForegroundColor = reactTheming.getColor({
      ...options,
      ...offset200
    });
    const focusOutlineColor = reactTheming.getColor({
      theme,
      variable: 'border.primaryEmphasis'
    });
    retVal = styled.css(["outline-color:transparent;background-color:transparent;color:", ";", " &:hover{color:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:", ";}&:disabled{color:", ";}"], foregroundColor, reactTheming.focusStyles({
      theme,
      condition: false,
      styles: {
        color: foregroundColor,
        outlineColor: focusOutlineColor
      }
    }), hoverForegroundColor, activeForegroundColor, disabledForegroundColor);
  } else if ($isPrimary) {
    let backgroundVariable;
    if ($isDanger) {
      backgroundVariable = 'background.dangerEmphasis';
    } else if ($isNeutral) {
      backgroundVariable = 'background.emphasis';
    } else {
      backgroundVariable = 'background.primaryEmphasis';
    }
    const options = {
      theme,
      variable: backgroundVariable
    };
    const backgroundColor = reactTheming.getColor(options);
    const hoverBackgroundColor = reactTheming.getColor({
      ...options,
      ...offset100
    });
    const activeBackgroundColor = reactTheming.getColor({
      ...options,
      ...offset200
    });
    const foregroundColor = reactTheming.getColor({
      theme,
      variable: 'foreground.onEmphasis'
    });
    retVal = styled.css(["outline-color:transparent;background-color:", ";color:", ";&:hover{background-color:", ";}", " &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{background-color:", ";}&:disabled{background-color:", ";color:", ";}"], backgroundColor, foregroundColor, hoverBackgroundColor, reactTheming.focusStyles({
      theme,
      inset: $focusInset,
      shadowWidth: $focusInset ? 'sm' : 'md',
      spacerWidth: $focusInset ? 'sm' : 'xs',
      styles: ($isDanger || $isNeutral) && $focusInset ? {
        borderColor: reactTheming.getColor({
          theme,
          variable: 'border.primaryEmphasis'
        })
      } : undefined
    }), activeBackgroundColor, disabledBackgroundColor, disabledForegroundColor);
  } else {
    let borderColor;
    let hoverBorderColor;
    let activeBorderColor;
    let focusBorderColor;
    let backgroundVariable;
    let foregroundVariable;
    if ($isDanger) {
      if (!$isBasic) {
        const borderOptions = {
          theme,
          variable: 'border.dangerEmphasis'
        };
        borderColor = reactTheming.getColor(borderOptions);
        hoverBorderColor = reactTheming.getColor({
          ...borderOptions,
          ...offset100
        });
        activeBorderColor = reactTheming.getColor({
          ...borderOptions,
          ...offset200
        });
        if ($isNeutral) {
          focusBorderColor = reactTheming.getColor(borderOptions);
        }
      }
      backgroundVariable = 'background.dangerEmphasis';
      foregroundVariable = $isNeutral ? 'foreground.default' : 'foreground.danger';
    } else {
      if (!$isBasic) {
        const borderOptions = {
          theme,
          variable: 'border.primaryEmphasis'
        };
        if ($isNeutral) {
          borderColor = reactTheming.getColor({
            theme,
            variable: 'border.default',
            ...offset100
          });
          hoverBorderColor = reactTheming.getColor(borderOptions);
          focusBorderColor = hoverBorderColor;
          activeBorderColor = reactTheming.getColor({
            ...borderOptions,
            ...offset100
          });
        } else {
          borderColor = reactTheming.getColor(borderOptions);
          hoverBorderColor = reactTheming.getColor({
            ...borderOptions,
            ...offset100
          });
          activeBorderColor = reactTheming.getColor({
            ...borderOptions,
            ...offset200
          });
        }
      }
      backgroundVariable = 'background.primaryEmphasis';
      foregroundVariable = $isNeutral ? 'foreground.default' : 'foreground.primary';
    }
    const hoverBackgroundColor = reactTheming.getColor({
      theme,
      variable: backgroundVariable,
      transparency: theme.opacity[100]
    });
    const activeBackgroundColor = reactTheming.getColor({
      theme,
      variable: backgroundVariable,
      transparency: theme.opacity[200]
    });
    const foregroundOptions = {
      theme,
      variable: foregroundVariable
    };
    const foregroundColor = reactTheming.getColor(foregroundOptions);
    let hoverForegroundColor;
    let activeForegroundColor;
    let iconForegroundColor;
    let hoverIconForegroundColor;
    let activeIconForegroundColor;
    if ($isNeutral) {
      const iconOptions = {
        theme,
        variable: 'foreground.subtle'
      };
      iconForegroundColor = reactTheming.getColor(iconOptions);
      hoverIconForegroundColor = reactTheming.getColor({
        ...iconOptions,
        ...offset100
      });
      activeIconForegroundColor = reactTheming.getColor({
        ...iconOptions,
        ...offset200
      });
    } else {
      hoverForegroundColor = reactTheming.getColor({
        ...foregroundOptions,
        ...offset100
      });
      activeForegroundColor = reactTheming.getColor({
        ...foregroundOptions,
        ...offset200
      });
    }
    retVal = styled.css(["outline-color:transparent;border-color:", ";background-color:transparent;color:", ";&:hover{border-color:", ";background-color:", ";color:", ";}", " &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{border-color:", ";background-color:", ";color:", ";}&:disabled{border-color:transparent;background-color:", ";color:", ";}& ", "{color:", ";}&:hover ", ",&:focus-visible ", "{color:", ";}&:active ", "{color:", ";}&:disabled ", "{color:", ";}"], borderColor, foregroundColor, hoverBorderColor, hoverBackgroundColor, hoverForegroundColor, reactTheming.focusStyles({
      theme,
      inset: $focusInset,
      styles: {
        borderColor: focusBorderColor
      }
    }), activeBorderColor, activeBackgroundColor, activeForegroundColor, disabledBackgroundColor, disabledForegroundColor, StyledIcon, iconForegroundColor, StyledIcon, StyledIcon, hoverIconForegroundColor, StyledIcon, activeIconForegroundColor, StyledIcon, disabledForegroundColor);
  }
  return retVal;
};
const groupStyles = _ref2 => {
  let {
    theme,
    $isPrimary,
    $isBasic,
    $isPill,
    $focusInset
  } = _ref2;
  const {
    rtl,
    borderWidths,
    borders
  } = theme;
  const startPosition = rtl ? 'right' : 'left';
  const endPosition = rtl ? 'left' : 'right';
  const marginOffset = borderWidths.sm;
  const marginDisplacement = `${$isPrimary || $isBasic ? '' : '-'}${marginOffset}`;
  const iconMarginDisplacement = $isPill && '-2px';
  const disabledBackgroundColor = !$isPrimary && reactTheming.getColor({
    theme,
    variable: 'background.disabled'
  });
  const borderColor = $isBasic ? 'transparent' : 'revert';
  const focusColor = reactTheming.getColor({
    theme,
    variable: 'border.primaryEmphasis'
  });
  const focusBoxShadow = $isBasic && !$isPrimary && reactTheming.getFocusBoxShadow({
    theme,
    inset: $focusInset,
    spacerColor: {
      hue: focusColor
    },
    color: {
      hue: 'transparent'
    }
  });
  return styled.css(["position:relative;transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,margin-", " 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;border:", " ", ";", "{border-color:", ";box-shadow:", ";}&:hover,&:active,", "{z-index:1;}&:disabled{z-index:-1;background-color:", ";}&:not(:first-of-type){margin-", ":", ";}&:not(:first-of-type):disabled{margin-", ":", ";}&:not(:first-of-type):not(:last-of-type){border-radius:0;}&:first-of-type:not(:last-of-type){border-top-", "-radius:0;border-bottom-", "-radius:0;}&:last-of-type:not(:first-of-type){border-top-", "-radius:0;border-bottom-", "-radius:0;}&:first-of-type:not(:last-of-type) ", "{margin-", ":", ";}&:last-of-type:not(:first-of-type) ", "{margin-", ":", ";}"], startPosition, borders.sm, borderColor, reactTheming.SELECTOR_FOCUS_VISIBLE, focusColor, focusBoxShadow, reactTheming.SELECTOR_FOCUS_VISIBLE, disabledBackgroundColor, startPosition, marginDisplacement, startPosition, marginOffset, endPosition, endPosition, startPosition, startPosition, StyledIcon, endPosition, iconMarginDisplacement, StyledIcon, startPosition, iconMarginDisplacement);
};
const iconStyles$1 = props => {
  const $size = props.$size === 'small' ? props.theme.iconSizes.sm : props.theme.iconSizes.md;
  return styled.css(["width:", ";min-width:", ";height:", ";vertical-align:", ";"], $size, $size, $size, props.$isLink && 'middle');
};
const sizeStyles$1 = props => {
  let retVal;
  if (props.$isLink) {
    retVal = styled.css(["padding:0;font-size:inherit;"]);
  } else {
    const height = getHeight(props);
    const lineHeight = polished.math(`${height} - (${props.theme.borderWidths.sm} * 2)`);
    let padding;
    let fontSize;
    if (props.$size === 'small') {
      fontSize = props.theme.fontSizes.sm;
      padding = `${props.theme.space.base * 3}px`;
    } else {
      fontSize = props.theme.fontSizes.md;
      if (props.$size === 'large') {
        padding = `${props.theme.space.base * 5}px`;
      } else {
        padding = `${props.theme.space.base * 4}px`;
      }
    }
    retVal = styled.css(["padding:0 ", ";height:", ";line-height:", ";font-size:", ";"], polished.em(polished.math(`${padding} - ${props.theme.borderWidths.sm}`), fontSize), height, lineHeight, fontSize);
  }
  return retVal;
};
const StyledButton = styled__default.default.button.attrs(props => ({
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID$4,
  'data-garden-version': '9.7.1',
  type: props.type || 'button'
})).withConfig({
  displayName: "StyledButton",
  componentId: "sc-qe3ace-0"
})(["display:", ";align-items:", ";justify-content:", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:", ";border-radius:", ";cursor:pointer;width:", ";overflow:hidden;text-decoration:", ";text-overflow:ellipsis;white-space:", ";font-family:inherit;font-weight:", ";-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:", ";-webkit-touch-callout:none;", ";&::-moz-focus-inner{border:0;padding:0;}", "{text-decoration:none;}&:hover{text-decoration:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:", ";}", ";&:disabled{cursor:default;text-decoration:", ";}& ", "{", "}", " &&{", "}", ""], props => props.$isLink ? 'inline' : 'inline-flex', props => !props.$isLink && 'center', props => !props.$isLink && 'center', props => `${props.$isLink ? `0px solid` : props.theme.borders.sm} transparent`, props => getBorderRadius(props), props => props.$isStretched ? '100%' : '', props => props.$isUnderlined ? 'underline' : 'none', props => !props.$isLink && 'nowrap', props => props.$isLink ? 'inherit' : props.theme.fontWeights.regular, props => !props.$isLink && 'none', props => sizeStyles$1(props), reactTheming.SELECTOR_FOCUS_VISIBLE, props => props.$isLink ? 'underline' : 'none', props => props.$isLink ? 'underline' : 'none', props => colorStyles$1(props), props => props.$isLink && 'none', StyledIcon, props => iconStyles$1(props), StyledSplitButton, props => groupStyles(props), reactTheming.componentStyles);

const COMPONENT_ID$3 = 'buttons.icon_button';
const iconColorStyles = _ref => {
  let {
    theme
  } = _ref;
  const options = {
    theme,
    variable: 'foreground.subtle'
  };
  const baseColor = reactTheming.getColor(options);
  const hoverColor = reactTheming.getColor({
    ...options,
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const activeColor = reactTheming.getColor({
    ...options,
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  });
  return styled.css(["color:", ";&:hover{color:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:", ";}"], baseColor, hoverColor, activeColor);
};
const iconButtonStyles = props => {
  const width = getHeight(props);
  return styled.css(["border:", ";padding:0;width:", ";min-width:", ";", ";&:disabled{background-color:", ";}"], props.$isBasic && 'none', width, width, props.$isBasic && !(props.$isPrimary || props.$isDanger || props.disabled) && iconColorStyles(props), !props.$isPrimary && 'transparent');
};
const iconStyles = props => {
  const size = props.theme.iconSizes.md;
  return styled.css(["width:", ";height:", ";& > svg{transition:opacity 0.15s ease-in-out;}"], size, size);
};
const StyledIconButton = styled__default.default(StyledButton).attrs(props => {
  const externalId = props['data-garden-id'];
  return {
    'data-garden-id': externalId && externalId !== COMPONENT_ID$4 ? externalId : COMPONENT_ID$3,
    'data-garden-version': '9.7.1'
  };
}).withConfig({
  displayName: "StyledIconButton",
  componentId: "sc-1t0ughp-0"
})(["", ";& ", "{", "}", ";"], iconButtonStyles, StyledIcon, iconStyles, reactTheming.componentStyles);

const SplitButtonContext = React.createContext(undefined);
const useSplitButtonContext = () => {
  return React.useContext(SplitButtonContext);
};

const IconButton = React.forwardRef((_ref, ref) => {
  let {
    children,
    focusInset,
    isBasic,
    isDanger,
    isNeutral,
    isPill,
    isPrimary,
    isRotated,
    size,
    ...other
  } = _ref;
  const splitButtonFocusInset = useSplitButtonContext();
  return React__namespace.default.createElement(StyledIconButton, Object.assign({}, other, {
    $isBasic: isBasic,
    $isDanger: isDanger,
    $isNeutral: isNeutral,
    $isPill: isPill,
    $isPrimary: isPrimary,
    $size: size,
    $focusInset: focusInset || splitButtonFocusInset,
    ref: ref
  }), React__namespace.default.createElement(StyledIcon, {
    $isRotated: isRotated
  }, children));
});
IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  focusInset: PropTypes__default.default.bool,
  isBasic: PropTypes__default.default.bool,
  isDanger: PropTypes__default.default.bool,
  isNeutral: PropTypes__default.default.bool,
  isPill: PropTypes__default.default.bool,
  isPrimary: PropTypes__default.default.bool,
  isRotated: PropTypes__default.default.bool,
  size: PropTypes__default.default.oneOf(SIZE$1)
};
IconButton.defaultProps = {
  isPill: true,
  isBasic: true,
  size: 'medium'
};

var _path$2;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgLeafStroke = function SvgLeafStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinejoin: "round",
    d: "M11.5 4.5l-11 11 3-3v-6c0-3.314 4-6 11.5-6a.5.5 0 01.5.5c0 7.5-2.686 11.5-6 11.5h-6l8-8zm-4 4H11 7.5zm0-3.5v3.5V5z"
  })));
};

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgXStroke = function SvgXStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3 13L13 3m0 10L3 3"
  })));
};

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgBotSparkleFill = function SvgBotSparkleFill(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M0 3.002c0-.116.073-.218.186-.254.069-.023.14-.045.215-.068.463-.142.985-.301 1.132-.813l.215-.684c.07-.244.44-.244.51 0l.222.695c.102.306.35.553.652.655l.685.215c.244.069.244.44 0 .509-.075.028-.168.055-.268.085-.298.088-.663.197-.821.384-.188.16-.3.537-.39.836a4.1 4.1 0 0 1-.08.252.27.27 0 0 1-.251.186.267.267 0 0 1-.255-.182l-.23-.684a1.061 1.061 0 0 0-.655-.659l-.681-.218A.27.27 0 0 1 0 3.002ZM.76 5.03a1.001 1.001 0 0 0-.143 1.894A1 1 0 0 0 1 7v3.91c0 .602.488 1.09 1.09 1.09h7.82A1.09 1.09 0 0 0 11 10.91V7a1 1 0 0 0 0-2v-.91A1.09 1.09 0 0 0 9.91 3H7v-.955a.545.545 0 0 0-.545-.545h-.91A.545.545 0 0 0 5 2.045v.958c0 .451-.262 1.022-.89 1.211l-.672.215a.058.058 0 0 0-.022.02v.002l-.207.656c-.187.63-.758.893-1.211.893C1.55 6 .99 5.744.794 5.134A3.582 3.582 0 0 1 .76 5.03ZM7 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM4.5 9h3v1h-3V9ZM5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  })));
};

const COMPONENT_ID$2 = 'tooltip.paragraph';
const StyledParagraph = styled__default.default.p.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.7.1'
}).withConfig({
  displayName: "StyledParagraph",
  componentId: "sc-wuqkfc-0"
})(["margin:0;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$1 = 'tooltip.title';
const StyledTitle = styled__default.default.strong.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.7.1'
}).withConfig({
  displayName: "StyledTitle",
  componentId: "sc-vnjcvz-0"
})(["display:none;margin:0;font-weight:", ";", ";"], props => props.theme.fontWeights.semibold, reactTheming.componentStyles);

const COMPONENT_ID = 'tooltip.tooltip';
const sizeStyles = _ref => {
  let {
    theme,
    $hasArrow,
    $placement,
    $size
  } = _ref;
  let margin = `${theme.space.base * 1.5}px`;
  let borderRadius = theme.borderRadii.sm;
  let padding = '0 1em';
  let maxWidth;
  let overflowWrap;
  let whiteSpace = 'nowrap';
  let lineHeight = reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.sm);
  let fontSize = theme.fontSizes.sm;
  let titleDisplay;
  let paragraphMarginTop;
  let wordWrap;
  if ($size !== 'small') {
    borderRadius = theme.borderRadii.md;
    overflowWrap = 'break-word';
    whiteSpace = 'normal';
    wordWrap = 'break-word';
  }
  if ($size === 'extra-large') {
    padding = `${theme.space.base * 10}px`;
    maxWidth = `460px`;
    lineHeight = reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2.5}px`;
  } else if ($size === 'large') {
    padding = `${theme.space.base * 5}px`;
    maxWidth = `270px`;
    lineHeight = reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2}px`;
  } else if ($size === 'medium') {
    padding = '1em';
    maxWidth = `140px`;
    lineHeight = reactTheming.getLineHeight(theme.space.base * 4, theme.fontSizes.sm);
  }
  if ($size === 'extra-large' || $size === 'large') {
    fontSize = theme.fontSizes.md;
    titleDisplay = 'block';
  }
  let arrowSize;
  let arrowShift;
  if ($hasArrow) {
    if ($size === 'small') {
      arrowSize = margin;
      if (['left-start', 'left-end', 'right-start', 'right-end'].includes($placement)) {
        arrowShift = `-${theme.borderRadii.md}px`;
      } else {
        arrowShift = '0';
      }
    } else if ($size === 'medium') {
      arrowSize = margin;
    } else if ($size === 'large') {
      margin = `${theme.space.base * 2}px`;
      arrowSize = margin;
    } else if ($size === 'extra-large') {
      margin = `${theme.space.base * 3}px`;
      arrowSize = `${theme.space.base * 2.5}px`;
    }
  }
  return styled.css(["margin:", ";border-radius:", ";padding:", ";max-width:", ";line-height:", ";word-wrap:", ";white-space:", ";font-size:", ";overflow-wrap:", ";", ";", "{margin-top:", ";}", "{display:", ";}"], margin, borderRadius, padding, maxWidth, lineHeight, wordWrap, whiteSpace, fontSize, overflowWrap, $hasArrow && reactTheming.arrowStyles(reactTheming.getArrowPosition(theme, $placement), {
    size: arrowSize,
    shift: arrowShift
  }), StyledParagraph, paragraphMarginTop, StyledTitle, titleDisplay);
};
const colorStyles = _ref2 => {
  let {
    theme,
    $type
  } = _ref2;
  let borderColor;
  let boxShadow;
  let backgroundColor;
  let color;
  let titleColor;
  if ($type === 'light') {
    backgroundColor = reactTheming.getColor({
      theme,
      variable: 'background.raised'
    });
    borderColor = reactTheming.getColor({
      theme,
      variable: 'border.default'
    });
    boxShadow = theme.shadows.lg(`${theme.space.base * (theme.colors.base === 'dark' ? 4 : 5)}px`, `${theme.space.base * (theme.colors.base === 'dark' ? 6 : 7)}px`, reactTheming.getColor({
      variable: 'shadow.medium',
      theme
    }));
    color = reactTheming.getColor({
      theme,
      variable: 'foreground.subtle'
    });
    titleColor = reactTheming.getColor({
      theme,
      variable: 'foreground.default'
    });
  } else {
    backgroundColor = reactTheming.getColor({
      theme,
      hue: 'neutralHue',
      light: {
        shade: 900
      },
      dark: {
        shade: 700
      }
    });
    borderColor = backgroundColor;
    boxShadow = theme.shadows.lg(`${theme.space.base}px`, `${theme.space.base * 2}px`, reactTheming.getColor({
      variable: 'shadow.small',
      theme
    }));
    color = reactTheming.getColor({
      theme,
      hue: 'white'
    });
  }
  return styled.css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";", "{color:", ";}"], borderColor, boxShadow, backgroundColor, color, StyledTitle, titleColor);
};
const StyledTooltip = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.7.1'
}).withConfig({
  displayName: "StyledTooltip",
  componentId: "sc-gzzjq4-0"
})(["display:inline-block;border:", ";box-sizing:border-box;direction:", ";text-align:", ";font-weight:", ";", ";&[aria-hidden='true']{display:none;}", ";", ";"], props => props.theme.borders.sm, props => props.theme.rtl && 'rtl', props => props.theme.rtl ? 'right' : 'left', props => props.theme.fontWeights.regular, sizeStyles, colorStyles, reactTheming.componentStyles);

const StyledTooltipWrapper = styled__default.default.div.withConfig({
  displayName: "StyledTooltipWrapper",
  componentId: "sc-1b7q9q6-0"
})(["position:absolute;top:0;left:0;transition:opacity 10ms;opacity:1;z-index:", ";&[aria-hidden='true']{visibility:hidden;opacity:0;}"], props => props.$zIndex);

const Paragraph = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledParagraph, Object.assign({
  ref: ref
}, props)));
Paragraph.displayName = 'Tooltip.Paragraph';

const Title = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledTitle, Object.assign({
  ref: ref
}, props)));
Title.displayName = 'Tooltip.Title';

/**
  * @reach/utils v0.18.0
  *
  * Copyright (c) 2018-2022, React Training LLC
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */

// src/can-use-dom.ts
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var useIsomorphicLayoutEffect = canUseDOM() ? React.useLayoutEffect : React.useEffect;

var serverHandoffComplete = false;
var id = 0;
function genId() {
  return ++id;
}
var maybeReactUseId = React__namespace["useId".toString()];
function useId$1(providedId) {
  if (maybeReactUseId !== void 0) {
    let generatedId = maybeReactUseId();
    return providedId ?? generatedId;
  }
  let initialId = providedId ?? (serverHandoffComplete ? genId() : null);
  let [id2, setId] = React__namespace.useState(initialId);
  useIsomorphicLayoutEffect(() => {
    if (id2 === null) {
      setId(genId());
    }
  }, []);
  React__namespace.useEffect(() => {
    if (serverHandoffComplete === false) {
      serverHandoffComplete = true;
    }
  }, []);
  return providedId ?? id2 ?? void 0;
}

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(fn => {
      fn && fn(event, ...args);
      return event && event.defaultPrevented;
    });
  };
}
function getControlledValue() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  for (const value of values) {
    if (value !== undefined) {
      return value;
    }
  }
  return undefined;
}
const KEYS = {
  ALT: 'Alt',
  ASTERISK: '*',
  BACKSPACE: 'Backspace',
  COMMA: ',',
  DELETE: 'Delete',
  DOWN: 'ArrowDown',
  END: 'End',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  HOME: 'Home',
  LEFT: 'ArrowLeft',
  NUMPAD_ADD: 'Add',
  NUMPAD_DECIMAL: 'Decimal',
  NUMPAD_DIVIDE: 'Divide',
  NUMPAD_ENTER: 'Enter',
  NUMPAD_MULTIPLY: 'Multiply',
  NUMPAD_SUBTRACT: 'Subtract',
  PAGE_DOWN: 'PageDown',
  PAGE_UP: 'PageUp',
  PERIOD: '.',
  RIGHT: 'ArrowRight',
  SHIFT: 'Shift',
  SPACE: ' ',
  TAB: 'Tab',
  UNIDENTIFIED: 'Unidentified',
  UP: 'ArrowUp'
};
let idCounter = 0;
const useId = id => useId$1(id) || `id:${idCounter++}`;

const useTooltip = _ref => {
  let {
    delayMilliseconds = 500,
    id,
    isVisible,
    triggerRef
  } = _ref;
  const _id = useId(id);
  const [visibility, setVisibility] = React.useState(isVisible);
  const [isTriggerPopupExpanded, setIsTriggerPopupExpanded] = React.useState(false);
  const isMounted = React.useRef(false);
  const openTooltipTimeoutId = React.useRef();
  const closeTooltipTimeoutId = React.useRef();
  const openTooltip = React.useCallback(function (delayMs) {
    if (delayMs === void 0) {
      delayMs = delayMilliseconds;
    }
    clearTimeout(closeTooltipTimeoutId.current);
    const timerId = setTimeout(() => {
      if (isMounted.current) {
        setVisibility(true);
      }
    }, delayMs);
    openTooltipTimeoutId.current = Number(timerId);
  }, [delayMilliseconds]);
  const closeTooltip = React.useCallback(function (delayMs) {
    if (delayMs === void 0) {
      delayMs = delayMilliseconds;
    }
    clearTimeout(openTooltipTimeoutId.current);
    const timerId = setTimeout(() => {
      if (isMounted.current) {
        setVisibility(false);
      }
    }, delayMs);
    closeTooltipTimeoutId.current = Number(timerId);
  }, [delayMilliseconds]);
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(openTooltipTimeoutId.current);
      clearTimeout(closeTooltipTimeoutId.current);
    };
  }, [closeTooltipTimeoutId, openTooltipTimeoutId]);
  React.useEffect(() => {
    const triggerElement = triggerRef?.current?.getAttribute('aria-haspopup') === 'true' ? triggerRef.current : null;
    const updateTriggerPopupExpandedState = () => {
      if (triggerElement) {
        setIsTriggerPopupExpanded(triggerElement.getAttribute('aria-expanded') === 'true');
      }
    };
    const mutationObserver = new MutationObserver(updateTriggerPopupExpandedState);
    if (triggerElement) {
      mutationObserver.observe(triggerElement, {
        attributes: true,
        attributeFilter: ['aria-expanded']
      });
    }
    updateTriggerPopupExpandedState();
    return () => mutationObserver.disconnect();
  }, [triggerRef]);
  const getTriggerProps = React.useCallback(function (_temp) {
    let {
      tabIndex = 0,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onKeyDown,
      ...other
    } = _temp === void 0 ? {} : _temp;
    return {
      tabIndex,
      onMouseEnter: composeEventHandlers(onMouseEnter, () => openTooltip()),
      onMouseLeave: composeEventHandlers(onMouseLeave, () => closeTooltip()),
      onFocus: composeEventHandlers(onFocus, () => openTooltip()),
      onBlur: composeEventHandlers(onBlur, () => closeTooltip(0)),
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        if (event.key === KEYS.ESCAPE && visibility) {
          closeTooltip(0);
        }
      }),
      'aria-describedby': _id,
      'data-garden-container-id': 'containers.tooltip',
      'data-garden-container-version': '2.0.0',
      ref: triggerRef,
      ...other
    };
  }, [_id, closeTooltip, openTooltip, triggerRef, visibility]);
  const getTooltipProps = React.useCallback(function (_temp2) {
    let {
      role = 'tooltip',
      onMouseEnter,
      onMouseLeave,
      ...other
    } = _temp2 === void 0 ? {} : _temp2;
    return {
      role,
      onMouseEnter: composeEventHandlers(onMouseEnter, () => openTooltip()),
      onMouseLeave: composeEventHandlers(onMouseLeave, () => closeTooltip()),
      'aria-hidden': !visibility || isTriggerPopupExpanded,
      id: _id,
      ...other
    };
  }, [_id, closeTooltip, openTooltip, visibility, isTriggerPopupExpanded]);
  return React.useMemo(() => ({
    isVisible: visibility && !isTriggerPopupExpanded,
    getTooltipProps,
    getTriggerProps,
    openTooltip,
    closeTooltip
  }), [closeTooltip, getTooltipProps, getTriggerProps, openTooltip, visibility, isTriggerPopupExpanded]);
};
({
  children: PropTypes__default.default.func,
  render: PropTypes__default.default.func,
  delayMilliseconds: PropTypes__default.default.number,
  id: PropTypes__default.default.string,
  isVisible: PropTypes__default.default.bool,
  triggerRef: PropTypes__default.default.any.isRequired
});

const PLACEMENT = ['auto', ...reactTheming.PLACEMENT];
const SIZE = ['small', 'medium', 'large', 'extra-large'];
const TYPE = ['light', 'dark'];

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

function getCssDimensions(element) {
  const css = getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(floating) {
  return topLayerSelectors.some(selector => {
    try {
      return floating.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element) || isTopLayer(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      ...(await getDimensionsFn(data.floating))
    }
  };
};
function isRTL(element) {
  return getComputedStyle(element).direction === 'rtl';
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement$1 = autoPlacement$2;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = flip$2;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

var index = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React__namespace.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React__namespace.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React__namespace.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React__namespace.useState(null);
  const [_floating, _setFloating] = React__namespace.useState(null);
  const setReference = React__namespace.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React__namespace.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React__namespace.useRef(null);
  const floatingRef = React__namespace.useRef(null);
  const dataRef = React__namespace.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const openRef = useLatestRef(open);
  const update = React__namespace.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM__namespace.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React__namespace.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React__namespace.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React__namespace.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React__namespace.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React__namespace.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = (options, deps) => ({
  ...flip$1(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = (options, deps) => ({
  ...autoPlacement$1(options),
  options: [options, deps]
});

const toSize = (size, type) => {
  let retVal = size;
  if (retVal === undefined) {
    retVal = type === 'dark' ? 'small' : 'large';
  }
  return retVal;
};

const PLACEMENT_DEFAULT = 'top';
const TooltipComponent = _ref => {
  let {
    id,
    delayMS,
    isInitialVisible,
    content,
    refKey,
    placement: _placement,
    fallbackPlacements: _fallbackPlacements,
    children,
    hasArrow,
    size,
    type,
    appendToNode,
    zIndex,
    isVisible: externalIsVisible,
    onFocus,
    onBlur,
    ...props
  } = _ref;
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const triggerRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const {
    isVisible,
    getTooltipProps,
    getTriggerProps,
    openTooltip,
    closeTooltip
  } = useTooltip({
    id,
    delayMilliseconds: delayMS,
    isVisible: isInitialVisible,
    triggerRef
  });
  const controlledIsVisible = getControlledValue(externalIsVisible, isVisible);
  const [floatingPlacement, fallbackPlacements] = reactTheming.getFloatingPlacements(theme, _placement === 'auto' ? PLACEMENT_DEFAULT : _placement, _fallbackPlacements);
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = useFloating({
    platform: {
      ...platform,
      isRTL: () => theme.rtl
    },
    elements: {
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: floatingPlacement,
    middleware: _placement === 'auto' ? [autoPlacement()] : [flip({
      fallbackPlacements
    })]
  });
  React.useEffect(() => {
    let cleanup;
    if (controlledIsVisible && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [controlledIsVisible, refs.reference, refs.floating, update]);
  const Child = React__namespace.default.Children.only(children);
  const Node = React__namespace.default.createElement(StyledTooltipWrapper, {
    ref: floatingRef,
    style: {
      transform
    },
    $zIndex: zIndex,
    "aria-hidden": !controlledIsVisible
  }, React__namespace.default.createElement(StyledTooltip, Object.assign({
    $hasArrow: hasArrow,
    $placement: placement,
    $size: toSize(size, type),
    $type: type
  }, getTooltipProps({
    'aria-hidden': !controlledIsVisible,
    onBlur: composeEventHandlers(onBlur, () => closeTooltip(0)),
    onFocus: composeEventHandlers(onFocus, openTooltip),
    ...props
  })), content));
  return React__namespace.default.createElement(React__namespace.default.Fragment, null, React.cloneElement(Child, getTriggerProps({
    ...Child.props,
    [refKey]: reactMergeRefs.mergeRefs([triggerRef, Child.ref ? Child.ref : null])
  })), appendToNode ? ReactDOM.createPortal(Node, appendToNode) : Node);
};
TooltipComponent.displayName = 'Tooltip';
TooltipComponent.propTypes = {
  appendToNode: PropTypes__default.default.any,
  hasArrow: PropTypes__default.default.bool,
  delayMS: PropTypes__default.default.number,
  id: PropTypes__default.default.string,
  content: PropTypes__default.default.node.isRequired,
  placement: PropTypes__default.default.oneOf(PLACEMENT),
  fallbackPlacements: PropTypes__default.default.arrayOf(PropTypes__default.default.oneOf(PLACEMENT.filter(placement => placement !== 'auto'))),
  size: PropTypes__default.default.oneOf(SIZE),
  type: PropTypes__default.default.oneOf(TYPE),
  zIndex: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  isInitialVisible: PropTypes__default.default.bool,
  refKey: PropTypes__default.default.string
};
TooltipComponent.defaultProps = {
  hasArrow: true,
  type: 'dark',
  placement: PLACEMENT_DEFAULT,
  delayMS: 500,
  refKey: 'ref'
};
const Tooltip = TooltipComponent;
Tooltip.Paragraph = Paragraph;
Tooltip.Title = Title;

const StyledMetaWrapper = styled__default.default.div.withConfig({
  displayName: "StyledMetaWrapper",
  componentId: "sc-5za90y-0"
})(["display:flex;align-items:center;gap:4px;"]);

const StyledTextWrapper = styled__default.default.div.withConfig({
  displayName: "StyledTextWrapper",
  componentId: "sc-1ay2646-0"
})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]);

const StyledAdornmentWrapper = styled__default.default.div.withConfig({
  displayName: "StyledAdornmentWrapper",
  componentId: "sc-1lkywni-0"
})(["height:100%;width:40px;min-width:40px;overflow:hidden;display:grid;place-items:center;justify-content:center;"]);

const StyledAnchor = styled__default.default.a.withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-exc5av-0"
})(["all:unset;display:flex;flex:1 1 0%;cursor:pointer;min-width:0%;&:hover{text-decoration:none;}"]);

const StyledListItem = styled__default.default.li.withConfig({
  displayName: "StyledListItem",
  componentId: "sc-s781ov-0"
})(["all:unset;*,*::before,*::after{box-sizing:border-box;}height:40px;min-width:136px;max-width:224px;display:flex;border:1px solid grey;border-radius:8px;"]);

const Tab = () => React__namespace.default.createElement("div", {
  style: {
    width: '15%'
  }
}, React__namespace.default.createElement(StyledListItem, null, React__namespace.default.createElement(StyledAnchor, null, React__namespace.default.createElement(StyledAdornmentWrapper, null, React__namespace.default.createElement(SvgLeafStroke, null)), React__namespace.default.createElement("div", {
  style: {
    minWidth: 0
  }
}, React__namespace.default.createElement(StyledTextWrapper, null, "A berry berry super long title"), React__namespace.default.createElement(StyledMetaWrapper, null, React__namespace.default.createElement("div", null, React__namespace.default.createElement(SvgBotSparkleFill, null)), React__namespace.default.createElement(StyledTextWrapper, null, "Berry berry long Sous titre")))), React__namespace.default.createElement(StyledAdornmentWrapper, null, React__namespace.default.createElement(Tooltip, {
  content: "Leaf"
}, React__namespace.default.createElement(IconButton, {
  "aria-label": "leaf",
  size: "small"
}, React__namespace.default.createElement(SvgXStroke, null))))));

exports.Tab = Tab;
