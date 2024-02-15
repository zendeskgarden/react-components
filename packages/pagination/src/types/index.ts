/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes } from 'react';

export const PAGE_TYPE = ['next', 'page', 'gap', 'previous'] as const;

export type PageType = (typeof PAGE_TYPE)[number];

export interface IPaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Sets the current page. Pages start at 1.
   */
  currentPage: number;
  /**
   * Defines the total number of pages
   */
  totalPages: number;
  /**
   * Sets the number of pages that appear between the current page and a gap indicator
   */
  pagePadding?: number;
  /**
   * Positions the leading and trailing gap indicator, based on
   * the current and total pages
   */
  pageGap?: number;
  /**
   * Handles page change events
   *
   * @param {number} currentPage The current page
   */
  onChange?: (currentPage: number) => void;
  /**
   * Provides localized labels to pagination elements.
   */
  labels?: Record<Exclude<PageType, 'page'>, string> & { renderPage: (p: number) => string };
}
