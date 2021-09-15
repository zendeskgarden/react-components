/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.swatch_cell';

interface IStyledCell {
  isCompact?: boolean;
}

export const StyledCell = styled.td.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'presentation'
})<IStyledCell>`
  padding: ${props => props.theme.space.base}px;
  font-size: 0;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCell.defaultProps = {
  theme: DEFAULT_THEME
};
