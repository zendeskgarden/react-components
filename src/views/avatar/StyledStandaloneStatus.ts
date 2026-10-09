/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledBaseProps } from '../../types/views';
import { TRANSITION_DURATION } from './utility';

export const StyledStandaloneStatus = styled.figure<IStyledBaseProps>`
  display: inline-flex;
  flex-flow: row nowrap;
  transition: all ${TRANSITION_DURATION}s ease-in-out;
  margin: 0;
  box-sizing: content-box;

  ${componentStyles};
`;
