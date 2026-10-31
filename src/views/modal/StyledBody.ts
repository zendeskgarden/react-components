/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { WithTheme } from '../../types/views';

export const StyledBody = styled.div<WithTheme>`
  display: block;
  margin: 0;
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`};
  height: 100%;
  overflow: auto;
  line-height: ${props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  color-scheme: only ${p => p.theme.colors.base};
  color: ${({ theme }) => getColor({ theme, variable: 'foreground.default' })};
  font-size: ${props => props.theme.fontSizes.md};

  ${componentStyles};
`;
