/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.checkbox';

export const StyledCheckInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'checkbox'
})`
  /* hide <input type="checkbox"> but retain accessiblity */
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
