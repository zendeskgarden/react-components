/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, focusStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledRadioLabel } from './StyledRadioLabel';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.radio';

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ theme, variable: 'border.emphasis' });
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const iconColor = getColor({ theme, variable: 'foreground.onEmphasis' });

  const backgroundOptions = { theme, variable: 'background.primaryEmphasis' };
  const borderOptions = { theme, variable: 'border.primaryEmphasis' };

  const hoverBackgroundColor = getColor({ ...backgroundOptions, transparency: theme.opacity[100] });
  const hoverBorderColor = getColor(borderOptions);
  const focusBorderColor = hoverBorderColor;
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const activeBorderColor = focusBorderColor;
  const checkedBackgroundColor = getColor(backgroundOptions);
  const checkedBorderColor = focusBorderColor;

  const offset100 = { dark: { offset: -100 }, light: { offset: 100 } };
  const offset200 = { dark: { offset: -200 }, light: { offset: 200 } };

  const checkedHoverBackgroundColor = getColor({ ...backgroundOptions, ...offset100 });
  const checkedHoverBorderColor = getColor({ ...borderOptions, ...offset100 });
  const checkedActiveBackgroundColor = getColor({ ...backgroundOptions, ...offset200 });
  const checkedActiveBorderColor = getColor({ ...borderOptions, ...offset200 });
  const disabledBackgroundColor = getColor({
    theme,
    variable: 'background.disabled',
    transparency: theme.opacity[300]
  });

  return css`
    & ~ ${StyledRadioLabel}::before {
      border-color: ${borderColor};
      background-color: ${backgroundColor};
    }

    & ~ ${StyledRadioLabel} > svg {
      color: ${iconColor};
    }

    & ~ ${StyledRadioLabel}:hover::before {
      border-color: ${hoverBorderColor};
      background-color: ${hoverBackgroundColor};
    }

    ${focusStyles({
      theme,
      styles: { borderColor: focusBorderColor },
      selector: `&:focus-visible ~ ${StyledRadioLabel}::before`
    })}

    & ~ ${StyledRadioLabel}:active::before {
      border-color: ${activeBorderColor};
      background-color: ${activeBackgroundColor};
    }

    &:checked ~ ${StyledRadioLabel}::before {
      border-color: ${checkedBorderColor};
      background-color: ${checkedBackgroundColor};
    }

    &:enabled:checked ~ ${StyledRadioLabel}:hover::before {
      border-color: ${checkedHoverBorderColor};
      background-color: ${checkedHoverBackgroundColor};
    }

    &:enabled:checked ~ ${StyledRadioLabel}:active::before {
      border-color: ${checkedActiveBorderColor};
      background-color: ${checkedActiveBackgroundColor};
    }

    &:disabled ~ ${StyledRadioLabel}::before {
      border-color: transparent;
      background-color: ${disabledBackgroundColor};
    }
  `;
};

const sizeStyles = ({ theme, isCompact }: IStyledRadioInputProps & ThemeProps<DefaultTheme>) => {
  const lineHeight = `${theme.space.base * 5}px`; /* from StyledLabel */
  const size = `${theme.space.base * 4}px`;
  const top = math(`(${lineHeight} - ${size}) / 2`);
  const iconSize = theme.iconSizes.sm;
  const iconPosition = math(`(${size} - ${iconSize}) / 2`);
  const iconTop = math(`${iconPosition} + ${top}`);
  const marginTop = `${theme.space.base * (isCompact ? 1 : 2)}px`;

  return css`
    top: ${top};
    width: ${size};
    height: ${size};

    & ~ ${StyledRadioLabel}::before {
      top: ${top};
      border: ${theme.borders.sm};
      background-size: ${theme.iconSizes.sm};
      width: ${size};
      height: ${size};
      box-sizing: border-box;
    }

    & ~ ${StyledRadioLabel} > svg {
      top: ${iconTop};
      ${theme.rtl ? 'right' : 'left'}: ${iconPosition};
      width: ${iconSize};
      height: ${iconSize};
    }

    && ~ ${StyledRadioLabel} ~ ${StyledMessage} {
      margin-top: ${marginTop};
    }
  `;
};

export interface IStyledRadioInputProps {
  isCompact?: boolean;
}

export const StyledRadioInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'radio'
})<IStyledRadioInputProps>`
  /* hide <input> but retain accessiblity */
  position: absolute;
  opacity: 0;
  margin: 0;

  & ~ ${StyledRadioLabel}::before {
    position: absolute;
    ${props => (props.theme.rtl ? 'right' : 'left')}: 0;
    /* prettier-ignore */
    transition:
      border-color .25s ease-in-out,
      box-shadow .1s ease-in-out,
      background-color .25s ease-in-out,
      color .25s ease-in-out;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }

  & ~ ${StyledRadioLabel} > svg {
    position: absolute;
  }

  ${sizeStyles};

  &:focus ~ ${StyledRadioLabel}::before {
    outline: none;
  }

  & ~ ${StyledRadioLabel}:active::before {
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      color 0.1s ease-in-out;
  }

  ${colorStyles};

  &:disabled ~ ${StyledRadioLabel} {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
