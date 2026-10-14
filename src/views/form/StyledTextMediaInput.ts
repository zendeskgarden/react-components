/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledTextInput } from './StyledTextInput';

const COMPONENT_ID = 'forms.media_input';

// MIGRATE(component-ids): .attrs with non-data props — move them to the element JSX, after the last spread
export const StyledTextMediaInput = styled(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  $isBare: true
})`
  flex-grow: 1;

  ${componentStyles};
`;
