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

const iconColorStyles = ({ theme }: IStyledButtonProps & IStyledBaseProps) => {
  const options = { theme, variable: 'foreground.subtle' };
  const baseColor = getColor(options);
  const hoverColor = getColor({ ...options, dark: { offset: -100 }, light: { offset: 100 } });
  const activeColor = getColor({ ...options, dark: { offset: -200 }, light: { offset: 200 } });

  return css`
    color: ${baseColor};

    &:hover {
      color: ${hoverColor};
    }

    &:active,
    &[aria-pressed='true'],
    &[aria-pressed='mixed'] {
      color: ${activeColor};
    }
  `;
};

const iconButtonStyles = (props: IStyledButtonProps & IStyledBaseProps) => {
  const width = getHeight(props);

  return css`
    border: ${props.$isBasic && 'none'};
    padding: 0;
    width: ${width};
    min-width: ${width};

    ${props.$isBasic &&
    !(props.$isPrimary || props.$isDanger || props.disabled) &&
    iconColorStyles(props)};

    &:disabled {
      background-color: ${!props.$isPrimary && 'transparent'};
    }
  `;
};

/**
 * 1. Ease opacity transition between embedded icons (i.e. stroke-fill).
 */
const iconStyles = (props: IButtonProps & IStyledBaseProps) => {
  const size = props.theme.iconSizes.md;

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

  ${componentStyles};
`;
