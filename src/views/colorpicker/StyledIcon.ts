/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import { StyledColorSwatchInput } from './StyledColorSwatchInput';

export const StyledIcon = styled(StyledBaseIcon)`
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  width: 100%;
  height: 100%;

  ${StyledColorSwatchInput}:checked ~ & {
    opacity: 1;
  }

  ${componentStyles};
`;
