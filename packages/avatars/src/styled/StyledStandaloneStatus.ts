/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'avatars.status-indicator';

export const StyledStandaloneStatus = styled.figure.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<ThemeProps<DefaultTheme>>`
  box-sizing: content-box;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 0;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStandaloneStatus.defaultProps = {
  theme: DEFAULT_THEME
};
