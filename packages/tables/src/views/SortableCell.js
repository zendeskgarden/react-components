/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveTheme } from '@zendeskgarden/react-theming';

import HeaderCell from './HeaderCell';

const COMPONENT_ID = 'tables.sortable';
const SORT = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
};

/**
 * Accepts all `<button>` props
 */
const StyledSortableButton = styled.button.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button',
  className: classNames(TableStyles['c-table__row__cell__sortable'], {
    // Sorting
    [TableStyles['is-ascending']]: props.sort === SORT.ASCENDING,
    [TableStyles['is-descending']]: props.sort === SORT.DESCENDING,

    // State
    [TableStyles['is-focused']]: props.focused,
    [TableStyles['is-active']]: props.active
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all `<button>` props
 */
const SortableCell = React.forwardRef(
  ({ minimum, truncate, sort, cellProps, width, ...otherProps }, ref) => {
    let ariaSortValue = 'none';

    if (sort === SORT.ASCENDING) {
      ariaSortValue = 'ascending';
    } else if (sort === SORT.DESCENDING) {
      ariaSortValue = 'descending';
    }

    return (
      <HeaderCell
        minimum={minimum}
        truncate={truncate}
        aria-sort={ariaSortValue}
        width={width}
        {...cellProps}
      >
        <StyledSortableButton sort={sort} ref={ref} {...otherProps} />
      </HeaderCell>
    );
  }
);

SortableCell.propTypes = {
  sort: PropTypes.oneOf([SORT.ASCENDING, SORT.DESCENDING]),
  focused: PropTypes.bool,
  active: PropTypes.bool,
  /** Applies minimum size styling */
  minimum: PropTypes.bool,
  /** Applies truncated text styling */
  truncate: PropTypes.bool,
  /** Props to be spread onto the contain `Cell` component */
  cellProps: PropTypes.any,
  /** The width of the cell */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

/** @component */
export default SortableCell;
