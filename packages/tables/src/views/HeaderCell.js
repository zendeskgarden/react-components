/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import Cell from './Cell';

const COMPONENT_ID = 'tables.header_cell';

/** Accepts all `<div>` props */
const HeaderCell = styled(Cell).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'columnheader'
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

HeaderCell.propTypes = {
  /** Applies minimum size styling */
  minimum: PropTypes.bool,
  /** Applies truncated text styling */
  truncate: PropTypes.bool,
  /** Applies overflow styling */
  menu: PropTypes.bool,
  /** The width of the cell */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

/** @component */
export default HeaderCell;
