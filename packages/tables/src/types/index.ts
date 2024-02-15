/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes
} from 'react';

export const SIZE = ['small', 'medium', 'large'] as const;

export const SORT = ['asc', 'desc'];

export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Sets the table size */
  size?: (typeof SIZE)[number];
  /** Removes interactive styling from table rows */
  isReadOnly?: boolean;
}

export interface IHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  /** Applies sticky header styling */
  isSticky?: boolean;
}

export interface IRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Applies striped styling */
  isStriped?: boolean;
  /** Applies selected styling */
  isSelected?: boolean;
  /** @ignore Applies focus styling */
  isFocused?: boolean;
  /** @ignore Applies hover styling */
  isHovered?: boolean;
}

export interface ICellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Applies minimum fixed width styling (e.g. for cells that contain
   * checkboxes or icons)
   */
  isMinimum?: boolean;
  /** Truncates long text with an ellipsis */
  isTruncated?: boolean;
  /** Applies styling for a cell that contains an overflow menu */
  hasOverflow?: boolean;
  /** Adjusts the [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) of the cell */
  width?: TdHTMLAttributes<HTMLTableCellElement>['width'];
}

export interface IHeaderCellProps
  extends Pick<ICellProps, 'isMinimum' | 'isTruncated' | 'hasOverflow' | 'width'>,
    ThHTMLAttributes<HTMLTableCellElement> {}

export interface ISortableCellProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Sets the sort order */
  sort?: (typeof SORT)[number];
  /** Sets the width of the cell */
  width?: ICellProps['width'];
  /** Passes props to the cell */
  cellProps?: any;
}
