/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const sizeStyles = ({ $isCompact, theme }: { $isCompact?: boolean } & ThemeProps<DefaultTheme>) => {
  let size = theme.space.base * 10;

  if ($isCompact) {
    size = theme.space.base * 8;
  }

  return css`
    width: ${size}px;
    height: ${size}px;

    svg {
      width: ${props => `${props.theme.iconSizes.md}`};
      height: ${props => `${props.theme.iconSizes.md}`};
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
  'data-garden-id': COMPONENT_ID
})<{
  $isCompact: boolean;
  $isHidden?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
  visibility: ${props => props.$isHidden && 'hidden'};
  border-radius: 50%;
  cursor: pointer;

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderPaddle.defaultProps = {
  theme: DEFAULT_THEME
};
