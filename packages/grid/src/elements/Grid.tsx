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
  /** Enable fluid-width grid layout */
  isFluid?: boolean;
  /** Highlight row/col layout */
  isDebug?: boolean;
  /** Gutter spacing */
  gutters?: GRID_GUTTERS;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Grid = React.forwardRef<HTMLDivElement, IGridProps>(({ isDebug, ...props }, ref) => (
  <GridContext.Provider value={{ gutters: props.gutters!, debug: isDebug }}>
    <StyledGrid ref={ref} {...props} />
  </GridContext.Provider>
));

Grid.propTypes = {
  isFluid: PropTypes.bool,
  isDebug: PropTypes.bool
};

Grid.defaultProps = {
  isFluid: true,
  gutters: 'md'
};

export default Grid;
