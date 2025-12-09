/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { SPACE } from '../types/index.js';
import { GridContext } from '../utils/useGridContext.js';
import '../styled/StyledCol.js';
import { StyledGrid } from '../styled/StyledGrid.js';
import '../styled/StyledRow.js';
import '../styled/pane/StyledPane.js';
import '../styled/pane/StyledPaneContent.js';
import '../styled/pane/StyledPaneSplitter.js';
import '../styled/pane/StyledPaneSplitterButton.js';
import '../styled/pane/StyledPaneSplitterButtonContainer.js';
import { Row } from './Row.js';
import { Col } from './Col.js';

const GridComponent = React.forwardRef(({
  columns = 12,
  gutters = 'md',
  debug,
  ...other
}, ref) => {
  const value = useMemo(() => ({
    columns,
    gutters: gutters,
    debug
  }), [columns, gutters, debug]);
  return React.createElement(GridContext.Provider, {
    value: value
  }, React.createElement(StyledGrid, Object.assign({
    $debug: debug,
    $gutters: gutters,
    ref: ref
  }, other)));
});
GridComponent.displayName = 'Grid';
GridComponent.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gutters: PropTypes.oneOf(SPACE),
  debug: PropTypes.bool
};
const Grid = GridComponent;
Grid.Row = Row;
Grid.Col = Col;

export { Grid, GridComponent };
