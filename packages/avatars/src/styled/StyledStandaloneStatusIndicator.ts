/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

import { getStatusSize, IStyledStatusIndicatorProps } from './utility';
import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase';

const COMPONENT_ID = 'avatars.status-indicator.indicator';

export const StyledStandaloneStatusIndicator = styled(
  StyledStatusIndicatorBase
).attrs<IStyledStatusIndicatorProps>(({ $type = 'offline' }) => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  $type
}))`
  position: relative;
  box-sizing: content-box;
  margin-top: ${props =>
    `calc((${props.theme.lineHeights.md} - ${getStatusSize(props, '0')}) / 2)`};

  ${componentStyles};
`;
