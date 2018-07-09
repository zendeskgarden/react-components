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
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Table.propTypes = {
  size: PropTypes.oneOf(['small', 'large'])
};

/** @component */
export default Table;
