/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import CircleIcon from 'svg-icons-legacy/src/16/circle-sm-fill.svg';

import { componentStyles } from '../../theming/utils/componentStyles';

export const StyledToggleSvg = styled(CircleIcon)`
  transition: all 0.15s ease-in-out;

  ${componentStyles};
`;
