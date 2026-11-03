/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, css } from 'styled-components';

import { getColor } from '../../theming/utils/getColor';
import { getIconRenderSize } from '../../theming/utils/getIconRenderSize';
import type { WithTheme } from '../../types/views';
import { StyledTextInput, IStyledTextInputProps } from './StyledTextInput';
import { StyledTextMediaFigure } from './StyledTextMediaFigure';

const colorStyles = ({ theme }: WithTheme<IStyledTextInputProps>) => {
  const color = getColor({
    theme,
    variable: 'foreground.subtle',
    dark: { offset: -100 },
    light: { offset: 100 }
  });
  const disabledColor = getColor({ theme, variable: 'foreground.disabled' });

  /* prettier-ignore */
  return css`
    &:hover + ${StyledTextMediaFigure},
    &:focus + ${StyledTextMediaFigure},
    &:focus-visible + ${StyledTextMediaFigure} {
      color: ${color};
    }

    &:disabled + ${StyledTextMediaFigure} {
      color: ${disabledColor};
    }
  `;
};

const sizeStyles = ({ theme, $isBare, $isCompact }: WithTheme<IStyledTextInputProps>) => {
  const iconSize = getIconRenderSize(theme);
  /* keeps the larger chevron centered on the 16px icon position */
  const iconOffset = math(`(${iconSize} - ${theme.iconSizes.md}) / 2`);
  const padding = $isBare ? undefined : math(`${iconSize} + ${theme.space.base * 5}`);
  const iconVerticalPosition = math(
    `${theme.space.base * ($isCompact ? 1.5 : 2.5) + 1}px - ${iconOffset}`
  );
  const iconHorizontalPosition = `${theme.space.base * 3}px`;

  return css`
    padding-${theme.rtl ? 'left' : 'right'}: ${padding};

    & + ${StyledTextMediaFigure} {
      top: ${iconVerticalPosition};
      ${theme.rtl ? 'left' : 'right'}: ${iconHorizontalPosition};
    }
  `;
};

/*
 * 1. Select reset.
 */
export const StyledSelect = styled(StyledTextInput)<WithTheme>`
  opacity: 1; /* [1] */
  cursor: pointer;
  text-overflow: ellipsis;

  ${sizeStyles};

  ${colorStyles};

  &::-ms-expand {
    display: none; /* [1] */
  }

  &::-ms-value {
    background-color: transparent; /* [1] */
    color: inherit; /* [1] */
  }

  &:-moz-focusring {
    transition: none;
    text-shadow: 0 0 0 ${props => getColor({ theme: props.theme, variable: 'foreground.default' })}; /* [1] */
    color: transparent; /* [1] */
  }

  & + ${StyledTextMediaFigure} {
    position: absolute;
    pointer-events: none;
  }
`;
