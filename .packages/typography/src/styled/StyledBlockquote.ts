/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor, componentStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import { IBlockquoteProps } from '../types';
import { THEME_SIZES } from './StyledFont';

const COMPONENT_ID = 'typography.blockquote';

export const StyledBlockquote = styled.blockquote.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IBlockquoteProps>`
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
