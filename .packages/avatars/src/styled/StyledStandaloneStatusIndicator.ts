/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase';
import { getStatusSize, IStyledStatusIndicatorProps } from './utility';

const COMPONENT_ID = 'avatars.status-indicator.indicator';

export const StyledStandaloneStatusIndicator = styled(
  StyledStatusIndicatorBase
).attrs<IStyledStatusIndicatorProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  $type: props.$type ?? 'offline'
}))<IStyledStatusIndicatorProps>`
  position: relative;
  box-sizing: content-box;
  margin-top: ${props =>
    `calc((${props.theme.lineHeights.md} - ${getStatusSize(props, '0')}) / 2)`};

  ${componentStyles};
`;
