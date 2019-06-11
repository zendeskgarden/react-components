/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.cell';

/**
 * Accepts all `<div>` props
 */
const Cell = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'gridcell',
  className: classNames(TableStyles['c-table__row__cell'], {
    [TableStyles['c-table__row__cell--min']]: props.minimum,
    [TableStyles['c-table__row__cell--truncate']]: props.truncate,
    [TableStyles['c-table__row__cell--overflow']]: props.menu
  })
}))`
  && {
    display: flex;
    width: ${({ width }) => width};
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Cell.propTypes = {
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
export default Cell;
