/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledTitleProps, WithTheme } from '../../types/views';

/**
 * 1. Reset for <h1>, etc.
 */
export const StyledTitle = styled.div<WithTheme<IStyledTitleProps>>`
  margin: 0; /* [1] */
  color: ${p => getColor({ variable: 'foreground.default', theme: p.theme })};
  font-weight: ${props =>
    props.$isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold};

  ${componentStyles};
`;
