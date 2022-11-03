/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react';
export const ALIGN_ITEMS = ['start', 'end', 'center', 'baseline', 'stretch'] as const;
export const ALIGN_SELF = ['auto', ...ALIGN_ITEMS] as const;
export const DIRECTION = ['row', 'row-reverse', 'column', 'column-reverse'] as const;
export const JUSTIFY_CONTENT = ['start', 'end', 'center', 'between', 'around'] as const;
export const TEXT_ALIGN = ['start', 'end', 'center', 'justify'] as const;
export const SPACE = [false, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export const WRAP = ['nowrap', 'wrap', 'wrap-reverse'] as const;
export const PLACEMENT = ['end', 'start', 'center'] as const;

export type AlignItems = typeof ALIGN_ITEMS[number];
export type AlignSelf = typeof ALIGN_SELF[number];
export type Direction = typeof DIRECTION[number];
export type JustifyContent = typeof JUSTIFY_CONTENT[number];
export type TextAlign = typeof TEXT_ALIGN[number];
export type GridNumber = number | string;
export type Breakpoint = number | string | boolean;
export type Space = typeof SPACE[number];
export type Wrap = typeof WRAP[number];

export interface IColProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the total number of grid `columns` that the column spans on all screen sizes */
  size?: number | string;
  /** Defines the column size on extra-small screens.
   *  See [breakpoints](/components/theme-object#default_theme).
   */
  xs?: number | string | boolean;
  /** Defines the column size on small screens*/
  sm?: number | string | boolean;
  /** Defines the column size on medium screens */
  md?: number | string | boolean;
  /** Defines the column size on large screens */
  lg?: number | string | boolean;
  /** Defines the column size on extra-large screens */
  xl?: number | string | boolean;
  /**
   * Applies the `align-self` flex item property, overriding `Row alignItems`
   * vertical alignment on all screen sizes
   */
  alignSelf?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on extra-small screens */
  alignSelfXs?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on small screens */
  alignSelfSm?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on medium screens */
  alignSelfMd?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on large screens */
  alignSelfLg?: AlignSelf;
  /** Applies the `align-self` flex item property to the column on extra-large screens */
  alignSelfXl?: AlignSelf;
  /**
   * Applies the RTL-aware `text-align` property to the column on all screen sizes
   */
  textAlign?: TextAlign;
  /** Applies the `text-align` property to the column on extra-small screens */
  textAlignXs?: TextAlign;
  /** Applies the `text-align` property to the column on small screens */
  textAlignSm?: TextAlign;
  /** Applies the `text-align` property to the column on medium screens */
  textAlignMd?: TextAlign;
  /** Applies the `text-align` property to the column on large screens */
  textAlignLg?: TextAlign;
  /** Applies the `text-align` property to the column on extra-large screens */
  textAlignXl?: TextAlign;
  /**
   * Offsets the column relative to the total number of `columns` in the
   * grid on all screen sizes
   */
  offset?: number | string;
  /** Applies offset to the column on extra-small screens */
  offsetXs?: number | string;
  /** Applies offset to the column on small screens */
  offsetSm?: number | string;
  /** Applies offset to the column on medium screens */
  offsetMd?: number | string;
  /** Applies offset to the column on large screens */
  offsetLg?: number | string;
  /** Applies offset to the column on extra-large screens */
  offsetXl?: number | string;
  /**
   * Applies the `order` flex item property to the column on all screen sizes. Note that
   * order modification can introduce accessibility problems by
   * confusing tab ordering. Rely on semantic DOM ordering whenever possible.
   */
  order?: number | string;
  /** Sets the `order` flex item property of the column on extra-small screens */
  orderXs?: number | string;
  /** Sets the `order` flex item property of the column on small screens */
  orderSm?: number | string;
  /** Sets the `order` flex item property of the column on medium screens */
  orderMd?: number | string;
  /** Sets the `order` flex item property of the column on large screens */
  orderLg?: number | string;
  /** Sets the `order` flex item property of the column on extra-large screens */
  orderXl?: number | string;
}

export interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Defines the number of individual columns that the grid contains */
  columns?: number | string;
  /** Specifies the grid column gutter width. The value `false` collapses the gutters */
  gutters?: Space;
  /** Highlights the columns for layout debugging */
  debug?: boolean;
}

export interface IRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies the `align-items` flex container property to the row.
   * This affects vertical `Col` alignment on all screen sizes.
   */
  alignItems?: AlignItems;
  /** Applies the `align-items` flex container property to the row on extra-small screens */
  alignItemsXs?: AlignItems;
  /** Applies the `align-items` flex container property to the row on small screens */
  alignItemsSm?: AlignItems;
  /** Applies the `align-items` flex container property to the row on medium screens */
  alignItemsMd?: AlignItems;
  /** Applies the `align-items` flex container property to the row on large screens */
  alignItemsLg?: AlignItems;
  /** Applies the `align-items` flex container property to the row on extra-large screens */
  alignItemsXl?: AlignItems;
  /**
   * Applies the `justify-content` flex container property to the row.
   * This affects horizontal `Col` alignment on all screen sizes.
   */
  justifyContent?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on extra-small screens */
  justifyContentXs?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on small screens */
  justifyContentSm?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on medium screens */
  justifyContentMd?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on large screens */
  justifyContentLg?: JustifyContent;
  /** Applies the `justify-content` flex container property to the row on extra-large screens */
  justifyContentXl?: JustifyContent;
  /**
   * Applies the `flex-wrap` container property to the row. This affects `Col` wrapping on
   * all screen sizes.
   */
  wrap?: Wrap;
  /** Applies the `flex-wrap` container property to the row on extra-small screens */
  wrapXs?: Wrap;
  /** Applies the `flex-wrap` container property to the row on small screens */
  wrapSm?: Wrap;
  /** Applies the `flex-wrap` container property to the row on medium screens */
  wrapMd?: Wrap;
  /** Applies the `flex-wrap` container property to the row on large screens */
  wrapLg?: Wrap;
  /** Applies the `flex-wrap` container property to the row on extra-large screens */
  wrapXl?: Wrap;
}

export const ORIENTATION = ['top', 'bottom', 'start', 'end'] as const;
export type Orientation = typeof ORIENTATION[number];

export interface IPaneProviderProps {
  /** Identifies the pane provider */
  id?: string;
  /** Provides the total width, in `px` units, of all panes in the layout */
  totalPanesWidth: number;
  /** Provides the total height, in `px` units, of all panes in the layout */
  totalPanesHeight: number;
  /** Defines default row values, in `fr` units, for an uncontrolled layout. The values are keyed by splitter. */
  defaultRowValues?: Record<string, number>;
  /** Defines default column values, in `fr` units, for an uncontrolled layout. The values are keyed by splitter. */
  defaultColumnValues?: Record<string, number>;
  /** Defines row values, in `fr` units, for a controlled layout. The values are keyed by splitter. */
  rowValues?: Record<string, number>;
  /** Defines column values, in `fr` units, for a controlled layout. The values are keyed by splitter. */
  columnValues?: Record<string, number>;
  /**
   * Handles splitter position changes
   *
   * @param rowValues The updated row values
   * @param columnValues The updated column values
   */
  onChange?: (rowValues: Record<string, number>, columnValues: Record<string, number>) => void;
  /**
   * Surfaces render props for applying splitter state to the supporting layout
   *
   * @param id Provides the `id` prop, if specified; otherwise, a generated ID.
   * @param getColumnValue Gets column value by key
   * @param getRowValue Gets row value by key
   * @param getGridTemplateRows Gets grid template rows track
   * @param getGridTemplateColumns Gets grid template columns track
   */
  children?: ({
    id,
    getColumnValue,
    getRowValue,
    getGridTemplateRows,
    getGridTemplateColumns
  }: {
    id: string;
    getColumnValue: (splitterKey: string, isPixels?: boolean) => number;
    getRowValue: (splitterKey: string, isPixels?: boolean) => number;
    getGridTemplateRows: (isPixels?: boolean) => string;
    getGridTemplateColumns: (isPixels?: boolean) => string;
  }) => ReactNode;
}

export interface ISplitterProps extends HTMLAttributes<HTMLDivElement> {
  /** Identifies the associated `PaneProvider`. Assumes the closest parent provider, by default. */
  providerId?: string;
  /** Specifies the splitter key */
  layoutKey: string;
  /** Sets a minimum, in `fr` units, for splitter position */
  min: number;
  /** Sets a maximum, in `fr` units, for splitter position */
  max: number;
  /** Determines splitter orientation within a pane */
  orientation?: Orientation;
  /** Determines if the splitter only toggles between `min` and `max` */
  isFixed?: boolean;
}

export interface ISplitterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Adjusts the placement of the splitter button. Assumes start when vertical and center when horizontal, by default. */
  placement?: typeof PLACEMENT[number];
  /** Renders the provided label text inside a tooltip */
  label: string;
}
