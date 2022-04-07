/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, LiHTMLAttributes, OlHTMLAttributes, ReactNode } from 'react';

export interface IAccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Sets `aria-level` heading rank in the document structure */
  level: number;
  /** Sets the expanded sections in a controlled accordion */
  expandedSections?: number[];
  /** Sets the default expanded sections in an uncontrolled accordion */
  defaultExpandedSections?: number[];
  /** Hides section borders */
  isBare?: boolean;
  /** Allows uncontrolled accordion sections to collapse */
  isCollapsible?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Animates section expansion and collapse */
  isAnimated?: boolean;
  /** Enables simultaneous expansion of uncontrolled accordion sections */
  isExpandable?: boolean;
  /**
   * Handles accordion expansion changes
   *
   * @param {number} index A section index
   */
  onChange?: (index: number) => void;
}

export interface IStepperProps extends OlHTMLAttributes<HTMLOListElement> {
  /** Defines the currently active step, starting at 0 */
  activeIndex?: number;
  /** Applies horizontal layout styling */
  isHorizontal?: boolean;
}

export interface IStepperLabelProps extends HTMLAttributes<HTMLDivElement> {
  /** Replaces the label number with an icon */
  icon?: React.ReactNode;
  /** Hides the label text */
  isHidden?: boolean;
}

export interface ITimelineProps extends OlHTMLAttributes<HTMLOListElement> {
  /** Applies alternate styling */
  isAlternate?: boolean;
}

export interface ITimelineItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Replaces the dot with an icon */
  icon?: ReactNode;
  /** Provides surface color for an icon placed on a non-white background */
  surfaceColor?: string;
}
