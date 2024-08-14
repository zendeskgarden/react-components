/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes } from 'react';

export const SIZE = ['extraextrasmall', 'extrasmall', 'small', 'medium', 'large'] as const;

export const STATUS = ['available', 'away', 'transfers', 'offline'] as const;

export interface IAvatarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sets the avatar background color.  Accepts a [color
   * variable](/components/theme-object#colors) key (i.e.
   * `background.emphasis`) to render based on light/dark mode, or any hex
   * value.
   */
  backgroundColor?: string;
  /**
   * Sets the color for child SVG or `Avatar.Text` components. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e.
   * `foreground.onEmphasis`) to render based on light/dark mode, or any hex
   * value.
   */
  foregroundColor?: string;
  /**
   * Provides surface color for an avatar placed on a non-default background.
   * Accepts a [color variable](/components/theme-object#colors) key (i.e.
   * `background.primary`) to render based on light/dark mode, or any hex value.
   */
  surfaceColor?: string;
  /** Applies system styling for representing objects, brands, or products */
  isSystem?: boolean;
  /** Specifies the avatar size */
  size?: (typeof SIZE)[number];
  /** Applies status styling */
  status?: (typeof STATUS)[number];
  /** Specifies the status label */
  statusLabel?: string;
  /** Sets the badge text and applies active styling */
  badge?: string | number;
}

export interface IStatusIndicatorProps extends HTMLAttributes<HTMLElement> {
  /** Applies status type for styling and default aria-label */
  type?: (typeof STATUS)[number];
  /** Applies compact styling */
  isCompact?: boolean;
}
