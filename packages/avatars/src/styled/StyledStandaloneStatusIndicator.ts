/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { getStatusSize, IStyledStatusIndicatorProps } from './utility';
import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase';

const COMPONENT_ID = 'avatars.status-indicator.indicator';

export const StyledStandaloneStatusIndicator = styled(StyledStatusIndicatorBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStatusIndicatorProps>`
  position: relative;
  margin-top: ${props =>
    `calc((${props.theme.lineHeights.md} - ${getStatusSize(props, '0')}) / 2)`};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStandaloneStatusIndicator.defaultProps = {
  type: 'offline',
  theme: DEFAULT_THEME
};
