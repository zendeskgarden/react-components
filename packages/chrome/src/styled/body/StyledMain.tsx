/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.main';

export const StyledMain = styled.main.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex: 1;
  order: 1;
  background-color: ${props => getColor({ theme: props.theme, variable: 'background.default' })};
  overflow: auto;

  &:focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
