/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.title';

/**
 * 1. Reset for <h1>, etc.
 */
export const StyledTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  margin: 0; /* [1] */
  color: ${props => props.theme.colors.foreground};
  font-weight: ${props => props.theme.fontWeights.semibold};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTitle.defaultProps = {
  theme: DEFAULT_THEME
};
