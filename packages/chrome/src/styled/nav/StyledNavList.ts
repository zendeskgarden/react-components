/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.nav_list';

export const StyledNavList = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  order: 0;
  margin: 0;
  padding: 0;
  list-style: none;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
