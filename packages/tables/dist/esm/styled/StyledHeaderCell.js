/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledCell } from './StyledCell.js';
import { StyledSortableButton } from './StyledSortableButton.js';
import { getLineHeight } from './StyledTable.js';
import { getRowHeight } from './style-utils.js';

const COMPONENT_ID$4 = 'tables.header_cell';
const truncatedStyling = css(["", "{max-width:100%;overflow:hidden;text-overflow:ellipsis;}"], StyledSortableButton);
const sizeStyles$2 = props => {
  let paddingVertical = undefined;
  if (!props.$hasOverflow) {
    paddingVertical = math(`(${getRowHeight(props)} - ${getLineHeight(props)}) / 2`);
  }
  return css(["padding-top:", ";padding-bottom:", ";"], paddingVertical, paddingVertical);
};
const StyledHeaderCell = styled(StyledCell).attrs({
  as: 'th',
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderCell",
  componentId: "sc-fzagoe-0"
})(["text-align:", ";font-weight:inherit;", " ", " ", ";"], props => {
  if (!props.$hasOverflow) {
    if (props.theme.rtl) {
      return 'right';
    }
    return 'left';
  }
  return undefined;
}, props => sizeStyles$2(props), props => props.$isTruncated && truncatedStyling, componentStyles);

export { StyledHeaderCell };
