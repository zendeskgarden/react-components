/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getLineHeight, componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

const COMPONENT_ID = 'accordions.step_icon';

interface IStyledIcon {
  $isActive?: boolean;
  $isHorizontal?: boolean;
}

export const StyledIconFlexContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  width: 100%;
`;

const sizeStyles = (props: IStyledIcon & ThemeProps<DefaultTheme>) => {
  const size = `${props.theme.space.base * 6}px`;
  const fontSize = props.theme.fontSizes.sm;

  return css`
    margin-bottom: ${props.$isHorizontal && `${props.theme.space.base * 2}px`};
    margin-${props.theme.rtl ? 'left' : 'right'}: ${
      !props.$isHorizontal && `${props.theme.space.base * 3}px`
    };
    width: ${size};
    min-width: ${size};
    height: ${size};
    min-height: ${size};
    line-height: ${getLineHeight(size, fontSize)};
    font-size: ${fontSize};
  `;
};

const colorStyles = ({ $isActive, theme }: IStyledIcon & ThemeProps<DefaultTheme>) => {
  const foregroundColor = getColor({
    theme,
    variable: $isActive ? 'foreground.onEmphasis' : 'foreground.default'
  });

  const backgroundColor = $isActive
    ? getColor({ theme, variable: 'background.emphasis', dark: { offset: -300 } })
    : getColor({
        theme,
        variable: 'background.subtle',
        dark: { offset: -200 },
        light: { offset: 100 }
      });

  return css`
    background: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export const StyledIcon = styled.div.attrs<IStyledIcon>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledIcon>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.25s ease-in-out,
    color 0.25s ease-in-out;
  border-radius: 100%;
  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;
