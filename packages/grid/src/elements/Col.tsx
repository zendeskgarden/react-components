/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import {
  ALIGN_SELF,
  ARRAY_ALIGN_SELF,
  GRID_NUMBER,
  BREAKPOINT,
  TEXT_ALIGN,
  ARRAY_TEXT_ALIGN
} from '../utils/types';
import { StyledCol } from '../styled';
import useGridContext from '../utils/useGridContext';

export interface IColProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the total number of grid `columns` that the column spans on all screen sizes */
  size?: GRID_NUMBER;
  /** Defines the column size on extra-small screens.
   *  See [breakpoints](/components/theme-object#default_theme).
   */
  xs?: BREAKPOINT;
  /** Defines the column size on small screens*/
  sm?: BREAKPOINT;
  /** Defines the column size on medium screens */
  md?: BREAKPOINT;
  /** Defines the column size on large screens */
  lg?: BREAKPOINT;
  /** Defines the column size on extra-large screens */
  xl?: BREAKPOINT;
  /**
   * Applies the `align-self` flex item property, overriding `Row alignItems`
   * vertical alignment on all screen sizes
   */
  alignSelf?: ALIGN_SELF;
  /** Applies the `align-self` flex item property to the column on extra-small screens */
  alignSelfXs?: ALIGN_SELF;
  /** Applies the `align-self` flex item property to the column on small screens */
  alignSelfSm?: ALIGN_SELF;
  /** Applies the `align-self` flex item property to the column on medium screens */
  alignSelfMd?: ALIGN_SELF;
  /** Applies the `align-self` flex item property to the column on large screens */
  alignSelfLg?: ALIGN_SELF;
  /** Applies the `align-self` flex item property to the column on extra-large screens */
  alignSelfXl?: ALIGN_SELF;
  /**
   * Applies the RTL-aware `text-align` property to the column on all screen sizes
   */
  textAlign?: TEXT_ALIGN;
  /** Applies the `text-align` property to the column on extra-small screens */
  textAlignXs?: TEXT_ALIGN;
  /** Applies the `text-align` property to the column on small screens */
  textAlignSm?: TEXT_ALIGN;
  /** Applies the `text-align` property to the column on medium screens */
  textAlignMd?: TEXT_ALIGN;
  /** Applies the `text-align` property to the column on large screens */
  textAlignLg?: TEXT_ALIGN;
  /** Applies the `text-align` property to the column on extra-large screens */
  textAlignXl?: TEXT_ALIGN;
  /**
   * Offsets the column relative to the total number of `columns` in the
   * grid on all screen sizes
   */
  offset?: GRID_NUMBER;
  /** Applies offset to the column on extra-small screens */
  offsetXs?: GRID_NUMBER;
  /** Applies offset to the column on small screens */
  offsetSm?: GRID_NUMBER;
  /** Applies offset to the column on medium screens */
  offsetMd?: GRID_NUMBER;
  /** Applies offset to the column on large screens */
  offsetLg?: GRID_NUMBER;
  /** Applies offset to the column on extra-large screens */
  offsetXl?: GRID_NUMBER;
  /**
   * Applies the `order` flex item property to the column on all screen sizes. Note that
   * order modification can introduce accessibility problems by
   * confusing tab ordering. Rely on semantic DOM ordering whenever possible.
   */
  order?: GRID_NUMBER;
  /** Sets the `order` flex item property of the column on extra-small screens */
  orderXs?: GRID_NUMBER;
  /** Sets the `order` flex item property of the column on small screens */
  orderSm?: GRID_NUMBER;
  /** Sets the `order` flex item property of the column on medium screens */
  orderMd?: GRID_NUMBER;
  /** Sets the `order` flex item property of the column on large screens */
  orderLg?: GRID_NUMBER;
  /** Sets the `order` flex item property of the column on extra-large screens */
  orderXl?: GRID_NUMBER;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Col = React.forwardRef<HTMLDivElement, IColProps>(({ size, ...props }, ref) => {
  const { columns, gutters, debug } = useGridContext();

  return (
    <StyledCol
      sizeAll={size}
      columns={columns}
      gutters={gutters}
      debug={debug}
      ref={ref}
      {...props}
    />
  );
});

Col.displayName = 'Col';

Col.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  alignSelf: PropTypes.oneOf(ARRAY_ALIGN_SELF),
  alignSelfXs: PropTypes.oneOf(ARRAY_ALIGN_SELF),
  alignSelfSm: PropTypes.oneOf(ARRAY_ALIGN_SELF),
  alignSelfMd: PropTypes.oneOf(ARRAY_ALIGN_SELF),
  alignSelfLg: PropTypes.oneOf(ARRAY_ALIGN_SELF),
  alignSelfXl: PropTypes.oneOf(ARRAY_ALIGN_SELF),
  textAlign: PropTypes.oneOf(ARRAY_TEXT_ALIGN),
  textAlignXs: PropTypes.oneOf(ARRAY_TEXT_ALIGN),
  textAlignSm: PropTypes.oneOf(ARRAY_TEXT_ALIGN),
  textAlignMd: PropTypes.oneOf(ARRAY_TEXT_ALIGN),
  textAlignLg: PropTypes.oneOf(ARRAY_TEXT_ALIGN),
  textAlignXl: PropTypes.oneOf(ARRAY_TEXT_ALIGN),
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetXs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetSm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetMd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetLg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetXl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  orderXs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  orderSm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  orderMd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  orderLg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  orderXl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
