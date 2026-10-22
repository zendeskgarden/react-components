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
  const color = getColor({ theme, variable: 'foreground.subtle' });
  const disabledColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    color: ${color};

    ${StyledTile}[aria-disabled='true'] && {
      color: ${disabledColor};
    }
  `;
};

const sizeStyles = ({ theme, $isCentered }: IStyledTileIconProps & IStyledBaseProps) => {
  const iconSize = math(`${theme.iconSizes.md} * 2`);
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

    & > svg {
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
