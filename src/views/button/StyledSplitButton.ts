/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

/**
 * Accepts all `<div>` props
 */
export const StyledSplitButton = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 0;
  direction: ${props => props.theme.rtl && 'rtl'};
  white-space: nowrap;

  ${componentStyles};
`;
