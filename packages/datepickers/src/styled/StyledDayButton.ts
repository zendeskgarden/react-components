/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { ToggleButton } from '@zendeskgarden/react-buttons';

interface IStyledDayButtonProps {
  $isPreviousMonth?: boolean;
  $isCompact: boolean;
}

const sizeStyles = ({ $isCompact, theme }: IStyledDayButtonProps & ThemeProps<DefaultTheme>) => {
  const size = theme.space.base * ($isCompact ? 8 : 10);

  return css`
    margin: 0;
    border-radius: 50%;
    padding: 0;
    width: ${size}px;
    height: ${size}px;
  `;
};

const colorStyles = ({
  $isPreviousMonth,
  theme
}: IStyledDayButtonProps & ThemeProps<DefaultTheme>) => {
  if (!$isPreviousMonth) {
    return undefined;
  }

  const foreground = getColor({ variable: 'foreground.subtle', theme });

  return css`
    && {
      color: ${foreground};
    }
  `;
};

const hoverStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const emphasis = getColor({ variable: 'background.primaryEmphasis', theme });
  const background = getColor({ variable: 'background.default', theme });

  return css`
    &&[aria-pressed='false']:not([aria-disabled='true']):hover {
      background-color: color-mix(in srgb, ${emphasis} 16%, ${background});
    }
  `;
};

const disabledStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const foreground = getColor({ variable: 'foreground.disabled', theme });

  return css`
    &&[aria-disabled='true'] {
      cursor: default;
      color: ${foreground};
    }
  `;
};

export const StyledDayButton = styled(ToggleButton)<IStyledDayButtonProps>`
  transition: none;
  font-size: ${props => (props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md)};

  &[aria-current='date'] {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  ${sizeStyles}
  ${colorStyles}
  ${hoverStyles}
  ${disabledStyles}

  ${componentStyles};
`;
