/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledCol } from '../styled';
import useGridContext from '../utils/useGridContext';

export interface IColProps extends HTMLAttributes<HTMLDivElement> {
  /** Sizing for all breakpoints. */
  size?: number | string;
  /** Sizing for extra small breakpoints. */
  xs?: number | string | boolean;
  /** Sizing for small breakpoints. */
  sm?: number | string | boolean;
  /** Sizing for medium breakpoints. */
  md?: number | string | boolean;
  /** Sizing for large breakpoints. */
  lg?: number | string | boolean;
  /** Sizing for extra large breakpoints. */
  xl?: number | string | boolean;
  offset?: number | string;
  offsetXs?: number | string;
  offsetSm?: number | string;
  offsetMd?: number | string;
  offsetLg?: number | string;
  offsetXl?: number | string;
  /** Use flexbox alignment utilities to horizontally align */
  alignSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  order?: any;
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
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetXs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetSm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetMd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetLg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetXl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
  order: PropTypes.any
};

export default Col;
