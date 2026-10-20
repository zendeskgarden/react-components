/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

/**
 * Accessibly hidden checkbox with support for tooltip hover
 */
export const StyledColorSwatchInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;

  ${componentStyles};
`;
