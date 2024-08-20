/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { IGridProps, SPACE } from '../types';
import { GridContext } from '../utils/useGridContext';
import { StyledGrid } from '../styled';
import { Row } from './Row';
import { Col } from './Col';

export const GridComponent = React.forwardRef<HTMLDivElement, IGridProps>(
  ({ columns, debug, ...props }, ref) => {
    const value = useMemo(
      () => ({ columns, gutters: props.gutters!, debug }),
      [columns, props.gutters, debug]
    );

    return (
      <GridContext.Provider value={value}>
        <StyledGrid debug={debug} ref={ref} {...props} />
      </GridContext.Provider>
    );
  }
);

GridComponent.displayName = 'Grid';

GridComponent.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gutters: PropTypes.oneOf(SPACE),
  debug: PropTypes.bool
};

GridComponent.defaultProps = {
  columns: 12,
  gutters: 'md'
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Grid = GridComponent as typeof GridComponent & {
  Row: typeof Row;
  Col: typeof Col;
};

Grid.Row = Row;
Grid.Col = Col;
