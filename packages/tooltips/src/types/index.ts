/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, ReactElement, ReactNode } from 'react';

export const PLACEMENT = [
  'auto',
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'end',
  'end-top',
  'end-bottom',
  'start',
  'start-top',
  'start-bottom'
] as const;

export const SIZE = ['small', 'medium', 'large', 'extra-large'] as const;

export const TYPE = ['light', 'dark'] as const;

export type GardenPlacement = (typeof PLACEMENT)[number];

export interface ITooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Appends the tooltip to the element provided */
  appendToNode?: Element;
  /** Adds an arrow to the tooltip */
  hasArrow?: boolean;
  /** Adds milliseconds of delay to the opening and closing of the tooltip */
  delayMS?: number;
  /** Defines the content of the tooltip */
  content: ReactNode;
  /** Adjusts the placement of the tooltip */
  placement?: GardenPlacement;
  /** Adjusts the padding and font size */
  size?: (typeof SIZE)[number];
  /** Specifies the tooltip type */
  type?: (typeof TYPE)[number];
  /** Sets the `z-index` of the tooltip */
  zIndex?: number | string;
  /** Displays the tooltip on initial render */
  isInitialVisible?: boolean;
  /** Displays the tooltip */
  isVisible?: boolean;
  /** @ignore ReactNode override */
  children: ReactElement;
  /** Defines the ref key used to position the tooltip */
  refKey?: string;
}
