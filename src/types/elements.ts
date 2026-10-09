/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { IUseAccordionProps } from '@zendeskgarden/container-accordion';
import type { ComponentPropsWithRef, HTMLAttributes } from 'react';
//#region loader
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { HTMLAttributes, SVGAttributes } from 'react';

export const LOADER_SIZE = ['small', 'medium', 'large'] as const;
export type LoaderSize = (typeof SIZE)[number];
export interface IDotsProps extends SVGAttributes<SVGSVGElement> {
  /** Sets the height and width in pixels. Inherits the parent's font size by default. */
  size?: string | number;
  /**
   * Sets the fill color. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e. `foreground.primary`)
   * to render based on light/dark mode, or any hex value. Inherits the parent's
   * `color` by default.
   */
  color?: string;
  /** Sets the length of the animation cycle in milliseconds **/
  duration?: number;
  /** Delays displaying the loader to prevent a render flash during normal loading times **/
  delayMS?: number;
}
export interface IInlineProps extends SVGAttributes<SVGSVGElement> {
  /** Sets the width in pixels and scales the loader proportionally */
  size?: number;
  /**
   * Sets the fill color. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e. `foreground.primary`)
   * to render based on light/dark mode, or any hex value. Inherits the parent's
   * `color` by default.
   */
  color?: string;
}
export interface IProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the progress as a value between 0 and 100 */
  value?: number;
  /**
   * Sets the foreground bar's fill color. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e.
   * `border.primaryEmphasis`) to render based on light/dark mode, or any hex
   * value.  Defaults to the `border.successEmphasis`
   * [theme](/components/theme-object#variables) value.
   */
  color?: string;
  /** Adjusts the height */
  size?: Size;
}
export interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the width as a percentage of the the parent element's width */
  width?: string;
  /** Sets the height as a percentage of parent element's height if the height is not already inherited by `line-height` */
  height?: string;
  /** Inverts the color for use on dark backgrounds */
  isLight?: boolean;
}
export interface ISpinnerProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Sets the height and width in pixels. Inherits the parent's font size by default.
   **/
  size?: string;
  /**
   * Sets the length of the animation cycle in milliseconds
   **/
  duration?: number;
  /**
   * Sets the fill color. Accepts a [color
   * variable](/components/theme-object#colors) key (i.e. `foreground.primary`)
   * to render based on light/dark mode, or any hex value. Inherits the parent's
   * `color` by default.
   */
  color?: string;
  /**
   * Delays displaying the loader to prevent a render flash during normal loading times
   **/
  delayMS?: number;
}
//#endregion

export interface IAccordionProps<SectionValue = any> extends Omit<
  ComponentPropsWithRef<'div'>,
  'onChange'
> {
  /** Sets `aria-level` heading rank in the document structure */
  level: NonNullable<HTMLAttributes<HTMLDivElement>['aria-level']>;
  /** Sets the expanded sections in a controlled accordion */
  expandedSections?: SectionValue[];
  /** Sets the default expanded sections in an uncontrolled accordion */
  defaultExpandedSections?: SectionValue[];
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
  onChange?: IUseAccordionProps<SectionValue>['onChange'];
}
