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
var containerCombobox = require('@zendeskgarden/container-combobox');
var reactTheming = require('@zendeskgarden/react-theming');
var reactForms = require('@zendeskgarden/react-forms');
var polished = require('polished');
var reactTags = require('@zendeskgarden/react-tags');
var reactDom$1 = require('react-dom');
var reactDom = require('@floating-ui/react-dom');
var containerUtilities = require('@zendeskgarden/container-utilities');
var reactTooltips = require('@zendeskgarden/react-tooltips');
var reactMergeRefs = require('react-merge-refs');
var containerMenu = require('@zendeskgarden/container-menu');
var reactButtons = require('@zendeskgarden/react-buttons');

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

var _path$4;
function _extends$5() { return _extends$5 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$5.apply(null, arguments); }
var SvgChevronDownStroke = function SvgChevronDownStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
  })));
};

const ComboboxContext = React.createContext(undefined);
const useComboboxContext = () => {
  const context = React.useContext(ComboboxContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within a <Combobox>.');
  }
  return context;
};

const FieldContext = React.createContext(undefined);
const useFieldContext = () => {
  const context = React.useContext(FieldContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within a <Field>.');
  }
  return context;
};

const COMPONENT_ID$w = 'dropdowns.combobox.label';
const StyledLabel = styled__default.default(reactForms.Field.Label).attrs({
  'data-garden-id': COMPONENT_ID$w,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-az6now-0"
})(["vertical-align:revert;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$v = 'dropdowns.combobox.hint';
const StyledHint = styled__default.default(reactForms.Field.Hint).attrs({
  'data-garden-id': COMPONENT_ID$v,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHint",
  componentId: "sc-106qvqx-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$u = 'dropdowns.combobox.message';
const StyledMessage = styled__default.default(reactForms.Field.Message).attrs({
  'data-garden-id': COMPONENT_ID$u,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMessage",
  componentId: "sc-jux8m5-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$t = 'dropdowns.combobox';
const sizeStyles$b = props => {
  const minWidth = `${props.$isCompact ? 100 : 144}px`;
  const marginTop = `${props.theme.space.base * (props.$isCompact ? 1 : 2)}px`;
  return styled.css(["min-width:", ";", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", ";}"], minWidth, StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, marginTop);
};
const StyledCombobox = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$t,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCombobox",
  componentId: "sc-13eybg8-0"
})(["", ";", ";"], sizeStyles$b, reactTheming.componentStyles);

const COMPONENT_ID$s = 'dropdowns.combobox.container';
const StyledContainer = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$s,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledContainer",
  componentId: "sc-14i9jid-0"
})(["display:flex;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$r = 'dropdowns.combobox.field';
const StyledField = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$r,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledField",
  componentId: "sc-zc57xl-0"
})(["direction:", ";text-align:start;", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', reactTheming.componentStyles);

const COMPONENT_ID$q = 'dropdowns.combobox.floating';
const StyledFloatingListbox = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$q,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFloatingListbox",
  componentId: "sc-1cp6spf-0"
})(["top:0;left:0;", ";", ";"], props => reactTheming.menuStyles(props.$position, {
  theme: props.theme,
  hidden: props.$isHidden,
  animationModifier: '[data-garden-animate="true"]',
  zIndex: props.$zIndex
}), reactTheming.componentStyles);

const COMPONENT_ID$p = 'dropdowns.combobox.input';
const colorStyles$a = ({
  theme
}) => {
  const placeholderColor = reactTheming.getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return styled.css(["background-color:inherit;color:inherit;&::placeholder{opacity:1;color:", ";}"], placeholderColor);
};
const getHeight = props => {
  if (props.$isBare && !props.$isMultiselectable) {
    return props.theme.space.base * 5;
  }
  return props.theme.space.base * (props.$isCompact ? 5 : 8);
};
const sizeStyles$a = props => {
  const height = props.theme.space.base * 5;
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = reactTheming.getLineHeight(height, fontSize);
  const margin = polished.math(`${props.theme.shadowWidths.sm} + ${(getHeight(props) - height) / 2}`);
  const minWidth = `${props.theme.space.base * 8}px`;
  return styled.css(["min-width:", ";height:", "px;line-height:", ";font-size:", ";&&{margin-top:", ";margin-bottom:", ";}"], minWidth, height, lineHeight, fontSize, margin, margin);
};
const StyledInput = styled__default.default.input.attrs({
  'data-garden-id': COMPONENT_ID$p,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInput",
  componentId: "sc-1lkqdg-0"
})(["flex-basis:0;flex-grow:1;border:none;padding:0;font-family:inherit;&:focus{outline:none;}", ";", ";&[hidden]{display:revert;", "}&[aria-hidden='true']{display:none;}", ";"], sizeStyles$a, colorStyles$a, props => props.$isEditable && polished.hideVisually(), reactTheming.componentStyles);

const COMPONENT_ID$o = 'dropdowns.combobox.input_group';
const sizeStyles$9 = props => {
  const margin = props.theme.shadowWidths.sm;
  return styled.css(["margin:-", ";min-width:0;& > *{margin:", ";}"], margin, margin);
};
const StyledInputGroup = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$o,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInputGroup",
  componentId: "sc-yx3q7u-0"
})(["display:flex;flex-grow:1;flex-wrap:wrap;", ";", ";"], sizeStyles$9, reactTheming.componentStyles);

const COMPONENT_ID$n = 'dropdowns.combobox.trigger';
const colorStyles$9 = ({
  theme,
  $validation,
  $isBare,
  $isLabelHovered,
  $focusInset
}) => {
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.default'
  });
  const backgroundColor = $isBare ? 'transparent' : reactTheming.getColor({
    theme,
    variable: 'background.default'
  });
  let borderColor;
  let borderVariable;
  let hoverBorderColor;
  let focusBorderColor;
  if ($validation) {
    if ($validation === 'success') {
      borderVariable = 'border.successEmphasis';
    } else if ($validation === 'warning') {
      borderVariable = 'border.warningEmphasis';
    } else if ($validation === 'error') {
      borderVariable = 'border.dangerEmphasis';
    }
    borderColor = reactTheming.getColor({
      theme,
      variable: borderVariable
    });
    hoverBorderColor = borderColor;
    focusBorderColor = borderColor;
  } else {
    borderColor = reactTheming.getColor({
      theme,
      variable: 'border.default',
      dark: {
        offset: -100
      },
      light: {
        offset: 100
      }
    });
    borderVariable = 'border.primaryEmphasis';
    hoverBorderColor = reactTheming.getColor({
      theme,
      variable: borderVariable
    });
    focusBorderColor = hoverBorderColor;
  }
  const disabledBackgroundColor = $isBare ? undefined : reactTheming.getColor({
    theme,
    variable: 'background.disabled'
  });
  const disabledBorderColor = reactTheming.getColor({
    theme,
    variable: 'border.disabled'
  });
  const disabledForegroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.disabled'
  });
  const focusSelector = `
    &:focus-within:not([aria-disabled='true']),
    &:focus-visible
  `;
  return styled.css(["color-scheme:only ", ";border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";}", " &[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], theme.colors.base, $isLabelHovered ? hoverBorderColor : borderColor, backgroundColor, foregroundColor, hoverBorderColor, reactTheming.focusStyles({
    theme,
    inset: $focusInset,
    color: {
      variable: borderVariable
    },
    selector: focusSelector,
    styles: {
      borderColor: focusBorderColor
    },
    condition: !$isBare
  }), disabledBorderColor, disabledBackgroundColor, disabledForegroundColor);
};
const sizeStyles$8 = props => {
  const inputHeight = getHeight(props);
  let minHeight;
  let horizontalPadding;
  if (props.$isBare) {
    if (props.$isMultiselectable) {
      minHeight = polished.math(`${props.theme.shadowWidths.sm} * 2 + ${inputHeight}`);
      horizontalPadding = props.theme.shadowWidths.sm;
    } else {
      minHeight = `${inputHeight}px`;
      horizontalPadding = '0';
    }
  } else {
    minHeight = `${props.theme.space.base * (props.$isCompact ? 3 : 2) + inputHeight}px`;
    horizontalPadding = `${props.theme.space.base * 3}px`;
  }
  const $maxHeight = props.$maxHeight || minHeight;
  const verticalPadding = polished.math(`(${minHeight} - ${inputHeight} - (${props.$isBare ? 0 : props.theme.borderWidths.sm} * 2)) / 2`);
  return styled.css(["padding:", " ", ";min-height:", ";max-height:", ";font-size:", ";"], verticalPadding, horizontalPadding, minHeight, $maxHeight, props.theme.fontSizes.md);
};
const StyledTrigger = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$n,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTrigger",
  componentId: "sc-116nftk-0"
})(["overflow-y:", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;border:", ";border-radius:", ";cursor:", ";box-sizing:border-box;", ";&:focus{outline:none;}", ";&[aria-disabled='true']{cursor:default;}", ";"], props => props.$isBare && !props.$isMultiselectable ? 'visible' : 'auto', props => props.$isBare ? 'none' : props.theme.borders.sm, props => props.$isBare ? '0' : props.theme.borderRadii.md, props => !props.$isAutocomplete && props.$isEditable ? 'text' : 'pointer', sizeStyles$8, colorStyles$9, reactTheming.componentStyles);

const COMPONENT_ID$m = 'dropdowns.combobox.input_icon';
const colorStyles$8 = ({
  theme,
  $isLabelHovered
}) => {
  const options = {
    theme,
    variable: 'foreground.subtle'
  };
  const color = reactTheming.getColor(options);
  const focusColor = reactTheming.getColor({
    ...options,
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const disabledColor = reactTheming.getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return styled.css(["color:", ";", ":hover &&,", ":focus-within &&,", ":focus &&{color:", ";}", "[aria-disabled='true'] &&{color:", ";}"], $isLabelHovered ? focusColor : color, StyledTrigger, StyledTrigger, StyledTrigger, focusColor, StyledTrigger, disabledColor);
};
const sizeStyles$7 = props => {
  const size = props.theme.iconSizes.md;
  const position = polished.math(`(${getHeight(props)} - ${size}) / 2`);
  const margin = `${props.theme.space.base * 2}px`;
  let side;
  if (props.$isEnd) {
    side = props.theme.rtl ? 'right' : 'left';
  } else {
    side = props.theme.rtl ? 'left' : 'right';
  }
  return styled.css(["top:", ";margin-", ":", ";width:", ";height:", ";"], position, side, margin, size, size);
};
const StyledInputIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$m,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInputIcon",
  componentId: "sc-gqbs1s-0"
})(["position:sticky;flex-shrink:0;transform:", ";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;", ";", ";", ";"], props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, sizeStyles$7, colorStyles$8, reactTheming.componentStyles);

const COMPONENT_ID$l = 'dropdowns.combobox.option';
const colorStyles$7 = ({
  theme,
  $isActive,
  $type
}) => {
  let backgroundColor;
  let boxShadow;
  if ($isActive && $type !== 'group' && $type !== 'header') {
    const variable = 'background.primaryEmphasis';
    backgroundColor = reactTheming.getColor({
      theme,
      variable,
      transparency: theme.opacity[100]
    });
    boxShadow = `inset ${theme.rtl ? `-${theme.shadowWidths.md}` : theme.shadowWidths.md} 0 ${reactTheming.getColor({
      theme,
      variable
    })}`;
  }
  let foregroundVariable;
  if ($type === 'add') {
    foregroundVariable = 'foreground.primary';
  } else if ($type === 'danger') {
    foregroundVariable = 'foreground.danger';
  } else {
    foregroundVariable = 'foreground.default';
  }
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: foregroundVariable
  });
  const disabledForegroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return styled.css(["box-shadow:", ";background-color:", ";color:", ";&[aria-disabled='true']{background-color:transparent;color:", ";}"], boxShadow, backgroundColor, foregroundColor, disabledForegroundColor);
};
const getMinHeight = props => props.theme.space.base * (props.$isCompact ? 7 : 9);
const sizeStyles$6 = props => {
  const lineHeight = props.theme.lineHeights.md;
  const minHeight = getMinHeight(props);
  const paddingHorizontal = props.$type === 'group' ? 0 : `${props.theme.space.base * 9}px`;
  const paddingVertical = props.$type === 'group' ? 0 : polished.math(`(${minHeight} - ${lineHeight}) / 2`);
  return styled.css(["box-sizing:border-box;padding:", " ", ";min-height:", "px;line-height:", ";"], paddingVertical, paddingHorizontal, minHeight, lineHeight);
};
const StyledOption = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$l,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOption",
  componentId: "sc-jl4wn6-0"
})(["display:flex;position:relative;transition:color 0.25s ease-in-out;cursor:", ";overflow-wrap:anywhere;font-weight:", ";user-select:none;&:focus{outline:none;}", ";", ";&[aria-disabled='true']{cursor:default;}&[aria-hidden='true']{", ";}", ";"], props => props.$type === 'group' || props.$type === 'header' ? 'default' : 'pointer', props => props.$type === 'header' || props.$type === 'previous' ? props.theme.fontWeights.semibold : props.theme.fontWeights.regular, sizeStyles$6, colorStyles$7, polished.hideVisually(), reactTheming.componentStyles);

const COMPONENT_ID$k = 'dropdowns.combobox.option.content';
const StyledOptionContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$k,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionContent",
  componentId: "sc-121ujpu-0"
})(["display:flex;flex-direction:column;flex-grow:1;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$j = 'dropdowns.combobox.optgroup';
const StyledOptGroup = styled__default.default.ul.attrs({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptGroup",
  componentId: "sc-1kavqsx-0"
})(["margin:0;padding:0;list-style-type:none;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$i = 'dropdowns.combobox.separator';
const colorStyles$6 = ({
  theme
}) => {
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'border.subtle'
  });
  return styled.css(["background-color:", ";"], backgroundColor);
};
const sizeStyles$5 = props => {
  const margin = `${props.theme.space.base}px`;
  const height = props.theme.borderWidths.sm;
  return styled.css(["margin:", " 0;height:", ";"], margin, height);
};
const StyledListboxSeparator = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledListboxSeparator",
  componentId: "sc-1p6toh2-0"
})(["cursor:default;", ";", ";", ";"], sizeStyles$5, colorStyles$6, reactTheming.componentStyles);

const COMPONENT_ID$h = 'dropdowns.combobox.listbox';
const sizeStyles$4 = props => {
  const padding = props.theme.space.base;
  const $minHeight = props.$minHeight === undefined ? `${getMinHeight(props) + padding * 2}px` : props.$minHeight;
  return styled.css(["min-height:", ";max-height:", ";&&&{padding-top:", "px;padding-bottom:", "px;}"], $minHeight, props.$maxHeight, padding, padding);
};
const StyledListbox = styled__default.default.ul.attrs({
  'data-garden-id': COMPONENT_ID$h,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledListbox",
  componentId: "sc-1k13ba7-0"
})(["overflow-y:auto;list-style-type:none;", ";&&&{display:block;}", ":first-child ", " ", ":first-child ", "[role='none']:first-child{display:none;}"], sizeStyles$4, StyledOption, StyledOptionContent, StyledOptGroup, StyledListboxSeparator);

const COMPONENT_ID$g = 'dropdowns.combobox.option.icon';
const colorStyles$5 = ({
  theme,
  $isDisabled,
  $type
}) => {
  let variable;
  if ($isDisabled) {
    variable = 'foreground.disabled';
  } else if ($type === 'danger') {
    variable = 'foreground.danger';
  } else if ($type === 'add') {
    variable = 'foreground.primary';
  } else {
    variable = 'foreground.subtle';
  }
  const color = reactTheming.getColor({
    theme,
    variable
  });
  return styled.css(["color:", ";"], color);
};
const sizeStyles$3 = props => {
  const size = props.theme.iconSizes.md;
  const marginTop = polished.math(`(${props.theme.lineHeights.md} - ${size}) / 2`);
  const marginHorizontal = `${props.theme.space.base * 2}px`;
  return styled.css(["margin-top:", ";margin-", ":", ";width:", ";height:", ";"], marginTop, props.theme.rtl ? 'left' : 'right', marginHorizontal, size, size);
};
const StyledOptionIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionIcon",
  componentId: "sc-qsab3y-0"
})(["flex-shrink:0;", ";", ";", ";"], sizeStyles$3, colorStyles$5, reactTheming.componentStyles);

const COMPONENT_ID$f = 'dropdowns.combobox.option.meta';
const colorStyles$4 = ({
  theme,
  $isDisabled
}) => {
  const variable = $isDisabled ? 'foreground.disabled' : 'foreground.subtle';
  const color = reactTheming.getColor({
    theme,
    variable
  });
  return styled.css(["color:", ";"], color);
};
const sizeStyles$2 = props => {
  const lineHeight = props.theme.lineHeights.sm;
  const fontSize = props.theme.fontSizes.sm;
  return styled.css(["line-height:", ";font-size:", ";"], lineHeight, fontSize);
};
const StyledOptionMeta = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionMeta",
  componentId: "sc-j6pu10-0"
})(["transition:color 0.25s ease-in-out;font-weight:", ";", ";", ";", ";"], props => props.theme.fontWeights.regular, sizeStyles$2, colorStyles$4, reactTheming.componentStyles);

const COMPONENT_ID$e = 'dropdowns.combobox.option.selection_icon';
const colorStyles$3 = ({
  theme
}) => {
  const color = reactTheming.getColor({
    theme,
    variable: 'foreground.primary'
  });
  return styled.css(["color:", ";"], color);
};
const sizeStyles$1 = ({
  theme,
  $isCompact
}) => {
  const size = theme.iconSizes.sm;
  const position = `${theme.space.base * 3.5}px`;
  const top = polished.math(`(${getMinHeight({
    theme,
    $isCompact
  })} - ${size}) / 2`);
  const side = theme.rtl ? 'right' : 'left';
  return styled.css(["top:", ";", ":", ";width:", ";height:", ";"], top, side, position, size, size);
};
const StyledOptionSelectionIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$e,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionSelectionIcon",
  componentId: "sc-12wj24m-0"
})(["position:absolute;", ";", ";", ";"], sizeStyles$1, colorStyles$3, reactTheming.componentStyles);

const COMPONENT_ID$d = 'dropdowns.combobox.option.type_icon';
const colorStyles$2 = ({
  theme,
  $type
}) => {
  const opacity = $type && $type !== 'danger' ? 1 : 0;
  let color;
  if ($type === 'add') {
    color = 'inherit';
  } else if ($type === 'header' || $type === 'next' || $type === 'previous') {
    color = reactTheming.getColor({
      theme,
      variable: 'foreground.subtle'
    });
  } else {
    color = reactTheming.getColor({
      theme,
      variable: 'foreground.primary'
    });
  }
  return styled.css(["opacity:", ";color:", ";", "[aria-selected='true'] > &{opacity:1;}", "[aria-disabled='true'] > &{color:inherit;}"], opacity, color, StyledOption, StyledOption);
};
const sizeStyles = props => {
  const size = props.theme.iconSizes.md;
  const position = `${props.theme.space.base * 3}px`;
  const top = polished.math(`(${getMinHeight(props)} - ${size}) / 2`);
  let side;
  if (props.$type === 'next') {
    side = props.theme.rtl ? 'left' : 'right';
  } else {
    side = props.theme.rtl ? 'right' : 'left';
  }
  return styled.css(["top:", ";", ":", ";width:", ";height:", ";"], top, side, position, size, size);
};
const StyledOptionTypeIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionTypeIcon",
  componentId: "sc-xpink2-0"
})(["position:absolute;transform:", ";transition:opacity 0.1s ease-in-out;", ";", ";", ";"], props => props.theme.rtl && (props.$type === 'next' || props.$type === 'previous') && 'rotate(180deg)', sizeStyles, colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$c = 'dropdowns.combobox.tag';
const StyledTag = styled__default.default(reactTags.Tag).attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTag",
  componentId: "sc-1alam0r-0"
})(["&[aria-disabled='true']{color:", ";}&[hidden]{display:revert;", "}", ";"], props => props.hue ? undefined : reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.disabled'
}), polished.hideVisually(), reactTheming.componentStyles);

const COMPONENT_ID$b = 'dropdowns.combobox.value';
const colorStyles$1 = ({
  theme,
  $isPlaceholder
}) => {
  const foregroundColor = $isPlaceholder && reactTheming.getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return styled.css(["color:", ";"], foregroundColor);
};
const StyledValue = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledValue",
  componentId: "sc-t719sx-0"
})(["flex-basis:0;flex-grow:1;cursor:", ";overflow:hidden;text-overflow:ellipsis;white-space:pre;user-select:none;", ";", ";&[hidden]{display:none;}", ";"], props => {
  if (props.$isDisabled) {
    return 'default';
  }
  return props.$isEditable && !props.$isAutocomplete ? 'text' : 'pointer';
}, sizeStyles$a, colorStyles$1, reactTheming.componentStyles);

const COMPONENT_ID$a = 'dropdowns.combobox.tags_button';
const colorStyles = ({
  theme
}) => {
  const color = reactTheming.getColor({
    theme,
    variable: 'foreground.primary'
  });
  return styled.css(["color:", ";&:disabled{color:inherit;}"], color);
};
const StyledTagsButton = styled__default.default(StyledValue).attrs({
  as: 'button',
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTagsButton",
  componentId: "sc-6q5w33-0"
})(["display:inline-flex;flex:0 1 auto;align-items:center;border:none;background-color:transparent;cursor:pointer;min-width:auto;font-family:inherit;&:hover{text-decoration:underline;}", ";&:disabled{cursor:default;text-decoration:none;}", ";"], colorStyles, reactTheming.componentStyles);

const COMPONENT_ID$9 = 'dropdowns.menu';
const StyledMenu = styled__default.default(StyledListbox).attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMenu",
  componentId: "sc-f77ntu-0"
})(["position:static !important;", ";", ";"], props => props.$arrowPosition && reactTheming.arrowStyles(props.$arrowPosition, {
  size: `${props.theme.space.base * 1.5}px`,
  inset: '1px',
  animationModifier: '[data-garden-animate-arrow="true"]'
}), reactTheming.componentStyles);

const COMPONENT_ID$8 = 'dropdowns.menu.floating';
const StyledFloatingMenu = styled__default.default(StyledFloatingListbox).attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFloatingMenu",
  componentId: "sc-1rc7ahb-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$7 = 'dropdowns.menu.item';
const StyledItem = styled__default.default(StyledOption).attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItem",
  componentId: "sc-1jp99dq-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$6 = 'dropdowns.menu.item.type_icon';
const StyledItemTypeIcon = styled__default.default(StyledOptionTypeIcon).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemTypeIcon",
  componentId: "sc-1pll3nu-0"
})(["", "[aria-checked='true'] > &{opacity:1;}", ";"], StyledItem, reactTheming.componentStyles);

const COMPONENT_ID$5 = 'dropdowns.menu.item_anchor';
const StyledItemAnchor = styled__default.default(StyledOption).attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3',
  as: 'a'
}).withConfig({
  displayName: "StyledItemAnchor",
  componentId: "sc-b75oa4-0"
})(["text-decoration:none;color:unset;&&:hover{text-decoration:none;color:inherit;}&[aria-current='page'] > ", "{opacity:1;}", ";"], StyledItemTypeIcon, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'dropdowns.menu.item.content';
const StyledItemContent = styled__default.default(StyledOptionContent).attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemContent",
  componentId: "sc-1opglsb-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$3 = 'dropdowns.menu.item_group';
const StyledItemGroup = styled__default.default(StyledOptGroup).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemGroup",
  componentId: "sc-1umk3cg-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$2 = 'dropdowns.menu.item.icon';
const StyledItemIcon = styled__default.default(StyledOptionIcon).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemIcon",
  componentId: "sc-w9orqb-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$1 = 'dropdowns.menu.item.meta';
const StyledItemMeta = styled__default.default(StyledOptionMeta).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemMeta",
  componentId: "sc-1unw3x1-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID = 'dropdowns.menu.separator';
const StyledSeparator = styled__default.default(StyledListboxSeparator).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSeparator",
  componentId: "sc-8kqwen-0"
})(["", ";"], reactTheming.componentStyles);

const Listbox = React.forwardRef(({
  appendToNode,
  children,
  isCompact,
  isExpanded,
  maxHeight,
  minHeight,
  onMouseDown,
  triggerRef,
  zIndex,
  ...props
}, ref) => {
  const floatingRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [height, setHeight] = React.useState();
  const [width, setWidth] = React.useState();
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = reactDom.useFloating({
    elements: {
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: 'bottom-start',
    middleware: [reactDom.offset(theme.space.base), reactDom.flip(), reactDom.size({
      apply: ({
        rects,
        availableHeight
      }) => {
        if (rects.reference.width > 0) {
          setWidth(rects.reference.width);
          if (!(minHeight === null || minHeight === 'fit-content') && rects.floating.height > availableHeight) {
            setHeight(availableHeight);
          }
        }
      }
    })]
  });
  const handleMouseDown = event => event.preventDefault();
  React.useEffect(() => {
    let cleanup;
    if (isExpanded && refs.reference.current && refs.floating.current) {
      cleanup = reactDom.autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [isExpanded, refs.reference, refs.floating, update]);
  React.useEffect(() => {
    let timeout;
    if (isExpanded) {
      setIsVisible(true);
    } else {
      timeout = setTimeout(() => {
        setIsVisible(false);
        setHeight(undefined);
      }, 200 );
    }
    return () => clearTimeout(timeout);
  }, [isExpanded]);
  React.useEffect(() => {
    if (height) {
      setHeight(undefined);
      update();
    }
  }, [
  children, update]);
  const Node = React__namespace.default.createElement(StyledFloatingListbox, {
    "data-garden-animate": isVisible ? 'true' : 'false',
    $isHidden: !isExpanded,
    $position: placement === 'bottom-start' ? 'bottom' : 'top',
    style: {
      transform,
      width
    },
    $zIndex: zIndex,
    ref: floatingRef
  }, React__namespace.default.createElement(StyledListbox, Object.assign({
    $isCompact: isCompact,
    $maxHeight: maxHeight,
    $minHeight: minHeight,
    "aria-hidden":
    !isExpanded,
    onMouseDown: containerUtilities.composeEventHandlers(onMouseDown, handleMouseDown),
    style: {
      height
    }
  }, props, {
    ref: ref
  }), !!isVisible && children));
  return appendToNode ? reactDom$1.createPortal(Node, appendToNode) : Node;
});
Listbox.displayName = 'Listbox';
Listbox.propTypes = {
  appendToNode: PropTypes__default.default.any,
  isCompact: PropTypes__default.default.bool,
  isExpanded: PropTypes__default.default.bool,
  maxHeight: PropTypes__default.default.string,
  triggerRef: PropTypes__default.default.any.isRequired,
  zIndex: PropTypes__default.default.number
};

const TagAvatarComponent = reactTags.Tag.Avatar;
TagAvatarComponent.displayName = 'Tag.Avatar';
const TagAvatar = TagAvatarComponent;

const TagComponent = React.forwardRef(({
  children,
  option,
  removeLabel,
  tooltipZIndex,
  ...props
}, ref) => {
  const {
    getTagProps,
    isCompact,
    removeSelection
  } = useComboboxContext();
  const text = option.label || option.value;
  const ariaLabel = reactTheming.useText(
  Tag, props, 'aria-label', `${text}, press delete or backspace to remove`, !option.disabled);
  const tagProps = getTagProps({
    option,
    'aria-label': ariaLabel
  });
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const doc = reactTheming.useDocument(theme);
  const handleClick = () => removeSelection(option.value);
  return React__namespace.default.createElement(StyledTag, Object.assign({
    "aria-disabled": option.disabled,
    tabIndex: option.disabled ? undefined : 0
  }, tagProps, props, {
    size: isCompact ? 'medium' : 'large',
    ref: ref
  }), children || React__namespace.default.createElement("span", null, text), !option.disabled && (removeLabel ?
  React__namespace.default.createElement(reactTooltips.Tooltip, {
    appendToNode: doc?.body,
    content: removeLabel,
    zIndex: tooltipZIndex
  }, React__namespace.default.createElement(StyledTag.Close, {
    "aria-label": removeLabel,
    onClick: handleClick
  })) : React__namespace.default.createElement(StyledTag.Close, {
    onClick: handleClick
  })));
});
TagComponent.displayName = 'Tag';
TagComponent.propTypes = {
  hue: PropTypes__default.default.string,
  isPill: PropTypes__default.default.bool,
  isRegular: PropTypes__default.default.bool,
  removeLabel: PropTypes__default.default.string
};
const Tag = TagComponent;
Tag.Avatar = TagAvatar;

const TagGroup = ({
  children,
  isDisabled,
  isExpanded,
  listboxZIndex,
  maxTags,
  optionTagProps,
  selection
}) => React__namespace.default.createElement(React__namespace.default.Fragment, null, selection.map((option, index) => {
  const disabled = isDisabled || option.disabled;
  return React__namespace.default.createElement(Tag, Object.assign({
    key: option.value,
    hidden: !isExpanded && index >= maxTags,
    option: {
      ...option,
      disabled
    },
    tooltipZIndex: listboxZIndex ? listboxZIndex + 1 : undefined
  }, optionTagProps[option.value]));
}), children);
TagGroup.displayName = 'TagGroup';

const toOption = props => {
  return {
    value: props.value,
    label: props.label,
    hidden: props.isHidden,
    disabled: props.isDisabled,
    selected: props.isSelected
  };
};
const toOptions = (children, optionTagProps) => React.Children.toArray(children).reduce((options, option) => {
  const retVal = options;
  if (React.isValidElement(option)) {
    if ('value' in option.props) {
      retVal.push(toOption(option.props));
      optionTagProps[option.props.value] = option.props.tagProps;
    } else {
      const props = option.props;
      const groupOptions = toOptions(props.children, optionTagProps);
      retVal.push({
        label: props.legend,
        options: groupOptions
      });
    }
  }
  return retVal;
}, []);

const MAX_TAGS = 4;
const Combobox = React.forwardRef(({
  children,
  activeIndex,
  defaultActiveIndex,
  defaultExpanded,
  endIcon,
  focusInset,
  inputProps: _inputProps,
  inputValue: _inputValue,
  isAutocomplete,
  isBare,
  isCompact,
  isDisabled,
  isEditable = true,
  isExpanded: _isExpanded,
  isMultiselectable,
  listboxAppendToNode,
  listboxAriaLabel,
  listboxMaxHeight = '400px',
  listboxMinHeight,
  listboxZIndex = 1000,
  maxHeight,
  maxTags = MAX_TAGS,
  onChange,
  placeholder,
  renderExpandTags,
  renderValue,
  selectionValue,
  startIcon,
  validation,
  ...props
}, ref) => {
  const {
    hasHint,
    hasMessage,
    labelProps,
    setLabelProps,
    hintProps,
    setHintProps,
    messageProps,
    setMessageProps
  } = useFieldContext();
  const [isInputHidden, setIsInputHidden] = React.useState(true);
  const [isLabelHovered, setIsLabelHovered] = React.useState(false);
  const [isTagGroupExpanded, setIsTagGroupExpanded] = React.useState(false);
  const [optionTagProps, setOptionTagProps] = React.useState({});
  const options = React.useMemo(() => {
    const tagProps = {};
    const retVal = toOptions(children, tagProps);
    if (isMultiselectable) {
      setOptionTagProps(value => ({
        ...value,
        ...tagProps
      }));
    }
    return retVal;
  }, [children, isMultiselectable]);
  const triggerRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const environment = reactTheming.useWindow(theme);
  const {
    activeValue,
    inputValue,
    isExpanded,
    getTriggerProps,
    getHintProps,
    getInputProps,
    getLabelProps,
    getListboxProps,
    getMessageProps,
    getOptionProps,
    getOptGroupProps,
    getTagProps,
    removeSelection,
    selection
  } = containerCombobox.useCombobox({
    idPrefix: props.id,
    triggerRef,
    inputRef,
    listboxRef,
    options,
    environment,
    hasHint,
    hasMessage,
    isAutocomplete,
    isEditable,
    isMultiselectable,
    disabled: isDisabled,
    inputValue: _inputValue,
    selectionValue,
    isExpanded: _isExpanded,
    defaultExpanded,
    activeIndex,
    defaultActiveIndex,
    onChange
  });
  const contextValue = React.useMemo(() => ({
    activeValue,
    getOptionProps,
    getOptGroupProps,
    getTagProps,
    isCompact,
    removeSelection
  }), [activeValue, getOptionProps, getOptGroupProps, getTagProps, isCompact, removeSelection]);
  const hasChevron = React.useMemo(() => !isBare && (isAutocomplete || !isEditable), [isAutocomplete, isBare, isEditable]);
  const expandTags = reactTheming.useText(Combobox, {
    renderExpandTags
  }, 'renderExpandTags', '+ {{value}} more', isMultiselectable || false);
  const _listboxAriaLabel = reactTheming.useText(Combobox, {
    listboxAriaLabel
  }, 'listboxAriaLabel', 'Options');
  const triggerProps = getTriggerProps({
    onFocus: () => {
      if (!isDisabled) {
        if (isEditable) {
          setIsInputHidden(false);
        }
        if (isMultiselectable) {
          setIsTagGroupExpanded(true);
        }
      }
    },
    onBlur: event => {
      if (event.relatedTarget === null || !triggerRef.current?.contains(event.relatedTarget)) {
        if (isEditable) {
          setIsInputHidden(true);
        }
        if (isMultiselectable) {
          setIsTagGroupExpanded(false);
        }
      }
    }
  });
  const inputProps = {
    'aria-invalid': validation === 'error' || validation === 'warning',
    hidden: isInputHidden,
    placeholder,
    ...getInputProps({
      ..._inputProps
    })
  };
  const listboxProps = getListboxProps({
    'aria-label': _listboxAriaLabel
  });
  React.useEffect(() => {
    if (!labelProps) {
      const _labelProps = getLabelProps({
        onMouseEnter: () => setIsLabelHovered(true),
        onMouseLeave: () => setIsLabelHovered(false)
      });
      setLabelProps(_labelProps);
    }
    return () => labelProps && setLabelProps(undefined);
  }, [getLabelProps, labelProps, setLabelProps]);
  React.useEffect(() => {
    if (!hintProps) {
      const _hintProps = getHintProps();
      setHintProps(_hintProps);
    }
    return () => hintProps && setHintProps(undefined);
  }, [getHintProps, hintProps, setHintProps]);
  React.useEffect(() => {
    if (!messageProps) {
      const _messageProps = getMessageProps();
      setMessageProps(_messageProps);
    }
    return () => messageProps && setMessageProps(undefined);
  }, [getMessageProps, messageProps, setMessageProps]);
  return React__namespace.default.createElement(ComboboxContext.Provider, {
    value: contextValue
  }, React__namespace.default.createElement(StyledCombobox, Object.assign({
    $isCompact: isCompact,
    tabIndex: -1
  }, props, {
    ref: ref
  }), React__namespace.default.createElement(StyledTrigger, Object.assign({
    $isAutocomplete: isAutocomplete,
    $isBare: isBare,
    $isCompact: isCompact,
    $isEditable: isEditable,
    $isLabelHovered: isLabelHovered,
    $isMultiselectable: isMultiselectable,
    $maxHeight: maxHeight,
    $focusInset: focusInset,
    $validation: validation
  }, triggerProps), React__namespace.default.createElement(StyledContainer, null, !!startIcon && React__namespace.default.createElement(StyledInputIcon, {
    $isLabelHovered: isLabelHovered,
    $isCompact: isCompact
  }, startIcon), React__namespace.default.createElement(StyledInputGroup, null, !!isMultiselectable && Array.isArray(selection) && React__namespace.default.createElement(TagGroup, {
    isDisabled: isDisabled,
    isExpanded: isTagGroupExpanded,
    maxTags: maxTags,
    optionTagProps: optionTagProps,
    selection: selection
  }, selection.length > maxTags && React__namespace.default.createElement(StyledTagsButton, {
    disabled: isDisabled,
    hidden: isTagGroupExpanded,
    $isCompact: isCompact,
    tabIndex: -1,
    type: "button"
  }, (() => {
    const value = selection.length - maxTags;
    return renderExpandTags ? renderExpandTags(value) : expandTags?.replace('{{value}}', value.toString());
  })())), React__namespace.default.createElement(StyledValue, {
    hidden: !isInputHidden,
    $isAutocomplete: isAutocomplete,
    $isBare: isBare,
    $isCompact: isCompact,
    $isDisabled: isDisabled,
    $isEditable: isEditable,
    $isMultiselectable: isMultiselectable,
    $isPlaceholder: !(inputValue || renderValue)
  }, renderValue ? renderValue({
    selection,
    inputValue
  }) : inputValue || placeholder), React__namespace.default.createElement(StyledInput, Object.assign({
    $isBare: isBare,
    $isCompact: isCompact,
    $isEditable: isEditable,
    $isMultiselectable: isMultiselectable
  }, inputProps))), !!(hasChevron || endIcon) && React__namespace.default.createElement(StyledInputIcon, {
    $isCompact: isCompact,
    $isEnd: true,
    $isLabelHovered: isLabelHovered,
    $isRotated: !!(hasChevron && isExpanded)
  }, hasChevron ? React__namespace.default.createElement(SvgChevronDownStroke, null) : endIcon))), React__namespace.default.createElement(Listbox, Object.assign({
    appendToNode: listboxAppendToNode,
    isCompact: isCompact,
    isExpanded: isExpanded,
    maxHeight: listboxMaxHeight,
    minHeight: listboxMinHeight,
    triggerRef: triggerRef,
    zIndex: listboxZIndex
  }, listboxProps), children)));
});
Combobox.displayName = 'Combobox';
Combobox.propTypes = {
  activeIndex: PropTypes__default.default.number,
  defaultActiveIndex: PropTypes__default.default.number,
  defaultExpanded: PropTypes__default.default.bool,
  endIcon: PropTypes__default.default.any,
  focusInset: PropTypes__default.default.bool,
  id: PropTypes__default.default.string,
  inputProps: PropTypes__default.default.object,
  inputValue: PropTypes__default.default.string,
  isAutocomplete: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  isCompact: PropTypes__default.default.bool,
  isDisabled: PropTypes__default.default.bool,
  isEditable: PropTypes__default.default.bool,
  isExpanded: PropTypes__default.default.bool,
  isMultiselectable: PropTypes__default.default.bool,
  listboxAppendToNode: PropTypes__default.default.any,
  listboxAriaLabel: PropTypes__default.default.string,
  listboxMaxHeight: PropTypes__default.default.string,
  listboxMinHeight: PropTypes__default.default.string,
  listboxZIndex: PropTypes__default.default.number,
  maxHeight: PropTypes__default.default.string,
  maxTags: PropTypes__default.default.number,
  onChange: PropTypes__default.default.func,
  placeholder: PropTypes__default.default.string,
  renderExpandTags: PropTypes__default.default.func,
  renderValue: PropTypes__default.default.func,
  selectionValue: PropTypes__default.default.any,
  startIcon: PropTypes__default.default.any,
  validation: PropTypes__default.default.oneOf(reactForms.VALIDATION)
};

const Hint = React.forwardRef((props, ref) => {
  const {
    hintProps,
    setHasHint
  } = useFieldContext();
  React.useEffect(() => {
    setHasHint(true);
    return () => setHasHint(false);
  }, [setHasHint]);
  return React__namespace.default.createElement(StyledHint, Object.assign({}, hintProps, props, {
    ref: ref
  }));
});
Hint.displayName = 'Field.Hint';

const Label = React.forwardRef(({
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}, ref) => {
  const {
    labelProps
  } = useFieldContext();
  return React__namespace.default.createElement(StyledLabel, Object.assign({}, labelProps, {
    onClick: containerUtilities.composeEventHandlers(onClick, labelProps?.onClick),
    onMouseEnter: containerUtilities.composeEventHandlers(onMouseEnter, labelProps?.onMouseEnter),
    onMouseLeave: containerUtilities.composeEventHandlers(onMouseLeave, labelProps?.onMouseLeave)
  }, props, {
    ref: ref
  }));
});
Label.displayName = 'Field.Label';
Label.propTypes = {
  hidden: PropTypes__default.default.bool,
  isRegular: PropTypes__default.default.bool
};

const Message = React.forwardRef((props, ref) => {
  const {
    messageProps,
    setHasMessage
  } = useFieldContext();
  React.useEffect(() => {
    setHasMessage(true);
    return () => setHasMessage(false);
  }, [setHasMessage]);
  return React__namespace.default.createElement(StyledMessage, Object.assign({}, messageProps, props, {
    ref: ref
  }));
});
Message.displayName = 'Field.Message';
Message.propTypes = {
  validation: PropTypes__default.default.oneOf(reactForms.VALIDATION),
  validationLabel: PropTypes__default.default.string
};

const FieldComponent = React.forwardRef((props, ref) => {
  const [labelProps, setLabelProps] = React.useState(undefined);
  const [hintProps, setHintProps] = React.useState(undefined);
  const [messageProps, setMessageProps] = React.useState(undefined);
  const [hasHint, setHasHint] = React.useState(false);
  const [hasMessage, setHasMessage] = React.useState(false);
  const contextValue = React.useMemo(() => ({
    labelProps,
    setLabelProps,
    hasHint,
    setHasHint,
    hintProps,
    setHintProps,
    hasMessage,
    setHasMessage,
    messageProps,
    setMessageProps
  }), [labelProps, setLabelProps, hasHint, setHasHint, hintProps, setHintProps, hasMessage, setHasMessage, messageProps, setMessageProps]);
  return React__namespace.default.createElement(FieldContext.Provider, {
    value: contextValue
  }, React__namespace.default.createElement(StyledField, Object.assign({}, props, {
    ref: ref
  })));
});
FieldComponent.displayName = 'Field';
const Field = FieldComponent;
Field.Hint = Hint;
Field.Label = Label;
Field.Message = Message;

var _path$3;
function _extends$4() { return _extends$4 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$4.apply(null, arguments); }
var SvgPlusStroke = function SvgPlusStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M7.5 2.5v12m6-6h-12"
  })));
};

var _path$2;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgChevronRightStroke = function SvgChevronRightStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z"
  })));
};

var _path$1;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgChevronLeftStroke = function SvgChevronLeftStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z"
  })));
};

var _path;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgCheckLgStroke = function SvgCheckLgStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M1 9l4 4L15 3"
  })));
};

var _circle;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgCircleSmFill = function SvgCircleSmFill(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _circle || (_circle = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 6,
    cy: 6,
    r: 2,
    fill: "currentColor"
  })));
};

const OPTION_TYPE = ['add', 'danger', 'next', 'previous'];
const PLACEMENT = ['auto', ...reactTheming.PLACEMENT];

const OptionContext = React.createContext(undefined);
const useOptionContext = () => {
  const context = React.useContext(OptionContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within an <Option>.');
  }
  return context;
};

const OptionMetaComponent = React.forwardRef((props, ref) => {
  const {
    isDisabled
  } = useOptionContext();
  return React__namespace.default.createElement(StyledOptionMeta, Object.assign({
    $isDisabled: isDisabled
  }, props, {
    ref: ref
  }));
});
OptionMetaComponent.displayName = 'Option.Meta';
const OptionMeta = OptionMetaComponent;

const OptionComponent = React.forwardRef(({
  children,
  hasSelection,
  icon,
  isDisabled,
  isHidden,
  isSelected,
  label,
  type,
  value,
  tagProps,
  ...props
}, ref) => {
  const contextValue = React.useMemo(() => ({
    isDisabled,
    type
  }), [isDisabled, type]);
  const {
    activeValue,
    getOptionProps,
    isCompact
  } = useComboboxContext();
  const isActive = value === activeValue;
  const optionRef = React.useRef(null);
  React.useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        if (optionRef.current && optionRef.current.scrollIntoView) {
          optionRef.current.scrollIntoView({
            block: 'nearest'
          });
        }
      });
    }
  }, [isActive]);
  const renderActionIcon = iconType => {
    switch (iconType) {
      case 'add':
        return React__namespace.default.createElement(SvgPlusStroke, null);
      case 'next':
        return React__namespace.default.createElement(SvgChevronRightStroke, null);
      case 'previous':
        return React__namespace.default.createElement(SvgChevronLeftStroke, null);
      default:
        return React__namespace.default.createElement(SvgCheckLgStroke, null);
    }
  };
  const option = toOption({
    value,
    label,
    isDisabled,
    isHidden,
    isSelected
  });
  const optionProps = getOptionProps({
    option,
    ref: reactMergeRefs.mergeRefs([optionRef, ref])
  });
  return React__namespace.default.createElement(OptionContext.Provider, {
    value: contextValue
  }, React__namespace.default.createElement(StyledOption, Object.assign({
    $isActive: isActive,
    $isCompact: isCompact,
    $type: type
  }, props, optionProps), !!hasSelection && type === 'next' && React__namespace.default.createElement(StyledOptionSelectionIcon, {
    $isCompact: isCompact
  }, React__namespace.default.createElement(SvgCircleSmFill, null)), React__namespace.default.createElement(StyledOptionTypeIcon, {
    $isCompact: isCompact,
    $type: type
  }, renderActionIcon(type)), !!icon && React__namespace.default.createElement(StyledOptionIcon, {
    $isDisabled: isDisabled,
    $type: type
  }, icon), React__namespace.default.createElement(StyledOptionContent, null, children || label || value)));
});
OptionComponent.displayName = 'Option';
OptionComponent.propTypes = {
  hasSelection: PropTypes__default.default.bool,
  icon: PropTypes__default.default.any,
  isDisabled: PropTypes__default.default.bool,
  isSelected: PropTypes__default.default.bool,
  isHidden: PropTypes__default.default.bool,
  label: PropTypes__default.default.string,
  tagProps: PropTypes__default.default.object,
  type: PropTypes__default.default.oneOf(OPTION_TYPE),
  value: PropTypes__default.default.string.isRequired
};
const Option = OptionComponent;
Option.Meta = OptionMeta;

const OptGroup = React.forwardRef(({
  children,
  content,
  icon,
  legend,
  'aria-label': ariaLabel,
  onMouseDown,
  ...props
}, ref) => {
  const {
    getOptGroupProps,
    isCompact
  } = useComboboxContext();
  const handleMouseDown = event => event.preventDefault();
  const groupAriaLabel = reactTheming.useText(OptGroup, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Group', !legend );
  const optGroupProps = getOptGroupProps({
    'aria-label': groupAriaLabel || legend
  });
  return React__namespace.default.createElement(StyledOption, Object.assign({
    $isCompact: isCompact,
    $type: "group",
    onMouseDown: containerUtilities.composeEventHandlers(onMouseDown, handleMouseDown),
    role: "none"
  }, props, {
    ref: ref
  }), React__namespace.default.createElement(StyledOptionContent, null, !!(content || legend) && React__namespace.default.createElement(StyledOption, {
    as: "div",
    $isCompact: isCompact,
    $type: "header"
  }, !!icon && React__namespace.default.createElement(StyledOptionTypeIcon, {
    $isCompact: isCompact,
    $type: "header"
  }, icon), content || legend), React__namespace.default.createElement(StyledOptGroup, Object.assign({
    $isCompact: isCompact
  }, optGroupProps), React__namespace.default.createElement(StyledListboxSeparator, {
    role: "none"
  }), children)));
});
OptGroup.displayName = 'OptGroup';
OptGroup.propTypes = {
  content: PropTypes__default.default.any,
  icon: PropTypes__default.default.any,
  legend: PropTypes__default.default.string
};

const MenuContext = React.createContext(undefined);
const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within a <Menu>.');
  }
  return context;
};

const toItem = props => ({
  value: props.value,
  label: props.label,
  ...(props.name && {
    name: props.name
  }),
  ...(props.href && {
    href: props.href
  }),
  ...(props.isDisabled && {
    disabled: props.isDisabled
  }),
  ...(props.isExternal && {
    external: props.isExternal
  }),
  ...(props.isSelected && {
    selected: props.isSelected
  }),
  ...(props.selectionType && {
    type: props.selectionType
  }),
  ...(props.type === 'next' && {
    isNext: true
  }),
  ...(props.type === 'previous' && {
    isPrevious: true
  })
});
const toItems = (children, type) => React.Children.toArray(children).reduce((items, item) => {
  const retVal = items;
  if (React.isValidElement(item)) {
    if ('value' in item.props) {
      retVal.push(toItem({
        ...item.props,
        selectionType: type
      }));
    } else {
      const props = item.props;
      const groupLabel = props.legend || props['aria-label'];
      const isSelectableGroup = props.type && ['checkbox', 'radio'].includes(props.type);
      if (groupLabel || isSelectableGroup) {
        const groupItems = toItems(props.children, props.type);
        retVal.push({
          label: props.legend || props['aria-label'],
          items: groupItems
        });
      }
    }
  }
  return retVal;
}, []);

const PLACEMENT_DEFAULT = 'bottom-start';
const MenuList = React.forwardRef(({
  appendToNode,
  hasArrow,
  isCompact,
  isExpanded,
  fallbackPlacements: _fallbackPlacements,
  maxHeight = '400px',
  minHeight,
  placement: _placement = PLACEMENT_DEFAULT,
  triggerRef,
  zIndex = 1000,
  children,
  ...props
}, ref) => {
  const floatingRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(isExpanded);
  const [height, setHeight] = React.useState();
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
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
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: floatingPlacement,
    middleware: [reactDom.offset(theme.space.base * (hasArrow ? 2 : 1)), _placement === 'auto' ? reactDom.autoPlacement() : reactDom.flip({
      fallbackPlacements
    }), reactDom.size({
      apply: ({
        rects,
        availableHeight
      }) => {
        if (!(minHeight === null || minHeight === 'fit-content')) {
          if (rects.floating.height > availableHeight) {
            setHeight(availableHeight);
          }
        }
      }
    })]
  });
  React.useEffect(() => {
    let cleanup;
    if (isExpanded && refs.reference.current && refs.floating.current) {
      cleanup = reactDom.autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [isExpanded, refs.reference, refs.floating, update]);
  React.useEffect(() => {
    let timeout;
    if (isExpanded) {
      setIsVisible(true);
    } else {
      timeout = setTimeout(() => {
        setIsVisible(false);
        setHeight(undefined);
      }, 200 );
    }
    return () => clearTimeout(timeout);
  }, [isExpanded]);
  React.useEffect(() => {
    if (height) {
      setHeight(undefined);
      update();
    }
  }, [
  children, update]);
  const Node = React__namespace.default.createElement(StyledFloatingMenu, {
    "data-garden-animate": isVisible,
    $isHidden: !isExpanded || !isVisible ,
    $position: reactTheming.getMenuPosition(placement),
    $zIndex: zIndex,
    style: {
      transform
    },
    ref: floatingRef
  }, React__namespace.default.createElement(StyledMenu, Object.assign({
    "data-garden-animate-arrow": isVisible,
    $arrowPosition: hasArrow ? reactTheming.getArrowPosition(theme, placement) : undefined,
    $isCompact: isCompact,
    $minHeight: minHeight,
    $maxHeight: maxHeight,
    style: {
      height
    }
  }, props, {
    ref: ref
  }), !!isVisible && children));
  return appendToNode ? reactDom$1.createPortal(Node, appendToNode) : Node;
});
MenuList.displayName = 'MenuList';
MenuList.propTypes = {
  appendToNode: PropTypes__default.default.any,
  hasArrow: PropTypes__default.default.bool,
  isCompact: PropTypes__default.default.bool,
  isExpanded: PropTypes__default.default.bool,
  maxHeight: PropTypes__default.default.string,
  minHeight: PropTypes__default.default.string,
  placement: PropTypes__default.default.oneOf(PLACEMENT),
  triggerRef: PropTypes__default.default.any,
  zIndex: PropTypes__default.default.number
};

const Menu = React.forwardRef(({
  button,
  buttonProps: _buttonProps = {},
  children,
  isCompact,
  focusedValue: _focusedValue,
  defaultFocusedValue,
  defaultExpanded,
  isExpanded: _isExpanded,
  restoreFocus,
  selectedItems,
  onChange,
  onMouseLeave,
  maxHeight = '400px',
  placement = 'bottom-start',
  zIndex = 1000,
  ...props
}, ref) => {
  const triggerRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const items = toItems(children);
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const environment = reactTheming.useWindow(theme);
  const {
    isExpanded,
    focusedValue,
    getTriggerProps,
    getMenuProps,
    getAnchorProps,
    getItemProps,
    getItemGroupProps,
    getSeparatorProps
  } = containerMenu.useMenu({
    rtl: theme.rtl,
    environment,
    defaultFocusedValue,
    focusedValue: _focusedValue,
    defaultExpanded,
    isExpanded: _isExpanded,
    restoreFocus,
    selectedItems,
    items,
    menuRef,
    triggerRef,
    onChange
  });
  const {
    onClick,
    onKeyDown,
    disabled,
    ref: _ref,
    ...buttonProps
  } = _buttonProps;
  const triggerProps = {
    ...(isCompact && {
      size: 'small'
    }),
    ...buttonProps,
    ...getTriggerProps({
      type: 'button',
      onClick,
      onKeyDown,
      disabled
    }),
    ref: reactMergeRefs.mergeRefs([triggerRef, _ref])
  };
  const trigger = typeof button === 'function' ? button(triggerProps) : React__namespace.default.createElement(reactButtons.Button, triggerProps, button, React__namespace.default.createElement(reactButtons.Button.EndIcon, {
    isRotated: isExpanded
  }, React__namespace.default.createElement(SvgChevronDownStroke, null)));
  const contextValue = React.useMemo(() => ({
    isCompact,
    focusedValue,
    getAnchorProps,
    getItemProps,
    getItemGroupProps,
    getSeparatorProps
  }), [focusedValue, getAnchorProps, getItemGroupProps, getItemProps, getSeparatorProps, isCompact]);
  return React__namespace.default.createElement(MenuContext.Provider, {
    value: contextValue
  }, trigger, React__namespace.default.createElement(MenuList, Object.assign({}, props, getMenuProps({
    onMouseLeave
  }), {
    ref: reactMergeRefs.mergeRefs([menuRef, ref]),
    isCompact: isCompact,
    isExpanded: isExpanded,
    triggerRef: triggerRef,
    maxHeight: maxHeight,
    placement: placement,
    zIndex: zIndex
  }), children));
});
Menu.displayName = 'Menu';
Menu.propTypes = {
  appendToNode: PropTypes__default.default.any,
  button: PropTypes__default.default.any.isRequired,
  buttonProps: PropTypes__default.default.object,
  defaultExpanded: PropTypes__default.default.bool,
  defaultFocusedValue: PropTypes__default.default.string,
  fallbackPlacements: PropTypes__default.default.arrayOf(PropTypes__default.default.any),
  focusedValue: PropTypes__default.default.string,
  hasArrow: PropTypes__default.default.bool,
  isCompact: PropTypes__default.default.bool,
  isExpanded: PropTypes__default.default.bool,
  maxHeight: PropTypes__default.default.string,
  minHeight: PropTypes__default.default.string,
  onChange: PropTypes__default.default.func,
  placement: PropTypes__default.default.oneOf(PLACEMENT),
  restoreFocus: PropTypes__default.default.bool,
  selectedItems: PropTypes__default.default.arrayOf(PropTypes__default.default.any),
  zIndex: PropTypes__default.default.number
};

const ItemGroupContext = React.createContext({});
const useItemGroupContext = () => {
  return React.useContext(ItemGroupContext);
};

const ItemGroup = React.forwardRef(({
  children,
  content,
  legend,
  icon,
  'aria-label': ariaLabel,
  type,
  ...props
}, ref) => {
  const {
    isCompact,
    getItemGroupProps
  } = useMenuContext();
  const groupAriaLabel = reactTheming.useText(ItemGroup, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Group', !legend );
  const groupProps = getItemGroupProps({
    'aria-label': groupAriaLabel || legend
  });
  const contextValue = React.useMemo(() => ({
    type
  }), [type]);
  return React__namespace.default.createElement(ItemGroupContext.Provider, {
    value: contextValue
  }, React__namespace.default.createElement(StyledItem, Object.assign({
    $isCompact: isCompact,
    $type: "group"
  }, props, {
    role: "none",
    ref: ref
  }), React__namespace.default.createElement(StyledItemContent, null, !!(content || legend) && React__namespace.default.createElement(StyledItem, {
    as: "div",
    $isCompact: isCompact,
    $type: "header"
  }, !!icon && React__namespace.default.createElement(StyledItemTypeIcon, {
    $isCompact: isCompact,
    $type: "header"
  }, icon), content || legend), React__namespace.default.createElement(StyledItemGroup, Object.assign({
    $isCompact: isCompact
  }, groupProps), React__namespace.default.createElement(StyledSeparator, {
    role: "none"
  }), children))));
});
ItemGroup.displayName = 'ItemGroup';
ItemGroup.propTypes = {
  content: PropTypes__default.default.any,
  icon: PropTypes__default.default.any,
  legend: PropTypes__default.default.string,
  type: PropTypes__default.default.oneOf(['checkbox', 'radio', undefined])
};

const ItemContext = React.createContext(undefined);
const useItemContext = () => {
  const context = React.useContext(ItemContext);
  if (!context) {
    throw new Error('Error: this component must be rendered within an <Item>.');
  }
  return context;
};

const ItemMetaComponent = React.forwardRef((props, ref) => {
  const {
    isDisabled
  } = useItemContext();
  return React__namespace.default.createElement(StyledItemMeta, Object.assign({
    $isDisabled: isDisabled
  }, props, {
    ref: ref
  }));
});
ItemMetaComponent.displayName = 'Item.Meta';
const ItemMeta = ItemMetaComponent;

const renderActionIcon = itemType => {
  switch (itemType) {
    case 'add':
      return React__namespace.default.createElement(SvgPlusStroke, null);
    case 'next':
      return React__namespace.default.createElement(SvgChevronRightStroke, null);
    case 'previous':
      return React__namespace.default.createElement(SvgChevronLeftStroke, null);
    default:
      return React__namespace.default.createElement(SvgCheckLgStroke, null);
  }
};
const ItemComponent = React.forwardRef(({
  children,
  value,
  label = value,
  href,
  isSelected,
  icon,
  isDisabled,
  isExternal,
  type,
  name,
  onClick,
  onKeyDown,
  onMouseEnter,
  ...other
}, ref) => {
  const {
    type: selectionType
  } = useItemGroupContext();
  const {
    focusedValue,
    getAnchorProps,
    getItemProps,
    isCompact
  } = useMenuContext();
  const item = {
    ...toItem({
      value,
      label,
      name,
      type,
      isSelected,
      isDisabled,
      href,
      isExternal
    }),
    type: selectionType
  };
  const anchorProps = getAnchorProps({
    item
  });
  if (anchorProps && (type === 'add' || type === 'danger')) {
    throw new Error(`Menu link item '${value}' can't use type '${type}'`);
  }
  const {
    ref: _itemRef,
    ...itemProps
  } = getItemProps({
    item,
    onClick,
    onKeyDown,
    onMouseEnter
  });
  const contextValue = React.useMemo(() => ({
    isDisabled,
    type
  }), [isDisabled, type]);
  const itemChildren = React__namespace.default.createElement(React__namespace.default.Fragment, null, React__namespace.default.createElement(StyledItemTypeIcon, {
    $isCompact: isCompact,
    $type: type
  }, renderActionIcon(type)), !!icon && React__namespace.default.createElement(StyledItemIcon, {
    $isDisabled: isDisabled,
    $type: type
  }, icon), React__namespace.default.createElement(StyledItemContent, null, children || label));
  const menuItemProps = {
    ...other,
    ...itemProps,
    ref: reactMergeRefs.mergeRefs([_itemRef, ref])
  };
  return React__namespace.default.createElement(ItemContext.Provider, {
    value: contextValue
  }, anchorProps ? React__namespace.default.createElement("li", menuItemProps, React__namespace.default.createElement(StyledItemAnchor, Object.assign({
    $isCompact: isCompact,
    $isActive: value === focusedValue
  }, anchorProps), itemChildren)) : React__namespace.default.createElement(StyledItem, Object.assign({
    $isCompact: isCompact,
    $isActive: value === focusedValue,
    $type: type
  }, menuItemProps), itemChildren));
});
ItemComponent.displayName = 'Item';
ItemComponent.propTypes = {
  href: PropTypes__default.default.string,
  icon: PropTypes__default.default.any,
  isDisabled: PropTypes__default.default.bool,
  isSelected: PropTypes__default.default.bool,
  isExternal: PropTypes__default.default.bool,
  label: PropTypes__default.default.string,
  name: PropTypes__default.default.string,
  type: PropTypes__default.default.oneOf(OPTION_TYPE),
  value: PropTypes__default.default.string.isRequired
};
const Item = ItemComponent;
Item.Meta = ItemMeta;

const Separator = React.forwardRef(
({
  children,
  ...props
}, ref) => {
  const {
    getSeparatorProps
  } = useMenuContext();
  const separatorProps = getSeparatorProps();
  return React__namespace.default.createElement(StyledSeparator, Object.assign({}, props, separatorProps, {
    ref: ref
  }));
});
Separator.displayName = 'Separator';

Object.defineProperty(exports, "VALIDATION", {
  enumerable: true,
  get: function () { return reactForms.VALIDATION; }
});
exports.Combobox = Combobox;
exports.Field = Field;
exports.Hint = Hint;
exports.Item = Item;
exports.ItemGroup = ItemGroup;
exports.Label = Label;
exports.Menu = Menu;
exports.Message = Message;
exports.OptGroup = OptGroup;
exports.Option = Option;
exports.Separator = Separator;
exports.Tag = Tag;
