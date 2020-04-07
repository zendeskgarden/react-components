/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cloneElement, Children } from 'react';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

export interface IStyledIcon {
  type: 'first' | 'next' | 'previous' | 'last';
}

const marginStyles = (props: IStyledIcon & ThemeProps<DefaultTheme>) => {
  const { type, theme } = props;
  const margin = theme.space.base;

  if (theme.rtl) {
    return css`
      /* stylelint-disable-next-line property-no-unknown */
      margin-${type === 'last' || type === 'next' ? 'right' : 'left'}: ${margin}px;
    `;
  }

  return css`
    /* stylelint-disable-next-line property-no-unknown */
    margin-${type === 'first' || type === 'previous' ? 'right' : 'left'}: ${margin}px;
  `;
};

export const StyledIcon = styled(({ children, ...props }) =>
  cloneElement(Children.only(children), props)
)`
  ${marginStyles}
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
