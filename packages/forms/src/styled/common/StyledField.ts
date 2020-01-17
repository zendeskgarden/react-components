/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.field';

export const StyledField = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  direction: ${props => props.theme.rtl && 'rtl'};
  /* as <fieldset> resets */
  margin: 0;
  border: 0;
  padding: 0;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledField.defaultProps = {
  theme: DEFAULT_THEME
};
