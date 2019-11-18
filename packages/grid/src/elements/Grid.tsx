/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { TYPE_NUMBER, TYPE_SPACE } from '../utils/types';
import { GridContext } from '../utils/useGridContext';
import { StyledGrid } from '../styled';

export interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Customize the number of individual columns that this grid can contain */
  columns?: TYPE_NUMBER;
  /** Customize column gutter width or specify `false` to collapse */
  gutters?: TYPE_SPACE;
  /** Highlight columns to debug layout */
  isDebug?: boolean;
}

/**
 * Grid container; accepts all `<div>` attributes and events
 */
export const Grid = React.forwardRef<HTMLDivElement, IGridProps>(
  ({ columns, isDebug, ...props }, ref) => (
    <GridContext.Provider value={{ columns, gutters: props.gutters!, debug: isDebug }}>
      <StyledGrid ref={ref} {...props} />
    </GridContext.Provider>
  )
);

Grid.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gutters: PropTypes.oneOf([false, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  isDebug: PropTypes.bool
};

Grid.defaultProps = {
  columns: 12,
  gutters: 'md'
};

export default Grid;
