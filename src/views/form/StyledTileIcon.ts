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
import { StyledTile } from './StyledTile';

interface IStyledTileIconProps {
  $isCentered?: boolean;
}

const colorStyles = ({ theme }: IStyledBaseProps) => {
  const options = { theme, variable: 'foreground.subtle' };
  const color = getColor(options);
  const hoverColor = getColor({ ...options, dark: { offset: -100 }, light: { offset: 100 } });
  const activeColor = getColor({ ...options, dark: { offset: -200 }, light: { offset: 200 } });
  const disabledColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    color: ${color};

    ${StyledTile}:hover && {
      color: ${hoverColor};
    }

    ${StyledTile}:active && {
      color: ${activeColor};
    }

    ${StyledTile}[aria-disabled='true'] && {
      color: ${disabledColor};
    }
  `;
};

const sizeStyles = ({ theme, $isCentered }: IStyledTileIconProps & IStyledBaseProps) => {
  const iconSize = $isCentered ? math(`${theme.iconSizes.md} * 2`) : `${theme.space.base * 7}px`;
  let layout;

  if (!$isCentered) {
    /* The icon fills the first grid column and spans the label and description rows. */
    layout = css`
      grid-row: 1 / span 2;
      grid-column: 1;
      margin-${theme.rtl ? 'left' : 'right'}: ${theme.space.md};
    `;
  }

  return css`
    ${layout};
    line-height: 0;

    & > * {
      width: ${iconSize};
      height: ${iconSize};
    }
  `;
};

export const StyledTileIcon = styled.span<IStyledTileIconProps>`
  display: block;
  transition: color 0.25s ease-in-out;
  text-align: center;

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
