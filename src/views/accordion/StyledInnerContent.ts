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

export const StyledInnerContent = styled.div`
  margin: -${props => props.theme.space.xxs};
  padding: ${props => props.theme.space.xxs};
  overflow: hidden;
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${({ theme }) => getColor({ theme, variable: 'foreground.default' })};
  font-size: ${props => props.theme.fontSizes.md};

  &[aria-hidden='true'] {
    margin: 0;
    padding: 0;
  }

  ${componentStyles};
`;
