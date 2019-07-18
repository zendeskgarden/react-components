/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Make certain components globally available in the Styleguide
 * without displaying in the sidebar
 */

// Common Libraries
import styled from 'styled-components';
global.styled = styled;

// Styleguide components
import State from './State';
import { DEFAULT_THEME, ThemeProvider } from '../../packages/theming/src';
import { Grid, Row, Col } from '../../packages/grid/src';

global.State = State;
global.DEFAULT_THEME = DEFAULT_THEME;
global.ThemeProvider = ThemeProvider;
global.Grid = Grid;
global.Row = styled(Row).attrs({
  alignItems: 'center'
})`
  /* stylelint-disable-line block-no-empty */
`;
global.Col = styled(Col)`
  margin-top: 4px;
  margin-bottom: 4px;
`;

/** Add aditional global for packages that override these components (Table) */
global.Layout = {
  Grid: global.Grid,
  Row: global.Row,
  Col: global.Col
};
