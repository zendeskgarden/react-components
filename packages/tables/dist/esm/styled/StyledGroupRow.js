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
import { StyledCell } from './StyledCell.js';
import { getLineHeight } from './StyledTable.js';

const COMPONENT_ID$2 = 'tables.group_row';
const colorStyles$1 = ({
  theme
}) => {
  return css(["background-color:", ";"], getColor({
    variable: 'background.subtle',
    transparency: theme.opacity[100],
    light: {
      offset: 300
    },
    dark: {
      offset: -600
    },
    theme
  }));
};
const sizeStyles$1 = props => {
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(props);
  return css(["height:", ";line-height:", ";font-size:", ";", "{padding:", " ", "px;}"], height, lineHeight, props.theme.fontSizes.sm, StyledCell, math(`(${height} - ${lineHeight}) / 2`), props.theme.space.base * 3);
};
const StyledGroupRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGroupRow",
  componentId: "sc-mpd0r8-0"
})(["", " ", " ", ";"], sizeStyles$1, colorStyles$1, componentStyles);

export { StyledGroupRow };
