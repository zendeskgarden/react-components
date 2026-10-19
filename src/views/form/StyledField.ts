/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

/**
 * 1. Set positioning context for absolute contents (Checkbox, Radio, Toggle).
 * 2. Resets for <fieldset>.
 * 3. Normalize block / line-height treatment for consistent height
 */
export const StyledField = styled.div`
  position: relative; /* [1] */
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
  margin: 0; /* [2] */
  border: 0; /* [2] */
  padding: 0; /* [2] */
  font-size: 0; /* [3] */

  ${componentStyles};
`;
