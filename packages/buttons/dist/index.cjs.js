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

const SIZE = ['small', 'medium', 'large'];

const COMPONENT_ID$5 = 'buttons.button_group_view';
const StyledSplitButton = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSplitButton",
  componentId: "sc-1u4v04v-0"
})(["display:inline-flex;position:relative;z-index:0;direction:", ";white-space:nowrap;", ";"], props => props.theme.rtl && 'rtl', reactTheming.componentStyles);

const COMPONENT_ID$4 = 'buttons.icon';
const sizeStyles$1 = props => {
  let marginProperty;
  if (props.$position === 'start') {
    marginProperty = `margin-${props.theme.rtl ? 'left' : 'right'}`;
  } else if (props.$position === 'end') {
    marginProperty = `margin-${props.theme.rtl ? 'right' : 'left'}`;
  }
  return marginProperty && styled.css(["", ":", "px;"], marginProperty, props.theme.space.base * 2);
};
const StyledIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-19meqgg-0"
})(["transform:", ";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;", ";", ";"], props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, props => sizeStyles$1(props), reactTheming.componentStyles);

const COMPONENT_ID$3 = 'buttons.button';
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
const colorStyles = ({
  theme,
  $isLink,
  $isBasic,
  $isDanger,
  $isNeutral,
  $isPrimary,
  $focusInset
}) => {
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
        color: foregroundColor ,
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
const groupStyles = ({
  theme,
  $isPrimary,
  $isBasic,
  $isPill,
  $focusInset
}) => {
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
const sizeStyles = props => {
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
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID$3,
  'data-garden-version': '9.12.3',
  type: props.type || 'button'
})).withConfig({
  displayName: "StyledButton",
  componentId: "sc-qe3ace-0"
})(["display:", ";align-items:", ";justify-content:", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:", ";border-radius:", ";cursor:pointer;width:", ";overflow:hidden;text-decoration:", ";text-overflow:ellipsis;white-space:", ";font-family:inherit;font-weight:", ";-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:", ";-webkit-touch-callout:none;", ";&::-moz-focus-inner{border:0;padding:0;}", "{text-decoration:none;}&:hover{text-decoration:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:", ";}", ";&:disabled{cursor:default;text-decoration:", ";}& ", "{", "}", " &&{", "}", ""], props => props.$isLink ? 'inline' : 'inline-flex', props => !props.$isLink && 'center', props => !props.$isLink && 'center', props => `${props.$isLink ? `0px solid` : props.theme.borders.sm} transparent`, props => getBorderRadius(props), props => props.$isStretched ? '100%' : '', props => props.$isUnderlined ? 'underline' : 'none', props => !props.$isLink && 'nowrap', props => props.$isLink ? 'inherit' : props.theme.fontWeights.regular, props => !props.$isLink && 'none', props => sizeStyles(props), reactTheming.SELECTOR_FOCUS_VISIBLE, props => props.$isLink ? 'underline' : 'none', props => props.$isLink ? 'underline' : 'none', props => colorStyles(props), props => props.$isLink && 'none', StyledIcon, props => iconStyles$1(props), StyledSplitButton, props => groupStyles(props), reactTheming.componentStyles);

const COMPONENT_ID$2 = 'buttons.anchor';
const StyledAnchor = styled__default.default(StyledButton).attrs(props => ({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3',
  as: 'a',
  dir: props.theme.rtl ? 'rtl' : undefined,
  $isLink: true,
  type: undefined
})).withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-xshgmo-0"
})(["direction:", ";", ";"], props => props.theme.rtl && 'rtl', reactTheming.componentStyles);

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgNewWindowStroke = function SvgNewWindowStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M10.5 8.5V10c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h1.5M6 6l4-4m-3.5-.5H10c.3 0 .5.2.5.5v3.5"
  })));
};

const COMPONENT_ID$1 = 'buttons.external_icon';
const StyledExternalIcon = styled__default.default(SvgNewWindowStroke).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledExternalIcon",
  componentId: "sc-16oz07e-0"
})(["transform:", ";margin-bottom:-0.085em;padding-left:0.25em;box-sizing:content-box;width:0.85em;height:0.85em;", ";"], props => props.theme.rtl && 'scaleX(-1)', reactTheming.componentStyles);

const COMPONENT_ID = 'buttons.icon_button';
const iconColorStyles = ({
  theme
}) => {
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
    'data-garden-id': externalId && externalId !== COMPONENT_ID$3 ? externalId : COMPONENT_ID,
    'data-garden-version': '9.12.3'
  };
}).withConfig({
  displayName: "StyledIconButton",
  componentId: "sc-1t0ughp-0"
})(["", ";& ", "{", "}", ";"], iconButtonStyles, StyledIcon, iconStyles, reactTheming.componentStyles);

const SplitButtonContext = React.createContext(undefined);
const useSplitButtonContext = () => {
  return React.useContext(SplitButtonContext);
};

const StartIconComponent = ({
  isRotated,
  ...props
}) => React__namespace.default.createElement(StyledIcon, Object.assign({
  $position: "start",
  $isRotated: isRotated
}, props));
StartIconComponent.displayName = 'Button.StartIcon';
const StartIcon = StartIconComponent;

const EndIconComponent = ({
  isRotated,
  ...props
}) => React__namespace.default.createElement(StyledIcon, Object.assign({
  $position: "end",
  $isRotated: isRotated
}, props));
EndIconComponent.displayName = 'Button.EndIcon';
const EndIcon = EndIconComponent;

const ButtonComponent = React.forwardRef(({
  focusInset,
  isBasic,
  isDanger,
  isLink,
  isNeutral,
  isPill,
  isPrimary,
  isStretched,
  size = 'medium',
  ...other
}, ref) => {
  const splitButtonFocusInset = useSplitButtonContext();
  return React__namespace.default.createElement(StyledButton, Object.assign({}, other, {
    $focusInset: focusInset || splitButtonFocusInset,
    $isBasic: isBasic,
    $isDanger: isDanger,
    $isLink: isLink,
    $isNeutral: isNeutral,
    $isPill: isPill,
    $isPrimary: isPrimary,
    $isStretched: isStretched,
    $isUnderlined: isLink,
    $size: size,
    ref: ref
  }));
});
ButtonComponent.displayName = 'Button';
ButtonComponent.propTypes = {
  focusInset: PropTypes__default.default.bool,
  isBasic: PropTypes__default.default.bool,
  isDanger: PropTypes__default.default.bool,
  isLink: PropTypes__default.default.bool,
  isNeutral: PropTypes__default.default.bool,
  isPill: PropTypes__default.default.bool,
  isPrimary: PropTypes__default.default.bool,
  isStretched: PropTypes__default.default.bool,
  size: PropTypes__default.default.oneOf(SIZE)
};
const Button = ButtonComponent;
Button.EndIcon = EndIcon;
Button.StartIcon = StartIcon;

const Anchor = React.forwardRef(({
  children,
  externalIconLabel,
  isDanger,
  isExternal,
  isUnderlined = true,
  ...other
}, ref) => {
  let anchorProps = other;
  if (isExternal) {
    anchorProps = {
      target: '_blank',
      rel: 'noopener noreferrer',
      ...anchorProps
    };
  }
  const checkProps = isExternal ? {
    externalIconLabel
  } : {
    noIconLabel: 'true'
  };
  const iconAriaLabel = reactTheming.useText(Anchor, checkProps, isExternal ? 'externalIconLabel' : 'noIconLabel', '(opens in a new tab)');
  return React__namespace.default.createElement(StyledAnchor, Object.assign({
    ref: ref,
    $isDanger: isDanger,
    $isUnderlined: isUnderlined
  }, anchorProps), children, !!isExternal &&
  React__namespace.default.createElement(StyledExternalIcon, {
    role: "img",
    "aria-label": iconAriaLabel,
    "aria-hidden": undefined
  }));
});
Anchor.displayName = 'Anchor';
Anchor.propTypes = {
  isExternal: PropTypes__default.default.bool,
  isDanger: PropTypes__default.default.bool,
  isUnderlined: PropTypes__default.default.bool,
  externalIconLabel: PropTypes__default.default.string
};

const IconButton = React.forwardRef(({
  children,
  focusInset,
  isBasic = true,
  isDanger,
  isNeutral,
  isPill = true,
  isPrimary,
  isRotated,
  size = 'medium',
  ...other
}, ref) => {
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
  size: PropTypes__default.default.oneOf(SIZE)
};

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgChevronDownStroke = function SvgChevronDownStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
  })));
};

const ChevronButton = React.forwardRef(({
  isBasic = false,
  isPill = false,
  size = 'medium',
  ...props
}, ref) => React__namespace.default.createElement(IconButton, Object.assign({
  ref: ref,
  isBasic: isBasic,
  isPill: isPill,
  size: size
}, props), React__namespace.default.createElement(SvgChevronDownStroke, null)));
ChevronButton.displayName = 'ChevronButton';
ChevronButton.propTypes = IconButton.propTypes;

const SplitButton = React.forwardRef(({
  children,
  ...other
}, ref) => React__namespace.default.createElement(SplitButtonContext.Provider, {
  value: true
}, React__namespace.default.createElement(StyledSplitButton, Object.assign({
  ref: ref
}, other), children)));
SplitButton.displayName = 'SplitButton';

const ToggleButton = React.forwardRef(({
  isPressed,
  size = 'medium',
  ...otherProps
}, ref) => React__namespace.default.createElement(Button, Object.assign({
  "aria-pressed": isPressed,
  size: size,
  ref: ref
}, otherProps)));
ToggleButton.displayName = 'ToggleButton';
ToggleButton.propTypes = {
  ...Button.propTypes,
  isPressed: PropTypes__default.default.oneOf([true, false, 'mixed'])
};

const ToggleIconButton = React.forwardRef(({
  isPressed,
  isPill = true,
  isBasic = true,
  size = 'medium',
  ...otherProps
}, ref) => React__namespace.default.createElement(IconButton, Object.assign({
  "aria-pressed": isPressed,
  isPill: isPill,
  isBasic: isBasic,
  size: size,
  ref: ref
}, otherProps)));
ToggleIconButton.displayName = 'ToggleIconButton';
ToggleIconButton.propTypes = {
  ...IconButton.propTypes,
  isPressed: PropTypes__default.default.oneOf([true, false, 'mixed'])
};

exports.Anchor = Anchor;
exports.Button = Button;
exports.ChevronButton = ChevronButton;
exports.IconButton = IconButton;
exports.SplitButton = SplitButton;
exports.ToggleButton = ToggleButton;
exports.ToggleIconButton = ToggleIconButton;
