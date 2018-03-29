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
