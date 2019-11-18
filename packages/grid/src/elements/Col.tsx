/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { TYPE_ALIGN_SELF, TYPE_NUMBER, ARRAY_ALIGN_SELF } from '../utils/types';
import { StyledCol } from '../styled';
import useGridContext from '../utils/useGridContext';

export interface IColProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Determine the size, relative to the total number of `columns` in the grid,
   * for all screen sizes
   */
  size?: TYPE_NUMBER;
  /** Determine the size for extra-small screen sizes */
  xs?: TYPE_NUMBER | boolean;
  /** Determine the size for small screen sizes */
  sm?: TYPE_NUMBER | boolean;
  /** Determine the size for medium screen sizes */
  md?: TYPE_NUMBER | boolean;
  /** Determine the size for large screen sizes */
  lg?: TYPE_NUMBER | boolean;
  /** Determine the size for extra-large screen sizes */
  xl?: TYPE_NUMBER | boolean;
  /**
   * Applies the `align-self` flex item property, overriding `Row alignItems`
   * vertical alignment, for all screen sizes
   */
  alignSelf?: TYPE_ALIGN_SELF;
  /** Applies the `align-self flex item property for extra-small screen sizes */
  alignSelfXs?: TYPE_ALIGN_SELF;
  /** Applies the `align-self flex item property for small screen sizes */
  alignSelfSm?: TYPE_ALIGN_SELF;
  /** Applies the `align-self flex item property for medium screen sizes */
  alignSelfMd?: TYPE_ALIGN_SELF;
  /** Applies the `align-self flex item property for large screen sizes */
  alignSelfLg?: TYPE_ALIGN_SELF;
  /** Applies the `align-self flex item property for extra-large screen sizes */
  alignSelfXl?: TYPE_ALIGN_SELF;
  /**
   * Determine the offset, relative to the total number of `columns` in the
   * grid, for all screen sizes
   */
  offset?: TYPE_NUMBER;
  /** Determine the offset for extra-small screen sizes */
  offsetXs?: TYPE_NUMBER;
  /** Determine the offset for small screen sizes */
  offsetSm?: TYPE_NUMBER;
  /** Determine the offset for medium screen sizes */
  offsetMd?: TYPE_NUMBER;
  /** Determine the offset for large screen sizes */
  offsetLg?: TYPE_NUMBER;
  /** Determine the offset for extra-large screen sizes */
  offsetXl?: TYPE_NUMBER;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Col = React.forwardRef<HTMLDivElement, IColProps>(({ size, ...props }, ref) => {
  const { columns, gutters, debug } = useGridContext();

  return (
    <StyledCol
      basis={size}
      columns={columns}
      gutters={gutters}
      isDebug={debug}
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
  offsetXl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Col;
