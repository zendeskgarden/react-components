/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math, em } from 'polished';
import { componentStyles, getLineHeight, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { StyledHint } from '../common/StyledHint.js';
import { StyledLabel } from '../common/StyledLabel.js';
import { StyledMessage } from '../common/StyledMessage.js';

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
  const foregroundColor = getColor({
    theme,
    variable: 'foreground.default'
  });
  const backgroundColor = $isBare ? 'transparent' : getColor({
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
    borderColor = getColor({
      theme,
      variable: borderVariable
    });
    hoverBorderColor = borderColor;
    focusBorderColor = borderColor;
  } else {
    borderColor = getColor({
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
    hoverBorderColor = getColor({
      theme,
      variable: borderVariable
    });
    focusBorderColor = hoverBorderColor;
  }
  const disabledBackgroundColor = $isBare ? undefined : getColor({
    theme,
    variable: 'background.disabled'
  });
  const disabledBorderColor = getColor({
    theme,
    variable: 'border.disabled'
  });
  const disabledForegroundColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  const placeholderColor = disabledForegroundColor;
  const readOnlyBackgroundColor = disabledBackgroundColor;
  const calendarPickerColor = getColor({
    theme,
    variable: 'foreground.subtle'
  });
  const calendarPickerIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" aria-hidden="true" color="${calendarPickerColor}">
      <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"/>
    </svg>`;
  const calendarPickerBackgroundImage = `url("data:image/svg+xml,${encodeURIComponent(calendarPickerIcon)}")`;
  return css(["border-color:", ";background-color:", ";color:", ";&::placeholder{opacity:1;color:", ";}&::-webkit-datetime-edit{color:", ";}&::-webkit-calendar-picker-indicator{background-image:", ";}&[readonly],&[aria-readonly='true']{background-color:", ";}&:hover{border-color:", ";}", " &::-webkit-calendar-picker-indicator:focus-visible{", "}&:disabled,&[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], $isHovered ? hoverBorderColor : borderColor, backgroundColor, foregroundColor, placeholderColor, placeholderColor, calendarPickerBackgroundImage, readOnlyBackgroundColor, hoverBorderColor, focusStyles({
    theme,
    inset: $focusInset,
    color: {
      variable: borderVariable
    },
    styles: {
      borderColor: focusBorderColor
    },
    condition: !$isBare
  }), focusStyles({
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
    browseFontSize = math(`${theme.fontSizes.sm} - 1`);
    swatchHeight = `${theme.space.base * 6}px`;
  } else {
    height = `${theme.space.base * 10}px`;
    paddingVertical = `${theme.space.base * 2.5}px`;
    browseFontSize = theme.fontSizes.sm;
    swatchHeight = `${theme.space.base * 7}px`;
  }
  const lineHeight = math(`${height} - (${paddingVertical} * 2) - (${theme.borderWidths.sm} * 2)`);
  const padding = $isBare ? '0' : `${em(paddingVertical, fontSize)} ${em(paddingHorizontal, fontSize)}`;
  const swatchMarginVertical = math(`(${lineHeight} - ${swatchHeight}) / 2`);
  const swatchMarginHorizontal = math(`${paddingVertical} + ${swatchMarginVertical} - ${paddingHorizontal}`);
  const calendarPickerSize = `${theme.space.base * 5}px`;
  const calendarPickerBackgroundSize = theme.iconSizes.md;
  return css(["padding:", ";min-height:", ";line-height:", ";font-size:", ";&::-ms-browse{font-size:", ";}&[type='date'],&[type='datetime-local'],&[type='file'],&[type='month'],&[type='time'],&[type='week']{max-height:", ";}&[type='file']{line-height:1;}@supports (-ms-ime-align:auto){&[type='color']{padding:", ";}}&::-moz-color-swatch{margin-top:", ";margin-left:", ";width:calc(100% + ", ");height:", ";}&::-webkit-calendar-picker-indicator{background-position:center;background-size:", ";padding:0;width:", ";height:", ";}&::-webkit-color-swatch{margin:", " ", ";}", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& ~ ", "{margin-top:", "px;}"], padding, $isBare ? '1em' : height, getLineHeight(lineHeight, fontSize), fontSize, browseFontSize, height, $isCompact ? '0 2px' : '1px 3px', swatchMarginVertical, swatchMarginHorizontal, math(`${swatchMarginHorizontal} * -2`), swatchHeight, calendarPickerBackgroundSize, calendarPickerSize, calendarPickerSize, swatchMarginVertical, swatchMarginHorizontal, StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, theme.space.base * ($isCompact ? 1 : 2));
};
const StyledTextInput = styled.input.attrs(props => ({
  'data-garden-id': COMPONENT_ID$z,
  'data-garden-version': '9.12.3',
  'aria-invalid': isInvalid(props.$validation)
})).withConfig({
  displayName: "StyledTextInput",
  componentId: "sc-1r6733h-0"
})(["appearance:none;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;direction:", ";border:", ";border-radius:", ";width:100%;box-sizing:border-box;vertical-align:middle;font-family:inherit;&::-ms-browse{border-radius:", ";}&::-ms-clear,&::-ms-reveal{display:none;}&::-moz-color-swatch{border:none;border-radius:", ";}&::-webkit-color-swatch{border:none;border-radius:", ";}&::-webkit-color-swatch-wrapper{padding:0;}&::-webkit-clear-button,&::-webkit-inner-spin-button,&::-webkit-search-cancel-button,&::-webkit-search-results-button{display:none;}&::-webkit-datetime-edit{direction:", ";line-height:1;}&::-webkit-calendar-picker-indicator{border-radius:100%;}&:invalid{box-shadow:none;}&[type='file']::-ms-value{display:none;}@media screen and (min--moz-device-pixel-ratio:0){&[type='number']{appearance:textfield;}}", ";", ";&:disabled{cursor:default;}", ";"], props => props.theme.rtl && 'rtl', props => props.$isBare ? 'none' : props.theme.borders.sm, props => props.$isBare ? '0' : props.theme.borderRadii.md, props => props.theme.borderRadii.sm, props => props.theme.borderRadii.sm, props => props.theme.borderRadii.sm, props => props.theme.rtl && 'rtl', sizeStyles$f, colorStyles$c, componentStyles);

export { StyledTextInput };
