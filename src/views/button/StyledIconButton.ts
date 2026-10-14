/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { IButtonProps } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';
import { IStyledButtonProps, StyledButton, getHeight } from './StyledButton';
import { StyledIcon } from './StyledIcon';

export const COMPONENT_ID = 'buttons.icon_button';

const colorStyles = ({ theme, $isBasic, $isDanger }: IStyledButtonProps & IStyledBaseProps) => {
  const offset100 = { dark: { offset: -100 }, light: { offset: 100 } };
  const offset200 = { dark: { offset: -200 }, light: { offset: 200 } };
  let borderColor;
  let hoverBorderColor;
  let activeBorderColor;
  let backgroundOptions;
  let foregroundOptions;

  if ($isDanger) {
    if (!$isBasic) {
      const borderOptions = { theme, variable: 'border.dangerEmphasis' };

      borderColor = getColor(borderOptions);
      hoverBorderColor = getColor({ ...borderOptions, ...offset100 });
      activeBorderColor = getColor({ ...borderOptions, ...offset200 });
    }

    backgroundOptions = { theme, variable: 'background.dangerEmphasis' };
    foregroundOptions = { theme, variable: 'foreground.danger' };
  } else {
    if (!$isBasic) {
      borderColor = getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: 500 },
        dark: { shade: 600 }
      });
      hoverBorderColor = getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: 600 },
        dark: { shade: 500 }
      });
      activeBorderColor = getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: 700 },
        dark: { shade: 400 }
      });
    }

    backgroundOptions = { theme, hue: 'neutralHue', light: { shade: 700 }, dark: { hue: 'white' } };
    foregroundOptions = { theme, variable: 'foreground.subtle' };
  }

  return css`
    border-color: ${borderColor};
    color: ${getColor(foregroundOptions)};

    &:hover {
      border-color: ${hoverBorderColor};
      background-color: ${getColor({ ...backgroundOptions, transparency: theme.opacity[100] })};
      color: ${getColor({ ...foregroundOptions, ...offset100 })};
    }

    &:active,
    &[aria-pressed='true'],
    &[aria-pressed='mixed'] {
      border-color: ${activeBorderColor};
      background-color: ${getColor({ ...backgroundOptions, transparency: theme.opacity[200] })};
      color: ${getColor({ ...foregroundOptions, ...offset200 })};
    }

    &:disabled {
      color: ${getColor({ theme, variable: 'foreground.disabled' })};
    }
  `;
};

/**
 * 1. Icon buttons color the icon with the button foreground. Neutral icon
 *    buttons use the subtle icon colors, and keep the resting one when pressed.
 */
const iconColorStyles = ({ theme, $isNeutral }: IStyledButtonProps & IStyledBaseProps) => {
  if (!$isNeutral) {
    return css`
      /* prettier-ignore */
      & ${StyledIcon},
      &:hover ${StyledIcon},
      &:focus-visible ${StyledIcon},
      &:active ${StyledIcon},
      &[aria-pressed='true'] ${StyledIcon},
      &[aria-pressed='mixed'] ${StyledIcon} {
        color: inherit; /* [1] */
      }
    `;
  }

  const options = { theme, variable: 'foreground.subtle' };

  return css`
    /* [1] */
    &[aria-pressed='true'] ${StyledIcon}, &[aria-pressed='mixed'] ${StyledIcon} {
      color: ${getColor(options)};
    }

    &:hover ${StyledIcon}, &:focus-visible ${StyledIcon} {
      color: ${getColor({ ...options, dark: { offset: -100 }, light: { offset: 100 } })};
    }

    &:active ${StyledIcon} {
      color: ${getColor({ ...options, dark: { offset: -200 }, light: { offset: 200 } })};
    }

    &:disabled ${StyledIcon} {
      color: ${getColor({ theme, variable: 'foreground.disabled' })};
    }
  `;
};

/**
 * 1. placed after the disabled background: disabled icon buttons keep the
 *    hover and active background and border colors
 */
const iconButtonStyles = (props: IStyledButtonProps & IStyledBaseProps) => {
  const width = getHeight(props);

  return css`
    border: ${props.$isBasic && 'none'};
    padding: 0;
    width: ${width};
    min-width: ${width};
    font-weight: ${props.theme.fontWeights.regular};

    &:disabled {
      background-color: ${!props.$isPrimary && 'transparent'};
    }

    /* [1] */
    ${!props.$isPrimary && colorStyles(props)};
    ${!(props.$isPrimary || props.$isDanger) && iconColorStyles(props)};
  `;
};

/**
 * 1. Ease opacity transition between embedded icons (i.e. stroke-fill).
 */
const iconStyles = (props: IButtonProps & IStyledBaseProps) => {
  const size = props.theme.space.md;

  return css`
    width: ${size};
    height: ${size};

    & > svg {
      transition: opacity 0.15s ease-in-out; /* [1] */
    }
  `;
};

export const StyledIconButton = styled(StyledButton)`
  ${iconButtonStyles};

  & ${StyledIcon} {
    ${iconStyles}
  }

  & svg {
    width: ${props => props.theme.space.md};
    height: ${props => props.theme.space.md};
  }

  ${componentStyles};
`;
