/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

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

    /* Dark hover and active use red 500. Light stays on red 700. */
    backgroundOptions = {
      theme,
      hue: 'dangerHue',
      light: { shade: 700 },
      dark: { shade: 500 }
    };
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
 * 1. Icon buttons color the icon with the button foreground in every state,
 *    whatever `isNeutral` says: the pressed icon follows the active foreground.
 */
const iconColorStyles = () => css`
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

/**
 * 1. disabled rules follow the hover and active colors. An outline icon
 *    button takes the disabled fill; a basic one stays transparent. The
 *    border stays transparent.
 */
const iconButtonStyles = (props: IStyledButtonProps & IStyledBaseProps) => {
  const width = getHeight(props);
  const disabledBackgroundColor = props.$isBasic
    ? 'transparent'
    : getColor({ theme: props.theme, variable: 'background.disabled' });

  return css`
    border: ${props.$isBasic && 'none'};
    padding: 0;
    width: ${width};
    min-width: ${width};
    font-weight: ${props.theme.fontWeights.regular};

    ${!props.$isPrimary && colorStyles(props)};
    ${!(props.$isPrimary || props.$isDanger) && iconColorStyles()};

    /* [1] */
    ${!props.$isPrimary &&
    css`
      &:disabled,
      &:hover:disabled,
      &:active:disabled,
      &[aria-pressed='true']:disabled,
      &[aria-pressed='mixed']:disabled {
        border-color: transparent;
        background-color: ${disabledBackgroundColor};
        color: ${getColor({ theme: props.theme, variable: 'foreground.disabled' })};
      }
    `}
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
