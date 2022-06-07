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
  /** Sets the avatar background color */
  backgroundColor?: string;
  /** Sets the color for child SVG or `Avatar.Text` components */
  foregroundColor?: string;
  /** Provides surface color for an avatar placed on a non-white background */
  surfaceColor?: string;
  /** Applies system styling for representing objects, brands, or products */
  isSystem?: boolean;
  /** Specifies the avatar size */
  size?: typeof SIZE[number];
  /** Applies status styling */
  status?: typeof STATUS[number];
  /** Sets the badge and applies active styling if it is a string or number */
  badge?: string | number;
}
