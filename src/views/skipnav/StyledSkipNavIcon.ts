/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';
import LinkIcon from 'svg-icons-legacy/src/16/link-stroke.svg';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';

const sizeStyles = ({ theme }: WithTheme) => {
  const margin = `${theme.space.base * 2}px`;
  const size = theme.iconSizes.md;

  return css`
    margin-${theme.rtl ? 'left' : 'right'}: ${margin};
    width: ${size};
    height: ${size};
  `;
};

export const StyledSkipNavIcon = styled(LinkIcon)<WithTheme>`
  transform: ${p => p.theme.rtl && 'scaleX(-1)'};
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};

  ${sizeStyles};

  ${componentStyles};
`;
