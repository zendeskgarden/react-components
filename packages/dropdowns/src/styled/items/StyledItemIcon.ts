/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getItemPaddingHorizontal, getItemPaddingVertical } from './StyledItem';

interface IStyledItemIconProps {
  isCompact?: boolean;
  isVisible?: boolean;
}

const getSizeStyles = (props: IStyledItemIconProps & ThemeProps<DefaultTheme>) => {
  return css`
    width: ${getItemPaddingHorizontal(props)};
    height: calc(${props.theme.lineHeights.md} + ${math(`${getItemPaddingVertical(props)} * 2`)});
  `;
};

const getIconSizeStyles = (props: IStyledItemIconProps & ThemeProps<DefaultTheme>) => {
  let size = `${props.theme.space.base * 4}px`;

  if (props.isCompact) {
    size = `${props.theme.space.base * 3}px`;
  }

  return css`
    width: ${size};
    height: ${size};
  `;
};

export const StyledItemIcon = styled.div<IStyledItemIconProps>`
  display: flex;
  position: absolute;
  top: 0;
  ${props => (props.theme.rtl ? 'right' : 'left')}: 0;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s ease-in-out;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  color: ${props => getColor('primaryHue', 600, props.theme)};

  ${props => getSizeStyles(props)};

  & > * {
    ${props => getIconSizeStyles(props)};
  }
`;

StyledItemIcon.defaultProps = {
  theme: DEFAULT_THEME
};
