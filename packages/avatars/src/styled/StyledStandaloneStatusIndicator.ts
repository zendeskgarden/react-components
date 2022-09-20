/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { IStyledStatusIndicatorProps } from './utility';
import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase';

const COMPONENT_ID = 'avatars.status-indicator.indicator';

export const StyledStandaloneStatusIndicator = styled(StyledStatusIndicatorBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStatusIndicatorProps>`
  position: relative;
  margin-top: ${props => `${props.theme.space.base / (props.size === 'small' ? 1 : 2)}px`};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStandaloneStatusIndicator.defaultProps = {
  type: 'offline',
  theme: DEFAULT_THEME
};
