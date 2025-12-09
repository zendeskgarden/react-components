/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { hideVisually, math } from 'polished';
import { componentStyles, getColor, getLineHeight } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.input';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const placeholderColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return css(["background-color:inherit;color:inherit;&::placeholder{opacity:1;color:", ";}"], placeholderColor);
};
const getHeight = props => {
  if (props.$isBare && !props.$isMultiselectable) {
    return props.theme.space.base * 5;
  }
  return props.theme.space.base * (props.$isCompact ? 5 : 8);
};
const sizeStyles = props => {
  const height = props.theme.space.base * 5;
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(height, fontSize);
  const margin = math(`${props.theme.shadowWidths.sm} + ${(getHeight(props) - height) / 2}`);
  const minWidth = `${props.theme.space.base * 8}px`;
  return css(["min-width:", ";height:", "px;line-height:", ";font-size:", ";&&{margin-top:", ";margin-bottom:", ";}"], minWidth, height, lineHeight, fontSize, margin, margin);
};
const StyledInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInput",
  componentId: "sc-1lkqdg-0"
})(["flex-basis:0;flex-grow:1;border:none;padding:0;font-family:inherit;&:focus{outline:none;}", ";", ";&[hidden]{display:revert;", "}&[aria-hidden='true']{display:none;}", ";"], sizeStyles, colorStyles, props => props.$isEditable && hideVisually(), componentStyles);

export { StyledInput, getHeight, sizeStyles };
