/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor } from '@zendeskgarden/react-theming';
import { rgba } from 'polished';
import { IStyledDropzoneProps } from '../styled/dropzone/StyledDropzone';

export const PRIMARY_HUE = 'primaryHue';
export const DANGER_HUE = 'dangerHue';
export const NEUTRAL_HUE = 'neutralHue';

/**
 * 1. Remove 1px padding, add 1px to border to prevent layout shifting from hover.
 */

/**
 * Generates a palette including default, hover, and active states for Dropzone.
 *
 * The system uses a base hue with predefined shades:
 *
 * States:
 * - Default: border: hue-600 / background: transparent / color: hue-600
 * - Active: border: hue-600 / background: hue-600 (alpha: 8%) / color: hue-600
 * - Hover: border: hue-700 / background: hue-600 (alpha: 8%) / color: hue-800
 *
 * If `primaryHue` is used, `color` and `border-color` are neutral-600.
 */
export function dropzoneStateStyles(
  baseHue: 'primaryHue' | 'dangerHue',
  props: IStyledDropzoneProps
) {
  const { theme, isHovered, isActive } = props;
  const widthOffset = 1;

  const neutralColor = getColor(NEUTRAL_HUE, 600, theme);
  const baseColor = getColor(baseHue, 600, theme);
  const backgroundColor = rgba(baseColor as string, 0.08);
  const hoverBorderColor = getColor(baseHue, 700, theme);
  const hoverColor = getColor(baseHue, 800, theme);

  if (isHovered) {
    return {
      padding: `${theme.space.base * 3 - widthOffset}px` /* [1] */,
      borderWidth: `2px` /* [1] */,
      borderColor: hoverBorderColor,
      borderStyle: 'solid',
      backgroundColor,
      color: hoverColor
    };
  }

  if (isActive) {
    return {
      borderColor: baseColor,
      backgroundColor,
      color: baseColor
    };
  }

  const defaultStyles: Record<string, any> = {
    backgroundColor: 'transparent'
  };

  if (baseHue === 'primaryHue') {
    defaultStyles.borderColor = neutralColor;
    defaultStyles.color = neutralColor;
  } else {
    defaultStyles.borderColor = baseColor;
    defaultStyles.color = baseColor;
  }

  return defaultStyles;
}
