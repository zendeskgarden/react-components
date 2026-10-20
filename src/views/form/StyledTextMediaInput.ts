/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledTextInput } from './StyledTextInput';

export const StyledTextMediaInput = styled(StyledTextInput)`
  flex-grow: 1;

  ${componentStyles};
`;
