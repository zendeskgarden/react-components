/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { ALIGN_SELF, NUMBER, ARRAY_ALIGN_SELF } from '../utils/types';
import { StyledCol } from '../styled';
import useGridContext from '../utils/useGridContext';

export interface IColProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Determine the size, relative to the total number of `columns` in the grid,
   * for all screen sizes
   */
  size?: NUMBER;
  /** Determine the size for extra-small screen sizes */
  xs?: NUMBER | boolean;
  /** Determine the size for small screen sizes */
  sm?: NUMBER | boolean;
  /** Determine the size for medium screen sizes */
  md?: NUMBER | boolean;
  /** Determine the size for large screen sizes */
  lg?: NUMBER | boolean;
  /** Determine the size for extra-large screen sizes */
  xl?: NUMBER | boolean;
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
   * Determine the offset, relative to the total number of `columns` in the
   * grid, for all screen sizes
   */
  offset?: NUMBER;
  /** Determine the offset for extra-small screen sizes */
  offsetXs?: NUMBER;
  /** Determine the offset for small screen sizes */
  offsetSm?: NUMBER;
  /** Determine the offset for medium screen sizes */
  offsetMd?: NUMBER;
  /** Determine the offset for large screen sizes */
  offsetLg?: NUMBER;
  /** Determine the offset for extra-large screen sizes */
  offsetXl?: NUMBER;
  /**
   * Determine the `order` flex item property for all screen sizes. Note that
   * order modification can introduce accessibility problems by producing
   * confusing tab ordering. Rely on semantic DOM ordering whenever possible.
   */
  order?: NUMBER;
  /** Determine the `order` flex item property for extra-small screen sizes */
  orderXs?: NUMBER;
  /** Determine the `order` flex item property for small screen sizes */
  orderSm?: NUMBER;
  /** Determine the `order` flex item property for medium screen sizes */
  orderMd?: NUMBER;
  /** Determine the `order` flex item property for large screen sizes */
  orderLg?: NUMBER;
  /** Determine the `order` flex item property for extra-large screen sizes */
  orderXl?: NUMBER;
}

/**
 * Accepts all `<div>` attributes and events
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
