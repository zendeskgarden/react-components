/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledCol } from '../styled';

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
  offsetXs?: number | string | boolean;
  offsetSm?: number | string | boolean;
  offsetMd?: number | string | boolean;
  offsetLg?: number | string | boolean;
  offsetXl?: number | string | boolean;
  /** Use flexbox alignment utilities to horizontally align */
  alignSelf?: 'start' | 'center' | 'end';
  justifyContent?: 'start' | 'center' | 'end' | 'around' | 'between';
  order?: any;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Col = React.forwardRef<HTMLDivElement, IColProps>((props, ref) => (
  <StyledCol ref={ref} {...props} />
));

Col.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetXs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetSm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetMd: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetLg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetXl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  alignSelf: PropTypes.oneOf(['start', 'center', 'end']),
  justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
  order: PropTypes.any
};
