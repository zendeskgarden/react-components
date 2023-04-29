/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css } from 'styled-components';
import { IGardenTheme } from '../types';
import DEFAULT_THEME from '../elements/theme';
import getColor, { DEFAULT_SHADE, Hue } from './getColor';

type FocusStyles = {
  focusInset?: boolean;
  hue?: Hue;
  shade?: number;
  shadowWidth?: 'sm' | 'md';
  spacerWidth?: 'xs' | 'sm';
  theme?: IGardenTheme;
};

export const focusStyles = ({
  focusInset = false,
  hue = 'primaryHue',
  shade = DEFAULT_SHADE,
  shadowWidth = 'md',
  spacerWidth = 'xs',
  theme = DEFAULT_THEME
}: FocusStyles) => {
  const color = getColor(hue, shade, theme);
  const boxShadow = `
    ${focusInset ? 'inset' : ''} ${theme.shadows[spacerWidth](theme.colors.background)},
    ${focusInset ? 'inset' : ''} ${theme.shadows[shadowWidth](color!)}`;

  return css`
    box-shadow: ${boxShadow};
  `;
};
