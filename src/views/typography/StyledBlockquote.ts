/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { IBlockquoteProps } from '../../types/elements';
import { THEME_SIZES } from './StyledFont';

export const StyledBlockquote = styled.blockquote<IBlockquoteProps>`
  margin: 0;
  border-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
    props.theme.shadowWidths.sm} solid;
  border-color: ${props => getColor({ theme: props.theme, variable: 'border.default' })};
  padding: 0;
  padding-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
    props.theme.space.base * 4}px;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};

  & + &,
  p + & {
    margin-top: ${props => props.theme.lineHeights[THEME_SIZES[props.size!]]};
  }

  ${componentStyles};
`;
