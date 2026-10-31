/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import CheckCircleFillIcon from '@zendeskgarden/svg-icons/src/check-circle-fill.svg';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';
import { StyledTile } from './StyledTile';

const colorStyles = ({ theme }: WithTheme) => {
  const color = getColor({ theme, variable: 'foreground.default' });
  const disabledColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    color: ${color};

    ${StyledTile}[aria-disabled='true'] && {
      color: ${disabledColor};
    }
  `;
};

const sizeStyles = ({ theme }: WithTheme) => {
  const inset = `${theme.space.xs}`;
  const size = `${theme.space.md}`;

  return css`
    top: ${inset};
    ${theme.rtl ? 'left' : 'right'}: ${inset};
    width: ${size};
    height: ${size};
  `;
};

export const StyledTileCheck = styled(CheckCircleFillIcon)<WithTheme>`
  position: absolute;
  transition: opacity 0.25s ease-in-out;
  opacity: 0;
  pointer-events: none;

  ${sizeStyles};

  ${colorStyles};

  ${StyledTile}:has(:checked) && {
    opacity: 1;
  }

  ${componentStyles};
`;
