/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledBaseProps, IStyledRadioInputProps } from '../../types/views';
import { StyledHint } from './StyledHint';
import { StyledMessage } from './StyledMessage';
import { StyledRadioLabel } from './StyledRadioLabel';

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const borderColor = getColor({ theme, variable: 'border.emphasis' });
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const iconColor = getColor({ theme, variable: 'foreground.onEmphasis' });

  const backgroundOptions = {
    theme,
    hue: 'primaryHue',
    light: { shade: 700 },
    dark: { shade: 500 }
  };
  const borderOptions = { theme, variable: 'border.primaryEmphasis' };

  const hoverBackgroundColor = getColor({ ...backgroundOptions, transparency: theme.opacity[100] });
  const hoverBorderColor = getColor(borderOptions);
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const activeBorderColor = hoverBorderColor;
  const checkedBackgroundColor = getColor({ theme, variable: 'foreground.default' });
  const checkedBorderColor = 'transparent';

  const checkedHoverBackgroundColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 800 },
    dark: { shade: 200 }
  });
  const checkedHoverBorderColor = checkedBorderColor;
  const checkedActiveBackgroundColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 700 },
    dark: { shade: 100 }
  });
  const checkedActiveBorderColor = checkedBorderColor;
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

const sizeStyles = ({ theme, $isCompact }: IStyledRadioInputProps) => {
  const lineHeight = `${theme.space.base * 5}px`; /* from StyledLabel */
  const size = `${theme.space.base * 4}px`;
  const top = math(`(${lineHeight} - ${size}) / 2`);
  const iconSize = theme.iconSizes.sm;
  const iconPosition = math(`(${size} - ${iconSize}) / 2`);
  const iconTop = math(`${iconPosition} + ${top}`);
  const marginTop = `${theme.space.base * ($isCompact ? 1 : 2)}px`;

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

    & ~ ${StyledRadioLabel} + ${StyledHint} {
      margin-top: ${marginTop};
    }

    && ~ ${StyledRadioLabel} ~ ${StyledMessage} {
      margin-top: ${marginTop};
    }
  `;
};

export const StyledRadioInput = styled.input<IStyledRadioInputProps>`
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

  ${componentStyles};
`;
