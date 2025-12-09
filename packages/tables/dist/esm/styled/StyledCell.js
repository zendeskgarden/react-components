/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';
import { getLineHeight } from './StyledTable.js';
import { getRowHeight } from './style-utils.js';

const COMPONENT_ID = 'tables.cell';
const truncatedStyling = css(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
const sizeStyling = props => {
  let boxSizing = 'border-box';
  let padding;
  let width = props.width;
  let height;
  if (props.$hasOverflow) {
    boxSizing = 'content-box';
    width = '2em';
    height = 'inherit';
    padding = props.theme.rtl ? `0 0 0 ${props.theme.space.base}px` : `0 ${props.theme.space.base}px 0 0`;
  } else {
    const paddingVertical = math(`(${getRowHeight(props)} - ${getLineHeight(props)}) / 2`);
    const paddingHorizontal = `${props.theme.space.base * 3}px`;
    padding = `${paddingVertical} ${paddingHorizontal}`;
  }
  if (props.$isMinimum) {
    boxSizing = 'content-box';
    width = '1em';
  }
  return css(["box-sizing:", ";padding:", ";width:", ";height:", ";"], boxSizing, padding, width, height);
};
const StyledCell = styled.td.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCell",
  componentId: "sc-8hpncx-0"
})(["display:table-cell;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out;", ";", ";", ";"], props => sizeStyling(props), props => props.$isTruncated && truncatedStyling, componentStyles);

export { StyledCell };
