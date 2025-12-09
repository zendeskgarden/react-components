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

const COMPONENT_ID = 'tables.header_row';
const getHeaderRowHeight = props => {
  if (props.$size === 'large') {
    return `${props.theme.space.base * 18}px`;
  } else if (props.$size === 'small') {
    return `${props.theme.space.base * 10}px`;
  }
  return `${props.theme.space.base * 12}px`;
};
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  return css(["border-bottom-color:", ";"], getColor({
    variable: 'border.default',
    theme
  }));
};
const sizeStyles = props => {
  const rowHeight = getHeaderRowHeight(props);
  return css(["height:", ";vertical-align:bottom;", "{margin-top:0;margin-bottom:calc(", " - 1em);}"], rowHeight, StyledOverflowButton, math(`${rowHeight} / 2`));
};
const StyledHeaderRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderRow",
  componentId: "sc-16ogvdx-0"
})(["font-weight:", ";", " ", " ", "{opacity:1;}", ";"], props => props.theme.fontWeights.semibold, sizeStyles, colorStyles, StyledOverflowButton, componentStyles);

export { StyledHeaderRow };
