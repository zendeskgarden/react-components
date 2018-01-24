/**
 * Make certain components globally available in the Styleguide
 * without displaying in the sidebar
 */

// Styleguide components
import Grid from './Grid';
import State from './State';
global.Grid = Grid;
global.State = State;

// Common Libraries
import styled from 'styled-components';
global.styled = styled;

// TODO: umcomment as components are added
// Garden components
// import * as Button from '../../packages/button';
// import * as Selection from '../../packages/selection';
// import * as Theming from '../../packages/theming';

// global.Garden = {
//   Button,
//   Selection,
//   Theming
// };
