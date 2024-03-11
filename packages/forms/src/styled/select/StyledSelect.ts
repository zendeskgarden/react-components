/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTextInput, IStyledTextInputProps } from '../text/StyledTextInput';
import { StyledTextMediaFigure } from '../text/StyledTextMediaFigure';

const COMPONENT_ID = 'forms.select';

const colorStyles = (props: IStyledTextInputProps & ThemeProps<DefaultTheme>) => {
  const color = getColorV8('neutralHue', 700, props.theme);

  /* prettier-ignore */
  return css`
    /* stylelint-disable-next-line no-duplicate-selectors */
    &:hover + ${StyledTextMediaFigure},
    &:focus + ${StyledTextMediaFigure},
    &:focus-visible + ${StyledTextMediaFigure},
    &[data-garden-focus-visible='true'] + ${StyledTextMediaFigure} {
      color: ${color};
    }
  `;
};

const sizeStyles = (props: IStyledTextInputProps & ThemeProps<DefaultTheme>) => {
  const padding = math(`${props.theme.iconSizes.md} + ${props.theme.space.base * 5}`);
  const iconVerticalPosition = `${props.theme.space.base * (props.isCompact ? 1.5 : 2.5) + 1}px`;
  const iconHorizontalPosition = `${props.theme.space.base * 3}px`;

  return css`
    /* stylelint-disable-next-line property-no-unknown */
    padding-${props.theme.rtl ? 'left' : 'right'}: ${!props.isBare && padding};

    & + ${StyledTextMediaFigure} {
      top: ${iconVerticalPosition};
      ${props.theme.rtl ? 'left' : 'right'}: ${iconHorizontalPosition};
    }
  `;
};

/**
 * 1. Select reset.
 */
export const StyledSelect = styled(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'select'
})`
  cursor: pointer;
  text-overflow: ellipsis;

  ${props => sizeStyles(props)};
  ${props => colorStyles(props)};

  &::-ms-expand {
    display: none; /* [1] */
  }

  &::-ms-value {
    background-color: transparent; /* [1] */
    color: inherit; /* [1] */
  }

  &:-moz-focusring {
    transition: none;
    text-shadow: 0 0 0 ${props => props.theme.colors.foreground}; /* [1] */
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
