/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { getHeight } from './StyledInput.js';

const COMPONENT_ID = 'dropdowns.combobox.trigger';
const colorStyles = _ref => {
  let {
    theme,
    $validation,
    $isBare,
    $isLabelHovered,
    $focusInset
  } = _ref;
  const foregroundColor = getColor({
    theme,
    variable: 'foreground.default'
  });
  const backgroundColor = $isBare ? 'transparent' : getColor({
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
  const focusSelector = `
    &:focus-within:not([aria-disabled='true']),
    &:focus-visible
  `;
  return css(["color-scheme:only ", ";border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";}", " &[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], theme.colors.base, $isLabelHovered ? hoverBorderColor : borderColor, backgroundColor, foregroundColor, hoverBorderColor, focusStyles({
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
const sizeStyles = props => {
  const inputHeight = getHeight(props);
  let minHeight;
  let horizontalPadding;
  if (props.$isBare) {
    if (props.$isMultiselectable) {
      minHeight = math(`${props.theme.shadowWidths.sm} * 2 + ${inputHeight}`);
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
  const verticalPadding = math(`(${minHeight} - ${inputHeight} - (${props.$isBare ? 0 : props.theme.borderWidths.sm} * 2)) / 2`);
  return css(["padding:", " ", ";min-height:", ";max-height:", ";font-size:", ";"], verticalPadding, horizontalPadding, minHeight, $maxHeight, props.theme.fontSizes.md);
};
const StyledTrigger = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTrigger",
  componentId: "sc-116nftk-0"
})(["overflow-y:", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;border:", ";border-radius:", ";cursor:", ";box-sizing:border-box;", ";&:focus{outline:none;}", ";&[aria-disabled='true']{cursor:default;}", ";"], props => props.$isBare && !props.$isMultiselectable ? 'visible' : 'auto', props => props.$isBare ? 'none' : props.theme.borders.sm, props => props.$isBare ? '0' : props.theme.borderRadii.md, props => !props.$isAutocomplete && props.$isEditable ? 'text' : 'pointer', sizeStyles, colorStyles, componentStyles);

export { StyledTrigger };
