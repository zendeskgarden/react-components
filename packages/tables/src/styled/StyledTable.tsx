/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.table';

type SIZE = 'small' | 'large';

export interface IStyledTableProps {
  size?: SIZE;
}

export const StyledTable = styled.table.attrs<IStyledTableProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TableStyles['c-table'], {
    // Sizing
    [TableStyles['c-table--sm']]: props.size === 'small',
    [TableStyles['c-table--lg']]: props.size === 'large',

    // RTL
    [TableStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledTableProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
