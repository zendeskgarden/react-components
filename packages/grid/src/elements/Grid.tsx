/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { GRID_NUMBER, SPACE, ARRAY_SPACE } from '../utils/types';
import { GridContext } from '../utils/useGridContext';
import { StyledGrid } from '../styled';

export interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Customize the number of individual columns that this grid can contain */
  columns?: GRID_NUMBER;
  /** Customize column gutter width or specify `false` to collapse */
  gutters?: SPACE;
  /** Highlight columns to debug layout */
  debug?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Grid = React.forwardRef<HTMLDivElement, IGridProps>(
  ({ columns, debug, ...props }, ref) => (
    <GridContext.Provider value={{ columns, gutters: props.gutters!, debug }}>
      <StyledGrid debug={debug} ref={ref} {...props} />
    </GridContext.Provider>
  )
);

Grid.displayName = 'Grid';

Grid.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gutters: PropTypes.oneOf(ARRAY_SPACE),
  debug: PropTypes.bool
};

Grid.defaultProps = {
  columns: 12,
  gutters: 'md'
};
