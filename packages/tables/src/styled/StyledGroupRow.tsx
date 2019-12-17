/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledBaseRow } from './StyledRow';
import { StyledCell } from './StyledCell';

const COMPONENT_ID = 'tables.group_row';

export const StyledGroupRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  background-color: ${props => getColor('neutralHue', 100, props.theme)};
  height: ${props => props.theme.space.base * 8}px;
  line-height: ${props => props.theme.space.base * 4}px;
  font-size: ${props => props.theme.fontSizes.sm};

  ${StyledCell} {
    padding: 6px 10px;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGroupRow.defaultProps = {
  theme: DEFAULT_THEME
};
