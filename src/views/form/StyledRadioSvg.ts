/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import CircleIcon from 'svg-icons-legacy/src/12/circle-sm-fill.svg';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledRadioInput } from './StyledRadioInput';
import { StyledRadioLabel } from './StyledRadioLabel';

export const StyledRadioSvg = styled(CircleIcon)`
  transition: opacity 0.25s ease-in-out;
  opacity: 0;

  ${StyledRadioInput}:checked ~ ${StyledRadioLabel} > & {
    opacity: 1;
  }

  ${componentStyles};
`;
