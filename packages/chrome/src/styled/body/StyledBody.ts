/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.body';

export const StyledBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex: 1;
  order: 1;
  background-color: ${props => getColor('neutralHue', 100, props.theme)};
  min-width: 0;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledBody.defaultProps = {
  theme: DEFAULT_THEME
};
