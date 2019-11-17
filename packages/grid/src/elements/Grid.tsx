/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { GridContext, GRID_GUTTERS } from '../utils/useGridContext';
import { StyledGrid } from '../styled';

export interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number | string;
  /** Column gutter sizing or `false` to collapse */
  gutters?: GRID_GUTTERS;
  /** Highlight column layout */
  isDebug?: boolean;
}

/**
 * Accepts all `<div>` attributes and events
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
