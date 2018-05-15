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
import { Grid, Row, Col } from '../../packages/grid';

global.State = State;
global.Grid = Grid;
global.Row = styled(Row).attrs({
  alignItems: 'center'
})``;
global.Col = styled(Col)`
  margin-bottom: 8px;
`;
