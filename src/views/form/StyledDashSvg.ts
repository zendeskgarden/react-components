/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import DashIcon from './assets/checkbox-dash.svg';
import { StyledCheckInput } from './StyledCheckInput';
import { StyledCheckLabel } from './StyledCheckLabel';

export const StyledDashSvg = styled(DashIcon)`
  transition: opacity 0.25s ease-in-out;
  opacity: 0;
  pointer-events: none;

  ${StyledCheckInput}:indeterminate ~ ${StyledCheckLabel} > & {
    opacity: 1;
  }

  ${componentStyles};
`;
