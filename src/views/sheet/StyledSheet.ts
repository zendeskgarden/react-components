/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import { ISheetProps } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledSheetProps {
  $placement?: ISheetProps['placement'];
  $isOpen?: boolean;
  $isAnimated?: boolean;
  $size?: string;
}

const colorStyles = ({ theme, $isOpen }: IStyledSheetProps & IStyledBaseProps) => {
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const borderColor = $isOpen ? getColor({ theme, variable: 'border.default' }) : 'transparent';

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
  `;
};

const sizeStyles = ({
  theme,
  $isOpen,
  $placement,
  $size
}: IStyledSheetProps & IStyledBaseProps) => {
  const width = $isOpen ? $size : 0;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  const border = $isOpen ? theme.borders.sm : 'none';
  let borderProperty;

  if ($placement === 'start') {
    borderProperty = `border-${theme.rtl ? 'left' : 'right'}`;
  } else {
    borderProperty = `border-${theme.rtl ? 'right' : 'left'}`;
  }

  return css`
    box-sizing: border-box;
    width: ${width};
    height: 100%;
    ${borderProperty}: ${border};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledSheet = styled.aside<IStyledSheetProps>`
  display: flex;
  order: 1;
  transition: ${props => props.$isAnimated && 'width 250ms ease-in-out'};
  overflow: hidden;

  ${sizeStyles};

  &:focus {
    outline: none;
  }

  ${colorStyles};

  ${componentStyles};
`;
