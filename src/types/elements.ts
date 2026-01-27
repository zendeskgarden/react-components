/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { ComponentPropsWithRef, HTMLAttributes } from 'react';

import { type IUseAccordionProps } from '@zendeskgarden/container-accordion';

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
