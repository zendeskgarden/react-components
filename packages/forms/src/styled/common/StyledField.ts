/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.field';

/**
 * 1. Set positioning context for absolute contents (Checkbox, Radio, Toggle).
 * 2. Resets for <fieldset>.
 * 3. Normalize block / line-height treatment for consistent height
 */
export const StyledField = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: relative; /* [1] */
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
  margin: 0; /* [2] */
  border: 0; /* [2] */
  padding: 0; /* [2] */
  font-size: 0; /* [3] */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledField.defaultProps = {
  theme: DEFAULT_THEME
};
