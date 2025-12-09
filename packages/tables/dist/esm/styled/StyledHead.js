/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledHeaderRow } from './StyledHeaderRow.js';
import { StyledHeaderCell } from './StyledHeaderCell.js';

const COMPONENT_ID = 'tables.head';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const borderColor = getColor({
    variable: 'border.default',
    theme
  });
  const backgroundColor = getColor({
    variable: 'background.default',
    theme
  });
  return css(["background-color:", ";& > ", ":last-child{border-bottom-color:transparent;& > ", "{box-shadow:inset 0 -", " 0 ", ";}}"], backgroundColor, StyledHeaderRow, StyledHeaderCell, theme.borderWidths.sm, borderColor);
};
const stickyStyles = () => {
  return css(["position:sticky;top:0;z-index:1;"]);
};
const StyledHead = styled.thead.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHead",
  componentId: "sc-spf23a-0"
})(["", " ", " ", ";"], props => props.$isSticky && stickyStyles(), colorStyles, componentStyles);

export { StyledHead };
