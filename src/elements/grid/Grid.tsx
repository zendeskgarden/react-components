/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { useMemo, forwardRef } from 'react';

import { GridProvider } from '../../context/grid/GridContext';
import { IGridProps, SPACE } from '../../types/elements';
import { StyledGrid } from '../../views/grid/StyledGrid';
import { COMPONENT_IDS } from '../utils';
import { Col } from './Col';
import { Row } from './Row';

export const GridComponent = forwardRef<HTMLDivElement, IGridProps>(
  ({ columns = 12, gutters = 'md', debug, ...other }, ref) => {
    const value = useMemo(() => ({ columns, gutters: gutters!, debug }), [columns, gutters, debug]);

    return (
      <GridProvider value={value}>
        <StyledGrid
          $debug={debug}
          $gutters={gutters}
          ref={ref}
          {...other}
          data-garden-id={COMPONENT_IDS['grid.grid']}
          data-garden-version={PACKAGE_VERSION}
        />
      </GridProvider>
    );
  }
);

GridComponent.displayName = 'Grid';

GridComponent.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gutters: PropTypes.oneOf(SPACE),
  debug: PropTypes.bool
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
