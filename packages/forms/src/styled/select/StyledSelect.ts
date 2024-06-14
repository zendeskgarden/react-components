/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledTextInput, IStyledTextInputProps } from '../text/StyledTextInput';
import { StyledTextMediaFigure } from '../text/StyledTextMediaFigure';

const COMPONENT_ID = 'forms.select';

const colorStyles = ({ theme }: IStyledTextInputProps & ThemeProps<DefaultTheme>) => {
  const color = getColor({
    theme,
    variable: 'foreground.subtle',
    dark: { offset: -100 },
    light: { offset: 100 }
  });

  /* prettier-ignore */
  return css`
    /* stylelint-disable-next-line no-duplicate-selectors */
    &:hover + ${StyledTextMediaFigure},
    &:focus + ${StyledTextMediaFigure},
    &:focus-visible + ${StyledTextMediaFigure} {
      color: ${color};
    }
  `;
};

const sizeStyles = ({
  theme,
  isBare,
  isCompact
}: IStyledTextInputProps & ThemeProps<DefaultTheme>) => {
  const padding = isBare ? undefined : math(`${theme.iconSizes.md} + ${theme.space.base * 5}`);
  const iconVerticalPosition = `${theme.space.base * (isCompact ? 1.5 : 2.5) + 1}px`;
  const iconHorizontalPosition = `${theme.space.base * 3}px`;

  return css`
    /* stylelint-disable-next-line property-no-unknown */
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
export const StyledSelect = styled(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'select'
})`
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

StyledSelect.defaultProps = {
  theme: DEFAULT_THEME
};
