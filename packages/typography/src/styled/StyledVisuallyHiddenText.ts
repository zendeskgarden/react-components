/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { hideVisually } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.visually_hidden_text';

export const StyledVisuallyHiddenText = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${hideVisually()}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledVisuallyHiddenText.defaultProps = {
  theme: DEFAULT_THEME
};
