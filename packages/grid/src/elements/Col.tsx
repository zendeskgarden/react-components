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
  /**
   * Determine the size, relative to the total number of `columns` in the grid,
   * for all screen sizes
   */
  size?: GRID_NUMBER;
  /** Determine the size for extra-small screen sizes */
  xs?: BREAKPOINT;
  /** Determine the size for small screen sizes */
  sm?: BREAKPOINT;
  /** Determine the size for medium screen sizes */
  md?: BREAKPOINT;
  /** Determine the size for large screen sizes */
  lg?: BREAKPOINT;
  /** Determine the size for extra-large screen sizes */
  xl?: BREAKPOINT;
  /**
   * Applies the `align-self` flex item property, overriding `Row alignItems`
   * vertical alignment, for all screen sizes
   */
  alignSelf?: ALIGN_SELF;
  /** Applies the `align-self` flex item property for extra-small screen sizes */
  alignSelfXs?: ALIGN_SELF;
  /** Applies the `align-self` flex item property for small screen sizes */
  alignSelfSm?: ALIGN_SELF;
  /** Applies the `align-self` flex item property for medium screen sizes */
  alignSelfMd?: ALIGN_SELF;
  /** Applies the `align-self` flex item property for large screen sizes */
  alignSelfLg?: ALIGN_SELF;
  /** Applies the `align-self` flex item property for extra-large screen sizes */
  alignSelfXl?: ALIGN_SELF;
  /**
   * Applies the RTL-aware `text-align` property for all screen sizes
   */
  textAlign?: TEXT_ALIGN;
  /** Determine the text alignment for extra-small screen sizes */
  textAlignXs?: TEXT_ALIGN;
  /** Determine the text alignment for small screen sizes */
  textAlignSm?: TEXT_ALIGN;
  /** Determine the text alignment for medium screen sizes */
  textAlignMd?: TEXT_ALIGN;
  /** Determine the text alignment for large screen sizes */
  textAlignLg?: TEXT_ALIGN;
  /** Determine the text alignment for extra-large screen sizes */
  textAlignXl?: TEXT_ALIGN;
  /**
   * Determine the offset, relative to the total number of `columns` in the
   * grid, for all screen sizes
   */
  offset?: GRID_NUMBER;
  /** Determine the offset for extra-small screen sizes */
  offsetXs?: GRID_NUMBER;
  /** Determine the offset for small screen sizes */
  offsetSm?: GRID_NUMBER;
  /** Determine the offset for medium screen sizes */
  offsetMd?: GRID_NUMBER;
  /** Determine the offset for large screen sizes */
  offsetLg?: GRID_NUMBER;
  /** Determine the offset for extra-large screen sizes */
  offsetXl?: GRID_NUMBER;
  /**
   * Determine the `order` flex item property for all screen sizes. Note that
   * order modification can introduce accessibility problems by producing
   * confusing tab ordering. Rely on semantic DOM ordering whenever possible.
   */
  order?: GRID_NUMBER;
  /** Determine the `order` flex item property for extra-small screen sizes */
  orderXs?: GRID_NUMBER;
  /** Determine the `order` flex item property for small screen sizes */
  orderSm?: GRID_NUMBER;
  /** Determine the `order` flex item property for medium screen sizes */
  orderMd?: GRID_NUMBER;
  /** Determine the `order` flex item property for large screen sizes */
  orderLg?: GRID_NUMBER;
  /** Determine the `order` flex item property for extra-large screen sizes */
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
