/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StyledBaseIcon } from '@zendeskgarden/react-theming';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

export interface IStyledIcon {
  $type: 'first' | 'next' | 'previous' | 'last';
}

const marginStyles = (props: IStyledIcon & ThemeProps<DefaultTheme>) => {
  const { $type, theme } = props;
  const margin = theme.space.base;

  if (theme.rtl) {
    return css`
      margin-${$type === 'last' || $type === 'next' ? 'right' : 'left'}: ${margin}px;
    `;
  }

  return css`
    margin-${$type === 'first' || $type === 'previous' ? 'right' : 'left'}: ${margin}px;
  `;
};

export const StyledIcon = styled(StyledBaseIcon)<IStyledIcon>`
  ${marginStyles}
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
`;
