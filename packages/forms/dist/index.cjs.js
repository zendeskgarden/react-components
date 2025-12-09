/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var containerField = require('@zendeskgarden/container-field');
var styled = require('styled-components');
var reactTheming = require('@zendeskgarden/react-theming');
var polished = require('polished');
var PropTypes = require('prop-types');
var containerUtilities = require('@zendeskgarden/container-utilities');
var reactMergeRefs = require('react-merge-refs');

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
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);

const FieldContext = React.createContext(undefined);
const useFieldContext = () => {
  const fieldContext = React.useContext(FieldContext);
  return fieldContext;
};

const COMPONENT_ID$G = 'forms.field';
const StyledField = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$G,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledField",
  componentId: "sc-12gzfsu-0"
})(["position:relative;direction:", ";margin:0;border:0;padding:0;font-size:0;", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', reactTheming.componentStyles);

const COMPONENT_ID$F = 'forms.fieldset';
const StyledFieldset = styled__default.default(StyledField).attrs({
  as: 'fieldset',
  'data-garden-id': COMPONENT_ID$F,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFieldset",
  componentId: "sc-1vr4mxv-0"
})(["", "{margin-top:", "px;}", ";"], StyledField, props => props.theme.space.base * (props.$isCompact ? 1 : 2), reactTheming.componentStyles);

const COMPONENT_ID$E = 'forms.input_label';
const StyledLabel = styled__default.default.label.attrs(props => ({
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID$E,
  'data-garden-version': props['data-garden-version'] || '9.12.3'
})).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-2utmsz-0"
})(["direction:", ";vertical-align:middle;line-height:", ";color:", ";font-size:", ";font-weight:", ";&[hidden]{display:", ";vertical-align:", ";text-indent:", ";font-size:", ";", ";}", ";"], props => props.theme.rtl && 'rtl', props => reactTheming.getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.default'
}), props => props.theme.fontSizes.md, props => props.$isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold, props => props.$isRadio ? 'inline-block' : 'inline', props => props.$isRadio && 'top', props => props.$isRadio && '-100%', props => props.$isRadio && '0', props => !props.$isRadio && polished.hideVisually(), reactTheming.componentStyles);

const COMPONENT_ID$D = 'forms.fieldset_legend';
const StyledLegend = styled__default.default(StyledLabel).attrs({
  as: 'legend',
  'data-garden-id': COMPONENT_ID$D,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLegend",
  componentId: "sc-6s0zwq-0"
})(["padding:0;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$C = 'forms.input_hint';
const StyledHint = styled__default.default.div.attrs(props => ({
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID$C,
  'data-garden-version': props['data-garden-version'] || '9.12.3'
})).withConfig({
  displayName: "StyledHint",
  componentId: "sc-17c2wu8-0"
})(["direction:", ";display:block;vertical-align:middle;line-height:", ";color:", ";font-size:", ";", ";"], props => props.theme.rtl && 'rtl', props => reactTheming.getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.subtle'
}), props => props.theme.fontSizes.md, reactTheming.componentStyles);

const COMPONENT_ID$B = 'forms.input_message_icon';
const StyledMessageIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$B,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMessageIcon",
  componentId: "sc-1ph2gba-0"
})(["width:", ";height:", ";", ";"], props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, reactTheming.componentStyles);

const COMPONENT_ID$A = 'forms.input_message';
const colorStyles$d = ({
  theme,
  $validation
}) => {
  let variable;
  if ($validation === 'error') {
    variable = 'foreground.danger';
  } else if ($validation === 'success') {
    variable = 'foreground.success';
  } else if ($validation === 'warning') {
    variable = 'foreground.warning';
  } else {
    variable = 'foreground.subtle';
  }
  const foregroundColor = reactTheming.getColor({
    theme,
    variable
  });
  return styled.css(["color:", ";"], foregroundColor);
};
const sizeStyles$g = ({
  theme,
  $validation
}) => {
  const fontSize = theme.fontSizes.sm;
  const lineHeight = reactTheming.getLineHeight(theme.iconSizes.md, theme.fontSizes.sm);
  const marginTop = `${theme.space.base}px`;
  const paddingHorizontal = $validation ? polished.math(`${theme.space.base * 2} + ${theme.iconSizes.md}`) : undefined;
  return styled.css(["padding-", ":", ";line-height:", ";font-size:", ";", ":not([hidden]) + &{margin-top:", ";}"], theme.rtl ? 'right' : 'left', paddingHorizontal, lineHeight, fontSize, StyledLabel, marginTop);
};
const StyledMessage = styled__default.default.div.attrs(props => ({
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID$A,
  'data-garden-version': props['data-garden-version'] || '9.12.3'
})).withConfig({
  displayName: "StyledMessage",
  componentId: "sc-30hgg7-0"
})(["direction:", ";display:inline-block;position:relative;vertical-align:middle;", ";", ";& ", "{position:absolute;top:-1px;", ":0;}", ":not([hidden]) + &{display:block;}", ";"], props => props.theme.rtl && 'rtl', sizeStyles$g, colorStyles$d, StyledMessageIcon, props => props.theme.rtl ? 'right' : 'left', StyledLabel, reactTheming.componentStyles);

const COMPONENT_ID$z = 'forms.input';
const isInvalid = validation => {
  return validation === 'warning' || validation === 'error';
};
const colorStyles$c = ({
  theme,
  $isBare,
  $isHovered,
  $focusInset,
  $validation
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
  let hoverBorderColor;
  let borderVariable;
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
  const placeholderColor = disabledForegroundColor;
  const readOnlyBackgroundColor = disabledBackgroundColor;
  const calendarPickerColor = reactTheming.getColor({
    theme,
    variable: 'foreground.subtle'
  });
  const calendarPickerIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" aria-hidden="true" color="${calendarPickerColor}">
      <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"/>
    </svg>`;
  const calendarPickerBackgroundImage = `url("data:image/svg+xml,${encodeURIComponent(calendarPickerIcon)}")`;
  return styled.css(["border-color:", ";background-color:", ";color:", ";&::placeholder{opacity:1;color:", ";}&::-webkit-datetime-edit{color:", ";}&::-webkit-calendar-picker-indicator{background-image:", ";}&[readonly],&[aria-readonly='true']{background-color:", ";}&:hover{border-color:", ";}", " &::-webkit-calendar-picker-indicator:focus-visible{", "}&:disabled,&[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], $isHovered ? hoverBorderColor : borderColor, backgroundColor, foregroundColor, placeholderColor, placeholderColor, calendarPickerBackgroundImage, readOnlyBackgroundColor, hoverBorderColor, reactTheming.focusStyles({
    theme,
    inset: $focusInset,
    color: {
      variable: borderVariable
    },
    styles: {
      borderColor: focusBorderColor
    },
    condition: !$isBare
  }), reactTheming.focusStyles({
    theme
  }), disabledBorderColor, disabledBackgroundColor, disabledForegroundColor);
};
const sizeStyles$f = ({
  theme,
  $isBare,
  $isCompact
}) => {
  const fontSize = theme.fontSizes.md;
  const paddingHorizontal = `${theme.space.base * 3}px`;
  let height;
  let paddingVertical;
  let browseFontSize;
  let swatchHeight;
  if ($isCompact) {
    height = `${theme.space.base * 8}px`;
    paddingVertical = `${theme.space.base * 1.5}px`;
    browseFontSize = polished.math(`${theme.fontSizes.sm} - 1`);
    swatchHeight = `${theme.space.base * 6}px`;
  } else {
    height = `${theme.space.base * 10}px`;
    paddingVertical = `${theme.space.base * 2.5}px`;
    browseFontSize = theme.fontSizes.sm;
    swatchHeight = `${theme.space.base * 7}px`;
  }
  const lineHeight = polished.math(`${height} - (${paddingVertical} * 2) - (${theme.borderWidths.sm} * 2)`);
  const padding = $isBare ? '0' : `${polished.em(paddingVertical, fontSize)} ${polished.em(paddingHorizontal, fontSize)}`;
  const swatchMarginVertical = polished.math(`(${lineHeight} - ${swatchHeight}) / 2`);
  const swatchMarginHorizontal = polished.math(`${paddingVertical} + ${swatchMarginVertical} - ${paddingHorizontal}`);
  const calendarPickerSize = `${theme.space.base * 5}px`;
  const calendarPickerBackgroundSize = theme.iconSizes.md;
  return styled.css(["padding:", ";min-height:", ";line-height:", ";font-size:", ";&::-ms-browse{font-size:", ";}&[type='date'],&[type='datetime-local'],&[type='file'],&[type='month'],&[type='time'],&[type='week']{max-height:", ";}&[type='file']{line-height:1;}@supports (-ms-ime-align:auto){&[type='color']{padding:", ";}}&::-moz-color-swatch{margin-top:", ";margin-left:", ";width:calc(100% + ", ");height:", ";}&::-webkit-calendar-picker-indicator{background-position:center;background-size:", ";padding:0;width:", ";height:", ";}&::-webkit-color-swatch{margin:", " ", ";}", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& ~ ", "{margin-top:", "px;}"], padding, $isBare ? '1em' : height, reactTheming.getLineHeight(lineHeight, fontSize), fontSize, browseFontSize, height, $isCompact ? '0 2px' : '1px 3px', swatchMarginVertical, swatchMarginHorizontal, polished.math(`${swatchMarginHorizontal} * -2`), swatchHeight, calendarPickerBackgroundSize, calendarPickerSize, calendarPickerSize, swatchMarginVertical, swatchMarginHorizontal, StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, theme.space.base * ($isCompact ? 1 : 2));
};
const StyledTextInput = styled__default.default.input.attrs(props => ({
  'data-garden-id': COMPONENT_ID$z,
  'data-garden-version': '9.12.3',
  'aria-invalid': isInvalid(props.$validation)
})).withConfig({
  displayName: "StyledTextInput",
  componentId: "sc-1r6733h-0"
})(["appearance:none;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;direction:", ";border:", ";border-radius:", ";width:100%;box-sizing:border-box;vertical-align:middle;font-family:inherit;&::-ms-browse{border-radius:", ";}&::-ms-clear,&::-ms-reveal{display:none;}&::-moz-color-swatch{border:none;border-radius:", ";}&::-webkit-color-swatch{border:none;border-radius:", ";}&::-webkit-color-swatch-wrapper{padding:0;}&::-webkit-clear-button,&::-webkit-inner-spin-button,&::-webkit-search-cancel-button,&::-webkit-search-results-button{display:none;}&::-webkit-datetime-edit{direction:", ";line-height:1;}&::-webkit-calendar-picker-indicator{border-radius:100%;}&:invalid{box-shadow:none;}&[type='file']::-ms-value{display:none;}@media screen and (min--moz-device-pixel-ratio:0){&[type='number']{appearance:textfield;}}", ";", ";&:disabled{cursor:default;}", ";"], props => props.theme.rtl && 'rtl', props => props.$isBare ? 'none' : props.theme.borders.sm, props => props.$isBare ? '0' : props.theme.borderRadii.md, props => props.theme.borderRadii.sm, props => props.theme.borderRadii.sm, props => props.theme.borderRadii.sm, props => props.theme.rtl && 'rtl', sizeStyles$f, colorStyles$c, reactTheming.componentStyles);

const COMPONENT_ID$y = 'forms.textarea';
const hiddenStyles = `
  visibility: hidden;
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 0;
  left: 0;
  transform: translateZ(0);
`;
const StyledTextarea = styled__default.default(StyledTextInput).attrs({
  as: 'textarea',
  'data-garden-id': COMPONENT_ID$y,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTextarea",
  componentId: "sc-wxschl-0"
})(["resize:", ";overflow:auto;", ";", ";"], props => props.$isResizable ? 'vertical' : 'none', props => props.$isHidden && hiddenStyles, reactTheming.componentStyles);

const COMPONENT_ID$x = 'forms.media_figure';
const colorStyles$b = ({
  theme,
  $isDisabled,
  $isHovered,
  $isFocused
}) => {
  let color;
  if ($isDisabled) {
    color = reactTheming.getColor({
      theme,
      variable: 'foreground.disabled'
    });
  } else {
    const options = {
      theme,
      variable: 'foreground.subtle'
    };
    if ($isHovered || $isFocused) {
      color = reactTheming.getColor({
        ...options,
        dark: {
          offset: -100
        },
        light: {
          offset: 100
        }
      });
    } else {
      color = reactTheming.getColor(options);
    }
  }
  return styled.css(["color:", ";"], color);
};
const sizeStyles$e = props => {
  const size = props.theme.iconSizes.md;
  const marginFirst = `1px ${props.theme.space.base * 2}px auto 0`;
  const marginLast = `1px 0 auto ${props.theme.space.base * 2}px`;
  let margin;
  if (props.$position === 'start') {
    margin = props.theme.rtl ? marginLast : marginFirst;
  } else {
    margin = props.theme.rtl ? marginFirst : marginLast;
  }
  return styled.css(["margin:", ";width:", ";height:", ";"], margin, size, size);
};
const StyledTextMediaFigure = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$x,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTextMediaFigure",
  componentId: "sc-1qepknj-0"
})(["transform:", ";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;", ";", " ", ";"], props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, sizeStyles$e, colorStyles$b, reactTheming.componentStyles);

const COMPONENT_ID$w = 'forms.faux_input';
const colorStyles$a = ({
  theme,
  $validation,
  $focusInset,
  $isBare,
  $isFocused
}) => {
  let borderVariable;
  let focusBorderColor;
  if ($validation) {
    if ($validation === 'success') {
      borderVariable = 'border.successEmphasis';
    } else if ($validation === 'warning') {
      borderVariable = 'border.warningEmphasis';
    } else if ($validation === 'error') {
      borderVariable = 'border.dangerEmphasis';
    }
    focusBorderColor = reactTheming.getColor({
      theme,
      variable: borderVariable
    });
  } else {
    borderVariable = 'border.primaryEmphasis';
    focusBorderColor = reactTheming.getColor({
      theme,
      variable: borderVariable
    });
  }
  return styled.css(["", ""], reactTheming.focusStyles({
    theme,
    inset: $focusInset,
    color: {
      variable: borderVariable
    },
    selector: $isFocused ? '&' : '&:focus-within',
    styles: {
      borderColor: focusBorderColor
    },
    condition: !$isBare
  }));
};
const StyledTextFauxInput = styled__default.default(StyledTextInput).attrs(props => ({
  as: 'div',
  'aria-readonly': props.$isReadOnly,
  'aria-disabled': props.$isDisabled,
  'data-garden-id': COMPONENT_ID$w,
  'data-garden-version': '9.12.3'
})).withConfig({
  displayName: "StyledTextFauxInput",
  componentId: "sc-yqw7j9-0"
})(["display:", ";align-items:", ";cursor:", ";overflow:hidden;", " & > ", "{vertical-align:", ";", "{box-shadow:unset;}}& > ", "{flex-shrink:", ";}", ";"], props => props.$mediaLayout ? 'inline-flex' : 'inline-block', props => props.$mediaLayout && 'baseline', props => props.$mediaLayout && !props.$isDisabled ? 'text' : 'default', colorStyles$a, StyledTextInput, props => !props.$mediaLayout && 'baseline', reactTheming.SELECTOR_FOCUS_VISIBLE, StyledTextMediaFigure, props => props.$mediaLayout && '0', reactTheming.componentStyles);

const COMPONENT_ID$v = 'forms.media_input';
const StyledTextMediaInput = styled__default.default(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID$v,
  'data-garden-version': '9.12.3',
  $isBare: true
}).withConfig({
  displayName: "StyledTextMediaInput",
  componentId: "sc-12i9xfi-0"
})(["flex-grow:1;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$u = 'forms.input_group';
const positionStyles = props => {
  const topMargin = `${props.theme.space.base * (props.$isCompact ? 1 : 2)}px`;
  return styled.css(["", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", ";}& > ", "{position:relative;flex:1 1 auto;margin-top:0;margin-bottom:0;width:auto;min-width:0;}"], StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, topMargin, StyledTextInput);
};
const itemStyles = props => {
  const startDirection = props.theme.rtl ? 'right' : 'left';
  const endDirection = props.theme.rtl ? 'left' : 'right';
  return styled.css(["& > *{z-index:-1;}& > ", "{z-index:0;}& > ", ":disabled{z-index:-2;}& > ", ":hover,& > button:hover,& > ", ":focus-visible,& > button:focus-visible,& > ", ":active,& > button:active,& > button[aria-pressed='true'],& > button[aria-pressed='mixed']{z-index:1;}& > button:disabled{border-top-width:0;border-bottom-width:0;}& > *:not(:first-child){margin-", ":-", ";}& > *:first-child:not(:last-child){border-top-", "-radius:0;border-bottom-", "-radius:0;}& > *:last-child:not(:first-child){border-top-", "-radius:0;border-bottom-", "-radius:0;}& > *:not(:first-child):not(:last-child){border-radius:0;}"], StyledTextInput, StyledTextInput, StyledTextInput, StyledTextInput, StyledTextInput, startDirection, props.theme.borderWidths.sm, endDirection, endDirection, startDirection, startDirection);
};
const StyledInputGroup = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$u,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInputGroup",
  componentId: "sc-kjh1f0-0"
})(["display:inline-flex;position:relative;flex-wrap:nowrap;align-items:stretch;z-index:0;width:100%;", ";", ";", ";"], props => positionStyles(props), props => itemStyles(props), reactTheming.componentStyles);

const COMPONENT_ID$t = 'forms.radio_label';
const sizeStyles$d = props => {
  const size = props.theme.space.base * 4;
  const padding = size + props.theme.space.base * 2;
  const lineHeight = props.theme.space.base * 5;
  return styled.css(["padding-", ":", "px;&[hidden]{padding-", ":", "px;line-height:", "px;}"], props.theme.rtl ? 'right' : 'left', padding, props.theme.rtl ? 'right' : 'left', size, lineHeight);
};
const StyledRadioLabel = styled__default.default(StyledLabel).attrs({
  'data-garden-id': COMPONENT_ID$t,
  'data-garden-version': '9.12.3',
  $isRadio: true
}).withConfig({
  displayName: "StyledRadioLabel",
  componentId: "sc-1aq2e5t-0"
})(["display:inline-block;position:relative;cursor:pointer;", ";", ";"], props => sizeStyles$d(props), reactTheming.componentStyles);

const COMPONENT_ID$s = 'forms.checkbox_label';
const StyledCheckLabel = styled__default.default(StyledRadioLabel).attrs({
  'data-garden-id': COMPONENT_ID$s,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCheckLabel",
  componentId: "sc-x7nr1-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$r = 'forms.radio_hint';
const StyledRadioHint = styled__default.default(StyledHint).attrs({
  'data-garden-id': COMPONENT_ID$r,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRadioHint",
  componentId: "sc-eo8twg-0"
})(["padding-", ":", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => polished.math(`${props.theme.space.base} * 6px`), reactTheming.componentStyles);

const COMPONENT_ID$q = 'forms.checkbox_hint';
const StyledCheckHint = styled__default.default(StyledRadioHint).attrs({
  'data-garden-id': COMPONENT_ID$q,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCheckHint",
  componentId: "sc-1kl8e8c-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$p = 'forms.radio';
const colorStyles$9 = ({
  theme
}) => {
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.emphasis'
  });
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.default'
  });
  const iconColor = reactTheming.getColor({
    theme,
    variable: 'foreground.onEmphasis'
  });
  const backgroundOptions = {
    theme,
    variable: 'background.primaryEmphasis'
  };
  const borderOptions = {
    theme,
    variable: 'border.primaryEmphasis'
  };
  const hoverBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    transparency: theme.opacity[100]
  });
  const hoverBorderColor = reactTheming.getColor(borderOptions);
  const focusBorderColor = hoverBorderColor;
  const activeBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const activeBorderColor = focusBorderColor;
  const checkedBackgroundColor = reactTheming.getColor(backgroundOptions);
  const checkedBorderColor = focusBorderColor;
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
  const checkedHoverBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    ...offset100
  });
  const checkedHoverBorderColor = reactTheming.getColor({
    ...borderOptions,
    ...offset100
  });
  const checkedActiveBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    ...offset200
  });
  const checkedActiveBorderColor = reactTheming.getColor({
    ...borderOptions,
    ...offset200
  });
  const disabledBackgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.disabled',
    transparency: theme.opacity[300]
  });
  return styled.css(["& ~ ", "::before{border-color:", ";background-color:", ";}& ~ ", " > svg{color:", ";}& ~ ", ":hover::before{border-color:", ";background-color:", ";}", " & ~ ", ":active::before{border-color:", ";background-color:", ";}&:checked ~ ", "::before{border-color:", ";background-color:", ";}&:enabled:checked ~ ", ":hover::before{border-color:", ";background-color:", ";}&:enabled:checked ~ ", ":active::before{border-color:", ";background-color:", ";}&:disabled ~ ", "::before{border-color:transparent;background-color:", ";}"], StyledRadioLabel, borderColor, backgroundColor, StyledRadioLabel, iconColor, StyledRadioLabel, hoverBorderColor, hoverBackgroundColor, reactTheming.focusStyles({
    theme,
    styles: {
      borderColor: focusBorderColor
    },
    selector: `&:focus-visible ~ ${StyledRadioLabel}::before`
  }), StyledRadioLabel, activeBorderColor, activeBackgroundColor, StyledRadioLabel, checkedBorderColor, checkedBackgroundColor, StyledRadioLabel, checkedHoverBorderColor, checkedHoverBackgroundColor, StyledRadioLabel, checkedActiveBorderColor, checkedActiveBackgroundColor, StyledRadioLabel, disabledBackgroundColor);
};
const sizeStyles$c = ({
  theme,
  $isCompact
}) => {
  const lineHeight = `${theme.space.base * 5}px`;
  const size = `${theme.space.base * 4}px`;
  const top = polished.math(`(${lineHeight} - ${size}) / 2`);
  const iconSize = theme.iconSizes.sm;
  const iconPosition = polished.math(`(${size} - ${iconSize}) / 2`);
  const iconTop = polished.math(`${iconPosition} + ${top}`);
  const marginTop = `${theme.space.base * ($isCompact ? 1 : 2)}px`;
  return styled.css(["top:", ";width:", ";height:", ";& ~ ", "::before{top:", ";border:", ";background-size:", ";width:", ";height:", ";box-sizing:border-box;}& ~ ", " > svg{top:", ";", ":", ";width:", ";height:", ";}&& ~ ", " ~ ", "{margin-top:", ";}"], top, size, size, StyledRadioLabel, top, theme.borders.sm, theme.iconSizes.sm, size, size, StyledRadioLabel, iconTop, theme.rtl ? 'right' : 'left', iconPosition, iconSize, iconSize, StyledRadioLabel, StyledMessage, marginTop);
};
const StyledRadioInput = styled__default.default.input.attrs({
  'data-garden-id': COMPONENT_ID$p,
  'data-garden-version': '9.12.3',
  type: 'radio'
}).withConfig({
  displayName: "StyledRadioInput",
  componentId: "sc-qsavpv-0"
})(["position:absolute;opacity:0;margin:0;& ~ ", "::before{position:absolute;", ":0;transition:border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;border-radius:50%;background-repeat:no-repeat;background-position:center;content:'';}& ~ ", " > svg{position:absolute;}", ";&:focus ~ ", "::before{outline:none;}& ~ ", ":active::before{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,color 0.1s ease-in-out;}", ";&:disabled ~ ", "{cursor:default;}", ";"], StyledRadioLabel, props => props.theme.rtl ? 'right' : 'left', StyledRadioLabel, sizeStyles$c, StyledRadioLabel, StyledRadioLabel, colorStyles$9, StyledRadioLabel, reactTheming.componentStyles);

const COMPONENT_ID$o = 'forms.checkbox';
const colorStyles$8 = ({
  theme
}) => {
  const backgroundOptions = {
    theme,
    variable: 'background.primaryEmphasis'
  };
  const borderOptions = {
    theme,
    variable: 'border.primaryEmphasis'
  };
  const indeterminateBackgroundColor = reactTheming.getColor(backgroundOptions);
  const indeterminateBorderColor = reactTheming.getColor(borderOptions);
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
  const indeterminateHoverBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    ...offset100
  });
  const indeterminateHoverBorderColor = reactTheming.getColor({
    ...borderOptions,
    ...offset100
  });
  const indeterminateActiveBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    ...offset200
  });
  const indeterminateActiveBorderColor = reactTheming.getColor({
    ...borderOptions,
    ...offset200
  });
  const indeterminateDisabledBackgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.disabled',
    transparency: theme.opacity[300]
  });
  return styled.css(["&:indeterminate ~ ", "::before{border-color:", ";background-color:", ";}&:enabled:indeterminate ~ ", ":hover::before{border-color:", ";background-color:", ";}&:enabled:indeterminate ~ ", ":active::before{border-color:", ";background-color:", ";}&:disabled:indeterminate ~ ", "::before{border-color:transparent;background-color:", ";}"], StyledCheckLabel, indeterminateBorderColor, indeterminateBackgroundColor, StyledCheckLabel, indeterminateHoverBorderColor, indeterminateHoverBackgroundColor, StyledCheckLabel, indeterminateActiveBorderColor, indeterminateActiveBackgroundColor, StyledCheckLabel, indeterminateDisabledBackgroundColor);
};
const StyledCheckInput = styled__default.default(StyledRadioInput).attrs({
  'data-garden-id': COMPONENT_ID$o,
  'data-garden-version': '9.12.3',
  type: 'checkbox'
}).withConfig({
  displayName: "StyledCheckInput",
  componentId: "sc-176jxxe-0"
})(["& ~ ", "::before{border-radius:", ";}", ";", ";"], StyledCheckLabel, props => props.theme.borderRadii.md, colorStyles$8, reactTheming.componentStyles);

const COMPONENT_ID$n = 'forms.radio_message';
const StyledRadioMessage = styled__default.default(StyledMessage).attrs({
  'data-garden-id': COMPONENT_ID$n,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRadioMessage",
  componentId: "sc-1pmi0q8-0"
})(["padding-", ":", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => polished.math(`${props.theme.space.base} * 6px`), reactTheming.componentStyles);

const COMPONENT_ID$m = 'forms.checkbox_message';
const StyledCheckMessage = styled__default.default(StyledRadioMessage).attrs({
  'data-garden-id': COMPONENT_ID$m,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCheckMessage",
  componentId: "sc-s4p6kd-0"
})(["", ";"], reactTheming.componentStyles);

var _path$n;
function _extends$s() { return _extends$s = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$s.apply(null, arguments); }
var SvgCheckSmFill = function SvgCheckSmFill(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$s({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$n || (_path$n = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 6l2 2 4-4"
  })));
};

const COMPONENT_ID$l = 'forms.check_svg';
const StyledCheckSvg = styled__default.default(SvgCheckSmFill).attrs({
  'data-garden-id': COMPONENT_ID$l,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCheckSvg",
  componentId: "sc-fvxetk-0"
})(["transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;", ":checked ~ ", " > &{opacity:1;}", ":indeterminate ~ ", " > &{opacity:0;}", ";"], StyledCheckInput, StyledCheckLabel, StyledCheckInput, StyledCheckLabel, reactTheming.componentStyles);

var _path$m;
function _extends$r() { return _extends$r = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$r.apply(null, arguments); }
var SvgDashFill = function SvgDashFill(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$r({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$m || (_path$m = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M3 6h6"
  })));
};

const COMPONENT_ID$k = 'forms.dash_svg';
const StyledDashSvg = styled__default.default(SvgDashFill).attrs({
  'data-garden-id': COMPONENT_ID$k,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDashSvg",
  componentId: "sc-z3vq71-0"
})(["transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;", ":indeterminate ~ ", " > &{opacity:1;}", ";"], StyledCheckInput, StyledCheckLabel, reactTheming.componentStyles);

const COMPONENT_ID$j = 'forms.file_upload';
const colorStyles$7 = ({
  theme,
  $isDragging
}) => {
  const borderOptions = {
    theme,
    variable: 'border.primaryEmphasis'
  };
  const backgroundOptions = {
    theme,
    variable: 'background.primaryEmphasis'
  };
  const foregroundOptions = {
    theme,
    variable: 'foreground.primary'
  };
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
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.emphasis'
  });
  const foregroundColor = reactTheming.getColor(foregroundOptions);
  const hoverBorderColor = reactTheming.getColor({
    ...borderOptions,
    ...offset100
  });
  const hoverBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    transparency: theme.opacity[100]
  });
  const hoverForegroundColor = reactTheming.getColor({
    ...foregroundOptions,
    ...offset100
  });
  const activeBorderColor = reactTheming.getColor({
    ...borderOptions,
    ...offset200
  });
  const activeBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const activeForegroundColor = reactTheming.getColor({
    ...foregroundOptions,
    ...offset200
  });
  const disabledBorderColor = reactTheming.getColor({
    theme,
    variable: 'border.disabled'
  });
  const disabledBackgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.disabled'
  });
  const disabledForegroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return styled.css(["border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";color:", ";}", " &:active{border-color:", ";background-color:", ";color:", ";}&[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], $isDragging ? activeBorderColor : borderColor, $isDragging ? activeBackgroundColor : undefined, $isDragging ? activeForegroundColor : foregroundColor, hoverBorderColor, hoverBackgroundColor, hoverForegroundColor, reactTheming.focusStyles({
    theme
  }), activeBorderColor, activeBackgroundColor, activeForegroundColor, disabledBorderColor, disabledBackgroundColor, disabledForegroundColor);
};
const sizeStyles$b = ({
  theme,
  $isCompact
}) => {
  const marginTop = `${theme.space.base * ($isCompact ? 1 : 2)}px`;
  const paddingHorizontal = `${$isCompact ? 2 : 4}em`;
  const paddingVertical = polished.math(`${theme.space.base * ($isCompact ? 2.5 : 5)} - ${theme.borderWidths.sm}`);
  const fontSize = theme.fontSizes.md;
  const lineHeight = reactTheming.getLineHeight(theme.space.base * 5, fontSize);
  return styled.css(["padding:", " ", ";min-width:4em;line-height:", ";font-size:", ";", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", ";}"], paddingVertical, paddingHorizontal, lineHeight, fontSize, StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, marginTop);
};
const StyledFileUpload = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileUpload",
  componentId: "sc-1rodjgn-0"
})(["display:flex;align-items:center;justify-content:center;box-sizing:border-box;direction:", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;border:dashed ", ";border-radius:", ";cursor:pointer;text-align:center;user-select:none;", ";&[aria-disabled='true']{cursor:default;}", ";", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', props => props.theme.borderWidths.sm, props => props.theme.borderRadii.md, sizeStyles$b, colorStyles$7, reactTheming.componentStyles);

const COMPONENT_ID$i = 'forms.file.close';
const StyledFileClose = styled__default.default.button.attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileClose",
  componentId: "sc-1m31jbf-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:0.8;border:none;background:transparent;cursor:pointer;color:", ";appearance:none;&:hover{opacity:0.9;}&:focus{outline:none;}", ";"], props => reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.subtle'
}), reactTheming.componentStyles);

const COMPONENT_ID$h = 'forms.file';
const colorStyles$6 = ({
  theme,
  $focusInset,
  $validation
}) => {
  let borderVariable;
  let focusBorderVariable;
  let foregroundVariable;
  if ($validation === 'success') {
    borderVariable = 'border.successEmphasis';
    focusBorderVariable = borderVariable;
    foregroundVariable = 'foreground.success';
  } else if ($validation === 'error') {
    borderVariable = 'border.dangerEmphasis';
    focusBorderVariable = borderVariable;
    foregroundVariable = 'foreground.danger';
  } else {
    borderVariable = 'border.default';
    focusBorderVariable = 'border.primaryEmphasis';
    foregroundVariable = 'foreground.default';
  }
  const borderColor = reactTheming.getColor({
    theme,
    variable: borderVariable
  });
  const focusBorderColor = reactTheming.getColor({
    theme,
    variable: focusBorderVariable
  });
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: foregroundVariable
  });
  return styled.css(["border-color:", ";color:", ";", ""], borderColor, foregroundColor, reactTheming.focusStyles({
    theme,
    inset: $focusInset,
    color: {
      variable: focusBorderVariable
    },
    styles: {
      borderColor: focusBorderColor
    }
  }));
};
const sizeStyles$a = ({
  theme,
  $isCompact
}) => {
  const size = `${theme.space.base * ($isCompact ? 7 : 10)}px`;
  const spacing = `${theme.space.base * ($isCompact ? 2 : 3)}px`;
  const fontSize = theme.fontSizes.md;
  const lineHeight = reactTheming.getLineHeight(theme.space.base * 5, fontSize);
  return `
    box-sizing: border-box;
    border: ${theme.borders.sm};
    border-radius: ${theme.borderRadii.md};
    padding: 0 ${spacing};
    height: ${size};
    line-height: ${lineHeight};
    font-size: ${fontSize};

    & > span {
      width: 100%;
    }

    & > ${StyledFileClose} {
      width: ${size};
      height: ${size};
      margin-${theme.rtl ? 'left' : 'right'}: -${spacing};
    }
  `;
};
const StyledFile = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$h,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFile",
  componentId: "sc-195lzp1-0"
})(["display:flex;position:relative;flex-wrap:nowrap;align-items:center;transition:box-shadow 0.1s ease-in-out;", ";", ";& > span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}& > [role='progressbar']{position:absolute;bottom:0;left:0;transition:opacity 0.2s ease-in-out;margin:0;border-top-left-radius:0;border-top-right-radius:0;width:100%;& > div{border-top-", "-radius:0;}}& > [role='progressbar'][aria-valuenow='0'],& > [role='progressbar'][aria-valuenow='100']{opacity:0;}", ";"], sizeStyles$a, colorStyles$6, props => props.theme.rtl ? 'right' : 'left', reactTheming.componentStyles);

const COMPONENT_ID$g = 'forms.file.delete';
const StyledFileDelete = styled__default.default(StyledFileClose).attrs({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileDelete",
  componentId: "sc-a8nnhx-0"
})(["color:", ";", ";"], props => reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.danger'
}), reactTheming.componentStyles);

const COMPONENT_ID$f = 'forms.file.icon';
const colorStyles$5 = ({
  theme,
  $validation
}) => {
  const color = $validation ? undefined : reactTheming.getColor({
    theme,
    variable: 'foreground.subtle'
  });
  return styled.css(["color:", ";"], color);
};
const sizeStyles$9 = ({
  $isCompact,
  theme
}) => {
  const width = $isCompact ? theme.iconSizes.sm : theme.iconSizes.md;
  const margin = `${theme.space.base * 2}px`;
  return styled.css(["width:", ";margin-", ":", ";"], width, theme.rtl ? 'left' : 'right', margin);
};
const StyledFileIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileIcon",
  componentId: "sc-7b3q0c-0"
})(["flex-shrink:0;", ";", ";", ";"], sizeStyles$9, colorStyles$5, reactTheming.componentStyles);

const COMPONENT_ID$e = 'forms.file_list';
const StyledFileList = styled__default.default.ul.attrs({
  'data-garden-id': COMPONENT_ID$e,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileList",
  componentId: "sc-gbahjg-0"
})(["margin:0;padding:0;list-style:none;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$d = 'forms.file_list.item';
const StyledFileListItem = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileListItem",
  componentId: "sc-1ova3lo-0"
})(["&:not(:first-child),", " ~ ", " > &:first-child{margin-top:", "px;}", ";"], StyledFileUpload, StyledFileList, props => props.theme.space.base * 2, reactTheming.componentStyles);

var _circle$5;
function _extends$q() { return _extends$q = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$q.apply(null, arguments); }
var SvgCircleSmFill$1 = function SvgCircleSmFill(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$q({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _circle$5 || (_circle$5 = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 6,
    cy: 6,
    r: 2,
    fill: "currentColor"
  })));
};

const COMPONENT_ID$c = 'forms.radio_svg';
const StyledRadioSvg = styled__default.default(SvgCircleSmFill$1).attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRadioSvg",
  componentId: "sc-1r1qtr1-0"
})(["transition:opacity 0.25s ease-in-out;opacity:0;", ":checked ~ ", " > &{opacity:1;}", ";"], StyledRadioInput, StyledRadioLabel, reactTheming.componentStyles);

const COMPONENT_ID$b = 'forms.toggle_label';
const sizeStyles$8 = props => {
  const size = props.theme.space.base * 10;
  const padding = size + props.theme.space.base * 2;
  return styled.css(["padding-", ":", "px;&[hidden]{padding-", ":", "px;}"], props.theme.rtl ? 'right' : 'left', padding, props.theme.rtl ? 'right' : 'left', size);
};
const StyledToggleLabel = styled__default.default(StyledCheckLabel).attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleLabel",
  componentId: "sc-e0asdk-0"
})(["", ";", ";"], props => sizeStyles$8(props), reactTheming.componentStyles);

const COMPONENT_ID$a = 'forms.toggle_hint';
const StyledToggleHint = styled__default.default(StyledHint).attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleHint",
  componentId: "sc-nziggu-0"
})(["padding-", ":", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => polished.math(`${props.theme.space.base} * 12px`), reactTheming.componentStyles);

const COMPONENT_ID$9 = 'forms.toggle';
const colorStyles$4 = ({
  theme
}) => {
  const backgroundOptions = {
    theme,
    variable: 'background.emphasis'
  };
  const backgroundColor = reactTheming.getColor(backgroundOptions);
  const hoverBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const activeBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  });
  return styled.css(["& ~ ", "::before{background-color:", ";}&:enabled ~ ", ":hover::before{background-color:", ";}&:enabled ~ ", ":active::before{background-color:", ";}"], StyledToggleLabel, backgroundColor, StyledToggleLabel, hoverBackgroundColor, StyledToggleLabel, activeBackgroundColor);
};
const sizeStyles$7 = ({
  theme
}) => {
  const height = `${theme.space.base * 5}px`;
  const width = `${theme.space.base * 10}px`;
  const iconSize = theme.iconSizes.md;
  const iconPosition = polished.math(`(${height} - ${iconSize}) / 2`);
  const checkedIconPosition = polished.math(`${width} - ${iconSize} - ${iconPosition}`);
  return styled.css(["top:0;width:", ";height:", ";& ~ ", "::before{width:", ";height:", ";}& ~ ", " > svg{top:", ";", ":", ";width:", ";height:", ";}&:checked ~ ", " > svg{", ":", ";}"], width, height, StyledToggleLabel, width, height, StyledToggleLabel, iconPosition, theme.rtl ? 'right' : 'left', iconPosition, iconSize, iconSize, StyledToggleLabel, theme.rtl ? 'right' : 'left', checkedIconPosition);
};
const StyledToggleInput = styled__default.default(StyledCheckInput).attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleInput",
  componentId: "sc-sgp47s-0"
})(["& ~ ", "::before{top:0;transition:box-shadow .1s ease-in-out,background-color .15s ease-in-out,color .25s ease-in-out;border:none;border-radius:100px;}", ";", ";", ";"], StyledToggleLabel, sizeStyles$7, colorStyles$4, reactTheming.componentStyles);

const COMPONENT_ID$8 = 'forms.toggle_message';
const StyledToggleMessage = styled__default.default(StyledMessage).attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleMessage",
  componentId: "sc-13vuvl1-0"
})(["padding-", ":", ";& ", "{", ":", ";}", ";"], props => props.theme.rtl ? 'right' : 'left', props => polished.math(`${props.theme.space.base} * 12px`), StyledMessageIcon, props => props.theme.rtl ? 'right' : 'left', props => polished.math(`${props.theme.space.base} * 10px - ${props.theme.iconSizes.md}`), reactTheming.componentStyles);

var _circle$4;
function _extends$p() { return _extends$p = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$p.apply(null, arguments); }
var SvgCircleSmFill = function SvgCircleSmFill(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$p({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _circle$4 || (_circle$4 = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 8,
    cy: 8,
    r: 6,
    fill: "currentColor"
  })));
};

const COMPONENT_ID$7 = 'forms.toggle_svg';
const StyledToggleSvg = styled__default.default(SvgCircleSmFill).attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleSvg",
  componentId: "sc-162xbyx-0"
})(["transition:all 0.15s ease-in-out;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$6 = 'forms.select';
const colorStyles$3 = ({
  theme
}) => {
  const color = reactTheming.getColor({
    theme,
    variable: 'foreground.subtle',
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
  return styled.css(["&:hover + ", ",&:focus + ", ",&:focus-visible + ", "{color:", ";}&:disabled + ", "{color:", ";}"], StyledTextMediaFigure, StyledTextMediaFigure, StyledTextMediaFigure, color, StyledTextMediaFigure, disabledColor);
};
const sizeStyles$6 = ({
  theme,
  $isBare,
  $isCompact
}) => {
  const padding = $isBare ? undefined : polished.math(`${theme.iconSizes.md} + ${theme.space.base * 5}`);
  const iconVerticalPosition = `${theme.space.base * ($isCompact ? 1.5 : 2.5) + 1}px`;
  const iconHorizontalPosition = `${theme.space.base * 3}px`;
  return styled.css(["padding-", ":", ";& + ", "{top:", ";", ":", ";}"], theme.rtl ? 'left' : 'right', padding, StyledTextMediaFigure, iconVerticalPosition, theme.rtl ? 'left' : 'right', iconHorizontalPosition);
};
const StyledSelect = styled__default.default(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3',
  as: 'select'
}).withConfig({
  displayName: "StyledSelect",
  componentId: "sc-8xdxpt-0"
})(["opacity:1;cursor:pointer;text-overflow:ellipsis;", ";", ";&::-ms-expand{display:none;}&::-ms-value{background-color:transparent;color:inherit;}&:-moz-focusring{transition:none;text-shadow:0 0 0 ", ";color:transparent;}& + ", "{position:absolute;pointer-events:none;}"], sizeStyles$6, colorStyles$3, props => reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.default'
}), StyledTextMediaFigure);

const COMPONENT_ID$5 = 'forms.select_wrapper';
const sizeStyles$5 = ({
  theme,
  $isCompact
}) => {
  const height = `${theme.space.base * ($isCompact ? 8 : 10)}px`;
  return styled.css(["max-height:", ";"], height);
};
const StyledSelectWrapper = styled__default.default(StyledTextFauxInput).attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSelectWrapper",
  componentId: "sc-i7b6hw-0"
})(["position:relative;padding:0;overflow:visible;", ";& > ", "{border-color:transparent;background-color:transparent;", "{box-shadow:unset;}}"], sizeStyles$5, StyledSelect, reactTheming.SELECTOR_FOCUS_VISIBLE);

const COMPONENT_ID$4 = 'forms.range';
const thumbStyles = (styles, modifier = '') => {
  return `
    &${modifier}::-moz-range-thumb {
      ${styles}
    }

    &${modifier}::-ms-thumb {
      ${styles}
    }

    &${modifier}::-webkit-slider-thumb {
      ${styles}
    }
  `;
};
const trackStyles = (styles, modifier = '') => {
  return `
    &${modifier}::-moz-range-track {
      ${styles}
    }

    &${modifier}::-ms-track {
      ${styles}
    }

    &${modifier}::-webkit-slider-runnable-track {
      ${styles}
    }
  `;
};
const trackLowerStyles = (styles, modifier = '') => {
  return `
    &${modifier}::-moz-range-progress {
      ${styles}
    }

    &${modifier}::-ms-fill-lower {
      ${styles}
    }
  `;
};
const colorStyles$2 = ({
  theme,
  $hasLowerTrack = true
}) => {
  const options = {
    theme,
    variable: 'background.primaryEmphasis'
  };
  const thumbBackgroundColor = reactTheming.getColor(options);
  const thumbBorderColor = thumbBackgroundColor;
  const thumbBoxShadow = theme.shadows.lg(`${theme.space.base}px`, `${theme.space.base * 2}px`, reactTheming.getColor({
    variable: 'shadow.small',
    theme
  }));
  const thumbFocusBoxShadow = reactTheming.getFocusBoxShadow({
    theme
  });
  const thumbActiveBackgroundColor = reactTheming.getColor({
    ...options,
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  });
  const thumbActiveBorderColor = thumbBorderColor;
  const thumbDisabledBackgroundColor = reactTheming.getColor({
    theme,
    variable: 'border.emphasis'
  });
  const thumbDisabledBorderColor = thumbDisabledBackgroundColor;
  const thumbHoverBackgroundColor = reactTheming.getColor({
    ...options,
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const thumbHoverBorderColor = thumbHoverBackgroundColor;
  const trackBackgroundColor = reactTheming.getColor({
    theme,
    variable: 'border.emphasis',
    dark: {
      offset: 100
    },
    light: {
      offset: -200
    }
  });
  const trackLowerBackgroundColor = $hasLowerTrack ? thumbBackgroundColor : '';
  const trackBackgroundImage = $hasLowerTrack ? `linear-gradient(${trackLowerBackgroundColor}, ${trackLowerBackgroundColor})` : '';
  const trackDisabledBackgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.disabled',
    transparency: theme.opacity[200]
  });
  const trackDisabledLowerBackgroundColor = $hasLowerTrack ? reactTheming.getColor({
    theme,
    variable: 'border.emphasis'
  }) : '';
  const trackDisabledBackgroundImage = $hasLowerTrack ? `linear-gradient(${trackDisabledLowerBackgroundColor}, ${trackDisabledLowerBackgroundColor})` : '';
  return styled.css(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], trackStyles(`
      background-color: ${trackBackgroundColor};
      background-image: ${trackBackgroundImage}; /* [1] */
    `), thumbStyles(`
      border-color: ${thumbBorderColor};
      box-shadow: ${thumbBoxShadow};
      background-color: ${thumbBackgroundColor};
    `), trackLowerStyles(`
      background-color: ${trackLowerBackgroundColor};
    `), thumbStyles(`
        transition:
          border-color .25s ease-in-out,
          background-color .25s ease-in-out;
        border-color: ${thumbHoverBorderColor};
        background-color: ${thumbHoverBackgroundColor};
      `, ':hover'), thumbStyles(`
        box-shadow: ${thumbFocusBoxShadow};
      `, ':focus-visible'), thumbStyles(`
        border-color: ${thumbActiveBorderColor};
        background-color: ${thumbActiveBackgroundColor};
      `, ':active'), trackStyles(`
        background-color: ${trackDisabledBackgroundColor};
        background-image: ${trackDisabledBackgroundImage};
      `, ':disabled'), thumbStyles(`
        border-color: ${thumbDisabledBorderColor};
        box-shadow: none;
        background-color: ${thumbDisabledBackgroundColor};
      `, ':disabled'), trackLowerStyles(`
        background-color: ${trackDisabledLowerBackgroundColor};
      `, ':disabled'));
};
const sizeStyles$4 = ({
  theme
}) => {
  const thumbSize = `${theme.space.base * 5}px`;
  const trackHeight = `${theme.space.base * 1.5}px`;
  const trackBorderRadius = trackHeight;
  const trackMargin = polished.math(`(${thumbSize} - ${trackHeight}) / 2 + ${theme.shadowWidths.md}`);
  const thumbMargin = polished.math(`(${trackHeight} - ${thumbSize}) / 2`);
  return styled.css(["", ":not([hidden]) + &,", " + &,", " + &,& + ", ",& + ", "{margin-top:", ";}", ";", " ", ""], StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, `${theme.space.base * 2}px`, trackStyles(`
      margin: ${trackMargin} 0;
      border-radius: ${trackBorderRadius};
      height: ${trackHeight};
    `), thumbStyles(`
      margin: ${thumbMargin} 0; /* [1] */
      width: ${thumbSize};
      height: ${thumbSize};
    `), trackLowerStyles(`
      border-top-${theme.rtl ? 'right' : 'left'}-radius: ${trackBorderRadius};
      border-bottom-${theme.rtl ? 'right' : 'left'}-radius: ${trackBorderRadius};
      height: ${trackHeight};
    `));
};
const StyledRangeInput = styled__default.default.input.attrs(props => ({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3',
  type: 'range',
  style: {
    backgroundSize: props.$hasLowerTrack ?? true ? props.$backgroundSize ?? '0%' : undefined
  }
})).withConfig({
  displayName: "StyledRangeInput",
  componentId: "sc-1iv2yqp-0"
})(["appearance:none;direction:", ";margin:0;background-color:inherit;cursor:pointer;padding:0;width:100%;vertical-align:middle;", " &::-webkit-slider-container,&::-webkit-slider-runnable-track{background-size:inherit;}", ";", " ", ";&::-moz-focus-outer{border:0;}&::-ms-tooltip{display:none;}&:focus{outline:none;}&:disabled{cursor:default;}", ";"], props => props.theme.rtl && 'rtl', props => trackStyles(`
      appearance: none;
      border-color: transparent; /* reset for IE */
      background-repeat: repeat-y;
      background-size: 0;
      background-position: ${props.theme.rtl ? '100% 100%' : '0% 0%'};
      width: 99.8%; /* fix for IE which cuts off the upper track's border radius */
      color: transparent; /* reset for IE */
      box-sizing: border-box; /* reset for IE */
    `), sizeStyles$4, props => thumbStyles(`
      appearance: none;
      transition: box-shadow .1s ease-in-out;
      border: ${props.theme.borders.md};
      border-radius: 100%;
      box-sizing: border-box;
    `), colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'forms.tile';
const colorStyles$1 = ({
  theme
}) => {
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
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.default'
  });
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.default',
    ...offset100
  });
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.default'
  });
  const backgroundOptions = {
    theme,
    variable: 'background.primaryEmphasis'
  };
  const hoverBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    transparency: theme.opacity[100]
  });
  const hoverBorderColor = reactTheming.getColor({
    theme,
    variable: 'border.primaryEmphasis'
  });
  const activeBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const focusBorderColor = hoverBorderColor;
  const activeBorderColor = hoverBorderColor;
  const checkedBackgroundColor = reactTheming.getColor(backgroundOptions);
  const checkedForegroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.onEmphasis'
  });
  const checkedHoverBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    ...offset100
  });
  const checkedActiveBackgroundColor = reactTheming.getColor({
    ...backgroundOptions,
    ...offset200
  });
  const disabledBackgroundColor = reactTheming.getColor({
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
  return styled.css(["border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";}", ";&:active{border-color:", ";background-color:", ";}&:has(:checked){border-color:transparent;background-color:", ";color:", ";}&:hover:has(:checked){background-color:", ";}&:active:has(:checked){background-color:", ";}&[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], borderColor, backgroundColor, foregroundColor, hoverBorderColor, hoverBackgroundColor, reactTheming.focusStyles({
    theme,
    selector: '&:has(:focus-visible)',
    styles: {
      borderColor: focusBorderColor
    }
  }), activeBorderColor, activeBackgroundColor, checkedBackgroundColor, checkedForegroundColor, checkedHoverBackgroundColor, checkedActiveBackgroundColor, disabledBorderColor, disabledBackgroundColor, disabledForegroundColor);
};
const sizeStyles$3 = ({
  theme
}) => {
  const border = theme.borders.sm;
  const padding = `${theme.space.base * 5}px`;
  return styled.css(["border:", ";padding:", ";min-width:132px;"], border, padding);
};
const StyledTile = styled__default.default.label.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTile",
  componentId: "sc-1jjvmxs-0"
})(["display:block;position:relative;transition:border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;border-radius:", ";direction:", ";word-break:break-word;", ";", ";", ";"], props => props.theme.borderRadii.md, props => props.theme.rtl && 'rtl', sizeStyles$3, colorStyles$1, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'forms.tile_description';
const sizeStyles$2 = ({
  theme,
  $isCentered
}) => {
  const marginTop = `${theme.space.base}px`;
  const marginHorizontal = $isCentered ? undefined : polished.math(`(${theme.iconSizes.md} * 2) + ${theme.space.base * 5}px`);
  const fontSize = theme.fontSizes.sm;
  const lineHeight = reactTheming.getLineHeight(theme.space.base * 4, fontSize);
  return styled.css(["margin-top:", ";margin-", ":", ";line-height:", ";font-size:", ";"], marginTop, theme.rtl ? 'right' : 'left', marginHorizontal, lineHeight, fontSize);
};
const StyledTileDescription = styled__default.default.span.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTileDescription",
  componentId: "sc-xfuu7u-0"
})(["display:block;text-align:", ";", ";", ";"], props => props.$isCentered && 'center', sizeStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'forms.tile_icon';
const colorStyles = ({
  theme
}) => {
  const options = {
    theme,
    variable: 'foreground.subtle'
  };
  const color = reactTheming.getColor(options);
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
  const checkedColor = reactTheming.getColor({
    theme,
    variable: 'foreground.onEmphasis'
  });
  const disabledColor = reactTheming.getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return styled.css(["color:", ";", ":hover &&{color:", ";}", ":active &&{color:", ";}", ":has(:checked) &&{color:", ";}", "[aria-disabled='true'] &&{color:", ";}"], color, StyledTile, hoverColor, StyledTile, activeColor, StyledTile, checkedColor, StyledTile, disabledColor);
};
const sizeStyles$1 = ({
  theme,
  $isCentered
}) => {
  const iconSize = polished.math(`${theme.iconSizes.md} * 2`);
  let position;
  let top;
  let horizontal;
  if (!$isCentered) {
    position = 'absolute';
    top = `${theme.space.base * 6}px`;
    horizontal = `${theme.space.base * 5}px`;
  }
  return styled.css(["position:", ";top:", ";", ":", ";line-height:0;& > *{width:", ";height:", ";}"], position, top, theme.rtl ? 'right' : 'left', horizontal, iconSize, iconSize);
};
const StyledTileIcon = styled__default.default.span.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTileIcon",
  componentId: "sc-1wazhg4-0"
})(["display:block;transition:color 0.25s ease-in-out;text-align:center;", ";", ";", ";"], sizeStyles$1, colorStyles, reactTheming.componentStyles);

const StyledTileInput = styled__default.default.input.withConfig({
  displayName: "StyledTileInput",
  componentId: "sc-1nq2m6q-0"
})(["position:absolute;top:0;left:0;opacity:0;z-index:1;margin:0;cursor:", ";width:100%;height:100%;"], props => props.disabled ? 'default' : 'pointer');

const COMPONENT_ID = 'forms.tile_label';
const sizeStyles = ({
  theme,
  $isCentered
}) => {
  const marginTop = $isCentered ? `${theme.space.base * 2}px` : 0;
  const marginHorizontal = $isCentered ? undefined : polished.math(`(${theme.iconSizes.md} * 2) + ${theme.space.base * 5}px`);
  const fontSize = theme.fontSizes.md;
  const lineHeight = reactTheming.getLineHeight(theme.space.base * 5, fontSize);
  return styled.css(["margin-top:", ";margin-", ":", ";line-height:", ";font-size:", ";"], marginTop, theme.rtl ? 'right' : 'left', marginHorizontal, lineHeight, fontSize);
};
const StyledTileLabel = styled__default.default.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTileLabel",
  componentId: "sc-1mypv27-0"
})(["display:block;text-align:", ";font-weight:", ";", ";", ";"], props => props.$isCentered && 'center', props => props.theme.fontWeights.semibold, sizeStyles, reactTheming.componentStyles);

const InputContext = React.createContext(undefined);
const useInputContext = () => {
  return React.useContext(InputContext);
};

const Hint = React__namespace.default.forwardRef((props, ref) => {
  const {
    hasHint,
    setHasHint,
    getHintProps
  } = useFieldContext() || {};
  const type = useInputContext();
  React.useEffect(() => {
    if (!hasHint && setHasHint) {
      setHasHint(true);
    }
    return () => {
      if (hasHint && setHasHint) {
        setHasHint(false);
      }
    };
  }, [hasHint, setHasHint]);
  let HintComponent;
  if (type === 'checkbox') {
    HintComponent = StyledCheckHint;
  } else if (type === 'radio') {
    HintComponent = StyledRadioHint;
  } else if (type === 'toggle') {
    HintComponent = StyledToggleHint;
  } else {
    HintComponent = StyledHint;
  }
  let combinedProps = props;
  if (getHintProps) {
    combinedProps = getHintProps(combinedProps);
  }
  return React__namespace.default.createElement(HintComponent, Object.assign({
    ref: ref
  }, combinedProps));
});
Hint.displayName = 'Field.Hint';

const VALIDATION = ['success', 'warning', 'error'];
const FILE_VALIDATION = ['success', 'error'];
const FILE_TYPE = ['pdf', 'zip', 'image', 'document', 'spreadsheet', 'presentation', 'generic'];

var _g$2, _circle$3;
function _extends$o() { return _extends$o = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$o.apply(null, arguments); }
var SvgAlertErrorStroke = function SvgAlertErrorStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$o({
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
  }))), _circle$3 || (_circle$3 = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    fill: "currentColor"
  })));
};

var _path$l, _circle$2;
function _extends$n() { return _extends$n = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$n.apply(null, arguments); }
var SvgAlertWarningStroke = function SvgAlertWarningStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$n({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$l || (_path$l = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5"
  })), _circle$2 || (_circle$2 = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    fill: "currentColor"
  })));
};

var _g$1;
function _extends$m() { return _extends$m = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$m.apply(null, arguments); }
var SvgCheckCircleStroke$1 = function SvgCheckCircleStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$m({
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

const MessageIcon = ({
  validation,
  children,
  ...props
}) =>
React__namespace.default.createElement(StyledMessageIcon, Object.assign({
  "aria-hidden": false,
  role: "img"
}, props), validation ? {
  error: React__namespace.default.createElement(SvgAlertErrorStroke, null),
  success: React__namespace.default.createElement(SvgCheckCircleStroke$1, null),
  warning: React__namespace.default.createElement(SvgAlertWarningStroke, null)
}[validation] : children);
MessageIcon.displayName = 'Field.MessageIcon';
MessageIcon.propTypes = {
  validation: PropTypes__default.default.oneOf(VALIDATION)
};

const Message = React__namespace.default.forwardRef(({
  validation,
  validationLabel,
  children,
  ...other
}, ref) => {
  const {
    hasMessage,
    setHasMessage,
    getMessageProps
  } = useFieldContext() || {};
  const type = useInputContext();
  React.useEffect(() => {
    if (!hasMessage && setHasMessage) {
      setHasMessage(true);
    }
    return () => {
      if (hasMessage && setHasMessage) {
        setHasMessage(false);
      }
    };
  }, [hasMessage, setHasMessage]);
  let MessageComponent;
  if (type === 'checkbox') {
    MessageComponent = StyledCheckMessage;
  } else if (type === 'radio') {
    MessageComponent = StyledRadioMessage;
  } else if (type === 'toggle') {
    MessageComponent = StyledToggleMessage;
  } else {
    MessageComponent = StyledMessage;
  }
  let combinedProps = {
    $validation: validation,
    $validationLabel: validationLabel,
    ...other
  };
  if (getMessageProps) {
    combinedProps = getMessageProps(combinedProps);
  }
  const ariaLabel = reactTheming.useText(Message, combinedProps, '$validationLabel', validation, validation !== undefined);
  return React__namespace.default.createElement(MessageComponent, Object.assign({
    ref: ref
  }, combinedProps), !!validation && React__namespace.default.createElement(MessageIcon, {
    validation: validation,
    "aria-label": ariaLabel
  }), children);
});
Message.displayName = 'Field.Message';
Message.propTypes = {
  validation: PropTypes__default.default.oneOf(VALIDATION),
  validationLabel: PropTypes__default.default.string
};

const FieldsetContext = React.createContext(undefined);
const useFieldsetContext = () => {
  const fieldsetContext = React.useContext(FieldsetContext);
  return fieldsetContext;
};

const Label$1 = React__namespace.default.forwardRef(({
  children,
  isRegular,
  ...other
}, ref) => {
  const fieldContext = useFieldContext();
  const fieldsetContext = useFieldsetContext();
  const type = useInputContext();
  const $isRegular = fieldsetContext && isRegular === undefined ? true : isRegular;
  let combinedProps = other;
  if (fieldContext) {
    combinedProps = fieldContext.getLabelProps(combinedProps);
    if (type === undefined) {
      const {
        setIsLabelActive,
        setIsLabelHovered
      } = fieldContext;
      combinedProps.onMouseUp = containerUtilities.composeEventHandlers(other.onMouseUp, () => {
        setIsLabelActive(false);
      });
      combinedProps.onMouseDown = containerUtilities.composeEventHandlers(other.onMouseDown, () => {
        setIsLabelActive(true);
      });
      combinedProps.onMouseEnter = containerUtilities.composeEventHandlers(other.onMouseEnter, () => {
        setIsLabelHovered(true);
      });
      combinedProps.onMouseLeave = containerUtilities.composeEventHandlers(other.onMouseLeave, () => {
        setIsLabelHovered(false);
      });
    }
  }
  if (type === 'radio') {
    return React__namespace.default.createElement(StyledRadioLabel, Object.assign({
      ref: ref
    }, combinedProps, {
      $isRegular: $isRegular
    }), React__namespace.default.createElement(StyledRadioSvg, null), children);
  } else if (type === 'checkbox') {
    const onLabelSelect = e => {
      const isFirefox = navigator?.userAgent.toLowerCase().indexOf('firefox') > -1;
      if (fieldContext && isFirefox && e.target instanceof Element) {
        const inputId = e.target.getAttribute('for');
        if (!inputId) return;
        const input = document.getElementById(inputId);
        if (input && input.type === 'checkbox') {
          if (e.shiftKey) {
            input.click();
            input.checked = true;
          }
          input.focus();
        }
      }
    };
    combinedProps.onClick = containerUtilities.composeEventHandlers(combinedProps.onClick, onLabelSelect);
    return React__namespace.default.createElement(StyledCheckLabel, Object.assign({
      ref: ref
    }, combinedProps, {
      $isRegular: $isRegular
    }), React__namespace.default.createElement(StyledCheckSvg, null), React__namespace.default.createElement(StyledDashSvg, null), children);
  } else if (type === 'toggle') {
    return React__namespace.default.createElement(StyledToggleLabel, Object.assign({
      ref: ref
    }, combinedProps, {
      $isRegular: $isRegular
    }), React__namespace.default.createElement(StyledToggleSvg, null), children);
  }
  return React__namespace.default.createElement(StyledLabel, Object.assign({
    ref: ref
  }, combinedProps, {
    $isRegular: $isRegular
  }), children);
});
Label$1.displayName = 'Field.Label';
Label$1.propTypes = {
  isRegular: PropTypes__default.default.bool
};

const FieldComponent = React__namespace.default.forwardRef((props, ref) => {
  const [hasHint, setHasHint] = React.useState(false);
  const [hasMessage, setHasMessage] = React.useState(false);
  const [isLabelActive, setIsLabelActive] = React.useState(false);
  const [isLabelHovered, setIsLabelHovered] = React.useState(false);
  const {
    getInputProps,
    getMessageProps,
    ...propGetters
  } = containerField.useField({
    idPrefix: props.id,
    hasHint,
    hasMessage
  });
  const fieldProps = React.useMemo(() => ({
    ...propGetters,
    getInputProps,
    getMessageProps,
    isLabelActive,
    setIsLabelActive,
    isLabelHovered,
    setIsLabelHovered,
    hasHint,
    setHasHint,
    hasMessage,
    setHasMessage
  }), [propGetters, getInputProps, getMessageProps, isLabelActive, isLabelHovered, hasHint, hasMessage]);
  return React__namespace.default.createElement(FieldContext.Provider, {
    value: fieldProps
  }, React__namespace.default.createElement(StyledField, Object.assign({}, props, {
    ref: ref
  })));
});
FieldComponent.displayName = 'Field';
const Field = FieldComponent;
Field.Hint = Hint;
Field.Label = Label$1;
Field.Message = Message;

const LegendComponent = React.forwardRef((props, ref) => {
  return React__namespace.default.createElement(StyledLegend, Object.assign({}, props, {
    ref: ref
  }));
});
LegendComponent.displayName = 'Fieldset.Legend';
const Legend = LegendComponent;

const FieldsetComponent = React.forwardRef(({
  isCompact,
  ...other
}, ref) => {
  const fieldsetContext = React.useMemo(() => ({
    isCompact
  }), [isCompact]);
  return React__namespace.default.createElement(FieldsetContext.Provider, {
    value: fieldsetContext
  }, React__namespace.default.createElement(StyledFieldset, Object.assign({}, other, {
    ref: ref,
    $isCompact: isCompact
  })));
});
FieldsetComponent.displayName = 'Fieldset';
FieldsetComponent.propTypes = {
  isCompact: PropTypes__default.default.bool
};
const Fieldset = FieldsetComponent;
Fieldset.Legend = Legend;

const Checkbox = React__namespace.default.forwardRef(({
  indeterminate,
  children,
  isCompact,
  ...other
}, ref) => {
  const fieldsetContext = useFieldsetContext();
  const fieldContext = useFieldContext();
  const inputRef = inputElement => {
    inputElement && (inputElement.indeterminate = indeterminate);
  };
  const combinedRef = inputElement => {
    [inputRef, ref].forEach(targetRef => {
      if (targetRef) {
        if (typeof targetRef === 'function') {
          targetRef(inputElement);
        } else {
          targetRef.current = inputElement;
        }
      }
    });
  };
  let combinedProps = {
    $isCompact: fieldsetContext ? fieldsetContext.isCompact : isCompact,
    ref: combinedRef,
    ...other
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return React__namespace.default.createElement(InputContext.Provider, {
    value: "checkbox"
  }, React__namespace.default.createElement(StyledCheckInput, combinedProps), children);
});
Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  isCompact: PropTypes__default.default.bool,
  indeterminate: PropTypes__default.default.bool
};

const InputGroupContext = React.createContext(undefined);
const useInputGroupContext = () => {
  return React.useContext(InputGroupContext);
};

const Input = React__namespace.default.forwardRef(({
  onSelect,
  isBare,
  isCompact,
  focusInset,
  validation,
  ...other
}, ref) => {
  const fieldContext = useFieldContext();
  const inputGroupContext = useInputGroupContext();
  let combinedProps = other;
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  const onSelectHandler = other.readOnly ? containerUtilities.composeEventHandlers(onSelect, event => {
    event.currentTarget.select();
  }) : onSelect;
  return React__namespace.default.createElement(StyledTextInput, Object.assign({
    ref: ref,
    onSelect: onSelectHandler
  }, combinedProps, {
    $isBare: isBare,
    $isCompact: inputGroupContext ? inputGroupContext.isCompact : isCompact,
    $focusInset: inputGroupContext && focusInset === undefined ? true : focusInset,
    $validation: validation
  }));
});
Input.propTypes = {
  isCompact: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  validation: PropTypes__default.default.oneOf(VALIDATION)
};
Input.displayName = 'Input';

const Radio = React__namespace.default.forwardRef(({
  children,
  isCompact,
  ...other
}, ref) => {
  const fieldsetContext = useFieldsetContext();
  const fieldContext = useFieldContext();
  let combinedProps = {
    $isCompact: fieldsetContext ? fieldsetContext.isCompact : isCompact,
    ref,
    ...other
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return React__namespace.default.createElement(InputContext.Provider, {
    value: "radio"
  }, React__namespace.default.createElement(StyledRadioInput, combinedProps), children);
});
Radio.displayName = 'Radio';
Radio.propTypes = {
  isCompact: PropTypes__default.default.bool
};

const Range = React__namespace.default.forwardRef(({
  hasLowerTrack = true,
  min = 0,
  max = 100,
  step = 1,
  ...other
}, ref) => {
  const [backgroundSize, setBackgroundSize] = React.useState('0');
  const rangeRef = React.useRef();
  const fieldContext = useFieldContext();
  const updateBackgroundWidthFromInput = React.useCallback(rangeTarget => {
    let relativeMax = max;
    const {
      value
    } = rangeTarget;
    if (parseFloat(relativeMax) < parseFloat(min)) {
      relativeMax = 100;
    }
    const percentage = 100 * (value - min) / (relativeMax - min);
    setBackgroundSize(`${percentage}%`);
  },
  [max, min, step]);
  React.useEffect(() => {
    updateBackgroundWidthFromInput(rangeRef.current);
  }, [rangeRef, updateBackgroundWidthFromInput, other.value]);
  const onChange = hasLowerTrack ? containerUtilities.composeEventHandlers(other.onChange, event => {
    updateBackgroundWidthFromInput(event.target);
  }) : other.onChange;
  let combinedProps = {
    $backgroundSize: backgroundSize,
    $hasLowerTrack: hasLowerTrack,
    max,
    min,
    ref: reactMergeRefs.mergeRefs([rangeRef, ref]),
    step,
    ...other,
    onChange
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return React__namespace.default.createElement(StyledRangeInput, combinedProps);
});
Range.displayName = 'Range';

const parseStyleValue = value => {
  return parseInt(value, 10) || 0;
};
const Textarea = React__namespace.default.forwardRef(({
  isCompact,
  isBare,
  focusInset,
  isResizable,
  minRows,
  maxRows,
  style,
  validation,
  onChange,
  onSelect,
  ...other
}, ref) => {
  const fieldContext = useFieldContext();
  const textAreaRef = React.useRef();
  const shadowTextAreaRef = React.useRef(null);
  const [state, setState] = React.useState({
    overflow: false,
    height: 0
  });
  const isControlled = other.value !== null && other.value !== undefined;
  const isAutoResizable = (minRows !== undefined || maxRows !== undefined) && !isResizable;
  const calculateHeight = React.useCallback(() => {
    if (!isAutoResizable) {
      return;
    }
    const textarea = textAreaRef.current;
    const computedStyle = window.getComputedStyle(textarea);
    const shadowTextArea = shadowTextAreaRef.current;
    shadowTextArea.style.width = computedStyle.width;
    shadowTextArea.value = textarea.value || textarea.placeholder || ' ';
    const boxSizing = computedStyle.boxSizing;
    const padding = parseStyleValue(computedStyle.paddingBottom) + parseStyleValue(computedStyle.paddingTop);
    const border = parseStyleValue(computedStyle.borderTopWidth) + parseStyleValue(computedStyle.borderBottomWidth);
    const innerHeight = shadowTextArea.scrollHeight - padding;
    shadowTextArea.value = 'x';
    const singleRowHeight = shadowTextArea.scrollHeight - padding;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const updatedHeight = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(prevState => {
      if (updatedHeight > 0 && Math.abs((prevState.height || 0) - updatedHeight) > 1 || prevState.overflow !== overflow) {
        return {
          overflow,
          height: updatedHeight
        };
      }
      return prevState;
    });
  }, [maxRows, minRows, textAreaRef, isAutoResizable]);
  const onChangeHandler = React.useCallback(e => {
    if (!isControlled) {
      calculateHeight();
    }
    if (onChange) {
      onChange(e);
    }
  }, [calculateHeight, isControlled, onChange]);
  React.useLayoutEffect(() => {
    calculateHeight();
  });
  const computedStyle = {};
  if (isAutoResizable) {
    computedStyle.height = state.height;
    computedStyle.overflow = state.overflow ? 'hidden' : undefined;
  }
  const onSelectHandler = other.readOnly ? containerUtilities.composeEventHandlers(onSelect, event => {
    event.currentTarget.select();
  }) : onSelect;
  let combinedProps = {
    $focusInset: focusInset,
    $isBare: isBare,
    $isCompact: isCompact,
    $isResizable: isResizable,
    $validation: validation,
    onChange: onChangeHandler,
    onSelect: onSelectHandler,
    ref: reactMergeRefs.mergeRefs([textAreaRef, ref]),
    rows: minRows,
    style: {
      ...computedStyle,
      ...style
    },
    ...other
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return React__namespace.default.createElement(React__namespace.default.Fragment, null, React__namespace.default.createElement(StyledTextarea, combinedProps), !!isAutoResizable && React__namespace.default.createElement(StyledTextarea, {
    $isBare: isBare,
    $isCompact: isCompact,
    $isHidden: true,
    "aria-hidden": true,
    className: other.className,
    readOnly: true,
    ref: shadowTextAreaRef,
    style: style,
    tabIndex: -1
  }));
});
Textarea.propTypes = {
  isCompact: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  isResizable: PropTypes__default.default.bool,
  minRows: PropTypes__default.default.number,
  maxRows: PropTypes__default.default.number,
  validation: PropTypes__default.default.oneOf(VALIDATION)
};
Textarea.displayName = 'Textarea';

const Toggle = React__namespace.default.forwardRef(({
  children,
  isCompact,
  ...other
}, ref) => {
  const fieldsetContext = useFieldsetContext();
  const fieldContext = useFieldContext();
  let combinedProps = {
    $isCompact: fieldsetContext ? fieldsetContext.isCompact : isCompact,
    ref,
    ...other,
    role: 'switch'
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return React__namespace.default.createElement(InputContext.Provider, {
    value: "toggle"
  }, React__namespace.default.createElement(StyledToggleInput, combinedProps), children);
});
Toggle.displayName = 'Toggle';
Toggle.propTypes = {
  isCompact: PropTypes__default.default.bool
};

var _path$k;
function _extends$l() { return _extends$l = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$l.apply(null, arguments); }
var SvgChevronDownStroke = function SvgChevronDownStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$l({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$k || (_path$k = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"
  })));
};

const StartIconComponent = ({
  isDisabled,
  isFocused,
  isHovered,
  isRotated,
  ...props
}) => React__namespace.default.createElement(StyledTextMediaFigure, Object.assign({
  $position: "start",
  $isDisabled: isDisabled,
  $isFocused: isFocused,
  $isHovered: isHovered,
  $isRotated: isRotated
}, props));
StartIconComponent.displayName = 'FauxInput.StartIcon';
const StartIcon = StartIconComponent;

const EndIconComponent = ({
  isDisabled,
  isFocused,
  isHovered,
  isRotated,
  ...props
}) => React__namespace.default.createElement(StyledTextMediaFigure, Object.assign({
  $position: "end",
  $isDisabled: isDisabled,
  $isFocused: isFocused,
  $isHovered: isHovered,
  $isRotated: isRotated
}, props));
EndIconComponent.displayName = 'FauxInput.EndIcon';
const EndIcon = EndIconComponent;

const FauxInputComponent = React.forwardRef(({
  disabled,
  focusInset,
  isBare,
  isCompact,
  isFocused: controlledIsFocused,
  isHovered,
  onBlur,
  onFocus,
  readOnly,
  validation,
  mediaLayout,
  ...other
}, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const onFocusHandler = containerUtilities.composeEventHandlers(onFocus, () => {
    setIsFocused(true);
  });
  const onBlurHandler = containerUtilities.composeEventHandlers(onBlur, () => {
    setIsFocused(false);
  });
  return React__namespace.default.createElement(StyledTextFauxInput, Object.assign({
    onFocus: onFocusHandler,
    onBlur: onBlurHandler,
    $focusInset: focusInset,
    $isBare: isBare,
    $isCompact: isCompact,
    $isDisabled: disabled,
    $isFocused: controlledIsFocused === undefined ? isFocused : controlledIsFocused,
    $isHovered: isHovered,
    $isReadOnly: readOnly,
    $mediaLayout: mediaLayout,
    $validation: validation,
    tabIndex: disabled ? undefined : 0
  }, other, {
    ref: ref
  }));
});
FauxInputComponent.displayName = 'FauxInput';
FauxInputComponent.propTypes = {
  isCompact: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  disabled: PropTypes__default.default.bool,
  readOnly: PropTypes__default.default.bool,
  validation: PropTypes__default.default.oneOf(VALIDATION),
  isFocused: PropTypes__default.default.bool,
  isHovered: PropTypes__default.default.bool
};
const FauxInput = FauxInputComponent;
FauxInput.EndIcon = EndIcon;
FauxInput.StartIcon = StartIcon;

const Select = React__namespace.default.forwardRef(({
  disabled,
  isCompact,
  validation,
  focusInset,
  isBare,
  ...props
}, ref) => {
  const fieldContext = useFieldContext();
  let combinedProps = {
    $focusInset: focusInset,
    $isBare: isBare,
    $isCompact: isCompact,
    $validation: validation,
    disabled,
    ref,
    ...props
  };
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
  }
  return React__namespace.default.createElement(StyledSelectWrapper, {
    $isCompact: isCompact,
    $isBare: isBare,
    $isDisabled: disabled,
    $validation: validation,
    $focusInset: focusInset
  }, React__namespace.default.createElement(StyledSelect, combinedProps), !isBare && React__namespace.default.createElement(FauxInput.EndIcon, {
    isDisabled: disabled
  }, React__namespace.default.createElement(SvgChevronDownStroke, null)));
});
Select.propTypes = {
  isCompact: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  validation: PropTypes__default.default.oneOf(VALIDATION)
};
Select.displayName = 'Select';

const TilesContext = React.createContext(undefined);
const useTilesContext = () => {
  return React.useContext(TilesContext);
};

const TileComponent = React__namespace.default.forwardRef(({
  children,
  value,
  disabled,
  ...props
}, ref) => {
  const tilesContext = useTilesContext();
  const inputRef = React.useRef(null);
  let inputProps;
  if (tilesContext) {
    inputProps = {
      name: tilesContext.name,
      checked: tilesContext.value === value,
      onChange: tilesContext.onChange
    };
  }
  return React__namespace.default.createElement(StyledTile, Object.assign({
    ref: ref,
    "aria-disabled": disabled
  }, props), children, React__namespace.default.createElement(StyledTileInput, Object.assign({}, inputProps, {
    disabled: disabled,
    value: value,
    type: "radio",
    ref: inputRef
  })));
});
TileComponent.displayName = 'Tiles.Tile';
TileComponent.propTypes = {
  value: PropTypes__default.default.string,
  disabled: PropTypes__default.default.bool
};
const Tile = TileComponent;

const DescriptionComponent = React.forwardRef((props, ref) => {
  const tilesContext = useTilesContext();
  return React__namespace.default.createElement(StyledTileDescription, Object.assign({
    ref: ref,
    $isCentered: tilesContext?.isCentered
  }, props));
});
DescriptionComponent.displayName = 'Tiles.Description';
const Description = DescriptionComponent;

const IconComponent = React.forwardRef((props, ref) => {
  const tileContext = useTilesContext();
  return React__namespace.default.createElement(StyledTileIcon, Object.assign({
    ref: ref,
    $isCentered: tileContext?.isCentered
  }, props));
});
IconComponent.displayName = 'Tiles.Icon';
const Icon = IconComponent;

const LabelComponent = React.forwardRef((props, forwardedRef) => {
  const [title, setTitle] = React.useState('');
  const ref = React.useRef();
  const tilesContext = useTilesContext();
  React.useEffect(() => {
    if (ref.current) {
      setTitle(ref.current.textContent || undefined);
    }
  }, [ref]);
  return React__namespace.default.createElement(StyledTileLabel, Object.assign({
    ref: reactMergeRefs.mergeRefs([ref, forwardedRef]),
    title: title,
    $isCentered: tilesContext?.isCentered
  }, props));
});
LabelComponent.displayName = 'Tiles.Label';
const Label = LabelComponent;

const TilesComponent = React.forwardRef(({
  onChange,
  value: controlledValue,
  name,
  isCentered = true,
  ...props
}, ref) => {
  const [value, setValue] = React.useState(controlledValue);
  const handleOnChange = React.useCallback((...args) => {
    setValue(args[0].target.value);
    if (onChange) {
      onChange(...args);
    }
  }, [onChange]);
  const selectedValue = containerUtilities.getControlledValue(controlledValue, value);
  const tileContext = React.useMemo(() => ({
    onChange: handleOnChange,
    value: selectedValue,
    name,
    isCentered
  }), [handleOnChange, selectedValue, name, isCentered]);
  return React__namespace.default.createElement(TilesContext.Provider, {
    value: tileContext
  }, React__namespace.default.createElement("div", Object.assign({
    ref: ref,
    role: "radiogroup"
  }, props)));
});
TilesComponent.displayName = 'Tiles';
TilesComponent.propTypes = {
  value: PropTypes__default.default.string,
  onChange: PropTypes__default.default.func,
  name: PropTypes__default.default.string.isRequired,
  isCentered: PropTypes__default.default.bool
};
const Tiles = TilesComponent;
Tiles.Description = Description;
Tiles.Icon = Icon;
Tiles.Label = Label;
Tiles.Tile = Tile;

const InputGroup = React__namespace.default.forwardRef(({
  isCompact,
  ...other
}, ref) => {
  const contextValue = React.useMemo(() => ({
    isCompact
  }), [isCompact]);
  return React__namespace.default.createElement(InputGroupContext.Provider, {
    value: contextValue
  }, React__namespace.default.createElement(StyledInputGroup, Object.assign({
    ref: ref,
    $isCompact: isCompact
  }, other)));
});
InputGroup.displayName = 'InputGroup';
InputGroup.propTypes = {
  isCompact: PropTypes__default.default.bool
};

const FileUpload = React__namespace.default.forwardRef(({
  disabled,
  isCompact,
  isDragging,
  ...other
}, ref) => {
  return (
    React__namespace.default.createElement(StyledFileUpload, Object.assign({
      ref: ref,
      "aria-disabled": disabled,
      $isCompact: isCompact,
      $isDragging: isDragging
    }, other, {
      role: "button"
    }))
  );
});
FileUpload.propTypes = {
  isDragging: PropTypes__default.default.bool,
  isCompact: PropTypes__default.default.bool,
  disabled: PropTypes__default.default.bool
};
FileUpload.displayName = 'FileUpload';

const ItemComponent = React.forwardRef(({
  ...props
}, ref) => React__namespace.default.createElement(StyledFileListItem, Object.assign({}, props, {
  ref: ref
})));
ItemComponent.displayName = 'FileList.Item';
const Item = ItemComponent;

const FileListComponent = React.forwardRef(({
  ...props
}, ref) => React__namespace.default.createElement(StyledFileList, Object.assign({}, props, {
  ref: ref
})));
FileListComponent.displayName = 'FileList';
const FileList = FileListComponent;
FileList.Item = Item;

var _path$j;
function _extends$k() { return _extends$k = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$k.apply(null, arguments); }
var SvgXStroke$1 = function SvgXStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$k({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$j || (_path$j = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3 9l6-6m0 6L3 3"
  })));
};

var _path$i;
function _extends$j() { return _extends$j = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$j.apply(null, arguments); }
var SvgXStroke = function SvgXStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$j({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$i || (_path$i = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3 13L13 3m0 10L3 3"
  })));
};

const FileContext = React.createContext(undefined);
const useFileContext = () => {
  return React.useContext(FileContext);
};

const CloseComponent = React__namespace.default.forwardRef((props, ref) => {
  const fileContext = useFileContext();
  const onMouseDown = containerUtilities.composeEventHandlers(props.onMouseDown, event => event.preventDefault()
  );
  const ariaLabel = reactTheming.useText(CloseComponent, props, 'aria-label', 'Close');
  return React__namespace.default.createElement(StyledFileClose, Object.assign({
    ref: ref,
    "aria-label": ariaLabel
  }, props, {
    type: "button",
    tabIndex: -1,
    onMouseDown: onMouseDown
  }), fileContext && fileContext.isCompact ? React__namespace.default.createElement(SvgXStroke$1, null) : React__namespace.default.createElement(SvgXStroke, null));
});
CloseComponent.displayName = 'File.Close';
const Close = CloseComponent;

var _path$h;
function _extends$i() { return _extends$i = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$i.apply(null, arguments); }
var SvgTrashStroke$1 = function SvgTrashStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$i({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$h || (_path$h = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M4.5 2.5V1c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v1.5M2 2.5h8m-5.5 7V5m3 4.5V5m-5-.5V11c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5V4.5"
  })));
};

var _path$g;
function _extends$h() { return _extends$h = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$h.apply(null, arguments); }
var SvgTrashStroke = function SvgTrashStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$h({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$g || (_path$g = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M6.5 2.5V1c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v1.5M3 2.5h10m-6.5 11v-8m3 8v-8m-6-1V15c0 .3.2.5.5.5h8c.3 0 .5-.2.5-.5V4.5"
  })));
};

const DeleteComponent = React__namespace.default.forwardRef((props, ref) => {
  const fileContext = useFileContext();
  const onMouseDown = containerUtilities.composeEventHandlers(props.onMouseDown, event => event.preventDefault()
  );
  const ariaLabel = reactTheming.useText(DeleteComponent, props, 'aria-label', 'Delete');
  return React__namespace.default.createElement(StyledFileDelete, Object.assign({
    ref: ref,
    "aria-label": ariaLabel
  }, props, {
    type: "button",
    tabIndex: -1,
    onMouseDown: onMouseDown
  }), fileContext && fileContext.isCompact ? React__namespace.default.createElement(SvgTrashStroke$1, null) : React__namespace.default.createElement(SvgTrashStroke, null));
});
DeleteComponent.displayName = 'File.Delete';
const Delete = DeleteComponent;

var _path$f, _rect$1;
function _extends$g() { return _extends$g = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$g.apply(null, arguments); }
var SvgFilePdfStroke$1 = function SvgFilePdfStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$g({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$f || (_path$f = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M10.5 3.21V11a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V1A.5.5 0 012 .5h5.79a.5.5 0 01.35.15l2.21 2.21a.5.5 0 01.15.35zM7.5.5V3a.5.5 0 00.5.5h2.5m-7 6h5"
  })), _rect$1 || (_rect$1 = /*#__PURE__*/React__namespace.createElement("rect", {
    width: 6,
    height: 3,
    x: 3,
    y: 5,
    fill: "currentColor",
    rx: 0.5,
    ry: 0.5
  })));
};

var _path$e;
function _extends$f() { return _extends$f = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$f.apply(null, arguments); }
var SvgFileZipStroke$1 = function SvgFileZipStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$f({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$e || (_path$e = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M4.5.5v8m0-6h1m-2 1h1m0 1h1m-2 1h1m0 1h1m-2 1h1m6-4.29V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5"
  })));
};

var _path$d, _circle$1;
function _extends$e() { return _extends$e = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$e.apply(null, arguments); }
var SvgFileImageStroke$1 = function SvgFileImageStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$e({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$d || (_path$d = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5m-7 6L5 8l1.5 1.5 1-1 1 1"
  })), _circle$1 || (_circle$1 = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 8,
    cy: 6,
    r: 1,
    fill: "currentColor"
  })));
};

var _path$c;
function _extends$d() { return _extends$d = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$d.apply(null, arguments); }
var SvgFileDocumentStroke$1 = function SvgFileDocumentStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$d({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$c || (_path$c = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3.5 5.5h5m-5 2h5m-5 2h5m2-6.29V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5"
  })));
};

var _path$b;
function _extends$c() { return _extends$c = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$c.apply(null, arguments); }
var SvgFileSpreadsheetStroke$1 = function SvgFileSpreadsheetStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$c({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$b || (_path$b = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3.5 5.5h1m-1 2h1m-1 2h1m2-4h2m-2 2h2m-2 2h2m2-6.29V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5"
  })));
};

var _path$a;
function _extends$b() { return _extends$b = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$b.apply(null, arguments); }
var SvgFilePresentationStroke$1 = function SvgFilePresentationStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$b({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$a || (_path$a = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    d: "M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM6 9.5h2c.28 0 .5-.22.5-.5V8c0-.28-.22-.5-.5-.5H6c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zm-2-2h2c.28 0 .5-.22.5-.5V6c0-.28-.22-.5-.5-.5H4c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zm3.5-7V3c0 .28.22.5.5.5h2.5"
  })));
};

var _path$9;
function _extends$a() { return _extends$a = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$a.apply(null, arguments); }
var SvgFileGenericStroke$1 = function SvgFileGenericStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$a({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    d: "M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5"
  })));
};

var _g;
function _extends$9() { return _extends$9 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$9.apply(null, arguments); }
var SvgCheckCircleStroke = function SvgCheckCircleStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$9({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.5 6l2 2L9 4.5"
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 6,
    cy: 6,
    r: 5.5
  }))));
};

var _path$8;
function _extends$8() { return _extends$8 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$8.apply(null, arguments); }
var SvgFileErrorStroke$1 = function SvgFileErrorStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$8({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5M4 9.5l4-4m0 4l-4-4"
  })));
};

var _path$7, _rect;
function _extends$7() { return _extends$7 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$7.apply(null, arguments); }
var SvgFilePdfStroke = function SvgFilePdfStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M14.5 4.2V15a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V1A.5.5 0 012 .5h8.85a.5.5 0 01.36.15l3.15 3.2a.5.5 0 01.14.35zm-10 8.3h7m-7-2h7m-1-10V4a.5.5 0 00.5.5h3.5"
  })), _rect || (_rect = /*#__PURE__*/React__namespace.createElement("rect", {
    width: 8,
    height: 2,
    x: 4,
    y: 7,
    fill: "currentColor",
    rx: 0.5,
    ry: 0.5
  })));
};

var _path$6;
function _extends$6() { return _extends$6 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$6.apply(null, arguments); }
var SvgFileZipStroke = function SvgFileZipStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M6.5.5v11M5 2.5h1.5m0 1H8m-3 1h1.5m0 1H8m-3 1h1.5m0 1H8m-3 1h1.5m0 1H8m-3 1h1.5m8-6.3V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5"
  })));
};

var _path$5, _circle;
function _extends$5() { return _extends$5 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$5.apply(null, arguments); }
var SvgFileImageStroke = function SvgFileImageStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M14.5 4.2V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5m-11 9l2.65-2.65c.2-.2.51-.2.71 0l1.79 1.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l1.65 1.65"
  })), _circle || (_circle = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 10.5,
    cy: 8.5,
    r: 1.5,
    fill: "currentColor"
  })));
};

var _path$4;
function _extends$4() { return _extends$4 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$4.apply(null, arguments); }
var SvgFileDocumentStroke = function SvgFileDocumentStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M4.5 7.5h7m-7 1.97h7m-7 2h7m3-7.27V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5"
  })));
};

var _path$3;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgFileSpreadsheetStroke = function SvgFileSpreadsheetStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M4.5 7.5h2m-2 2h2m-2 2h2m2-4h3m-3 2h3m-3 2h3m3-7.3V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5"
  })));
};

var _path$2;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgFilePresentationStroke = function SvgFilePresentationStroke(props) {
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
    d: "M14.5 4.2V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5M7 9.5h4c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5H7c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5zm-.5 2H5c-.28 0-.5-.22-.5-.5V8c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1.5"
  })));
};

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgFileGenericStroke = function SvgFileGenericStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    d: "M14.5 4.2V15c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h8.85c.13 0 .26.05.36.15l3.15 3.2c.09.1.14.22.14.35zm-4-3.7V4c0 .28.22.5.5.5h3.5"
  })));
};

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgFileErrorStroke = function SvgFileErrorStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
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
    d: "M14.5 4.205V15a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V1A.5.5 0 012 .5h8.853a.5.5 0 01.356.15l3.148 3.204a.5.5 0 01.143.35zM10.5.5V4a.5.5 0 00.5.5h3.5m-9 8l5-5m0 5l-5-5"
  })));
};

const fileIconsDefault = {
  pdf: React__namespace.default.createElement(SvgFilePdfStroke, null),
  zip: React__namespace.default.createElement(SvgFileZipStroke, null),
  image: React__namespace.default.createElement(SvgFileImageStroke, null),
  document: React__namespace.default.createElement(SvgFileDocumentStroke, null),
  spreadsheet: React__namespace.default.createElement(SvgFileSpreadsheetStroke, null),
  presentation: React__namespace.default.createElement(SvgFilePresentationStroke, null),
  generic: React__namespace.default.createElement(SvgFileGenericStroke, null),
  success: React__namespace.default.createElement(SvgCheckCircleStroke$1, null),
  error: React__namespace.default.createElement(SvgFileErrorStroke, null)
};
const fileIconsCompact = {
  pdf: React__namespace.default.createElement(SvgFilePdfStroke$1, null),
  zip: React__namespace.default.createElement(SvgFileZipStroke$1, null),
  image: React__namespace.default.createElement(SvgFileImageStroke$1, null),
  document: React__namespace.default.createElement(SvgFileDocumentStroke$1, null),
  spreadsheet: React__namespace.default.createElement(SvgFileSpreadsheetStroke$1, null),
  presentation: React__namespace.default.createElement(SvgFilePresentationStroke$1, null),
  generic: React__namespace.default.createElement(SvgFileGenericStroke$1, null),
  success: React__namespace.default.createElement(SvgCheckCircleStroke, null),
  error: React__namespace.default.createElement(SvgFileErrorStroke$1, null)
};

const FileComponent = React.forwardRef(({
  children,
  type,
  isCompact,
  focusInset,
  validation,
  ...props
}, ref) => {
  const fileContextValue = React.useMemo(() => ({
    isCompact
  }), [isCompact]);
  const validationType = validation || type;
  return React__namespace.default.createElement(FileContext.Provider, {
    value: fileContextValue
  }, React__namespace.default.createElement(StyledFile, Object.assign({}, props, {
    $isCompact: isCompact,
    $focusInset: focusInset,
    $validation: validation,
    ref: ref
  }), !!validationType && React__namespace.default.createElement(StyledFileIcon, {
    $isCompact: isCompact,
    $validation: validation
  }, isCompact ? fileIconsCompact[validationType] : fileIconsDefault[validationType]), React.Children.map(children, child => typeof child === 'string' ? React__namespace.default.createElement("span", null, child) : child)));
});
FileComponent.displayName = 'File';
FileComponent.propTypes = {
  focusInset: PropTypes__default.default.bool,
  isCompact: PropTypes__default.default.bool,
  type: PropTypes__default.default.oneOf(FILE_TYPE),
  validation: PropTypes__default.default.oneOf(FILE_VALIDATION)
};
const File = FileComponent;
File.Close = Close;
File.Delete = Delete;

const MediaInput = React__namespace.default.forwardRef(({
  start,
  end,
  disabled,
  isCompact,
  isBare,
  focusInset,
  readOnly,
  validation,
  wrapperProps = {},
  wrapperRef,
  onSelect,
  ...props
}, ref) => {
  const fieldContext = useFieldContext();
  const inputRef = React.useRef();
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const {
    onClick,
    onFocus,
    onBlur,
    onMouseOver,
    onMouseOut,
    ...otherWrapperProps
  } = wrapperProps;
  const onFauxInputClickHandler = containerUtilities.composeEventHandlers(onClick, () => {
    inputRef.current && inputRef.current.focus();
  });
  const onFauxInputFocusHandler = containerUtilities.composeEventHandlers(onFocus, () => {
    setIsFocused(true);
  });
  const onFauxInputBlurHandler = containerUtilities.composeEventHandlers(onBlur, () => {
    setIsFocused(false);
  });
  const onFauxInputMouseOverHandler = containerUtilities.composeEventHandlers(onMouseOver, () => {
    setIsHovered(true);
  });
  const onFauxInputMouseOutHandler = containerUtilities.composeEventHandlers(onMouseOut, () => {
    setIsHovered(false);
  });
  const onSelectHandler = readOnly ? containerUtilities.composeEventHandlers(onSelect, event => {
    event.currentTarget.select();
  }) : onSelect;
  let combinedProps = {
    disabled,
    readOnly,
    ref: reactMergeRefs.mergeRefs([inputRef, ref]),
    onSelect: onSelectHandler,
    ...props
  };
  let isLabelHovered;
  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps);
    isLabelHovered = fieldContext.isLabelHovered;
  }
  return React__namespace.default.createElement(FauxInput, Object.assign({
    tabIndex: null,
    onClick: onFauxInputClickHandler,
    onFocus: onFauxInputFocusHandler,
    onBlur: onFauxInputBlurHandler,
    onMouseOver: onFauxInputMouseOverHandler,
    onMouseOut: onFauxInputMouseOutHandler,
    disabled: disabled,
    isFocused: isFocused,
    isHovered: isHovered || isLabelHovered,
    isCompact: isCompact,
    isBare: isBare,
    focusInset: focusInset,
    readOnly: readOnly,
    validation: validation,
    mediaLayout: true
  }, otherWrapperProps, {
    ref: wrapperRef
  }), !!start && React__namespace.default.createElement(FauxInput.StartIcon, {
    isDisabled: disabled,
    isFocused: isFocused,
    isHovered: isHovered || isLabelHovered
  }, start), React__namespace.default.createElement(StyledTextMediaInput, combinedProps), !!end && React__namespace.default.createElement(FauxInput.EndIcon, {
    isDisabled: disabled,
    isFocused: isFocused,
    isHovered: isHovered || isLabelHovered
  }, end));
});
MediaInput.propTypes = {
  isCompact: PropTypes__default.default.bool,
  isBare: PropTypes__default.default.bool,
  focusInset: PropTypes__default.default.bool,
  validation: PropTypes__default.default.oneOf(VALIDATION),
  start: PropTypes__default.default.any,
  end: PropTypes__default.default.any,
  wrapperProps: PropTypes__default.default.object,
  wrapperRef: PropTypes__default.default.any
};
MediaInput.displayName = 'MediaInput';

exports.Checkbox = Checkbox;
exports.FauxInput = FauxInput;
exports.Field = Field;
exports.Fieldset = Fieldset;
exports.File = File;
exports.FileList = FileList;
exports.FileUpload = FileUpload;
exports.Hint = Hint;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.Label = Label$1;
exports.MediaInput = MediaInput;
exports.Message = Message;
exports.Radio = Radio;
exports.Range = Range;
exports.Select = Select;
exports.Textarea = Textarea;
exports.Tiles = Tiles;
exports.Toggle = Toggle;
exports.VALIDATION = VALIDATION;
