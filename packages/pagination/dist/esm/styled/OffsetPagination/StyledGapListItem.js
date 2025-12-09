/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getLineHeight, getColor } from '@zendeskgarden/react-theming';
import { StyledListItem } from './StyledListItem.js';

const COMPONENT_ID$2 = 'pagination.gap';
const sizeStyles = props => {
  const shift = 2;
  const fontSize = math(`${props.theme.fontSizes.md} + ${shift}`);
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(height, fontSize);
  const padding = `${props.theme.space.base * 1.5}px`;
  return css(["padding:0 ", ";min-width:", ";max-width:", ";height:", ";line-height:", ";font-size:", ";"], padding, height, math(`${height} * 2`), height, lineHeight, fontSize);
};
const colorStyles = ({
  theme
}) => {
  return css(["color:", ";"], getColor({
    variable: 'foreground.subtle',
    theme
  }));
};
const StyledGapListItem = styled(StyledListItem).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGapListItem",
  componentId: "sc-10wd0iz-0"
})(["display:inline-block;text-align:center;", ";", " &:hover{color:inherit;}", ";"], sizeStyles, colorStyles, componentStyles);

export { StyledGapListItem };
