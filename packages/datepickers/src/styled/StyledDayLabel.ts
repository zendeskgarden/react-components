/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.day_label';

export const StyledDayLabel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID
})<{ isCompact: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${props => (props.isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDayLabel.defaultProps = {
  theme: DEFAULT_THEME
};
