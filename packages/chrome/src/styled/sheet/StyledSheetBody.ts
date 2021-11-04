/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_body';

export const StyledSheetBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex: 1;
  overflow-y: auto;
  padding: ${props => props.theme.space.base * 5}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetBody.defaultProps = {
  theme: DEFAULT_THEME
};
