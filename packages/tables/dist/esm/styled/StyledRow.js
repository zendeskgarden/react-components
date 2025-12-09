/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledCell } from './StyledCell.js';
import { StyledBaseRow } from './StyledBaseRow.js';
import { StyledOverflowButton } from './StyledOverflowButton.js';
import { getRowHeight } from './style-utils.js';

const COMPONENT_ID = 'tables.row';
const colorStyles = _ref => {
  let {
    theme,
    $isFocused,
    $isSelected,
    $isHovered,
    $isReadOnly
  } = _ref;
  const hoveredBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    dark: {
      offset: -100
    },
    theme
  });
  const hoveredBorderColor = getColor({
    variable: 'border.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: {
      offset: -100
    },
    theme
  });
  const selectedBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: {
      offset: -100
    },
    theme
  });
  const selectedBorderColor = getColor({
    variable: 'border.primaryEmphasis',
    light: {
      offset: -400
    },
    dark: {
      offset: 300
    },
    theme
  });
  const hoveredSelectedBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[300],
    dark: {
      offset: -100
    },
    theme
  });
  const boxShadowColor = getColor({
    variable: 'border.primaryEmphasis',
    theme
  });
  const boxShadow = `inset ${theme.rtl ? '-' : ''}${theme.shadowWidths.md} 0 0 0 ${boxShadowColor}`;
  let backgroundColor = undefined;
  let borderColor = undefined;
  let hoverBorderBottomColor = undefined;
  let hoverBackgroundColor = undefined;
  if ($isSelected) {
    if ($isHovered) {
      backgroundColor = hoveredSelectedBackgroundColor;
    } else {
      backgroundColor = selectedBackgroundColor;
    }
    borderColor = selectedBorderColor;
    hoverBorderBottomColor = selectedBorderColor;
    hoverBackgroundColor = hoveredSelectedBackgroundColor;
  } else if ($isHovered) {
    backgroundColor = hoveredBackgroundColor;
    borderColor = hoveredBorderColor;
  } else if (!$isReadOnly) {
    hoverBorderBottomColor = hoveredBorderColor;
    hoverBackgroundColor = hoveredBackgroundColor;
  }
  return css(["border-bottom-color:", ";background-color:", ";&:hover{border-bottom-color:", ";background-color:", ";", "{opacity:1;}}&:focus{outline:none;}", ":first-of-type{box-shadow:", ";&:focus{box-shadow:", ";}}"], borderColor, backgroundColor, hoverBorderBottomColor, hoverBackgroundColor, StyledOverflowButton, StyledCell, $isFocused && boxShadow, boxShadow);
};
const sizeStyles = props => {
  return css(["height:", ";"], getRowHeight(props));
};
const StyledRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRow",
  componentId: "sc-ek66ow-0"
})(["", " ", " ", ";"], sizeStyles, colorStyles, componentStyles);

export { StyledRow };
