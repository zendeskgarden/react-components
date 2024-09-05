/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_header';

export interface IStyledSheetHeaderProps {
  isCloseButtonPresent?: boolean;
}

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ theme, variable: 'border.subtle' });

  return css`
    border-bottom-color: ${borderColor};
  `;
};

const sizeStyles = ({
  theme,
  isCloseButtonPresent
}: IStyledSheetHeaderProps & ThemeProps<DefaultTheme>) => {
  const border = theme.borders.sm;
  let padding = `${theme.space.base * 5}px`;

  if (isCloseButtonPresent) {
    const paddingSide = `${theme.space.base * 14}px`;

    padding = theme.rtl
      ? `${padding} ${padding} ${padding} ${paddingSide}`
      : `${padding} ${paddingSide} ${padding} ${padding}`;
  }

  return css`
    border-bottom: ${border};
    padding: ${padding};
  `;
};

export const StyledSheetHeader = styled.header.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetHeaderProps>`
  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
