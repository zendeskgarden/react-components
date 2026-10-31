/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledSheetHeaderProps, WithTheme } from '../../types/views';

const colorStyles = ({ theme }: WithTheme) => {
  const borderColor = getColor({ theme, variable: 'border.subtle' });

  return css`
    border-bottom-color: ${borderColor};
  `;
};

const sizeStyles = ({ theme, $isCloseButtonPresent }: WithTheme<IStyledSheetHeaderProps>) => {
  const border = theme.borders.sm;
  let padding = `${theme.space.base * 5}px`;

  if ($isCloseButtonPresent) {
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

export const StyledSheetHeader = styled.header<WithTheme<IStyledSheetHeaderProps>>`
  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
