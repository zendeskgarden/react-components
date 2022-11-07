/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.global-alert.content';

export const StyledGlobalAlertContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex-grow: 1;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertContent.defaultProps = {
  theme: DEFAULT_THEME
};
