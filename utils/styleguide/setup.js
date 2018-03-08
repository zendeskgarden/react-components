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

// Garden components
import * as Buttons from '../../packages/buttons';
import * as Notifications from '../../packages/notifications';
import * as Pagination from '../../packages/pagination';
import * as Selection from '../../packages/selection';
import * as Tabs from '../../packages/tabs';
import * as Theming from '../../packages/theming';
import * as Tooltips from '../../packages/tooltips';

global.Garden = {
  Buttons,
  Notifications,
  Pagination,
  Selection,
  Tabs,
  Theming,
  Tooltips
};
