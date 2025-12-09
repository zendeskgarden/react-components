/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledBaseRow } from './StyledBaseRow.js';
import { StyledOverflowButton } from './StyledOverflowButton.js';

const COMPONENT_ID$8 = 'tables.header_row';
const getHeaderRowHeight = props => {
  if (props.$size === 'large') {
    return `${props.theme.space.base * 18}px`;
  } else if (props.$size === 'small') {
    return `${props.theme.space.base * 10}px`;
  }
  return `${props.theme.space.base * 12}px`;
};
const colorStyles$4 = ({
  theme
}) => {
  return css(["border-bottom-color:", ";"], getColor({
    variable: 'border.default',
    theme
  }));
};
const sizeStyles$3 = props => {
  const rowHeight = getHeaderRowHeight(props);
  return css(["height:", ";vertical-align:bottom;", "{margin-top:0;margin-bottom:calc(", " - 1em);}"], rowHeight, StyledOverflowButton, math(`${rowHeight} / 2`));
};
const StyledHeaderRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderRow",
  componentId: "sc-16ogvdx-0"
})(["font-weight:", ";", " ", " ", "{opacity:1;}", ";"], props => props.theme.fontWeights.semibold, sizeStyles$3, colorStyles$4, StyledOverflowButton, componentStyles);

export { StyledHeaderRow };
