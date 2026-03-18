/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const COMPONENT_ID = 'datepickers.day_label';

export const StyledDayLabel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<{ $isCompact: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${props => (props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${componentStyles};
`;
