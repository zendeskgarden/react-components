/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import { StyledTile } from './StyledTile';

const COMPONENT_ID = 'forms.tile_icon';

interface IStyledTileIconProps {
  isCentered?: boolean;
}

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const options = { theme, variable: 'foreground.subtle' };
  const color = getColor(options);
  const hoverColor = getColor({ ...options, dark: { offset: -100 }, light: { offset: 100 } });
  const activeColor = getColor({ ...options, dark: { offset: -200 }, light: { offset: 200 } });
  const checkedColor = getColor({ theme, variable: 'foreground.onEmphasis' });
  const disabledColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    color: ${color};

    ${StyledTile}:hover && {
      color: ${hoverColor};
    }

    ${StyledTile}:active && {
      color: ${activeColor};
    }

    ${StyledTile}:has(:checked) && {
      color: ${checkedColor};
    }

    ${StyledTile}[aria-disabled='true'] && {
      color: ${disabledColor};
    }
  `;
};

const sizeStyles = ({ theme, isCentered }: IStyledTileIconProps & ThemeProps<DefaultTheme>) => {
  const iconSize = math(`${theme.iconSizes.md} * 2`);
  let position;
  let top;
  let horizontal;

  if (!isCentered) {
    position = 'absolute';
    top = `${theme.space.base * 6}px`;
    horizontal = `${theme.space.base * 5}px`;
  }

  return css`
    position: ${position};
    top: ${top};
    ${theme.rtl ? 'right' : 'left'}: ${horizontal};
    line-height: 0;

    & > * {
      width: ${iconSize};
      height: ${iconSize};
    }
  `;
};

export const StyledTileIcon = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTileIconProps>`
  display: block;
  transition: color 0.25s ease-in-out;
  text-align: center;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTileIcon.defaultProps = {
  theme: DEFAULT_THEME
};
