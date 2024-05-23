/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes } from 'react';

export const SIZE = ['small', 'medium', 'large'] as const;

export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  /** Adjusts font size and padding */
  size?: (typeof SIZE)[number];
  /**
   * Sets the color of the tag. Refer to
   * theming [colors](components/theme-object#colors)
   * or [PALETTE](/components/palette#palette)
   * for available colors. Accepts any hex value.
   */
  hue?: string;
  /** Applies pill styling */
  isPill?: boolean;
  /** Applies styles to round the tag */
  isRound?: boolean;
  /** Applies regular (non-bold) font weight */
  isRegular?: boolean;
}
