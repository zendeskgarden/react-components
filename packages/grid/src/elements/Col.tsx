/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ALIGN_SELF, IColProps, TEXT_ALIGN } from '../types';
import { StyledCol } from '../styled';
import useGridContext from '../utils/useGridContext';

/**
 * @deprecated use `Grid.Col` instead
 *
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
  alignSelf: PropTypes.oneOf(ALIGN_SELF),
  alignSelfXs: PropTypes.oneOf(ALIGN_SELF),
  alignSelfSm: PropTypes.oneOf(ALIGN_SELF),
  alignSelfMd: PropTypes.oneOf(ALIGN_SELF),
  alignSelfLg: PropTypes.oneOf(ALIGN_SELF),
  alignSelfXl: PropTypes.oneOf(ALIGN_SELF),
  textAlign: PropTypes.oneOf(TEXT_ALIGN),
  textAlignXs: PropTypes.oneOf(TEXT_ALIGN),
  textAlignSm: PropTypes.oneOf(TEXT_ALIGN),
  textAlignMd: PropTypes.oneOf(TEXT_ALIGN),
  textAlignLg: PropTypes.oneOf(TEXT_ALIGN),
  textAlignXl: PropTypes.oneOf(TEXT_ALIGN),
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
