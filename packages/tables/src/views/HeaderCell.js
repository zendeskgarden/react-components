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

/** Accepts all `<th>` props */
const HeaderCell = styled(Cell.withComponent('th')).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

HeaderCell.propTypes = {
  /** Applies minimum size styling */
  minimum: PropTypes.bool,
  /** Applies truncated text styling */
  truncate: PropTypes.bool,
  /** Applies overflow styling */
  menu: PropTypes.bool
};

/** @component */
export default HeaderCell;
