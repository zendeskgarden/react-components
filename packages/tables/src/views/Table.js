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
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.table';

const retrieveSrollableStyling = ({ scrollable }) => {
  if (!scrollable) {
    return '';
  }

  return `
    thead, tbody, tr, td, th { display: block; }

    tr:after {
      content: ' ';
      display: block;
      visibility: hidden;
      clear: both;
    }

    thead {
      padding-right: 15px;
    }

    tbody {
        height: ${scrollable};
        overflow-y: scroll;
    }

    tbody td, thead th {
        float: left;
    }
  `;
};

/**
 * Accepts all `<table>` props
 */
const Table = styled.table.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props =>
    classNames(TableStyles['c-table'], {
      // Sizing
      [TableStyles['c-table--sm']]: props.size === 'small',
      [TableStyles['c-table--lg']]: props.size === 'large',

      // RTL
      [TableStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveSrollableStyling(props)};
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Table.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  /** Height of the table body. Enables scrolling. */
  scrollable: PropTypes.string
};

/** @component */
export default Table;
