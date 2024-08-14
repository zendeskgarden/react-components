/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IUseAccordionProps } from '@zendeskgarden/container-accordion';
import {
  SVGAttributes,
  HTMLAttributes,
  LiHTMLAttributes,
  OlHTMLAttributes,
  ReactElement
} from 'react';

export interface IAccordionProps<Value = any>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Sets `aria-level` heading rank in the document structure */
  level: NonNullable<HTMLAttributes<HTMLDivElement>['aria-level']>;
  /** Sets the expanded sections in a controlled accordion */
  expandedSections?: Value[];
  /** Sets the default expanded sections in an uncontrolled accordion */
  defaultExpandedSections?: Value[];
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
   * @param {*} value A section value
   */
  onChange?: IUseAccordionProps<Value>['onChange'];
}

export interface IStepperProps extends OlHTMLAttributes<HTMLOListElement> {
  /** Defines the currently active step, starting at 0 */
  activeIndex?: number;
  /** Applies horizontal layout styling */
  isHorizontal?: boolean;
}

export interface IStepperLabelProps extends HTMLAttributes<HTMLDivElement> {
  /** Replaces the label number with an icon */
  icon?: ReactElement;
  /** Passes props to the default check icon */
  iconProps?: SVGAttributes<SVGElement>;
  /** Hides the label text */
  isHidden?: boolean;
}

export interface ITimelineProps extends OlHTMLAttributes<HTMLOListElement> {
  /** Applies alternate styling */
  isAlternate?: boolean;
}

export interface ITimelineItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Replaces the dot with an icon */
  icon?: ReactElement;
  /** Provides surface color for an icon placed on a non-default background.
   * Accepts a [color variable](/components/theme-object#colors) key (i.e.
   * `background.recessed`) to render based on light/dark mode, or any hex
   * value. */
  surfaceColor?: string;
}
