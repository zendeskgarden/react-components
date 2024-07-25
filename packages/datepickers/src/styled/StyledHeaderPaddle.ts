/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

interface IStyledHeaderPaddleProps {
  $isCompact: boolean;
  'aria-hidden'?: boolean;
}

const sizeStyles = ({ $isCompact, theme }: { $isCompact?: boolean } & ThemeProps<DefaultTheme>) => {
  const iconSize = theme.iconSizes.md;
  const size = theme.space.base * ($isCompact ? 8 : 10);

  return css`
    width: ${size}px;
    height: ${size}px;

    svg {
      width: ${iconSize};
      height: ${iconSize};
    }
  `;
};

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const foreground = getColor({ variable: 'foreground.subtle', theme });
  const foregroundHover = getColor({
    variable: 'foreground.subtle',
    light: { offset: 100 },
    dark: { offset: -100 },
    theme
  });
  const backgroundHover = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[100]
  });
  const foregroundActive = getColor({
    variable: 'foreground.subtle',
    light: { offset: 200 },
    dark: { offset: -200 },
    theme
  });
  const backgroundActive = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[200]
  });

  return css`
    color: ${foreground};

    :hover {
      background-color: ${backgroundHover};
      color: ${foregroundHover};
    }

    :active {
      background-color: ${backgroundActive};
      color: ${foregroundActive};
    }
  `;
};

const COMPONENT_ID = 'datepickers.header_paddle';

export const StyledHeaderPaddle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderPaddleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
  border-radius: 50%;
  cursor: pointer;

  &[aria-hidden] {
    visibility: hidden;
  }

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderPaddle.defaultProps = {
  theme: DEFAULT_THEME
};
