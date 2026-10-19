/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { IStyledBaseProps } from '../../types/views';
import { StyledCheckInput } from './StyledCheckInput';
import { StyledToggleLabel } from './StyledToggleLabel';

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const borderColor = getColor({ theme, variable: 'border.emphasis' });
  const backgroundOptions = {
    theme,
    hue: 'primaryHue',
    light: { shade: 700 },
    dark: { shade: 500 }
  };
  const hoverBackgroundColor = getColor({ ...backgroundOptions, transparency: theme.opacity[100] });
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const iconColor = getColor({ theme, variable: 'foreground.default' });
  const hoverIconColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 800 },
    dark: { shade: 200 }
  });
  const activeIconColor = getColor({
    theme,
    hue: 'neutralHue',
    light: { shade: 700 },
    dark: { shade: 100 }
  });
  const disabledBorderColor = getColor({ theme, variable: 'border.disabled' });
  const disabledIconColor = getColor({ theme, variable: 'background.disabled' });

  return css`
    & ~ ${StyledToggleLabel}::before {
      border-color: ${borderColor};
      background-color: transparent;
    }

    &:not(:checked) ~ ${StyledToggleLabel} > svg {
      color: ${iconColor};
    }

    &:enabled ~ ${StyledToggleLabel}:hover::before {
      background-color: ${hoverBackgroundColor};
    }

    &:enabled:not(:checked) ~ ${StyledToggleLabel}:hover > svg {
      color: ${hoverIconColor};
    }

    &:enabled ~ ${StyledToggleLabel}:active::before {
      background-color: ${activeBackgroundColor};
    }

    &:enabled:not(:checked) ~ ${StyledToggleLabel}:active > svg {
      color: ${activeIconColor};
    }

    &:disabled:not(:checked) ~ ${StyledToggleLabel}::before {
      border-color: ${disabledBorderColor};
      background-color: transparent;
    }

    &:disabled:not(:checked) ~ ${StyledToggleLabel} > svg {
      color: ${disabledIconColor};
    }
  `;
};

const sizeStyles = ({ theme }: IStyledBaseProps) => {
  const height = `${theme.space.base * 5}px`;
  const width = `${theme.space.base * 10}px`;
  const iconSize = theme.iconSizes.md;
  const iconPosition = math(`(${height} - ${iconSize}) / 2`);
  const checkedIconPosition = math(`${width} - ${iconSize} - ${iconPosition}`);

  return css`
    top: 0;
    width: ${width};
    height: ${height};

    & ~ ${StyledToggleLabel}::before {
      width: ${width};
      height: ${height};
    }

    & ~ ${StyledToggleLabel} > svg {
      top: ${iconPosition};
      ${theme.rtl ? 'right' : 'left'}: ${iconPosition};
      width: ${iconSize};
      height: ${iconSize};
    }

    &:checked ~ ${StyledToggleLabel} > svg {
      ${theme.rtl ? 'right' : 'left'}: ${checkedIconPosition};
    }
  `;
};

export const StyledToggleInput = styled(StyledCheckInput)`
  & ~ ${StyledToggleLabel}::before {
    top: 0;
    /* prettier-ignore */
    transition:
      box-shadow .1s ease-in-out,
      background-color .15s ease-in-out,
      color .25s ease-in-out;
    border-radius: ${props => props.theme.borderRadii.full};
  }

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
