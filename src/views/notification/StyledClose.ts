/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';
import { StyledIconButton } from '../button/StyledIconButton';

/**
 * 1. IconButton reset
 */
const colorStyles = ({ theme }: WithTheme) => {
  const variable = 'foreground.subtle';
  const color = getColor({ variable, theme });
  const hoverColor = getColor({ variable, light: { offset: 100 }, dark: { offset: -100 }, theme });
  const activeColor = getColor({ variable, light: { offset: 200 }, dark: { offset: -200 }, theme });

  return css`
    color: ${color};

    &:hover {
      background-color: transparent; /* [1] */
      color: ${hoverColor};
    }

    &:active {
      background-color: transparent; /* [1] */
      color: ${activeColor};
    }
  `;
};

/**
 * Used to close a Notification. Supports all `<button>` props
 *
 * 1. Reset for <button> element.
 * 2. Remove dotted outline from Firefox on focus.
 */
export const StyledClose = styled(StyledIconButton)<WithTheme>`
  position: absolute;
  top: ${props => props.theme.space.base * 2}px;
  right: ${p => !p.theme.rtl && `${p.theme.space.base * 2}px`};
  left: ${p => p.theme.rtl && `${p.theme.space.base * 2}px`};

  ${colorStyles}

  ${componentStyles};
`;
